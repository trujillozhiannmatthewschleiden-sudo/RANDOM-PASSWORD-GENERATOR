//Random Password Generator
function generatePassword() {

    var length = document.getElementById("length").value;

    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var password = "";

    for (var i = 0; i < length; i++) {

        var randomNumber = Math.floor(Math.random() * characters.length);

        password += characters[randomNumber];
    }

    document.getElementById("result").textContent = password;

}
