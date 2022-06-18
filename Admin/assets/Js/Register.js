$(document).ready(function () {

    $('#txtName').focusout(function () {
        var nameRegex = /^[a-zA-Z\s]+$/;
        if (nameRegex.test($('#txtName').val())) {
            $('#nameError').text('Họ tên hợp lệ.')
            $('#nameError').css('color', 'blue')
        }
        else {
            $('#nameError').text('Họ tên không hợp lệ.')
            $('#nameError').css('color', 'red')
        }
    })

    $('#txtNumbers').focusout(function () {
        var numbersRegex = /^[0-9]{10}$/;
        if (numbersRegex.test($('#txtNumbers').val())) {
            $('#numbersError').text('Số điện thoại hợp lệ.')
            $('#numbersError').css('color', 'blue')
        }
        else {
            $('#numbersError').text('Số điện thoại không hợp lệ. 10 chữ số từ 0-9')
            $('#numbersError').css('color', 'red')
        }
    })

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


function DangKyTk() {
    var name = document.getElementById('txtName').value;
    var userID = document.getElementById('txtUserID').value;
    var password = document.getElementById('txtPassword').value;
    var numbers = document.getElementById('txtNumbers').value;
    var check = true;
    if (name == "") { check = false };
    if (userID.length < 5 || userID.length > 12) { check = false };
    if (password.length < 7 || password.length > 12) { check = false }
    if (numbers.length != 10) { check = false }
    if (check) {
        alert('Đăng ký thành công');
    } else {
        alert('Đăng ký thất bại');
    }
}


function XacNhanQuenMatKhau() {
    var lengthTxtPW = document.getElementById('btnCancel').value.length;
    if (lengthTxtPW == 10) {
        alert(
            "Hệ thống đã gửi mật khẩu mới đến số điện thoại của bạn. Vui lòng kiểm tra tin nhắn để đăng nhập lại.");
    } else {
        alert("Số điện thoại không hợp lệ!\nVui lòng nhập lại.");
    }
}
