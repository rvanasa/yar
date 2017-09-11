module.exports = function LayerService(Layer, Map)
{
	'ngInject'
	
	var layers = {};
	
	this.get = function(id)
	{
		return layers[id] || (layers[id] = new Layer(Map));
	}
}