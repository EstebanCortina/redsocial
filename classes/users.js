class Users {
  constructor(dataUser) {
    this.data = dataUser;
    this.last = dataUser.length;
  }

  searchUserByUserName(name) {
    for (let data of this.data) {
      if (data.username == name) {
        return data;
      }
    }
    return '';
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
    return this.data;
  }
}