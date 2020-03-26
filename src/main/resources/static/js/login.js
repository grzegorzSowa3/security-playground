function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle();
    $('#logreg-forms .form-reset').toggle();
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle();
    $('#logreg-forms .form-signup').toggle();
}

function showErrorPopup(e) {
    e.preventDefault();
    $('#logreg-forms .alert-error').toggle();
}

$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
    $(".close").click(function(){
        $("#myAlert").alert("close");
    });
})