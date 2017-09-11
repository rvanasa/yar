module.exports = function()
{
	var listeners = {};
	
	return {
		listen(id, callback)
		{
			var array = listeners[id] || (listeners[id] = []);
			array.push(callback);
		},
		notify(id, data)
		{
			var array = listeners[id];
			if(array)
			{
				 for(var i = 0; i < array.length; i++)
				 {
				 	array[i](data);
				 }
			}
			
			if(id !== '*')
			{
				this.notify('*', {id, data});
			}
		}
	};
}