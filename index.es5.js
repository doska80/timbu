"use strict";

var count = 0;
function inc() {
  count++;
  document.getElementById('h1').innerText = count;
}

// <h1 id="h1">0</h1>
var $h1 = createElement('h1', 'h1', '0');

//<button onclick="inc()">Increment</button>
var $button = createElement('button', null, 'Increment', {
  click: function click() {
    inc();
  }
});