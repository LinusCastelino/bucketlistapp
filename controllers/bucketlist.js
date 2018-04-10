//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const request = require('request-promise');
const jwt = require('jsonwebtoken')
const bucketlist = require('../models/List');
const appID = "bucketListApp";
const serviceHost = 'http://localhost:8080';
const successStatus = 200;
const unauthorisedStatus = 401;

//POST HTTP method /login
router.post('/login', (req,res) => {
   const { apiLogger } = req;
	 let body = req.body;
   apiLogger.info("Request body login " + JSON.stringify(body));
	 const options = {
		 method : 'PUT',
		 url : `${serviceHost}/user/authenticate/user`,
		 body : {
			 "applicationId": appID,
		 	 "password": req.body.password,
		 	 "userId": req.body.username
		 },
		 json: true
	 }
	 request(options)
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
      res.status(successStatus).send({});
    }
  });
});


//POST HTTP method /registration
router.post('/registration', (req,res) => {
	 const { apiLogger } = req;
	 let body = req.body;
   apiLogger.info("Request body login " + JSON.stringify(body));
	 const options = {
		 method : 'POST',
		 url : `${serviceHost}/user/create`,
		 body : {
			 "applicationId": appID,
		 	 "password": req.body.password,
		 	 "userName": req.body.username
		 },
		 json: true
	 }
	 request(options)
	 .then(function (response){
		 apiLogger.info(JSON.stringify(response));
	   res.status(successStatus).send(response)
	 })
	 .catch(function (err){
		 console.error("error " + err );
	 })

});

//get username from session
router.get('/getUsername', verifyToken, (req,res) => {
	const { apiLogger } = req;
	let user = req.session.username;
	if(user){
		res.status(200).send({username : user});
	}
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
		apiLogger.info('Response : ' + JSON.stringify(response));
		res.status(successStatus).send(response);
	})
	.catch(function(error){
		console.info('Error encountered while trying to retrieve other\'s tasks list ');
		console.info('Error : ' + JSON.stringify(error));
	})
})

module.exports = router;
