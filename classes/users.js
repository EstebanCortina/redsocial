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

  addUser(newUser) {
    let last = this.last + 1;
    newUser.id = last;
    this.data.push(newUser);
  }
}