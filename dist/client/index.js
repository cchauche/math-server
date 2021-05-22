{
  ('use strict');

  const URL = 'http://localhost:3000';

  const sampleData = [
    { a: 1, b: 1, operation: 'add', answer: 2 },
    { a: 2, b: 5, operation: 'multiply', answer: 10 },
  ];

  const numA = document.getElementById('numA');
  const numB = document.getElementById('numB');
  const selectOp = document.getElementById('select-op');
  const mathForm = document.getElementById('math-form');

  function initialize() {
    getHistory();
    mathForm.addEventListener('submit', handleSubmit);
  }

  function getHistory() {
    fetch(URL + '/history')
      .then((response) => response.json())
      .then((response) => {
        let { data } = response;
        console.group('History');
        console.table(data);
        console.groupEnd();
        renderHistory(data);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let body = {
      a: numA.value,
      b: numB.value,
    };
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(body),
    };
    fetch(URL + '/math/' + selectOp.value, options)
      .then(() => {
        getHistory();
      })
      .catch((err) => {
        console.error(err);
      });
  }

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
}
