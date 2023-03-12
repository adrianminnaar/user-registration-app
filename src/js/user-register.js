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

    //switching between userTabs and registerTab

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
const regForm = document.getElementsByClassName("register")[1];
console.log(regForm)

/* --- Table list reference --- */

    // code here...
const userTable = document.getElementsByClassName("header");
console.log(userTable)


/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

    // code here...
    //empty array
    var users = [ " "," "," "," "," "]

    //switching back to Register Tab when submiting

    document.getElementById("register-submit").addEventListener('click',function submit() {
        userTabs[0].style.display = "block";
        registerTab[0].style.display = "none";
        userTabs[1].style.display = "none";
        registerTab[1].style.display = "block";
    
    })
    
//Creating new users

    function create_users(){
        
    const userFname= document.getElementById("firstname").value;
    const userLname = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
    const userMail = document.getElementById("email").value;
    const passWord = document.getElementById("password").value;
    
    const new_User = ([userFname] + " "+ [userLname] + " " + [username] + " "+ [userMail] + " " + [passWord]);
    new_User = users
    
    
    for (let i = 0; i < users.length; i++) {
        const user_List = document.getElementById("user-list");
        const newusers = users[i];
        const li = create_UserElement("user");
        user_List=append(li);
        console.log(users)
    }

    

};
function create_UserElement(user) {
    
}
 
   

  
  
/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */