// You may wish to find an effective randomizer function on MDN.

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

// sortFucntion(b, a) <- decending sort 
function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function map(s1, s2) {
  return (`${s1} ${s2}`);
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {

      // const arr10 = range(10); // = [1, 2, 3...]
      // const reverseist = newArr2.sort((a, b) => sortFunction(b, a, 'name)); // sort
      console.log(typeof fromServer);
      console.log('Test')
      console.log('fromServer', fromServer);
    })
    .catch((err) => console.log(err));
});