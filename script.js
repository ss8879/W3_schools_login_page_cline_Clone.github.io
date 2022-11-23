const signupForm = document.querySelector('.main__form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const table = document.getElementById('table');
let count = 1;
const handleAddNewUser = (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const newEntry = `
        <tr>
            <td>${count}.</td>
            <td>${email}</td>
        </tr>
    `
    table.innerHTML += newEntry;
    count++;
    signupForm.reset();
}
signupForm.addEventListener('submit', handleAddNewUser);
let popup=document.getElementById("popup");
function openpopup(){
    popup.classList.add("open-popup");
}
function closepopup(){
    popup.classList.remove("open-popup");
}