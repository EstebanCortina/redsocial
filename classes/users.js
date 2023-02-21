class Users {
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

  addUser(newUser) {
    newUser.id = this.last + 1;
    this.data.push(newUser);
  }
}