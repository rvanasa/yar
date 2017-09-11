var angular = window.angular;

require('js-info-bubble');
var InfoBubble = window.InfoBubble;

module.exports = function PopupService($rootScope, $compile, google, Map)
{
	'ngInject'
	
	this.current = null;

	Map.addListener('click', () =>
	{
		this.close();
	});
	
	this.bind = function(marker, template, scope)
	{
		var info = new InfoBubble({
			content: $compile(template)(Object.assign($rootScope, scope))[0],
			disableAutoPan: true,
    		hideCloseButton: true,
    		shadowStyle: 0,
    		padding: 16,
		});
		
		console.log(info)
		
		angular.element(info.contentContainer_)
			.addClass('popup');
		
		marker.addListener('click', () =>
		{
			this.close();
			this.current = info;
			info.open(Map, marker);
		});
	}
	
	this.close = function()
	{
		if(this.current)
		{
			this.current.close();
			this.current = null;
		}
	}
}