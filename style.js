var addBtn = document.querySelector("#add-btn");
var  modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close-icon");
addBtn.onclick= function(){
    modal.classList.add("active");
}
closeBtn.addEventListener("click",()=>{
    modal.classList.remove("active");
})

// start all global variable
var userData = [];
var fname= document.querySelector("#firstname");
var lname = document.querySelector("#lastname");
var streetEl = document.getElementById("street");
var addressEl = document.querySelector("#address");
var cityEl = document.querySelector("#city");
var stateEl = document.querySelector("#state");
var emailEl = document.querySelector("#email");
var phoneEl = document.getElementById("#phone")
var submitBtn = document.querySelector("#submit-btn");
var submitForm = document.querySelector("#submitform");

// end all global variable

submitBtn.onclick = function(e){
    e.preventDefault();
    registrationData();
    getDataFromLocal();
    submitForm.reset('');
    closeBtn.click();
}

if(localStorage.getItem("userData") != null){
    userData = JSON.parse(localStorage.getItem("userData"));
}
function registrationData(){
    userData.push({
        firstname : fname.value,
        lastname : lname.value,
        street : streetEl.value,
        address : addressEl.value,
        city: cityEl.value,
        state : stateEl.value,
        email : emailEl.value,
        phone : phoneEl.value
    });
    var userString = JSON.stringify(userData);
    localStorage.setItem("userData",userString);
}

var tableData = document.querySelector("#table-data");
const getDataFromLocal = () => {
    tableData.innerHTML = "";
    userData.forEach((data,index)=>{
        tableData.innerHTML += `
             <tr index='${index}'>
                <td>${data.name}</td>
                <td>Sharma</td>
                <td>Hno 1</td>
                <td>Pune</td>
                <td>Maharashtra</td>
                <td>sam@gmail.com</td>
                <td>457888</td>
                <td>
                 <button><i class="fa-solid fa-circle-xmark"></i></button>
                 <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
                </td> 
             </tr>
        `;
    })
}

