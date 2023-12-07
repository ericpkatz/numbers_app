const numbers = [1, 2, 3];
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('input');


form.addEventListener('submit', function(ev){
  ev.preventDefault();
  numbers.push(input.value*1);
  render();
});

function render(){
  let html = numbers.map(function(num){
    return `
      <li class='${ num % 2 === 1 ? 'odd': ''}'>${num}</li>
    `;
  });
  html = html.join('');
  ul.innerHTML = html;
}

render();
