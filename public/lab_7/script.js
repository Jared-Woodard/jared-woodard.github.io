const { random } = require("cypress/types/lodash");

// Reducer function, wants an array and wants to return an array
function convertRestaurantsToCategories(restaurantList) {
  // process your restaurants here!
  return list;
}

// Expects you to pass in a list, return an options list that looks like barchart
function makeYourOptionsObject(datapointsFromRestaurantsList) {
  // set your chart configuration here!
  return canvasJSConfigObject;
} 

// Use both prior functions to make options object 
function runThisWithResultsFromServer(jsonFromServer) {
  console.log('jsonFromServer', jsonFromServer);
  sessionStorage.setItem('restaurantList', JSON.stringify(jsonFromServer)); // don't mess with this, we need it to provide unit testing support
  // const reorganizedData = convertRestaurantsToCategories(jsonFromServer);
  // 
  //var chart = CanvasJS.Chart()
  // Process your restaurants list
  // Make a configuration object for your chart
  // Instantiate your chart
}

// Checks the collection, if it has the value it adjusts the y value and adds it to itself.
// If it doesn't have the value it adds it and sets the y value to 1
const newDataShape2 = randomRestaurauntsArray.reduce((collection, item, i) => {
  const findCat = collection.find(findItem) => findItem.label === item.category);
  if (!findCat) {
    collection.push({
      label: item.category,
      y: 1
    });
  } else {
    findCat.y += 1;
  }
  //collection.push(item);
  return collection;
}, []); // First element is a callback, second element is what is returned

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray();
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
    .catch((err) => {
      console.log(err);
    });
});