const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');
const buttonColor = document.getElementById('changeBackground')
const changeBody = document.getElementById('profile')
const toggleDetails = document.getElementById('toggleDetails')
const hiddenClass = document.getElementById('details')

buttonname.addEventListener("click", function(){
    studentname.textContent = "Maria Santos";
}

);
buttonColor.addEventListener("click", () => {
    if (changeBody.style.backgroundColor == "rgb(207, 247, 240)") {
        changeBody.style.backgroundColor = "rgb(255, 255, 255)";
    } 
    else {
        changeBody.style.backgroundColor = "rgb(207, 247, 240)";
    }
});

toggleDetails.addEventListener("click",() => {
    hiddenClass.classList.toggle("hidden");
});
