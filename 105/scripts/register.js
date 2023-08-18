//create a constructor for an user objects
function User(email,password,firstname,lastname,age,gender,phone,payment,payment,color)
{
    this.email=email;
    this.password=password;
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
}
function isValid(user){
    let validation = true;

    if(user.email==""){
        $("#txtEmail").addClass("error");
        $("#notifications").append("Please add an Email.").addClass("error");
        validation=false;
    }
    if(user.password==""){
        $("#txtPassword").addClass("error");
        $("#notifications").append("Please add a Password.").addClass("error");
        validation=false;
    }
    if(user.firstname==""){
        $("#txtFirstName").addClass("error");
        $("#notifications").append("Please add a First Name.").addClass("error");
        validation=false;
    }
    if(user.password==""){
        $("#txtLastName").addClass("error");
        $("#notifications").append("Please add a Last Name.").addClass("error");
        validation=false;
    }
    if(user.password==""){
        $("#txtAge").addClass("error");
        $("#notifications").append("Please add a Age.").addClass("error");
        validation=false;
    }
    if(user.password==""){
        $("#txtGender").addClass("error");
        $("#notifications").append("Please add a Gender.").addClass("error");
        validation=false;
    }
    if(user.password==""){
        $("#txtPhone").addClass("error");
        $("#notifications").append("Please add a Phone.").addClass("error");
        validation=false;
    }

    return validation;
}

function register(){
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputFirstname = $("#txtFirstName").val();
    let inputLastname = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputGender = $("#txtGender").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#selColor").val();

    let newUser = new User(inputEmail,inputPassword,inputFirstname,inputLastname,inputAge,inputGender,inputPhone,inputPayment,inputColor);
    if(isValid(newUser)){
        saveUser(newUser);
    }
}

function init(){
    //hook events
    $("#btnAdd").click(register);
}

window.onload=init; //run init after HTML is rendered

