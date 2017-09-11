module.exports = function(google, Map, LayerService, LocationService, EventService, MarkerService)
{
	'ngInject'
	
	var userMarker = MarkerService.create({
		
	});
	
	LocationService.watch(loc =>
	{
		if(!userMarker.getMap())
		{
			userMarker.setMap(Map);
			userMarker.setPosition(loc.coords);
			Map.setCenter(loc.coords);
		}
		Map.panTo(loc.coords);
		userMarker.setPosition(loc.coords);
		
		EventService.notify('location', loc);
	});
}