//array e-mail
const emails = ["ciao@gmail.com", "mail@gmail.com", "pino@gmail.com", "paperino@gmail.com", "ciaone@gmail.com"];
let user_email = prompt("Inserisci la tua email: ");
let approved = false;

//approvation check, if is approved user can enter
for (let i = 0; i < 5; i++) {
    if (user_email == emails[i]) {
        console.log("Utente approvato, Benvenuto/a");
        approved = true;
        break;
    }
}

//if is not approved user can't enter
if (!approved) {
    console.log("Utente non approvato.");
}