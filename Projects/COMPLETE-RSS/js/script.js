// JS Document Creator - Tom Sargent
// Last Edited Date - 17/04/2023
// Work adapted from Michael Borck in Curtin Universities ISYS3004 - Business Web and Mobile Technologies. Semester 1 2023.
// Description: Javascript for a RSS feeder web application.


// The notes below to the code are my own description of what I have worked out each line to do. Where i didn't understand something, I asked ChatGPT and then took notes on the line so I would understand in the future.

// Define a function to create a DOM element for each RSS item (Laying out from the raw RSS data)
function addRSStoDOM(data) {
  // Create a new div element to contain all the RSS items (link to HTML)
  let itemsContainer = document.createElement('DIV');
  // Iterate through each item in the feed
  for (let i = 0, t = data.items.length; i < t; ++i) {
    // Get current item
    let item = data.items[i];
    // Create a new div to contain the current item
    let itemContainer = document.createElement('DIV');
    // Create a link element for the item
    let itemLinkElement = document.createElement('A');
    itemLinkElement.setAttribute('href', item.link);
    itemLinkElement.innerText = item.title;
    // Create a title element for the item and append the link element
    let itemTitleElement = document.createElement('H2');
    itemTitleElement.appendChild(itemLinkElement);
    // Create a description element for the item and set its HTML content to the item's description
    let itemDescriptionElement = document.createElement('P');
    itemDescriptionElement.innerHTML = item.description;
    // Append the title and description elements to the item container
    itemContainer.appendChild(itemTitleElement);
    itemContainer.appendChild(itemDescriptionElement);
    // Append the item container to the items container
    itemsContainer.appendChild(itemContainer);
  }
  // Create a new h1 element for the feed title and set its text content to the title
  let titleElement = document.createElement('H1');
  titleElement.innerText = data.feed.title;
  // Append the title element and the items container to the page
  content.appendChild(titleElement);
  content.appendChild(itemsContainer);
}

// Get the main content
var content = document.getElementsByTagName('main')[0];

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the onload function for the object
xhr.onload = function(){
  // If the request was successful (status code between 200 and 299), pass to the json, and log
  if (xhr.status <= 200 && xhr.status < 300) {
    json = JSON.parse(xhr.responseText)
    console.log(json)
    addRSStoDOM(json)
  }
  // If the request failed, log the error to the console and let the user know
  else {
    console.log("The Request Failed")
    content.innerHTML = "THE REQUEST FAILED PLEASE CHECK YOUR RSS URL"
  }
}

// Get the button element for adding a new RSS feed
let addFeedButton = document.getElementById("add-feed");
let newRSSInput = document.getElementById("rss-input");

// Define the function to be executed when the RSS add button is clicked
function onAddRSSClicked(event) {
  // Get the URL from the input element
  let URL = newRSSInput.value;
  newRSSInput.value = "";
  // Send a GET request to the API with the URL provided by the user
  xhr.open('GET', 'https://api.rss2json.com/v1/api.json?rss_url=' + URL);
  xhr.send();
}
// Add an event listener to execute the function when the button is clicked
addFeedButton.addEventListener('click', onAddRSSClicked);
