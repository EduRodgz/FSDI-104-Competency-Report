function login(){
    //get the users
    let users = readUsers();
    
    //get the values from the inputs on the html
    let inputEmail=$("#txtEmail").val();
    let inputPassword=$("#txtPassword").val();

    //travel the array
    for(let i=0;i<users.length;i++){
        let user = users[i];
        //compare the inputs info vs arrayInfo
        if(inputEmail==user.email && inputPassword==user.password){
            flag=true;
            //console.log("I found it!");
            window.location.href="users.html";
        }
        else{
            flag=false;
        }
    }
    if(flag==false){
        alert("Email or password is incorrect");
    }
}