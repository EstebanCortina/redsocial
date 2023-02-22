const USERNAMES_LIST = document.getElementById('userNamesList');
const SEARCH_USER = document.getElementById('searchUser');

SEARCH_USER.addEventListener('click', () => {
  location.href = "views/form.html?v=1";
});

function getAllUsers(data) {
  data.forEach(user => {
    USERNAMES_LIST.innerHTML += `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle formato" type="button" id="${user.id}" data-bs-toggle="dropdown" aria-expanded="false">
    ${user.name}
  </button>
  <ul class="dropdown-menu formato" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item">Ver publicaciones</a></li>
    <li><a class="dropdown-item">Ver informacion personal</a></li>
    <li><a class="dropdown-item" href="#">Editar informacion</a></li>
  </ul>
</div>`
  });

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