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
        document.querySelectorAll('.text-input')
    ); 
    var loader = document.querySelector('.loader');  
    var loaderBtn = loader.parentNode;
    
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

    loaderBtn.addEventListener('click', function() {
        loaderBtn.classList.remove('input_error'); 
    }); 
          
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
        if (!checkInput(loader)) {
            loaderBtn.classList.add('input_error'); 
            hasError = true;
        }
  
        if (hasError) {
            form.classList.add('form_invalid');
        } else {
            form.classList.add('form_valid');
        }        
    });
}

//вывод названия загруженного файлы
$(document).ready( function() {
    $(".file-upload input[type=file]").change(function() {
         var filename = $(this).val().replace(/.*\\/, "");
         $("#filename").val(filename);
         $("#placeholder").html('Чтобы добавить другое фото, перетащите изображение в это поле или кликните сюда');
    });
});

