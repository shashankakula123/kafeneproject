let apidata = []

let selectedData = []

url = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login';




$(document).ready(function() {
    initializingToLocal();

    $('#loginForm').submit((e) => {
        e.preventDefault()
        let userName = $('#userName').val()
        let password = $('#password').val()
        if (userName === password) {
            $.ajax({
                type: "POST",
                url: url,
                data: {
                    userName: userName,
                    password: password
                },
                success: (success) => {
                    settingLocalStrg('login', true)
                    alert('You are Successfully LoggedIn....');
                    window.location.href = '/order.html'
                }
            });
        } else {
            alert('Incorrect Username and Password... Please try Again...')
        }
    })

});
