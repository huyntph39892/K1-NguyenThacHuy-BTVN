// const getUser = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve ('thanh cong')
//         reject ('that bai')
//     }, 1000)
// })
// getUser
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//chuyển đổi hàm callback thành promise
function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { userId: userId, name: "Nguyễn Văn A" };
      resolve(user);
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { postId: 1, userId: userId, title: "Bài viết 1" },
        { postId: 2, userId: userId, title: "Bài viết 2" },
      ];
      resolve(posts);
      reject("Lỗi khi lấy bài viết");
    }, 1000);
  });
}

function getComments(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comments = [
        { commentId: 1, postId: post.postId, content: "Bình luận 1" },
        { commentId: 2, postId: post.postId, content: "Bình luận 2" },
      ];
      resolve(comments);
      reject("Lỗi khi lấy bình luận");
    }, 1000);
  });
}

const userId = 1;

getUser(userId)
  .then((user) => {
    console.log(user);
    return getPosts(user.userId);
  })
  .then((post) => {
    console.log(post);
    return getComments(post[0]);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => {
    console.log(error);
  });