//This will hold our helper functions or method.

//helper function to check our token.
const checkToken = () => {
    let result = false;
    let lsData = localStorage.getItem("Token");
    if(lsData && lsData != null)
    {
        result = true;
    }
    return result;
}

//helper function or method to createAccount, async and await
//fetch() json(), stringify
const createAccount = async (createduser) => 
{
    const result = await fetch('http://localhost:5006/api/User/AddUsers',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createduser)
    })
    if(!result.ok)
    {
        const message = `Yo yo you have an Error Check your code!${result.status}`
        throw new Error(message);
    }
        let data = await result.json();
        console.log(data);
        
}



export {checkToken,createAccount}