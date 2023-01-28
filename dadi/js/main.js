//possible numbers
const numbers = [1, 2, 3, 4, 5, 6];
let user, computer;
let spear = document.querySelector(".spear");
let results = document.querySelector(".results");

//if user click the button
spear.addEventListener("click",
    function () {
        user = Math.floor((Math.random() * 6) + 1); //rand number user on dice
        computer = Math.floor((Math.random() * 6) + 1); // rand number computer on dice

        results.innerHTML = `Utente: ${user} Computer: ${computer}`; //output numbers

        // verify who are the winner
        if (user > computer) {
            results.innerHTML += `Sta volta hai vinto tu.`;
        } else if (computer > user) {
            results.innerHTML += `Sta volta ho vinto io sarà per la prossima...`;
        } else {
            results.innerHTML += `Pareggio... ci stà`;
        }
    }

)
