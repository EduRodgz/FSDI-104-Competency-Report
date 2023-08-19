function displayPetCards(){
    //get the div from the html to display the pets
    const DIV = document.getElementById("pets");
    let card="";
    //travel the array PetSalon.pets
    for(let i=0;i<PetSalon.pets.length;i++){
        let pet = PetSalon.pets[i];
    

    //creat the card html
    
    card += `
    <div class="${pet.id} class="pet">
        <h5>${pet.name}</h5>
        <p>${pet.breed}</p>
        <p>${pet.gender}</p>
        <p>${pet.service}</p>
        <p>${pet.age}</p>
        <p>${pet.payment}</p>

    </div>
    `;
    console.log(card);
}
DIV.innerHTML=card;
displayNumberOfPets()

    //display the cards into the HTML
}
function displayNumberOfPets(){
    let SUP=document.getElementById("numberPets");
    SUP.innerHTML=PetSalon.pets.length;
}

function displayTable(){
    const tableBody = document.getElementById("petsList");

    let rows = "";

    for(let i = 0;i < PetSalon.pets.length;i++){
        let pet = PetSalon.pets[i];
        rows += `
        <tr id="${pet.id}">
            <td scope="row">${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.payment}</td>
            <td><button class="btn btn-danger"  onclick="deletePet(${pet.id});">Delete</button></td>
            
        </tr>
        `;
    }
    
    displayNumberOfPets()
tableBody.innerHTML = rows;    
}
