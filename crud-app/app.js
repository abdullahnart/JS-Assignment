let modal = document.querySelector("#addUserModal");
let updatemodal = document.querySelector("#editUserModal");
// let modalH = document.querySelector(".modal");
let addRow = document.querySelector(".table tbody");
let nameVal = document.querySelector("#name");
let emailVal = document.querySelector("#email");
let addressVal = document.querySelector("#address");
let phoneVal = document.querySelector("#phone");
let emptyArr = JSON.parse(localStorage.getItem('userData')) || [];


// let updateModal = document.querySelector("#updateUserModal");
let updateNameVal = document.querySelector("#updateName");
let updateEmailVal = document.querySelector("#updateEmail");
let updateAddressVal = document.querySelector("#updateAddress");
let updatePhoneVal = document.querySelector("#updatePhone");
let currentIndex = null;

showData();
function modalshow(){
modal.style.display = "block";
modal.style.opacity = 1;
}

function modalhide(){
    modal.style.display = "none";
    modal.style.opacity = 0;
    updatemodal.style.display = "none";
    updatemodal.style.opacity = 0;
}

function addData(){
    event.preventDefault();
    if(nameVal.value.trim() === "" || emailVal.value.trim() === "" || addressVal.value.trim() === "" || phoneVal.value.trim() === "" ) {
        alert("Input should not be empty");
    }else{

        let newData = {
            name: nameVal.value,
            email: emailVal.value,
            address: addressVal.value,
            phone: phoneVal.value

        };
        emptyArr.push(newData);
        let store = localStorage.setItem('userData',JSON.stringify(emptyArr));
        // console.log(store);
        showData();
        nameVal.value = "";
        emailVal.value = "";
        addressVal.value = "";
        phoneVal.value = "";
        modalhide();
    }
    
}

function showData(){
        addRow.innerHTML = "";
     //   let getData = JSON.parse(localStorage.getItem('userData'));
        console.log
        for(let i = 0; i< emptyArr.length; i++ ){
            console.log(emptyArr[i]);
            addRow.innerHTML += `
            <td>
            </td>
            <td>${emptyArr[i].name}</td>
            <td>${emptyArr[i].email}</td>
            <td>${emptyArr[i].address}</td>
            <td>${emptyArr[i].phone}</td>
            <td>
                <a onclick="editData(${i});" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a onclick="deleteData(${i});" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
        `
        }
    
}

function deleteData(index){
    emptyArr.splice(index,1);
    localStorage.setItem('userData', JSON.stringify(emptyArr));
    showData();
}



// function updateData(index){
//     updatemodal.style.display = "block";
//     updatemodal.style.opacity = 1;
//     console.log(index);
//     showData();

// }


function updateData(index) {
    event.preventDefault();
    if (updateNameVal.value.trim() === "" || updateEmailVal.value.trim() === "" || updateAddressVal.value.trim() === "" || updatePhoneVal.value.trim() === "") {
        alert("Input should not be empty");
    } else {
        emptyArr[currentIndex] = {
            name: updateNameVal.value,
            email: updateEmailVal.value,
            address: updateAddressVal.value,
            phone: updatePhoneVal.value
        };
        localStorage.setItem('userData', JSON.stringify(emptyArr));
        showData();
        modalhide();
    }
}


function editData(index) {
    updatemodal.style.display = "block";
    updatemodal.style.opacity = 1;
    currentIndex = index;
    updateNameVal.value = emptyArr[index].name;
    updateEmailVal.value = emptyArr[index].email;
    updateAddressVal.value = emptyArr[index].address;
    updatePhoneVal.value = emptyArr[index].phone;

}