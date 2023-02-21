const USERNAMES_LIST = document.getElementById('userNamesList');
const SEARCH_USER = document.getElementById('searchUser');

SEARCH_USER.addEventListener('click', () => {
  location.href = "form.html?v=1";
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