// 1. változók
const inputPhone = document.querySelector('.form__input-phone');
const buttonSend = document.querySelector('.form__button-send');
const inputName = document.querySelector('.form__input-name');
const buttonName = document.querySelector('.form__button-name');
const onlyNumberInputs = document.querySelectorAll('.input--only-number');

// 2. adatok
// Phone sample (mask): +36-70-524-7854
// Mintaillesztés = RegExp
// \d = egy darab digit azaz szám
// [] = class, egy darab karakter, vagy feltétel: [pkg] p vagy k vagy g
// {min, max} = karakterek száma
// [0-9] = range, egy karaktertől egy másikig az ASCII tablában
const phoneRegexp = /^\+[\d]{2}-[2-7]0-\d{3}-\d{4}$/;

// Name sample: Nagy Örs
// * = akármennyi karakter, lehet 0 is
// + = egy vagy több karakter
// ? = 0 vagy 1 karakter
const nameRegexp = /^[A-Ű][a-űA-Ű\-]{2,9} +[A-Ű][a-ű]{2,9}( +[A-Ű][a-ű])?$/;

// 3. függvények
buttonSend.addEventListener('click', ev => {
    const phoneNumber = inputPhone.value;
    if (phoneRegexp.test(phoneNumber)) {
        alert('A szám jó!');
    } else {
        alert('A helyes formátum: +36-70-524-7854');
    }
});

buttonName.addEventListener('click', () => {
    const name = inputName.value;
    if (nameRegexp.test(name)) {
        alert('A name jó!');
    } else {
        alert('ROSSZ KUTYA!');
    }
});

Array.from(onlyNumberInputs).forEach( input => {
    input.addEventListener('keyup', ev => {
        input.value = input.value.replace(/[^0-9]/g, '');
    });
});

//     phoneNumber.length === 15
//     && phoneNumber[0] === '+' 
//     && typeof parseInt(phoneNumber.slice(1, 3)) === 'number'
//     && phoneNumber[3] === '-' 
//     && typeof parseInt(phoneNumber.slice(4, 6)) === 'number'
//     && phoneNumber[6] === '-' 
//     && typeof parseInt(phoneNumber.slice(7, 10)) === 'number'
//     && phoneNumber[10] === '-' 
//     && typeof parseInt(phoneNumber.slice(11)) === 'number'