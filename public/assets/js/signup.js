$(document).ready(function () {
    const email = $("#email");
    const password = $("#password");
    const firstName = $("#FirstName");
    const lastName = $("#lastName");
    const signUpForm = $("#signUpForm");


    signUpForm.on("submit", function (event) {
        event.preventDefault();


        const userData = {
            email: email.val().trim(),
            password: password.val().trim(),
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim()

        };

        $.post("/api/signup", userData
           ).then(function (data) {
            window.location.replace("/");

        })
            .catch(function (err) {
                console.log(err);

            });






    });


});