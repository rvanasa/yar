'use strict'

module.exports = function(EventService)
{
	class World
	{
		constructor(user, layer, notify)
		{
			this.user = user;
			this.layer = layer;
			this.notify = notify;
			
			// this.markers = {};
			
			this.Marker = Marker;
		}
		
		listen(id, callback)
		{
			EventService.listen(id, callback)
		}
		
		addMarker(marker)
		{
			if(!(marker instanceof this.Marker))
			{
				throw new Error('Not a marker: ' + marker);
			}
			// this.markers[marker.id] = marker;
			this.notify('marker.add', marker.config);
			return marker;
		}
		
		removeMarker(id)
		{
			
		}
	}
	
	var currentID = 0;
	
	class Marker
	{
		constructor(config)
		{
			this.id = String(currentID++);
			this.config = config;
		}
		
		
	}
	
	return World;
}