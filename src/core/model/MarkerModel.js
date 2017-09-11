module.exports = function(Database, Model)
{
	return Model('Marker')
		.prop('name', String)
		.prop('app', 'App')
		.prop('coords', [Number]).index('2dsphere')
		.method({
			findByApp(app)
			{
				return this.find({app});
			}
		})
		.build(Database);
}