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
      showEditForm();
      break;
  }
  return state;
}


//Por cada elemento que encuentra agregamos un elemento con su dropdawn
function getAllUsers(data) {
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

}


function showPosts(data) {
  TXT_ZONE.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    TXT_ZONE.innerHTML += `
    <div>
    <h1>${data[i].title}</h1>
    <p>${data[i].body}</p>
    </div>
    <br>
    `;
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

function showUser(data) {
  console.log(data);
  IN_ID.value = data.id;
  IN_AGE.value = data.age;
  IN_EMAIL.value = data.email;
  IN_NAME.value = data.name;
  IN_USER_NAME.value = data.username;
  IN_WEB.value = data.website;
}


function showEditForm() {
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

function showAddForm() {
  //Se muestra el formulario
  FORM.style.display = "block";

  //Se deshabilitan los inputs
  IN_ID.disabled = true;
  IN_AGE.disabled = false;
  IN_EMAIL.disabled = false;
  IN_NAME.disabled = false;
  IN_USER_NAME.disabled = false;
  IN_WEB.disabled = false;

  //Se valida que se muestre el boton de 'Agregar'
  BTN_SEND.style.display = "inline";
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



