// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"
// assert.strictEqual(nameShuffler('john McClane'),'McClane john');
// assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
// assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')

// Solution:-
// 1)
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}
nameShuffler('Mary jeggins');

// 2)
const nameShuffler = str => str.split(' ').reverse().join(' ');