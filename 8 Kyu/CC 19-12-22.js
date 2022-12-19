// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// Examples:-
// assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

// Solution:-
// 1)

function well(x) {
  let goodideas = 0;
  for (const ideas of x) {
    if (ideas === "good") goodideas++;
  }
  if (goodideas > 2) {
    return "I smell a series!";
  } else if (goodideas >= 1) {
    return "Publish!";
  } else {
    return "Fail!";
  }
}

// 2)
function well(x) {
  switch (x.filter((i) => i === "good").length) {
    case 0:
      return "Fail!";
    case 1:
    case 2:
      return "Publish!";
    default:
      return "I smell a series!";
  }
}
