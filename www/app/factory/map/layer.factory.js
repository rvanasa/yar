module.exports = function Layer()
{
	'ngInject'
	
	class Layer
	{
		constructor(map)
		{
			this.entities = {};
			this.map = map;
		}
		
		setMap(map)
		{
			this.map = map;
			for(var id in this.entities)
			{
				this.entities[id].setMap(map);
			}
		}
		
		set(id, entity)
		{
			this.entities[id] = entity;
			entity.setMap(this.map);
			return entity;
		}
		
		remove(id)
		{
			id = id && id.id ? id.id : id;
			var entity = this.entities[id];
			if(entity) entity.setMap(null);
			delete this.entities[id];
			return entity;
		}
		
		clear()
		{
			for(var id in this.entities)
			{
				this.entities[id].setMap(null);
				delete this.entities[id];
			}
		}
	}
	
	return Layer;
}