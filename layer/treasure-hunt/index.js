module.exports = {
	name: 'Treasure Hunt',
	enable(world)
	{
		var marker = new world.Marker({
			id: '56789',
			name: 'Test Marker',
			pos: {
				lat: 39.47,
				lng: -104.875,
			},
			icon: 'https://vignette2.wikia.nocookie.net/pokemon/images/e/ef/025Pikachu_Pokemon_Mystery_Dungeon_Red_and_Blue_Rescue_Teams.png',
			popup: '<h3>Hi!</h3>',
		});
		
		world.addMarker(marker);
	},
};