// BOTON CAMBIAR-ESTILOS Y CONTADOR
const estilos = document.getElementById('styles')

const btnCambiarEstilos = document.getElementById('css')

btnCambiarEstilos.addEventListener('click', function() {
  if (estilos.getAttribute("href") === "CSS/styles.css") {
    estilos.setAttribute("href", "CSS/styles2.css") } else if (estilos.getAttribute("href") === "CSS/styles2.css") {
      estilos.setAttribute("href", "CSS/styles3.css")
    } else {
      estilos.setAttribute("href", "CSS/styles.css")
    }
})

const numCSS = document.querySelector('#contador')
let resultado = 1;
console.log(numCSS)

btnCambiarEstilos.addEventListener('click', () => {
  if (resultado === 3) {
    resultado = 1
    numCSS.textContent = resultado;
  } else {
    resultado ++;
    numCSS.textContent = resultado;
  }
})


const formulario = document.getElementById('miForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm()
})

function validateForm() {
  const nombre = document.getElementById('nombre')
  const email = document.getElementById('email')

  if (name.value === "") {
    alert("Por favor, ingrese su nombre");
    name.focus();
    return false
  }
  if (email.value === "") {
    alert("Por favor, ingrese su correo electrónico")
    email.focus();
    return false;
  }
  if (!validateEmail(email.value)) {
    alert("Por favor, ingrese un correo electrónico válido");
    email.focus();
    return false;
  }
  alert("El formulario se ha enviado correctamente");
  return true
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}