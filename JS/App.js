//Elemento donde se enlistan los nombres de usuarios
const USERNAMES_LIST = document.getElementById('userNamesList');

const IN_ID = document.getElementById('Id');
const IN_AGE = document.getElementById('Age');
const IN_NAME = document.getElementById('Name');
const IN_USER_NAME = document.getElementById('userName');
const IN_EMAIL = document.getElementById('Email');
const IN_WEB = document.getElementById('Web');

//Seccion donde se mostrara la informacion y los posts
const TXT_ZONE = document.getElementById('txtZone');

let PARAM = [];


//Por cada elemento que encuentra agregamos un elemento con su dropdawn
function showAllUsers(data) {
  USERNAMES_LIST.innerHTML = '';
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

function showInfo(data) {
  TXT_ZONE.innerHTML = '';

  TXT_ZONE.innerHTML += `<div>
    <h1>${data.id}.- ${data.username}</h1>
    <p>Nombre: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Webpage: ${data.website}</p>
    <p>Edad: ${data.age}</p>
    </div>
    <br>`;
}


function makeAction(PARAM) {
  let action = getAction(PARAM);
  if (action == "posts") {
    console.log(PARAM);
    showPosts(dataPosts.getPosts(PARAM[0]));
  } else if (action == "info") {
    console.log(PARAM);
    showInfo(dataUsers.searchUserById(parseInt(PARAM[0])));
  } else if (action == "edit") {
    console.log(PARAM);
    setInputValues(dataUsers.searchUserById(parseInt(PARAM[0])));
    showForm();
    disableInputs(true);
  }
}

function getAction(option) {
  let state = '';
  switch (option[1]) {
    case "getPosts":
      state = "posts";
      break;
    case "getPersonalInfo":
      state = "info";
      break;
    case "Edit":
      state = "edit";
      break;
  }
  return state;
}

function getUser(username) {
  let user = dataUsers.searchUserByUserName(username);
  return user;
}
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

function setListeners() {
  setSelectedIdListener();
  setSelectedOptionListeners();
  setBtnSendListener();
}

function setBtnSendListener() {
  let BTN_ADD = document.getElementById('AddUser');
  BTN_ADD.addEventListener('click', () => {
    eraseInputsValues();
    showForm();
    disableInputs(false);
  });
}

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

function setInputValues(data) {
  IN_ID.value = data.id;
  IN_AGE.value = data.age;
  IN_EMAIL.value = data.email;
  IN_NAME.value = data.name;
  IN_USER_NAME.value = data.username;
  IN_WEB.value = data.website;
}

function eraseInputsValues() {
  IN_ID.value = '';
  IN_AGE.value = '';
  IN_EMAIL.value = '';
  IN_NAME.value = '';
  IN_USER_NAME.value = '';
  IN_WEB.value = '';
}









function disableInputs(state) {
  //Se deshabilitan los inputs

  IN_AGE.disabled = state;
  IN_EMAIL.disabled = state;
  IN_NAME.disabled = state;
  IN_USER_NAME.disabled = state;
  IN_WEB.disabled = state;

  if (state) {
    BTN_SEND.style.display = "none";
  } else {
    BTN_SEND.style.display = "inline";
  }

}

function showForm() {
  FORM.style.display = "block";
}
function hideForm() {
  FORM.style.display = "none";
}

//IDEA: Lo que devuele document.getElement es un array, entonces hay que usar un forEach

/*
.forEach(el => {
  el.addEventListener("click", e => {
    const id = e.target.getAttribute("id");
    console.log("Se ha clickeado el id " + id);
  });
});
*/



