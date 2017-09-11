module.exports = function(MarkerService, EventService, LayerService)
{
	'ngInject'
	
	EventService.listen('marker.add', (layer, data) =>
	{
		layer.set(data.id, MarkerService.create(data));
	});
}