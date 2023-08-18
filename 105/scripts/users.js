function displayUsers(usersArray){
    let row;
    //travel the array ** for{}
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
    //create the row with html code  **` ${}`    
        row +=`
        <tr>
            <td>${user.email}
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.phone}</td>
            <td>${user.payment}</td>
            <td>${user.color}</td>
        </tr>
        `;
    
    

    //insert the row into the table **append()
    $("#usersList").append(row);    
    }
    
}

function init(){
    console.log("Listing users. . .");
    //get users from the local storage
    let users= readUsers();
    console.log(users);
    //display the users
    displayUsers(users);
}

window.onload=init;