$(document).ready(function(){
    const emailInput = $("#emailInput");
    const passwordInput = $("#passwordInput");
    const firstName = $("#FirstName");
    const LastName = $("#LastName");


    signUpForm.on("submit", function(event){
        event.preventDefault();

        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            first_name: firstName.val().trim(),
            last_name: LastName.val().trim()

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