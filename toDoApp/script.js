const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list');
let valores = [];

function agregar(){
    listContainer.addEventListener('click', function(e){
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked');
        }
        else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove();
        }
      },  false);
    if(inputBox.value === ''){
        alert('No puedes agregar una tarea vacía');
    }else{ valores.unshift(inputBox.value);
        inputBox.value = '';
        listContainer.innerHTML = valores.map((valor) => {
            return `<li>${valor} <span>&#10006;</span></li>`;
        }).join('');
} };

function eliminar(){
    valores.pop();
    listContainer.innerHTML = valores.map((valor) => {
        return `<li>${valor} <span>&#10006;</span></li>`;
    }).join('');
    listContainer.addEventListener('click', function(e){
});

    
    };


// function agregar(){
//     if(inputBox.value === ''){
//         alert('No puedes agregar una tarea vacía');
// }else{
//     let li = document.createElement('li');
//     li.innerHTML = inputBox.value;
//     listContainer.appendChild(li);
//     let span = document.createElement('span');
//     span.innerHTML = '\u00D7';
//     li.appendChild(span);
//     }
//     inputBox.value ="";
//     saveData();
// };
// listContainer.addEventListener('click', function(e){
//     if(e.target.tagName === 'LI'){
//         e.target.classList.toggle('checked');
//         saveData();
//     }
//     else if(e.target.tagName === 'SPAN'){
//         e.target.parentElement.remove();
//         saveData();
//     }
//   },  false);

//   function saveData(){
//     localStorage.setItem('data', listContainer.innerHTML);
//   }

//   function showList(){
//     listContainer.innerHTML = localStorage.getItem('data');
//   }
//   showList();