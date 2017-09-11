var express = require('express');

module.exports = function(App, LogMiddleware)
{
	var router = express.Router();
	App.use('/api', router);
	
	router.use(LogMiddleware);
	
	router.use((req, res, next) =>
	{
		res.warning = (message, page) => res.status(400).send({message, page});
		next();
	});
	
	return router;
}