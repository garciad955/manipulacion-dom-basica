const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);
// form.addEventListener('submit', sumarInputValues)
// // //escuchando eventos

// function sumarInputValues() {
//     // console.log({event});
//     event.preventDefault();
//     sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerText = "Resultado: " + sumaInputs;
// }


function btnOnClick() {
    // console.log({event});
    // event.preventDefault();
    sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}
