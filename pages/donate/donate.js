function removeActive() {
    const btnActive = document.querySelector('.digit-scale .active');
    if (btnActive) {
        btnActive.classList.remove('active');
    }
}

function toogleActiveBtn(e) {
    removeActive();
    const currentBtn = e.currentTarget;
    const parent = currentBtn.parentNode;
    parent.classList.add('active');
    const amountValue = parent.querySelector('.digit span:last-child').innerText;
    amountInput.value = amountValue;
}

function handleAmountBlur() {
    removeActive();
    for (let btn of btnsAmount) {
        const parent = btn.parentNode;
        const amountValue = parent.querySelector('.digit span:last-child').innerText;
        if (amountValue === amountInput.value) {
            parent.classList.add('active');
            break;
        }
    }
}

function checkAmount(e) {
    if (e.key === 'Enter') {
        handleAmountBlur();
    }
}

const amountInput = document.querySelector('.amount');
const btnsAmount = document.querySelectorAll('.digit-scale li .btn-circle');

for (let btn of btnsAmount) {
    btn.addEventListener('click', toogleActiveBtn);
}

amountInput.addEventListener('blur', handleAmountBlur);
amountInput.addEventListener('keypress', checkAmount);

