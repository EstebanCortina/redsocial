class Posts {
  constructor(dataPosts) {
    this.data = dataPosts;

  }
  getUserPosts(searchId) {
    for (let ID of this.data) {
      if (ID.userId == searchId) {
        return ID;
      }
    }
  }
  getPosts(searchId) {
    let findedPosts = [];
    for (let data of this.data) {
      if (data.userId == searchId) {
        findedPosts.push(data);
      }
    }
    return findedPosts;
  }
}

