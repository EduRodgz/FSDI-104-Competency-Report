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
}