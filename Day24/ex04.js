// async function callAPIs(){
//     try {
//         const user = await getUser()
//     const post = await getPosts(user.userId)
//     await getComments(post[0])
//     } catch (error) {
//         console.log(error)
//     }
// }
const promise1 = new Promise(1)//5s
const promise2 = new Promise(2)//5s

Promise.all()