/*
const GET_ID = USERNAMES_LIST.childNodes;
GET_ID.forEach(l => {
  l.addEventListener("click", e => {
    const id = e.target.getAttribute("id");
    console.log("Se ha clickeado el id " + id);
  });
});
*/



const BTN_SEARCH_USER = document.getElementById('btnSearchUser');

//Botones e inputs adentro del formulario
const BTN_SEND = document.getElementById('Send');
const BTN_CANCEL = document.getElementById('Cancel');

//En el array PARAM, 0 es el ID del usuario y 1 es para la opcion que eligio


BTN_SEARCH_USER.addEventListener('click', () => {
  let IN_SEARCH = document.getElementById('SearchUser');
  let user = getUser(IN_SEARCH.value);
  if (user != '') {
    eraseInputsValues();
    showInfo(user);
    disableInputs(true);

  } else {
    alert('No se encontro ningun usuario');
  }


});

BTN_CANCEL.addEventListener('click', () => {
  hideForm();
});




BTN_SEND.addEventListener('click', () => {

  //console.log(newUser);
  let newUser = getInputsData();
  showAllUsers(dataUsers.addUser(newUser));
  eraseInputsValues();
  hideForm();

});

/*
//Boton para agregar y editar un usuario
const BTN_ADD = document.getElementById('AddUser');
const BTN_EDIT = document.getElementsByClassName('Edit')[0];
//Botones para obtener la informacion del usuario
const GET_POSTS = document.getElementsByClassName('getPosts')[0];
const GET_PERSONAL_INFO = document.getElementsByClassName('getPersonalInfo')[0];


//Listeners para ejecutar las peticiones del menu dropdown del listado

GET_POSTS.addEventListener('click', () => {

});

GET_PERSONAL_INFO.addEventListener('click', () => {
  alert('info');
});

*/


