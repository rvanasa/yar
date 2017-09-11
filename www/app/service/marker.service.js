var angular = window.angular;

module.exports = function MarkerService(google, PopupService)
{
	'ngInject'
	
	this.create = function(config)
	{
		if(config.icon)
		{
			var size = config.size || 32;
			var icon = {
				url: config.icon,
				scaledSize: new google.maps.Size(config.width || size, config.height || size),
			};
		}
		
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(config.pos),
			icon,
		});
		
		if(config.popup)
		{
			PopupService.bind(marker, config.popup, config);
		}
		
		return marker;
	}
}