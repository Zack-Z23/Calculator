'use strict';

const entite = document.getElementsByClassName('all');
const numScreen = document.getElementById('numberScreen');

let equa
for (let e of entite) {
    e.addEventListener('click', function() {


        if (e.value != "=" && e.value !== "AC") {
            equa = numScreen.innerText += e.value;
        }

        if (e.value == "AC") {
            equa = numScreen.innerText = "";
        }

        if (e.value === "=") {

            equa = numScreen.innerText;

            numScreen.innerText = eval(equa).toFixed(3);

        

        }

    })
}



