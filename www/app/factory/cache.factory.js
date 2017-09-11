var angular = window.angular;

module.exports = function Cache($q)
{
	'ngInject'
	
	return class Cache
	{
		constructor(config)
		{
			angular.extend(this, config);
			
			if(this.array && !Array.isArray(this.array)) this.array = [];
			
			this.subCaches = {};
			this.reset();
		}
		
		get()
		{
			return this.promise;
		}
		
		reset()
		{
			this.promise = $q.when(this.provider());
			if(this.array)
			{
				this.promise = this.promise.then((arr) =>
				{
					this.array.length = 0;
					arr.forEach(e => this.array.push(e));
					return this.array;
				});
			}
			
			for(var id in this.subCaches)
			{
				this.subCaches[id].reset();
			}
		}
		
		sub(id)
		{
			return this.subCaches[id] || (this.subCaches[id] = this.subFactory(id));
		}
	}
}