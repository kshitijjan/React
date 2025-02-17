const axios = require('axios')

//Get (fetch)
//Method 1 => using .then() syntax
function getTodosFetch1(){

    fetch('http:localhost:3000/todos')
    .then(async (response) => {
        const json = await response.json()
        console.log(json);
        
    } )
}
getTodosFetch1()

//Method 2 => using async and await

const getTodosFetch2 = async () => {
    
    const response = await fetch('http://localhost:3000/todos')
    const res = await response.json();
    console.log(res);
}
getTodosFetch2();

//Get (axios)

const getTodosAxios = async () => {
    const response = await axios.get('http://localhost:3000/todos')
    console.log(response.data);
}
getTodosAxios();

//Post (fetch, Axios)

const postFetch = async () => {

    const response = await fetch('https://httpdump.app/dumps/84720802-a8e8-4f4d-8c23-2fb39b721e7e', 
    
        {
            method: 'POST',
            body: JSON.stringify({
                username: 'Kshitij',
                password: 'Jain'
            }),
            headers: {
                Authorization: 'Bearer 123'
            }
        }
    )
    const json = await response.text();
    console.log(json);
    
}
postFetch();

const postAxios = async () => {

    const response = await axios.post('https://httpdump.app/dumps/84720802-a8e8-4f4d-8c23-2fb39b721e7e?a=b', {
        username: 'Kshitij',
        password: '123'
    },{
        headers: {
            Authorization: 'Bearer 908'
        }
    })
    console.log(response.data);
    
}
postAxios();

