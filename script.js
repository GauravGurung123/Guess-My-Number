'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '✔ correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 18;
// document.querySelector('.guess').value = 8;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⚠ No Number!';
  }
});
