// Ha kattintanak a gombon, akkor kiolvassuk az input elem értékét.
// Ezt az értéket megjelnítjük az output elemben.

// 1. Változók (hozzávalók).
const primaryButton = document.querySelector('.btn-primary');
const nameInput = document.querySelector('.form__input--name');
const outputSpan = document.querySelector('.output');

// 2. Függvények (munkafolyamat).

// 3. Események.
primaryButton.addEventListener('click', () => {
    const currentInputValue = nameInput.value;
    outputSpan.innerHTML = currentInputValue;
});
