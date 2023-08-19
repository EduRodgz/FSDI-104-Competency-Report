function displayPetCards(){
    //get the div from the html to display the pets
    const DIV = document.getElementById("pets");
    let card="";
    //travel the array PetSalon.pets
    for(let i=0;i<PetSalon.pets.length;i++){
        let pet = PetSalon.pets[i];
    

    //creat the card html
    
    card += `
    <div class="pet">
        <h5>${pet.name}</h5>
        <h5>${pet.breed}</h5>
        <h5>${pet.gender}</h5>
        <h5>${pet.service}</h5>
        <h5>${pet.age}</h5>

    </div>
    `;
}
DIV.innerHTML=card;

    //display the cards into the HTML
    displayNumberOfPets();
}
function displayNumberOfPets(){
    //select the HTML element
    let SUP = document.getElementById("numberPets");
    

    //display the updated value (*** .length)
    SUP.innerHTML = petSalon.pets.length;
}



function displayTable() {
    const tableBody = document.getElementById("petsList");

    let rows = "";

    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        rows += `
            <tr id="${pet.id}">
                <td scope="row">${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.type}</td>
                <td><button class="btn btn-danger" onclick="deletePet(${pet.id});">Delete</button></td>
            </tr>
        `;
    }

    tableBody.innerHTML = rows;
}