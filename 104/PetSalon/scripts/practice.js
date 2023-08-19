console.log("Practice");

// object  literal
let student = {
    name: "Eduardo",
    age: 22,
    grades: [10,9,8,7],
    address: {
        country: "United States",
        state: "Texas",
        city: "Houston",
    }
}
// create a new object literal from yourself and console log it
let myself ={
    name: "Eduardo",
    age: 24,
    height: [5,6],
    eyes: ["brown,green"],
    address: {
        country: "USA",
        state: "TX",
        city: "H-Town",
    }
}

console.log(student,myself);

document.write(`
<div class="student">
<p>Name: ${student.name}</p>
<p>Age: ${student.age}</p>
<p>Country: ${student.address.country}</p>
</div>
`);