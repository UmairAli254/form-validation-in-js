console.log("Form Validation via Regular Expressions!");
 
//Invalid's and alert's IDs
const invalidName = document.getElementById("invalidName");
const invalidPhone = document.getElementById("invalidPhone");
const invalidEmail = document.getElementById("invalidEmail");
const alert = document.getElementById("alert");
 
//All the Input Field IDs
const selectState = document.getElementById("selectState");
const selectHotel = document.getElementById("selectHotel");
const userName = document.getElementById("userName");
const contactNumber = document.getElementById("contactNumber");
const emailAddress = document.getElementById("emailAddress");
const additionalMessage = document.getElementById("additionalMessage");
 
 
 
// userName Validation
userName.addEventListener("input", () => {
 
    const regEx = /^([A-Za-z_])([A-Za-z_ ]){0,50}$/;
    if (regEx.test(userName.value)) {
        invalidName.innerHTML = `<span class="text-success"><strong> Looks good </  strong></span>`;
    }
    else {
        invalidName.innerHTML = `<span class="text-danger"><strong> Invalid Name </strong> Name must contain Alphabets or _  </span>`;
    }
})
 
// Contact Number Validation
contactNumber.addEventListener("input", () => {
 
    const regEx = /^03([0-9]){9}$/;
    if (regEx.test(contactNumber.value)) {
        invalidPhone.innerHTML = `<span class="text-success"><strong> Looks good </  strong></span>`;
    }
    else {
        invalidPhone.innerHTML = `<span class="text-danger"><strong> Invalid Number </strong></span>`;
    }
})
 
// Email Validation
emailAddress.addEventListener("input", () => {
 
    const regEx = /^([A-Za-z0-9_.-])+@([A-Za-z0-9_.-])+\.([A-Za-z]){2,}/;
    if (regEx.test(emailAddress.value)) {
        invalidEmail.innerHTML = `<span class="text-success"><strong> Looks good </  strong></span>`;
    }
    else {
        invalidEmail.innerHTML = `<span class="text-danger"><strong> Invalid Email </strong></span>`;
    }
});
 
 
 
//When we will submit the form by clicking the submit button
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
 
    if (selectState.value == "" || selectHotel.value == "" || userName.value == null || contactNumber.value == "" || emailAddress.value == "") {
 
        alert.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert"> 
        <strong>Invalid!</strong> Please fill the required fields or put valid data.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>`;
 
    } else {
 
        alert.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert"> 
        <strong>Success!</strong> Your hotel booking request has been submitted.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>`;
    }
 
 })
 
