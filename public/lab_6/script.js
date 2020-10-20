// You may wish to find an effective randomizer function on MDN.

// const { forEach } = require("cypress/types/lodash");

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
      const arr10 = range(10); // = [1, 2, 3...]
      const arr = arr10.map(() => {
        const number = getRandomInt(243);
        return fromServer[number];
      })
      /*
      arr10.forEach((el, i) => {
        arr10[i] = arr10.map(() => {
          const number = getRandomInt(0, 243);
          return fromServer[number];
        })
      }) */
      const reverseist = arr.sort((a, b) => sortFunction(b, a, 'name')); // sort
      const ul = document.createElement('ul');
      ul.className = '.flex-inner';
      $('form').append(ul);

      console.log(arr);
      console.log('Test');
    })
    .catch((err) => console.log(err));
});