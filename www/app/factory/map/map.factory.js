var angular = window.angular;

module.exports = function Map(google)
{
	'ngInject'
	
	var styles = [{
		featureType: 'poi',
		elementType: 'labels',
		stylers: [{
			visibility: 'off',
		}],
	}];
	
	return new google.maps.Map(angular.element('#map')[0], {
		center: {lat: 40, lng: -104},
		zoom: 16,
		styles,
		disableDefaultUI: true,
		draggable: false,
		scrollwheel: false,
		zoomControl: false,
		disableDoubleClickZoom: true,
		clickableIcons: false,
	});
}