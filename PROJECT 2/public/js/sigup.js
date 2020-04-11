$(document).ready(function(){
    const emailInput = $("");
    const passwordInput = $("");

    signUpForm.on("submit", function(event){
        event.preventDefault();

        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()

        };

        if(!userData.email || !userData.password){
            return;
        }

        signUpUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");

        function signUpUser(email, password){
            $.post("/api/signup", {
                email: email,
                password: password

            }).then(function(data){
                window.location.replace("/login");

            })
            .catch(function(err){
                console.log(err);
                
            })
        }


    });


});