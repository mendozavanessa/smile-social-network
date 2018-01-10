$(document).ready(function() {
	var $user_input = $('#user_log'), $password_input = $('#password_log'), $enter = $('#iniciarSesion'), $smile_accounts = JSON.parse(localStorage.getItem('users')), $index_number;
	console.log($smile_accounts);
	
	function userNameValidation(e){
		for(var i = 0; i<$smile_accounts.length;i++){
			if ($user_input.val() === $smile_accounts[i].name){
				$index_number =i;
				return i;
			}
		}
	}
	
	function passwordValidation(){
		for(var i = 0; i<$smile_accounts.length;i++){
			if($password_input.val() === $smile_accounts[i].password){
				return i;
			}
		}
	}
	
	function finalValidation(){
		return userNameValidation() === passwordValidation();
	}
	
	function enableButton(e){
		if(finalValidation()){
			e.preventDefault();
			localStorage.indexNumber=$index_number;
			window.location.replace("../views/redSocialSmile.html");
		}
	}

	$enter.click(enableButton);
  $user_input.on('input', userNameValidation);
	$password_input.on('input', passwordValidation);
  
});