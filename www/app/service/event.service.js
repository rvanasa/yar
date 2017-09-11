module.exports = function EventService(LayerService)
{
	var socket = window.io();
	
	this.listen = function(id, callback)
	{
		socket.on(':' + id, (layerID, data) =>
		{
			console.log('Received message:', layerID, data);
			
			callback(LayerService.get(id), data);
		});
	}
	
	this.notify = function(id, data)
	{
		socket.emit(':' + id, data);
	}
}