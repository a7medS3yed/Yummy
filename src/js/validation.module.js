


export function validationInput(element) {
    let regex = {
        nameInp: /^[A-Za-z]+$/,
        emailInp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phoneInp: /^\d{10}$/,
        ageInp: /^(?:1[01][0-9]|120|[1-9][0-9]?)$/,
        passInp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    };

    if (regex[element.id].test(element.value)) {
        
        if (element.nextElementSibling.classList.contains('d-block')) {
            element.nextElementSibling.classList.replace('d-block', 'd-none');
        }
    } else {
        if (element.nextElementSibling.classList.contains('d-none')) {
            element.nextElementSibling.classList.replace('d-none', 'd-block');
        }
    }
}


export function clearValidation(){
    for(var i = 0;i<inputs.length;i++){
        inputs[i].classList.remove('alert-danger');
    }
}