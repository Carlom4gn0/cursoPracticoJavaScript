//Es importante crear una variable para cada selector de HTML
// como en CSS es importante con queryselector ingreser ("tipo de selector como en css")

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.getElementsByClassName('.parrafo');
const parra = document.getElementById('#parra');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    parra,
    input,
});