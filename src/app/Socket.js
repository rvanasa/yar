module.exports = function(Server, AuthMiddleware, World, LayerService, EventService)
{
	var io = require('socket.io')(Server);
	io.use(require('socketio-wildcard')());
	
	// io.use((socket, next) => AuthMiddleware(socket.request, {}, next));
	
	io.on('connection', (socket) =>
	{
		console.log('Client connected:', socket.id);
		
		var user = {
			username: 'TEST',
			layers: ['treasure-hunt'],
		};
		
		for(var i = 0; i < user.layers.length; i++)
		{
			LayerService.loadLayer(user.layers[i])
				.then(layer =>
				{
					var world = new World(user, layer, (id, data) =>
					{
						socket.emit(':' + id, layer.id, data);
					});
					layer.config.enable(world);
					
					socket.on('*', (packet) =>
					{
						var id = packet.data[0];
						if(id.startsWith(':'))
						{
							console.log('Received event:', id.substring(1), JSON.stringify(packet.data[1]))///
							
							EventService.notify(id.substring(1), packet.data[1]);
						}
					});
				});
		}
		
		socket.on('disconnect', () =>
		{
			console.log('Client disconnected:', socket.id);
		});
		
		//// ------ ////
		
		// socket.emit(':marker.add', layer.id, );
	});
	
	return io;
}