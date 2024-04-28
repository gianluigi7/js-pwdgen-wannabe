'use strict'

const firstName = prompt('inserisci il tuo nome');

const lastName = prompt('inserisci il tuo cognome');

const favouriteColor = prompt('inserisci il tuo colore preferito');

const number = '21';

const myPassword = firstName + lastName + favouriteColor + number;

const htmlElement = document.getElementById('password');
htmlElement.innerHTML = myPassword;