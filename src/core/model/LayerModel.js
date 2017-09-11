module.exports = function(Database, Model)
{
	return Model('Layer')
		.prop('user', 'User')
		.prop('name', String)
		.prop('desc', String)
		.build(Database);
}