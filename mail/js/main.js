//array e-mail
let emails = ["ciao@gmail.com", "mail@gmail.com", "pino@gmail.com", "paperino@gmail.com", "ciaone@gmail.com"];
let user_email = prompt("Inserisci la tua email: ");
let approved = false;

for (let i = 0; i < 5; i++) {
    if (user_email == emails[i]) {
        console.log("Utente approvato, Benvenuto/a");
        approved = true;
        break;
    }
}

if (!approved) {
    console.log("Utente non approvato.");
}