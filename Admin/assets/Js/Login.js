var users = [
    {
        username: "khang",
        password: "1234567",
    },
    {
        username: "nhung",
        password: "abcdegf",
    },
    {
        username: "phunguyen",
        password: "123456789",
    },
]


$(document).ready(function () {
    $('#txtUserID').focusout(function () {
        var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if (userIDRegex.test($('#txtUserID').val())) {
            $('#userIDError').text('Tên tài khoản hợp lệ')
            $('#userIDError').css('color', 'blue')
        }
        else {
            $('#userIDError').text('Tên tài khoản không hợp lệ. Độ dài từ 5-12')
            $('#userIDError').css('color', 'red')
        }
    })
    $('#txtPassword').focusout(function () {
        var passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if (passwordRegex.test($('#txtPassword').val())) {
            $('#passwordError').text('Mật khẩu hợp lệ')
            $('#passwordError').css('color', 'blue')
        }
        else {
            $('#passwordError').text('Mật khẩu không hợp lệ. Độ dài từ 7-12.')
            $('#passwordError').css('color', 'red')
        }
    })
})



