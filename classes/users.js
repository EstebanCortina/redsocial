class Users {
  constructor(dataUser) {
    this.data = dataUser;
    this.last = dataUser.length;
  }

  searchUserByUserName(name) {
    let i = 0;
    let user = this.data;
    while (user[i].username != name) {
      i++;
    }
    return user[i];
  }

  searchUserById(id) {
    for (let data of this.data) {
      if (data.id == id) {
        return data;
      }
    }
  }

  getList() {
    return this.data;
  }



  addUser(newUser) {
    newUser.id = this.last + 1;
    this.data.push(newUser);
    getAllUsers(this.data);
  }
}