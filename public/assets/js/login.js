$(document).ready(function () {
    const loginForm = $(".loginForm");
    const emailInput = $("#userEmail");
    const passwordInput = $("#userPassword");

    loginForm.on("submit", function (event) {
        event.preventDefault();


        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        $.post("/api/login", userData
        ).then(function () {
            window.location.replace("/");
        })
            .catch(function (err) {
                console.log(err);

            });

    });


});