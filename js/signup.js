$(document).ready(function() {
	var $email = $('#email'), $nameInput = $('#nameInput'), $password = $('#password'), $radio_girl = $('#radio_girl'),$checkBox =$('#checkBox') , $radio_boy = $('#radio_boy'), $day_select = $('#day'), $month_select = $('#month'), $year_select = $('#year'), $doneBtn = $('#done-btn'), $CODE_TO_VALIDATE_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, $smile_accounts = JSON.parse(localStorage.getItem('users')), inputs = document.getElementsByClassName('formulario__input'), $user, $email_account, $password_account, $day, $month, $year, $login_redirect =$('#login-redirect'), $gender;

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
      if (this.value.length >= 1) {
        this.nextElementSibling.classList.add('fijar');
      } else {
        this.nextElementSibling.classList.remove('fijar');
      }
    });
  }
	function go_to_login(){
		window.location.replace("../views/login.html");
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
	function agreeWithTerms() {
		return ($checkBox.prop("checked"));
	};

	function finalValidation(){
	 return validateEmail() && validateName() && validatePassword() && agreeWithTerms() && validateGender() && birthday() && birth_month() && birth_year();
  };

	function enableDisable(e){
		if(finalValidation()){
			var config = {
      apiKey: "AIzaSyBFn2oMYmLCbIg6G0p6dLrgQpF7-9pjV8M",
      authDomain: "smile-social-network.firebaseapp.com",
      databaseURL: "https://smile-social-network.firebaseio.com",
      projectId: "smile-social-network",
      storageBucket: "smile-social-network.appspot.com",
      messagingSenderId: "648080052241"
    };
    firebase.initializeApp(config);
			
			//Get elements
		
			
			
				
			
			$smile_accounts.unshift({name:$user, email:$email_account, password: $password_account, day:$day, month:$month, year:$year, gender:$gender});
		  localStorage.setItem('users', JSON.stringify($smile_accounts));
			
			//Get email and pass
				const fire_email = document.getElementById('email').value;
				const fire_pass = document.getElementById('password').value;
				const auth = firebase.auth();
				//Sign in
				const promise = auth.createUserWithEmailAndPassword(fire_email, fire_pass);
		
			
			//Add a realtime listener
			firebase.auth().onAuthStateChanged(firebaseUser => {
				if(firebaseUser) {
					console.log(firebaseUser);
					window.location.replace("../views/redSocialSmile.html");
				} else {
					console.log('not logged in');
				}
			})
			
			;
		}
	}

	$email.on('input', validateEmail);
	$nameInput.on('input', validateName);
	$checkBox.on('click', agreeWithTerms);
	$doneBtn.click(enableDisable);
	$day_select.change(birthday);
	$month_select.change(birth_month);
	$year_select.change(birth_year);
	$login_redirect.click(go_to_login);
});
