'use strict';

// write code here

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.innerText = input.name;
  input.placeholder = input.name.toUpperCase();
  input.parentElement.prepend(label);
}
