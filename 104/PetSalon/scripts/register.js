//object literal: name,address{},tel,hours,pet[]

let PetSalon ={
    name: "The fashion pet",
    tel: "111-222-3333",
    hours:{
        open: "9:00 am",
        close: "6:00pm",
    },
    address: {
        city: "Houston",
        street: "6th st",
        zip: "77521"
    },
    pets:[]
}
let counter=0;
//constructor
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}

function displayPetName(){
    const petsDiv = document.querySelector("#pets");
    for (let i =0; i < PetSalon.pets.length; i++){
        petsDiv.innerHTML += `
        <li>
            ${PetSalon.pets[i].name}
        </li>`;
    }
}
//gets the inputs
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("txtService");

function isValid(thePet){
    let validation = true;
    inputName.classList.remove("error");
    
    if(thePet.name==""){
        validation= false;
        inputName.classList.add("error");
    }
    if(thePet.age==""){
        validation= false;
        inputName.classList.add("error");
    }
    return validation;
}

function register(){
    //get values
    //create the new pet
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value , inputService.value);
    if(isValid(newPet)==true){
    //push the new pet
    PetSalon.pets.push(newPet);
    displayTable();
    reset();
    }
}


function init(){
        //create the pet objects
    let scooby = new Pet("Scooby",80,"Male","Dane","Grooming");
    let max = new Pet("Max",70,"Male","Pug","Grooming");
    let ava = new Pet("Ava",21,"Female","Mutt","Grooming");
    PetSalon.pets.push(scooby,max,ava);
    displayTable();
    displayNumberOfPets();
    
}

// waiting to render the html
window.onload = init;

function reset(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
}
function deletePet(petID){
    document.getElementById(petID).remove();

    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.id==petID){
            petSalon.pets.splice(i,1);

            displayNumberOfPets();
        }
    }
}
function search(){
    
    let searchString = document.getElementById("txtSearch").value;
    console.log("searching... " + searchString);
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.name.toLowerCase() == searchString.toLowerCase()){
            
            document.getElementById(pet.id).classList.add("highlight");
            
        }
    }
}