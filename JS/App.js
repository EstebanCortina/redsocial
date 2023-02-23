/*
const GET_ID = USERNAMES_LIST.childNodes;
GET_ID.forEach(l => {
  l.addEventListener("click", e => {
    const id = e.target.getAttribute("id");
    console.log("Se ha clickeado el id " + id);
  });
});
*/

const GET_ID = document.querySelectorAll('.UserId');
const BTN_ADD = document.getElementById('AddUser');
const FORM = document.getElementById('form');
const BTN_SEARCH_USER = document.getElementById('searchUser');

//Botones e inputs adentro del formulario
const BTN_SEND = document.getElementById('Send');
const BTN_CANCEL = document.getElementById('Cancel');


//En el array PARAM, 0 es el ID del usuario y 1 es para la opcion que eligio
let PARAM = [];
GET_ID.forEach(le => {
  le.addEventListener('click', e => {
    const id = e.target.getAttribute("id");
    PARAM = [];
    PARAM.push(id);
    console.log("Se ha clickeado el id " + id);
  });
});

const OPTIONS = document.querySelectorAll('.Options');
OPTIONS.forEach(le => {
  le.addEventListener('click', e => {
    let type = e.target.getAttribute("class").split(' ');
    PARAM.push(type[0]);

    if (getAction(PARAM) == "posts") {
      console.log(PARAM[0]);
      showPosts(dataPosts.getPosts(PARAM[0]));
    } else if (getAction(PARAM) == "info") {
      //console.log(parseInt(PARAM[0]));
      //console.log(dataUsers.searchUser(PARAM[0]));
      showInfo(dataUsers.searchUserById(parseInt(PARAM[0])));
    } else {
      showUser(dataUsers.searchUserById(parseInt(PARAM[0])));
    }
    //console.log(type[0]);
  });
});




BTN_SEARCH_USER.addEventListener('click', () => {

  showEditForm();

});

BTN_CANCEL.addEventListener('click', () => {
  FORM.style.display = "none";
});


BTN_ADD.addEventListener('click', () => {
  showAddForm();
});

BTN_SEND.addEventListener('click', () => {

  let newUser = {
    'id': IN_ID.value,
    'username': IN_USER_NAME.value,
    'name': IN_NAME.value,
    'email': IN_EMAIL.value,
    'website': IN_WEB.value,
    'age': IN_AGE.value
  }
  //console.log(newUser);
  dataUsers.addUser(newUser);

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


