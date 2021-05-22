'use strict';

const URL = 'http://localhost:3000';

const sampleData = [
  { a: 1, b: 1, operation: 'add', answer: 2 },
  { a: 2, b: 5, operation: 'multiply', answer: 10 },
];

// Initialize app
function initialize() {
  // Get history
  getHistory();
  // Add listener to submit button
}

// Get history function
function getHistory() {
  fetch(URL + '/history').then((response) => {
    data = response.json();
    console.group('History');
    console.table(data);
    console.groupEnd();
    renderHistory(data);
  });
}

// handle Submit function
function handleSubmit() {}

function renderHistory(history) {
  history.forEach(({ a, b, operation, answer }) => {
    let tableBody = document.getElementById('history-body');
    let row = document.createElement('tr');
    let colA = document.createElement('td');
    colA.innerText = a;
    let colB = document.createElement('td');
    colB.innerText = b;
    let colOp = document.createElement('td');
    colOp.innerText = operation;
    let colAns = document.createElement('td');
    colAns.innerText = answer;
    row.append(colA, colB, colOp, colAns);
    tableBody.append(row);
  });
}

initialize();
