var path = require('path');

module.exports = function(Config)
{
	var loadedLayers = {};
	
	return {
		loadLayer(id)
		{
			var loaded = loadedLayers[id];
			if(loaded)
			{
				return Promise.resolve(loaded);
			}
			
			return this.createLayer(path.join(process.cwd(), Config.layerDirectory, id))
				.then(layer =>
				{
					console.log('Loaded layer:', id);
					return loadedLayers[id] = layer;
				});
		},
		unloadLayer(id)
		{
			console.log('Unloaded layer:', id);
			loadedLayers[id] = null;
		},
		createLayer(path, id)
		{
			try
			{
				var layer = {
					id,
					config: require(path),
				};
				
				return Promise.resolve(layer);
			}
			catch(e)
			{
				return Promise.reject(e);
			}
		},
	};
}