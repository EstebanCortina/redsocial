class User {
  constructor(dataUser) {
    this.data = dataUser;
    this.last = dataUser.length;
  }

  searchUser(name) {
    let i = 0;
    let user = this.data;
    while (user[i].name != name) {
      i++;
    }
    return user[i];
  }

  postUser(newUser) {
    let last = this.last + 1;
    newUser.id = last;
    this.data.push(newUser);
  }

  getUsers() {
    let lista = "";
    for (let i = 0; i < this.data.length; i++) {
      //obtener el elemento HTML y agregarle el valor de lista
      lista += JSON.stringify(this.data[i]);
    }
    return lista;
  }


}