
function passGen() {
    const alphaNumeric = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*();{}";
    var password = "";
    for(let i = 0; i < 12; i++) {
        password += alphaNumeric.charAt(Math.floor(Math.random() * alphaNumeric.length));
    }
    return password;
}

function appendToDisplay() {
    const display = document.getElementById('display');
    display.textContent = passGen();
}

