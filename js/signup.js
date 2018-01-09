$(document).ready(function() {
	var $email = $('#email'), $nameInput = $('#nameInput'), /*$checkBox = $('#checkBox'),*/ $password = $('#password'), $radio_girl = $('#radio_girl'), $radio_boy = $('#radio_boy'), $day_select = $('#day'), $month_select = $('#month'), $year_select = $('#year'), $doneBtn = $('#done-btn'), $CODE_TO_VALIDATE_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, $smile_accounts = JSON.parse(localStorage.getItem('users')), inputs = document.getElementsByClassName('formulario__input'), $user, $email_account, $password_account, $day, $month, $year, $gender;

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
		$user = $nameInput.val();
		return ($nameInput.val().length >= 3);
	};

	function validateEmail() {
		$email_account = $email.val();
    return ($CODE_TO_VALIDATE_EMAIL.test($email.val()));
  };

	function validatePassword() {
		$password_account = $password.val();
		return ($password.val().length >= 8);
	}

	function validateGender() {
		if($radio_boy.prop("checked")){
			$gender = 'boy';
		} else if($radio_girl.prop("checked")) {
			$gender = 'girl';
		} else {
			$gender = '';
		}
		return ($radio_boy.prop("checked")) || ($radio_girl.prop("checked"));
	}

	function agreeWithTerms() {
		return ($checkBox.prop("checked"));
	};

	function birthday() {
		$day = $day_select.val();
		return ($day_select.val().length > 0);
	}

	function birth_month() {
		$month = $month_select.val();
		return ($month_select.val().length > 0);
	}

	function birth_year() {
		$year = $year_select.val();
		return ($year_select.val().length > 0);
	}

	function finalValidation(){
	 return validateEmail() && validateName() && validatePassword() && agreeWithTerms() && validateGender() && birthday() && birth_month() && birth_year();
  };

	function enableDisable(){
		if(finalValidation()){
			$smile_accounts.unshift({name:$user, email:$email_account, password: $password_account, day:$day, month:$month, year:$year, gender:$gender});
		  localStorage.setItem('users', JSON.stringify($smile_accounts));
		  $doneBtn.attr('href', 'principalView.html');
		}
	}

	$email.on('input', validateEmail);
	$nameInput.on('input', validateName);
	$checkBox.on('click', agreeWithTerms);
	$doneBtn.click(enableDisable);
	$day_select.change(birthday);
	$month_select.change(birth_month);
	$year_select.change(birth_year);
});
