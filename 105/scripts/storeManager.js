function saveUser(aUser){
    let users = readUsers();
    users.push(aUser);
    let val = JSON.stringify(users); // parse obj into string
    localStorage.setItem("users",val); //send the string to the LS
}

function readUsers(){
    //get the elements undeer the LS
    let users = localStorage.getItem("users")
    
    if(!users){
        return[];
    }else{
        
        return JSON.parse(users);
    }
}