/* eslint-disable no-template-curly-in-string */
// You may wish to find an effective randomizer function on MDN.

// const { forEach } = require("cypress/types/lodash");

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(org, comparison, key) {
  if (org[key] < comparison[key]) {
    return -1;
  } if (org[key] > comparison[key]) {
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
  // set fave to yes
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
      // Supposed to remove Ol
      if (document.querySelector('.flex-inner')) {
        document.querySelector('.flex-inner').remove();
      };
      const arr10 = range(10); // = [1, 2, 3...];
      const arr = arr10.map(() => {
        const number = getRandomInt(243);
        return fromServer[number];
      });
      const reverselist = arr.sort((a, b) => sortFunction(b, a, 'name')); // sort
      const ol = document.createElement('ol');
      ol.className = 'flex-inner';
      $('form').append(ol);

      reverselist.forEach((element, i) => {
        const li = document.createElement('li');
        $(li).append(`<input type = "checkbox" value =${element.code} id = ${element.code} />`);
        $(li).append(`<label for = ${element.code}> ${element.name}</label>`);
        // This is what I was doing before and it mostly worked.
        /* li.innerHTML = '<input type = "checkbox"/>';
        li.setAttribute('value', element.code);
        li.id = element.code;
        const liLab = document.createElement('label');
        liLab.id = element.code;
        liLab.innerHTML = element.name;
        li.append(liLab); */
        $(ol).append(li);
      });
      console.log(arr);
      console.log('Test');
    })
    .catch((err) => {
      console.log(err)
      // set fave to no
    });
});