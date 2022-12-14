import axios from "axios"

async function getData (userID) {
    const  { data : user } = await axios("https://jsonplaceholder.typicode.com/users/" + userID)
    const  { data : posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userID)

    let data = {user, posts}
    console.log(data)
}

export default getData;