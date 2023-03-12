/* ----------------------------------------------------
    Setup
---------------------------------------------------- */

/* --- Tab References --- */

    // Get reference to all elements in register tab
    const registerTab = document.getElementsByClassName("register");
    console.log(registerTab);
    const registerTab1 = registerTab[1]
    const registerTab2 = registerTab[2]

    // Get reference to all elements in userList tab
    const userTabs = document.getElementsByClassName("users");
    console.log(userTabs);
    const userTabs1 = userTabs[0]
    const userTabs2 = userTabs[1]
document.getElementById("register-tab-button").addEventListener('click',function() {
    userTabs[0].style.display = "block";
    registerTab[0].style.display = "none";
    userTabs[1].style.display = "block";
    registerTab[1].style.display = "none";

})
document.getElementById("users-tab-button").addEventListener('click',function() {
    userTabs[0].style.display = "none";
    registerTab[0].style.display = "block";
    userTabs[1].style.display = "none";
    registerTab[1].style.display = "block";

})

/* --- Nav references --- */

    // code here...
const navReg = document.getElementsByClassName("register");
console.log(navReg)

const navUsers = document.getElementsByClassName("users");
console.log(navUsers)

/* --- Form field references --- */

    // code here...
const formFields = document.getElementsByClassName("register");
console.log(formFields)

/* --- Table list reference --- */

    // code here...
const userTable = document.getElementsByClassName("header");
console.log(userTable)


/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

    // code here...
const userFname= document.getElementById("firstname").value;
const userLname = document.getElementById("lastname").value;
const username = document.getElementById("username").value;
const userMail = document.getElementById("email").value;
const passWord = document.getElementById("password").value;



/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */