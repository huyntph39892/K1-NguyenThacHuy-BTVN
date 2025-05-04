//lấy ra comment của bài post đầu tiên của người dùng có userId nhập vào
function getUser(userId, callback) {
    setTimeout(() => {
        const user = { userId: userId, name: "Nguyễn Văn A" };
        callback(user);
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        const posts = [
            { postId: 1, userId: userId, title: "Bài viết 1" },
            { postId: 2, userId: userId, title: "Bài viết 2" },
        ];
        callback(posts);
    })
}
function getComments(post, callback) {
    setTimeout(() => {
        const comments = [
            { commentId: 1, postId: post.postId, content: "Bình luận 1" },
            { commentId: 2, postId: post.postId, content: "Bình luận 2" },
        ];
        callback(comments);
    })
}
function getFirstCommentId(){
    const userId = 1;
    getUser(userId, (user)=>{
        console.log(user)
        getPosts(user.userId, (post)=>{
            console.log(post)
            getComments(post[0], (comments)=>{
                console.log(comments[0])
            })
        })
        
    })
}
getFirstCommentId()