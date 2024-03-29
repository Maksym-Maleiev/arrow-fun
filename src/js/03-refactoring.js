/*
 * Ланцюжки викликів - chaining
 */

const numbers = [1, 5, 2, 4, 3];

const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

const multByTwo = greaterThenTwo.map(num => num * 3);
// console.log(multByTwo);

const sorted = multByTwo.sort((a, b) => a - b);
// console.log(sorted);

const res = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .sort((a, b) => a - b);

// console.log(res);

/*
 * Сортуємо тих хто онлайн за рангом
 */

// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
//   .filter(player => player.isOnline)
//   .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// console.table(onlineAndSorted);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

/*
 * Збільшуємо кількість поінтів кожного гравця
 */

// const updatedPlayers = players.map(player => ({
//   ...player,
//   points: player.points + player.points * 0.1,
// }));

// console.table(updatedPlayers);
// console.table(players);

/*
 * Збільшуємо кількість годин гравця по id
 */

const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map(player =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 50 }
    : player
);

console.table(updatedPlayers);
console.table(players);
