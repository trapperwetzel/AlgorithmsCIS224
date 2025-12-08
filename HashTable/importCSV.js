import fs from "fs";

/*
  Import the data as a dictionary 
  where games are the keys 
  and the values are also a dictionary containing the number of times each player won that game.
 
 */
const games = {};
fs.readFile('Win_Record.csv', 'utf-8', (error, data) => {
  if (error) {
    console.log("error");
    return;
  }

  const lines = data.trim().split(/\r?\n/);
  for (const line of lines) {
    const [Game, Winner] = line.trim().split(',');

    if (!games[Game]) {
      games[Game] = {}
    }
    if (!games[Game][Winner]) {
      games[Game][Winner] = 0;
    }
    games[Game][Winner] += 1;
  }
  console.log(games);

});

