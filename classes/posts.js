class Posts {
  constructor(dataPosts) {
    this.data = dataPosts;
  }
  getUserPosts(searchId) {
    for (let ID of this.data) {
      if (ID.userId == searchId) {
        //MANDAR AL ELEMENTO HTML
      }
    }
  }
  getPosts(searchId) {
    for (let ID of this.data) {
      if (ID.id == searchId) {
        //MANDAR AL ELEMENTO HTML DEL TEXTO AL SCROLL
      }
    }
  }
}

