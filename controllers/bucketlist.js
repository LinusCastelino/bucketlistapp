//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const request = require('request-promise');
const jwt = require('jsonwebtoken')
const bucketlist = require('../models/List');
const appID = "bucketListApp";
const serviceHost = 'http://10.8.6.132:8080';
const successStatus = 200;
const unauthorisedStatus = 401;

//POST HTTP method /login
router.post('/login', (req,res) => {
   const { apiLogger } = req;
	 let body = req.body;
   apiLogger.info("Request body login " + JSON.stringify(body));
	 const requestOptions = {
		 method : 'PUT',
		 url : `${serviceHost}/user/authenticate/user`,
		 body : {
			 "applicationId": appID,
		 	 "password": req.body.password,
		 	 "userId": req.body.username
		 },
		 json: true
	 }
	 request(requestOptions)
	 .then(function (response){
		 apiLogger.info(JSON.stringify(response));
		 if(response.message === "Wrong Password"){
	 	 			 apiLogger.info("Wrong password");
	 	 			 res.status(401).send('Invalid Password');
	 	 		 }
	 	 		 else if(response.message === "Unable To Find User"){
	 	 			  apiLogger.info("Wrong username");
	 	 			 res.status(401).send('Invalid Username');
	 	 		 }
	 	 		 else {
	 	 			 apiLogger.info("setting up token");
					 req.session.username = req.body.username;
	 	 			 let payload = {subject: req.body.username};
	 	       let token = jwt.sign(payload, 'secretKey');
						apiLogger.info(`User : ${req.session.username} logged in`);
						res.cookie('BKT_USER', req.body.username);
	 	        res.status(successStatus).send({token})
	 	 		 }
	 })
	 .catch(function (err){
		 console.error("error " + err );
	 })

});

router.get('/logout', (req,res) => {
	const { apiLogger } = req;
	let user = req.session.username;
	req.session.destroy((err) => {
    if (err) {
      res.status(500).send('Could not log out.');
    } else {
			apiLogger.info(`User : ${user} logged out`);
			res.clearCookie('BKT_USER');
      res.status(successStatus).send({});
    }
  });
});


//POST HTTP method /registration
router.post('/registration', (req,res) => {
	 const { apiLogger } = req;
	 let body = req.body;
   apiLogger.info("Request body login " + JSON.stringify(body));
	 const requestOptions = {
		 method : 'POST',
		 url : `${serviceHost}/user/create`,
		 body : {
			 "applicationId": appID,
		 	 "password": req.body.password,
		 	 "userName": req.body.username
		 },
		 json: true
	 }
	 request(requestOptions)
	 .then(function (response){
		 apiLogger.info(JSON.stringify(response));
	   res.status(successStatus).send(response)
	 })
	 .catch(function (err){
		 console.error("error " + err );
	 })

});

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  next()
}

router.get('/othersBucketList', (req, res) => {
	const { apiLogger } = req;
	let user = req.session.username;

	const requestOptions = {
		method : 'GET',
		url: serviceHost + "/bucketlist/notin/" + user,
		json:true
	}
	

	apiLogger.info('Sending request to retrieve other\'s tasks');

	request(requestOptions)
	.then(function(response){
		apiLogger.info('/othersBucketList Response : ' + JSON.stringify(response));
		res.status(successStatus).send(response);
	})
	.catch(function(error){
		apiLogger.info('Error encountered while trying to retrieve other\'s tasks list ');
		apiLogger.info('Error : ' + JSON.stringify(error));
	})
})


router.get('/myBucketList', (req, res) => {
	const { apiLogger } = req;
	let user = req.session.username;

	const requestOptions = {
		method : 'GET',
		url: serviceHost + "/bucketlist/" + user,
		json:true
	}
	

	apiLogger.info('Sending request to retrieve '+user+'\'s tasks');

	request(requestOptions)
	.then(function(response){
		apiLogger.info('/myBucketList Response : ' + JSON.stringify(response));
		res.status(successStatus).send(response);
	})
	.catch(function(error){
		apiLogger.info('Error encountered while trying to retrieve '+user+'\'s tasks list ');
		apiLogger.info('Error : ' + JSON.stringify(error));
	})
})

router.get('/allOwners', (req, res) => {
	const { apiLogger } = req;
	let user = req.session.username;

	const requestOptions = {
		method : 'GET',
		url: serviceHost + "/user/all/userList/bucketListApp" ,
		json:true
	}
	

	apiLogger.info('Sending request to retrieve all owners');

	request(requestOptions)
	.then(function(response){
		apiLogger.info('/allOwners Response : ' + JSON.stringify(response));
		apiLogger.info('Before filtering : '+JSON.stringify(response));
		response.filter(lists => lists !== user)
		apiLogger.info('After filtering : '+JSON.stringify(response));
		res.status(successStatus).send(response);
	})
	.catch(function(error){
		apiLogger.info('Error encountered while trying to retrieve allOwners list ');
		apiLogger.info('Error : ' + JSON.stringify(error));
	})
})



router.post('/claimTask', (req, res) =>{
	const { apiLogger } = req;
	let requestBody = req.body;
	let currentUser = req.session.username;
	requestBody.newOwner = currentUser;

	const requestOptions = {
		method : 'PUT',
		url : serviceHost + '/bucketlist/update/',
		body : requestBody,
		json : true
	}

	request(requestOptions)
		.then(function(response){
			apiLogger.info('/claimTask Response : '+JSON.stringify(response));
			res.status(successStatus).send(response);
		})
		.catch(function(error){
			apiLogger.info('Error encountered while claiming task '+ requestBody.id+' from '+requestBody.oldOwner
			+' to '+requestBody.newOwner);
			apiLogger.info('Error : '+ JSON.stringify(error));
		})
})


router.post('/addTask', (req, res) =>{
	const {apiLogger} = req;
	let requestBody = req.body;
	let currentUser = req.session.username;
	requestBody.owner = currentUser;

	const requestOptions = {
		method : 'POST',
		url : serviceHost + '/bucketlist/createBucketList/',
		body : requestBody,
		json : true
	}

	request(requestOptions)
		.then(function(response){
			apiLogger.info('/addTask Response : '+JSON.stringify(response));
			res.status(successStatus).send(response);
		})
		.catch(function(error){
			apiLogger.info('Error encountered while adding task '+requestBody.owner);
			apiLogger.info('Error : '+ JSON.stringify(error));
		})
})



router.delete('/deleteTask/:id', (req, res) => {
	const { apiLogger } = req;
	let taskID = req.params.id;
	const requestOptions = {
		method : 'DELETE',
		url: serviceHost + "/bucketlist/delete/" + taskID,
		json:true
	}
	

	apiLogger.info('Sending request to delete task '+taskID);

	request(requestOptions)
	.then(function(response){
		apiLogger.info('/deleteTask/'+taskID+' Response : ' + JSON.stringify(response));
		res.status(successStatus).send(response);
	})
	.catch(function(error){
		apiLogger.info('Error encountered while trying to delete task '+taskID);
		apiLogger.info('Error : ' + JSON.stringify(error));
	})
})

module.exports = router;
