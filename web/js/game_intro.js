var char_name = ["Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. A team wins by being the first to destroy the other team's 'Ancient', a large structure located within their base.",
				"Heroes of the Storm is a crossover multiplayer online battle arena (MOBA) video game developed and published by Blizzard Entertainment. Players form into five-player teams and fight against another team in 5-versus-5 matches, with an average game duration of roughly 20 minutes. The first team to destroy opponents' main structure, wins the match",
				"League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. In League's main mode, Summoner's Rift, a team wins by pushing through to the enemy base and destroying their Nexus, a large structure located within.",
				"Overwatch is a 2016 team-based multiplayer first-person shooter game developed and published by Blizzard Entertainment. Described as a 'hero shooter', Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as 'heroes', with unique abilities. Teams work to complete map-specific objectives within a limited period of time.",
				"PUBG: PlayerUnknown's Battlegrounds is an online multiplayer battle royale game. In the game, up to one hundred players parachute onto an island and scavenge for weapons and equipment to kill others while avoiding getting killed themselves. The available safe area of the game's map decreases in size over time, directing surviving players into tighter areas to force encounters. The last surviving player (or team) wins the round.",
				"StarCraft is a military science fiction media franchise owned by Blizzard Entertainment. The series, set in the beginning of the 26th century, centers on a galactic struggle for dominance among four species. The series debuted with the video game StarCraft in 1998. It has grown to include a number of other games as well as eight novelizations, two Amazing Stories articles, a board game, and other licensed merchandise such as collectible statues and toys.",
				"Fortnite is  an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions. Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing; Fortnite: Save the World, a cooperative hybrid tower defense-shooter and survival game in which up to four players fight off zombie-like creatures and defend objects with traps and fortifications they can build; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas.",
				"Hearthstone is an online digital collectible card game developed and published by Blizzard Entertainment. The game is a turn-based card game between two opponents, using constructed decks of 30 cards along with a selected hero with a unique power. Players use their limited mana crystals to play abilities or summon minions to attack the opponent, with the goal of destroying the opponent's hero. Winning matches and completing quests earn in-game gold, rewards in the form of new cards, and other in-game prizes.",
				"Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes. The most common game modes involve the Terrorists planting a bomb while Counter-Terrorists attempt to stop them, or Counter-Terrorists attempting to rescue hostages that the Terrorists have captured.",
				"Arena of Valor is a multiplayer online battle arena (MOBA) game developed for mobile. The overall gameplay of Arena of Valor highly resembles League of Legends. "]
var res = document.getElementById('respond');
var song = document.getElementById('song');
var game_img = document.getElementById('game_img');


function color_char(id_name){
	console.log(id_name);
	var ind = parseInt(id_name.split("_")[1]);
	var text = char_name[ind];
	res.innerHTML = text;

	//color the image
	var image = document.getElementById(id_name);
	image.style.filter = 'grayscale(0%)';

	// draw game imahe
	game_img.src = "..\\web\\img\\game_index\\"+ ind + ".jpeg";

	// play the song
	song.src = "..\\data\\song\\"+ ind + ".mp3";
}