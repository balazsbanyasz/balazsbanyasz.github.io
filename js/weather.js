let temperatures = [-11.2, 14.4, 13.0, 17.3, 21.7, 18.2, 28];
let temperatureUperLimits = [0, 15, 20, 25, 50];
let offers = ["Ma forró csokit is árusítunk", "Melegedj át egy teával nálunk", "Ma finom sütivel kínálunk", "Fagyi!!!", "Hűsítsd le magad egy jéghideg limonádéval"];

function weatherWidget() {
    const day = document.querySelector('#days').value;
    const temperatureDiv = document.querySelector('#temperature');
    temperatureDiv.innerHTML = temperatures[day] + ' fok';
    for (let i = 0; i < temperatureUperLimits.length; i++) {
        if (temperatures[day] <= temperatureUperLimits[i]) {
            temperatureDiv.innerHTML += '<br><span>' + offers[i] + '</span>';
            break;
        }
    }
}