let inp = document.getElementById('inp');
let btn = document.getElementById('add');
let tasks = document.getElementById('tasks');

function add(){
    if (inp.value != ''){
        tasks.innerHTML += `<p>${inp.value}</p>`;
    }
}