module.exports = function LocationService(LayerService)
{
	'ngInject'
	
	this.watch = function(callback)
	{
		var lastHash;
		return window.navigator.geolocation.watchPosition(pos =>
		{
			var loc = {
				coords: {
					lat: pos.coords.latitude,
					lng: pos.coords.longitude
				},
				heading: pos.coords.heading,
				speed: pos.coords.speed,
			};
			
			var hash = JSON.stringify(loc);
			if(hash != lastHash)
			{
				lastHash = hash;
				return callback(loc);
			}
		});
	}
}