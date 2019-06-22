var app = require('express')();

var mongoose = require("mongoose");
require('./app/models');
const config = require('./config');

config.express(app);
config.routes(app);



const { appPort, mongoUri } = config.app;

mongoose.connect(mongoUri,{ useNewUrlParser: true })
	.then(() => app.listen(appPort,
		(err)=> console.log(`App listen ${appPort} ...`)
	))
	.catch((e)=>console.error("mongo connect error"+mongoUri,e))

