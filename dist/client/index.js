"use strict"

const URL = "http://localhost:3000"

// Initialize app
function initialize () {
  // Get history
  getHistory()
  // Add listener to submit button
};

// Get history function
function getHistory () {
  fetch(URL + '/history')
  .then((response) => {
    data = response.json();
    console.group('History')
    console.table(data)
    console.groupEnd()
    renderHistory(data);
  })
};

// handle Submit function
function handleSubmit () {

};

function renderHistory (history) {

}

initialize();
