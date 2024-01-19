const open =document.querySelector(".open");
const close =document.querySelector('.close');
const nav = document.querySelector(".manu");

open.addEventListener('click',()=>{
    nav.style.display = 'block';
})
close.addEventListener('click',()=>{
    nav.style.display = 'none';
})

function validateForm() {
    var firstName = document.getElementById('first_name').value.trim();
    var lastName = document.getElementById('last_name').value.trim();
    var address = document.getElementById('address').value.trim();
    var email = document.getElementById('email').value.trim();
    var phoneNumber = document.getElementById('phone_number').value.trim();

    // Error fields
    const name_err = document.querySelector('.name-err');
    const address_err = document.querySelector('.address-err');
    const email_err = document.querySelector('.email-err');
    const phone_err = document.querySelector('.phone-err');

    if (firstName === '') {
        name_err.textContent = 'Name field required';
        return false;
    }

    if (lastName === '') {
        name_err.textContent = 'Name field required';
        return false;
    }

    if (address === '') {
        address_err.textContent = 'Address field required';
        return false;
    }

    if (email === '') {
        email_err.textContent = 'Email field required';
        return false;
    }

    if (phoneNumber === '') {
        phone_err.textContent = 'Phone field required';
        return false;
    }

    if (isNaN(phoneNumber)) {
        phone_err.textContent = 'Phone requires a number';
        return false;
    }

    if (phoneNumber.length !== 11) {
        phone_err.textContent = 'Phone must be 11 digits';
        return false;
    }

    // Additional validation can be added here

    // If all validation passes, return true to submit the form
    return true;
}