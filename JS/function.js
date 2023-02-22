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

//Seccion donde se mostrara la informacion y los posts
const TXT_INFO = document.getElementById('txtInfo');


//Busca informacion y la muestra en el txtInfo

function getUserPosts(userId) {

}




//Por cada elemento que encuentra agregamos un elemento con su dropdawn
function getAllUsers(data) {
  data.forEach(user => {
    USERNAMES_LIST.innerHTML += `<div class="dropdown">
  <button class="UserId btn btn-secondary dropdown-toggle formato" type="button" id="${user.id}" data-bs-toggle="dropdown" aria-expanded="false">
    ${user.name}
  </button>
  <ul class="dropdown-menu formato" aria-labelledby="dropdownMenuButton1">
    <li><a class="getPosts dropdown-item">Ver publicaciones</a></li>
    <li><a class="getPersonalInfo dropdown-item">Ver informacion personal</a></li>
    <li><a class="Edit dropdown-item">Editar informacion</a></li>
  </ul>
</div>`
  });
  USERNAMES_LIST.innerHTML += "<button id='AddUser' class='btn-primary'>Agregar</button>"
  //ID del usuario
  //const ID = document.getElementsByClassName('UserId')[1];
  //Boton para agregar y editar un usuario
  const BTN_ADD = document.getElementById('AddUser');
  const BTN_EDIT = document.getElementsByClassName('Edit')[0];
  //Botones para obtener la informacion del usuario
  const GET_POSTS = document.getElementsByClassName('getPosts')[0];
  const GET_PERSONAL_INFO = document.getElementsByClassName('getPersonalInfo')[0];

  /*
  ID.addEventListener('click', () => {
    let a = ID.getAttribute('id');
    console.log(a);
  });
*/

  //Listeners para ejecutar las peticiones del menu dropdown del listado

  GET_POSTS.addEventListener('click', () => {

    alert(GET_ID());
  });

  GET_PERSONAL_INFO.addEventListener('click', () => {
    alert('info');
  });

  BTN_EDIT.addEventListener('click', () => {
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

  BTN_ADD.addEventListener('click', () => {
    //Se muestra el formulario
    FORM.style.display = "block";

    //Se deshabilitan los inputs
    IN_ID.disabled = false;
    IN_AGE.disabled = false;
    IN_EMAIL.disabled = false;
    IN_NAME.disabled = false;
    IN_USER_NAME.disabled = false;
    IN_WEB.disabled = false;

    //Se valida que se muestre el boton de 'Agregar'
    BTN_SEND.style.display = "inline";
  });



}

//IDEA: Lo que devuele document.getElement es un array, entonces hay que usar un forEach
document.querySelectorAll("dropdown-item").forEach(el => {
  el.addEventListener("click", e => {
    const id = e.target.getAttribute("id");
    console.log("Se ha clickeado el id " + id);
  });
});

function GET_ID(id) {
  return id;
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