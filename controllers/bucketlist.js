//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const request = require('request-promise');
const jwt = require('jsonwebtoken')
const bucketlist = require('../models/List');


//POST HTTP method /loginServ
router.post('/login', (req,res) => {
	 let body = req.body;
   console.log("Request body login " + JSON.stringify(body));
	 const options = {
		 method : 'PUT',
		 url : 'http://localhost:8080/user/authenticate/user',
		 body : {
			 "applicationId": "bucketListApp",
		 	 "password": req.body.password,
		 	 "userId": req.body.username
		 },
		 json: true
	 }
	 request(options)
	 .then(function (response){
		 console.log(JSON.stringify(response));
		 if(response.message === "Wrong Password"){
	 	 			 console.log("Wrong password");
	 	 			 res.status(401).send('Invalid Password');
	 	 		 }
	 	 		 else if(response.message === "Unable To Find User"){
	 	 			  console.log("Wrong username");
	 	 			 res.status(401).send('Invalid Username');
	 	 		 }
	 	 		 else {
	 	 			 console.log("setting up token");
	 	 			 let payload = {subject: req.body.username}
	 	        let token = jwt.sign(payload, 'secretKey')
	 	        res.status(200).send({token})
	 	 		 }
	 })
	 .catch(function (err){
		 console.error("error " + err );
	 })
	
});

//GET HTTP method to /bucketlist
router.get('/',(req,res) => {
	bucketlist.getAllLists((err, lists)=> {
		if(err) {
			res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
		}
		else {
			res.write(JSON.stringify({success: true, lists:lists},null,2));
			res.end();

	}
	});
	console.log("Inisde controller");
});


//POST HTTP method to /bucketlist

router.post('/', (req,res,next) => {
	console.log(req.body);
	let newList = new bucketlist({
		title: req.body.title,
		description: req.body.description,
		category: req.body.category
	});
	bucketlist.addList(newList,(err, list) => {
		if(err) {
			res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

		}
		else
			res.json({success:true, message: "Added successfully."});

	});
});


//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {
	let id = req.params.id;
	console.log(id);
	bucketlist.deleteListById(id,(err,list) => {
		if(err) {
			res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
		}
		else if(list) {
			res.json({success:true, message: "Deleted successfully"});
		}
		else
			res.json({success:false});
	})
});

module.exports = router;
