//настройка формы
'use strict';

validateForm();
  
function checkInput(input) {  
    var value = input.value;
    if (input.dataset.hasOwnProperty('required') && !value) {
     return false;
    }
    return true;
}
  
function validateForm() {
    var form = document.getElementById('add-hero');
    var inputs = Array.from(
        document.querySelectorAll('#add-hero' + ' input')
    ); 

    form.addEventListener('focus', function (event) {
        var target = event.target;
        if (target.tagName === 'INPUT') {
            target.classList.remove('input_error');
        }
    }, true);

    form.addEventListener('blur', function (event) {
        var target = event.target;
        if (target.tagName === 'INPUT') {
            if (!checkInput(target)) {
                target.classList.add('input_error');
            }
        }
    }, true);
     
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.classList.remove('form_valid');
        form.classList.remove('form_invalid');
  
        var hasError = false;
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
  
            if (!checkInput(input)) {
                input.classList.add('input_error');
                hasError = true;
            }
        }
  
        if (hasError) {
            form.classList.add('form_invalid');
        } else {
            form.classList.add('form_valid');
        }
    });
}