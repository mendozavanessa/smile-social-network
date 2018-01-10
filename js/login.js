$(document).ready(function() {
	var $user_input = $('#user_log');
	var $password_input = $('#password_log');
	var $enter = $('#iniciarSesion');
	
	function start(e){
		if($user_input.val().length !== 0 && $password_input.val().length !== 0){
			e.preventDefault();
			
			
		var login_email = $user_input.val();
		var login_password = $password_input.val();
		
		firebase.auth().signInWithEmailAndPassword(login_email, login_password).catch(function(error){
			console.log('Esta mal aun');
		});
	
			
			/*window.location.replace("../views/redSocialSmile.html");*/
		} else {
			console.log('aun falta');
		}
	}
	

	
	$enter.click(start);
  
  
});
