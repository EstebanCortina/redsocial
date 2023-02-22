//Elemento donde se enlistan los nombres de usuarios
const USERNAMES_LIST = document.getElementById('userNamesList');

//Boton para mostrar el formulario con los datos de un usuario especifico
const BTN_SEARCH_USER = document.getElementById('searchUser');

//Formulario que se muestra
const FORM = document.getElementById('form');

//Botones e inputs adentro del formulario
const BTN_SEND = document.getElementById('Send');
const BTN_CANCEL = document.getElementById('Cancel');
const IN_ID = document.getElementById('Id');
const IN_AGE = document.getElementById('Age');
const IN_NAME = document.getElementById('Name');
const IN_USER_NAME = document.getElementById('userName');
const IN_EMAIL = document.getElementById('Email');
const IN_WEB = document.getElementById('Web');


BTN_SEARCH_USER.addEventListener('click', () => {

  //Se muestra el formulario
  FORM.style.display = "block";

  //Se deshabilitan los inputs
  IN_ID.disabled = true;
  IN_AGE.disabled = true;
  IN_EMAIL.disabled = true;
  IN_NAME.disabled = true;
  IN_USER_NAME.disabled = true;
  IN_WEB.disabled = true;

  //Se oculta el boton de 'Agregar'
  BTN_SEND.style.display = "none";

});

BTN_CANCEL.addEventListener('click', () => {
  FORM.style.display = "none";
});

//Por cada elemento que encuentra agregamos un elemento con su dropdawn
function getAllUsers(data) {
  data.forEach(user => {
    USERNAMES_LIST.innerHTML += `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle formato" type="button" id="${user.id}" data-bs-toggle="dropdown" aria-expanded="false">
    ${user.name}
  </button>
  <ul class="dropdown-menu formato" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item">Ver publicaciones</a></li>
    <li><a class="dropdown-item">Ver informacion personal</a></li>
    <li><a class="dropdown-item" onclick="DPW_EDIT()">Editar informacion</a></li>
  </ul>
</div>`
  });
  USERNAMES_LIST.innerHTML += "<button id='AddUser' class='btn-primary'>Agregar</button>"
  //Boton para agregar un nuevo usuario
  const BTN_ADD = document.getElementById('AddUser');
  BTN_ADD.addEventListener('click', () => {
    //Se muestra el formulario
    FORM.style.display = "block";

    //Se deshabilitan los inputs
    IN_ID.disabled = false;
    IN_AGE.disabled = true;
    IN_EMAIL.disabled = true;
    IN_NAME.disabled = true;
    IN_USER_NAME.disabled = true;
    IN_WEB.disabled = true;

    //Se oculta el boton de 'Agregar'
    BTN_SEND.style.display = "block";
  });
}



function DPW_EDIT() {
  //Se muestra el formulario
  FORM.style.display = "block";

  //Se deshabilitan los inputs
  IN_ID.disabled = true;
  IN_AGE.disabled = true;
  IN_EMAIL.disabled = true;
  IN_NAME.disabled = true;
  IN_USER_NAME.disabled = true;
  IN_WEB.disabled = true;

  //Se oculta el boton de 'Agregar'
  BTN_SEND.style.display = "none";
}

function getGET() {
  // capturamos la url
  var loc = document.location.href;
  // si existe el interrogante
  if (loc.indexOf('?') > 0) {
    // cogemos la parte de la url que hay despues del interrogante
    var getString = loc.split('?')[1];
    // obtenemos un array con cada clave=valor
    var GET = getString.split('&');
    var get = {};
    // recorremos todo el array de valores
    for (var i = 0, l = GET.length; i < l; i++) {
      var tmp = GET[i].split('=');
      get[tmp[0]] = unescape(decodeURI(tmp[1]));
    }
    return get;
  }
}