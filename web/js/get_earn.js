


var earning;
var game_name = document.getElementById('game_name');
var player_name = document.getElementById('player_name');
var player_img = document.getElementById('player_img');

var team_name = document.getElementById('team_name');
var team_img = document.getElementById('team_img');

var player_earning_value = document.getElementById('player_earning_value');
var team_earning_value = document.getElementById('team_earning_value');

var quote_text ={"Dota 2":"It's a team game; it’s not about you, it’s about everyone around you.",
            "League of Legends":"There aren't any absolute winners in LoL. I need to work even harder in the future.",
            "Counter-Strike: Global Offensive":"You’re not alone, and together we can make a difference. ",
            "Fortnite":"I see Fortnite as a way of creating friendships and bonds.",
            "Starcraft II":"Winning everything is pretty much what you want as a pro gamer, so that was the best time of my StarCraft 2 career."}
var quote_name = document.getElementById('quote_name');
var quote = document.getElementById('quote');



// var svg_table = d3.select("#table")
//     .appemd("svg")
//     .attr("width", 900)
//     .attr("height", 620)
//     .append("g")




function show_table(game){

    var earn = $.ajax({
        url: "https://raw.githubusercontent.com/Edwin628/csv_data/main/highest_earning_players.json",
        type: "GET",
        dataType: "json", 
        async: false,
        success: function(data) {
        }
    });
    console.log(game);
    console.log(earn);
    earning = earn.responseJSON;
    console.log(earning[0]);
    var game_earning = earning.filter(function (e) { 
        if (e['Game'] == game)
            return  e;
     });
    
    var max = Math.max.apply(Math, game_earning.map(function(o) {
        return o.TotalUSDPrize; 
    }));

    var max_player = game_earning.filter(function (e) { 
        if (e['TotalUSDPrize'] == max)
            return  e;
     });
    console.log(max);
    console.log(max_player);
    console.log(typeof(max_player[0]));
    game_name.innerHTML = game
    player_name.innerHTML = max_player[0].NameFirst.concat(" ").concat(max_player[0].NameLast);
    player_img.src = "img\\player\\" + max_player[0].NameFirst +".png";
    
    player_earning_value.innerHTML = "$ ".concat(max_player[0].TotalUSDPrize)
    console.log(player_earning_value);

    var team_earn = $.ajax({
        url: "https://raw.githubusercontent.com/Edwin628/csv_data/main/highest_earning_teams.json",
        type: "GET",
        dataType: "json", 
        async: false,
        success: function(data) {
        }
    });

    var team_earning = team_earn.responseJSON.filter(function (e) { 
        if (e['Game'] == game)
            return  e;
     });
     
    console.log(team_earning);
    var team_max_prize = Math.max.apply(Math, team_earning.map(function(o) {
        return o.TotalUSDPrize; 
    }));

    var max_team = team_earning.filter(function (e) { 
        if (e['TotalUSDPrize'] == team_max_prize)
            return  e;
     });

     console.log(max_team);
     team_name.innerHTML = max_team[0].TeamName;
     var path_team = max_team[0].TeamName.split(" ").join("");
     team_img.src = "img\\team\\" + path_team +".png";
     team_earning_value.innerHTML =  "$ ".concat(max_team[0].TotalUSDPrize)
     
     var image = document.getElementById(game);
     image.style.filter = 'grayscale(0%)';

     quote_name.innerHTML = "—".concat(max_player[0].NameFirst.concat(" ").concat(max_player[0].NameLast));
     quote.innerHTML = quote_text[game]
}


