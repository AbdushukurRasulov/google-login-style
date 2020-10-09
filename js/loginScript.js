function next(page) {

  switch (page) {
    case 1:
      if ($("#email").val().length == 0) {
        $(".email-empty-error").removeClass("hidden")
        $(".label-user-name").addClass("error")
        $(".input-border").addClass("error")
        return;
      }
    
      $(".email-empty-error").addClass("hidden")
      $(".label-user-name").removeClass("error")
      $(".input-border").removeClass("error")
    
      showProgress();
    
      setTimeout(() => {
        $(".email-page").addClass("hidden")
        $(".password-page").removeClass("hidden")
    
        document.getElementsByClassName("email-address-label")[0].innerText = $("#email").val()
        document.getElementById("password").focus();
      }, 500);
      break;
    case 2:
      if ($("#password").val().length == 0) {
        $(".password-empty-error").removeClass("hidden")
        $(".label-user-name").addClass("error")
        $(".input-border").addClass("error")
        return;
      } 
    
      $(".password-empty-error").addClass("hidden")
      $(".label-user-name").removeClass("error")
      $(".input-border").removeClass("error")
    
      showProgress();
    
      setTimeout(()=> {
        $(".email-page").addClass("hidden")
        $(".password-page").addClass("hidden")
        $(".2steps-authentication").removeClass("hidden")
    
        document.getElementsByClassName("email-address-label")[0].innerText = $("#email").val()
        document.getElementById("password").focus();
      }, 500);
      break;
  }
  
}

function showProgress() {
  $(".progress-bar").removeClass("hidden")
  setTimeout(function() {
    $(".progress-bar").addClass("hidden")
  }, 500)
}

function HidePassword() {
  $("#password").attr("type", "password");

  $(".password-hide").addClass("hidden")
  $(".password-show").removeClass("hidden")
  document.getElementById("password").focus();
}

function ShowPassword(e) {
  $("#password").attr("type", "text");

  $(".password-hide").removeClass("hidden")
  $(".password-show").addClass("hidden")
  document.getElementById("password").focus();
}

$( "#email" ).focusout(function() {
  if ($( "#email" ).val().length > 0) {
    $("#email-label").addClass("active")
  } else {
    $("#email-label").removeClass("active")
  }
})

$( "#password" ).focusout(function() {
  if ($( "#password" ).val().length > 0) {
    $("#password-label").addClass("active")
  } else {
    $("#password-label").removeClass("active")
  }
})

$( "#verification-code" ).focusout(function() {
  if ($( "#verification-code" ).val().length > 0) {
    $("#code-label").addClass("active")
  } else {
    $("#code-label").removeClass("active")
  }
})


var emailInput = document.getElementById("email");
emailInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    next(page);
  }
});


var passwordInput = document.getElementById("password");
passwordInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    next(page);
  }
});

