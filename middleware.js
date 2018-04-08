const express = require('express');
const router = express.Router();
const intel = require('./config/logging');

router.all('/api/*', function(req, res, next) {
    const apiLogger = intel.getLogger('SERVER.API');
    req.apiLogger = apiLogger;
    // const xffIp = req.get("X-Forwarded-For") ? req.get("X-Forwarded-For") : '';
    // const username = req.sID.username ? req.sID.username : 'guest';
    // apiLogger.info(`IP: ${req.ip} | XFF: ${xffIp} | Method: ${req.method} | Entry: ${req.originalUrl} | User: ${username} `);
    // req.startTime = process.hrtime();
    next();
});

router.get('/home', function(req, res, next) {
    if(req.session.username){
      res.redirect('/bucketlist');
    }
    next();
    return;
});

router.get('/bucketlist', function(req, res, next) {
    if(!req.session.username){
      res.redirect('/home');
    }
    next();
    return;
});


module.exports = router;
