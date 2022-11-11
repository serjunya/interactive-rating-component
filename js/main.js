const rateForm = document.forms[0];
rateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const rate = rateForm.elements.grades.value;
    if (rate) {
        document.querySelector('#rateVariable').innerHTML = `You selected ${rate} out of 5`;
        document.querySelector('#card-1').classList.add("animate__animated", "animate__fadeOutUpBig");
    }
    else {
        new Promise((resolve) => {
            const submit = document.querySelector('.submission');
            submit.classList.add("animate__animated", "animate__shakeX");
            function handleAnimationEnd() {
                submit.classList.remove("animate__animated", "animate__shakeX");
                resolve('Animation ended');
            }
            submit.addEventListener('animationend', handleAnimationEnd, {once: true});
        });
    }
});
