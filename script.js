//Es importante crear una variable para cada selector de HTML
// como en CSS es importante con queryselector ingreser ("tipo de selector como en css")
//(selector).innerHTML modifica lo que el selector muestra, remplaza el atributo de la variable(se puede insertar tanto texto como codigo html)
//(selector).innerText modifica el campo de texto osea q solo va a mostrar lo q se escriba y no ejecutar html
//h1.innerHTML = "buenos dias"
//h1.innerText = "buenos dias"
//getAttribute(´')lee el atributo de una clase o elemento
//console.log(h1.getAttribute('class'));

//setAttribute('valor actual', 'valor nuevo') modifica el atributo
//h1.setAttribute('class','ROjo');

//h1.classList.add('hola');//agrega una clase
//h1.classList.remove('nada');

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('btnCalcular');
const p =document.querySelector('#result');

function btnOnClick(){
    p.innerText = input1.value +input2.value;

}



