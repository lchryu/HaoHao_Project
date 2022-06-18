$(document).ready(function () {
    //Mật khẩu cũ
    $('#txtOldPassword').focusout(function () {
        var passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if (passwordRegex.test($('#txtOldPassword').val())) {
            $('#oldPasswordError').text('Mật khẩu hợp lệ')
            $('#oldPasswordError').css('color', 'blue')
        }
        else {
            $('#oldPasswordError').text('Mật khẩu không hợp lệ. Độ dài từ 7-12.')
            $('#oldPasswordError').css('color', 'red')
        }
    })
    //Mật khẩu mới
    $('#txtNewPassword').focusout(function () {
        var passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if (passwordRegex.test($('#txtNewPassword').val())) {
            $('#newPasswordError').text('Mật khẩu hợp lệ')
            $('#newPasswordError').css('color', 'blue')
        }
        else {
            $('#newPasswordError').text('Mật khẩu không hợp lệ. Độ dài từ 7-12.')
            $('#newPasswordError').css('color', 'red')
        }
    })
    //Nhập lại mật khẩu mới
    $('#txtPassword').focusout(function () {
        var passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if (passwordRegex.test($('#txtPassword').val()) && $('#txtPassword').val() === $('#txtNewPassword').val()) {
            console.log($('#txtNewPassword').val())
            $('#passwordError').text('Mật khẩu hợp lệ')
            $('#passwordError').css('color', 'blue')
        }
        else {
            $('#passwordError').text('Mật khẩu không hợp lệ')
            $('#passwordError').css('color', 'red')
        }
    })
})