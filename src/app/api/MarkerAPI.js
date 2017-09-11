module.exports = function(API, Route, MarkerModel)
{
	API.get('/marker/app/:id', Route(req => MarkerModel.findByApp(req.params.id)));
}