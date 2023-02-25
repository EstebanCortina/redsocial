//Boton para buscar por username (navbar)
const BTN_SEARCH_USER = document.getElementById('btnSearchUser');
//Botones adentro del formulario
const BTN_SEND = document.getElementById('Send');
const BTN_CANCEL = document.getElementById('Cancel');

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
  let newUser = getInputsData();
  showAllUsers(dataUsers.addUser(newUser));
  eraseInputsValues();
  hideForm();
});


