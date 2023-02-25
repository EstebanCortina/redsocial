//Elemento <div> HTML donde se enlistan los nombres de usuarios
const USERNAMES_LIST = document.getElementById('userNamesList');

//FORM y sus Inputs
const FORM = document.getElementById('form');
const IN_ID = document.getElementById('Id');
const IN_AGE = document.getElementById('Age');
const IN_NAME = document.getElementById('Name');
const IN_USER_NAME = document.getElementById('userName');
const IN_EMAIL = document.getElementById('Email');
const IN_WEB = document.getElementById('Web');

//Seccion donde se muestra la informacion
const TXT_ZONE = document.getElementById('txtZone');

//Arreglo para guardar parametros
let PARAM = [];
//Array "PARAM"(Interface.js) Syntax:
//INDEX '0' es el ID del usuario
//INDEX '1' es para la opcion que eligio


//Por cada usuario que se encuentra agregamos un Nombre con sus opciones dropdown
function showAllUsers(data) {
  USERNAMES_LIST.innerHTML = '';
  //IMPORTANTE: Con el Id del boton identificamos el usuario.
  data.forEach(user => {
    USERNAMES_LIST.innerHTML += `<div class="dropdown">
  <button class="UserId btn btn-secondary dropdown-toggle formato" type="button" id="${user.id}" data-bs-toggle="dropdown" aria-expanded="false">
    ${user.name}
  </button>
  <div>
  <ul class="Options dropdown-menu formato" aria-labelledby="dropdownMenuButton1">
    <li><a class="getPosts dropdown-item">Ver publicaciones</a></li>
    <li><a class="getPersonalInfo dropdown-item">Ver informacion personal</a></li>
    <li><a class="Edit dropdown-item">Editar informacion</a></li>
  </ul>
  </div>
</div>`
  });
  USERNAMES_LIST.innerHTML += "<button id='AddUser' class='btn-primary'>Agregar</button>"
  setListeners();
}

//Recibe un arreglo con objetos tipo posts y los agrega a la Zona de texto
function showPosts(data) {
  TXT_ZONE.innerHTML = '';

  if (data != '') {
    for (let i = 0; i < data.length; i++) {
      TXT_ZONE.innerHTML += `
    <div>
      <h1>${data[i].title}</h1>
      <p>${data[i].body}</p>
    </div>
    <br>
    `;
    }
  } else {
    alert('Este usuario no tiene publicaciones');
  }
}

//Recibe un objeto de tipo User y lo agrega a la Zona de texto
function showInfo(data) {
  TXT_ZONE.innerHTML = '';

  TXT_ZONE.innerHTML += `
  <div>
    <h1>${data.id}.- ${data.username}</h1>
      <p>Nombre: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Webpage: ${data.website}</p>
      <p>Edad: ${data.age}</p>
  </div>
    <br>`;
}

//Recibe un arreglo con un entero y un string
//Despues evalua el string, busca la infomracion
//y despues la manda a mostrar
function makeAction(PARAM) {
  let action = PARAM[1];
  if (action == "getPosts") {
    console.log(PARAM);
    showPosts(dataPosts.getPosts(PARAM[0]));
  } else if (action == "getPersonalInfo") {
    console.log(PARAM);
    showInfo(dataUsers.searchUserById(parseInt(PARAM[0])));
  } else if (action == "Edit") {
    console.log(PARAM);
    setInputValues(dataUsers.searchUserById(parseInt(PARAM[0])));
    showForm();
    disableInputs(true);
  }
}

//Busca y regresa a un usuario por username
function getUser(username) {
  let user = dataUsers.searchUserByUserName(username);
  return user;
}
//Crea y regresa un objeto con los inputs del form
function getInputsData() {
  let newUser = {
    'id': IN_ID.value,
    'username': IN_USER_NAME.value,
    'name': IN_NAME.value,
    'email': IN_EMAIL.value,
    'website': IN_WEB.value,
    'age': IN_AGE.value
  }
  return newUser;
}

//Cada vez que se actualiza la lista, hay que reasignar los listeners
//ya que el arreglo del querySelector queda desactualizado
function setListeners() {
  setSelectedIdListener();
  setSelectedOptionListeners();
  setBtnSendListener();
}
//Se asigna listener. El boton de agregar hasta abajo tambien queda 
//desactualizado ya que se borra
//y se manda a crear otro cada vez que se actualiza
function setBtnSendListener() {
  let BTN_ADD = document.getElementById('AddUser');
  BTN_ADD.addEventListener('click', () => {
    eraseInputsValues();
    showForm();
    disableInputs(false);
  });
}

//Crear listeners para obtener el id del boton con el nombre del usuario
function setSelectedIdListener() {
  let GET_ID = document.querySelectorAll('.UserId');
  GET_ID.forEach(le => {
    le.addEventListener('click', e => {
      const id = e.target.getAttribute("id");
      PARAM = [];
      PARAM.push(id);
      console.log("Se ha clickeado el id " + id);
    });
  });
}

//Crea listeners para las opciones dropdown
function setSelectedOptionListeners() {
  let OPTIONS = document.querySelectorAll('.Options');
  OPTIONS.forEach(le => {
    le.addEventListener('click', e => {
      let type = e.target.getAttribute("class").split(' ');
      PARAM.push(type[0]);
      makeAction(PARAM);
    });
  });
}

//Asigna valores a los inputs para mostrar informacion personal
//de algun usuario
function setInputValues(data) {
  IN_ID.value = data.id;
  IN_AGE.value = data.age;
  IN_EMAIL.value = data.email;
  IN_NAME.value = data.name;
  IN_USER_NAME.value = data.username;
  IN_WEB.value = data.website;
}

//Borra los valores de los inputs
//(usado para cuando se presiona el boton CANCEL del FORM)
function eraseInputsValues() {
  IN_ID.value = '';
  IN_AGE.value = '';
  IN_EMAIL.value = '';
  IN_NAME.value = '';
  IN_USER_NAME.value = '';
  IN_WEB.value = '';
}

//Habilita o deshabilita los inputs
//Recibe un bool y lo asigna

function disableInputs(state) {
  IN_AGE.disabled = state;
  IN_EMAIL.disabled = state;
  IN_NAME.disabled = state;
  IN_USER_NAME.disabled = state;
  IN_WEB.disabled = state;

  //Si se deshabilitan, no se muestra enviar
  //Si se habilitan, se muestra enviar
  if (state) {
    BTN_SEND.style.display = "none";
  } else {
    BTN_SEND.style.display = "inline";
  }

}

//Muestran o esconden el formulario
function showForm() {
  FORM.style.display = "block";
}
function hideForm() {
  FORM.style.display = "none";
}