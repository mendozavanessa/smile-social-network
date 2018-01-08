$(document).ready(function(){
	var $email = $('#email');
	var $nameInput = $('#nameInput');
	var $checkBox = $('#checkBox');
	var $password = $('#password');
	var $radio_girl = $('#radio_girl');
	var $radio_boy = $('#radio_boy');
	var $doneBtn = $('#done-btn');
	var $CODE_TO_VALIDATE_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var $smile_accounts = JSON.parse(localStorage.getItem('users'));
	var inputs = document.getElementsByClassName('formulario__input');
	
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
      if (this.value.length >= 1) {
        this.nextElementSibling.classList.add('fijar');
      } else {
        this.nextElementSibling.classList.remove('fijar');
      }
    });
  }
	
	function validateName() {
		$smile_accounts[0].name = $nameInput.val();
		return ($nameInput.val().length >= 3);
	};
	
	function validateEmail() {  
		$smile_accounts[0].email = $email.val();
    return ($CODE_TO_VALIDATE_EMAIL.test($email.val()));
  }; 
	
	function validatePassword() {
		$password[0].password = $password.val();
		return ($password.val().length >= 8);
	}
  
	function agreeWithTerms() {
		return ($checkBox.prop("checked"));
	};
	
	function finalValidation(){
	 return validateEmail() && validateName() && validatePassword() && agreeWithTerms() && validateGender();
  };
	
	function enableDisable(){
		if(finalValidation()){
			localStorage.setItem('users', JSON.stringify($smile_accounts));
		  $doneBtn.attr('href', 'done.html');
		}
	};
	
	$email.on('input', validateEmail);
	$nameInput.on('input', validateName);
	$checkBox.on('click', agreeWithTerms);
	$doneBtn.click(enableDisable);

});

