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


        results.innerHTML = `Utente: <span class="user">${user}</span> Computer: <span class="computer">${computer}</span> `; //output numbers
        let user_el = document.querySelector(".user");
        let computer_el = document.querySelector(".computer");

        // verify who are the winner
        if (user > computer) {
            user_el.classList.add("greater");
            computer_el.classList.add("lower");
            results.innerHTML += `Sta volta hai vinto tu.`;
        } else if (computer > user) {
            user_el.classList.add("lower");
            computer_el.classList.add("greater");
            results.innerHTML += `Sta volta ho vinto io sarà per la prossima...`;
        } else {
            user_el.classList.add("equal");
            computer_el.classList.add("equal");
            results.innerHTML += `Pareggio... ci stà`;
        }
    }

)
