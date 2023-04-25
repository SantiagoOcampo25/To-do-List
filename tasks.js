const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('#task-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    const button = document.createElement('button');
    li.textContent = input.value;

    button.textContent = 'Delete';
    button.addEventListener('click', () => {
        ul.removeChild(li);
    });

    li.appendChild(button);
    ul.appendChild(li);
    input.value = '';
});

