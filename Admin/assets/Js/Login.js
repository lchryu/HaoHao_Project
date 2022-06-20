var users = [
    {
        username: "ChungHoi",
        password: "ChungHoi",
    },
    {
        username: "ThanhThao2k2",
        password: "ThanhThao2k2",
    },
    {
        username: "VanPhu2k2",
        password: "VanPhu2k2",
    },
]


// ---- begin event login ----
var txtUserName = document.getElementById("txtUserID");
var txtPassword = document.getElementById("txtPassword");

var btnLogin = document.getElementById("btnCheck");


btnLogin.onclick = function () {
    let count = 0;
    users.forEach((user) => {
        if (txtUserName.value == user.username && txtPassword.value == user.password) {
            count++;
        }
    })

    if (count == 1) {
        alert("Login success");
        // window.location.assign = "Admin.html";
        // Window.location.assign = "https://lucute2001.github.io/HaoHao_Project/Admin/Admin.html";
        Window.location.open = "https://lucute2001.github.io/HaoHao_Project/Admin/Admin.html";
        // window.open('Admin.html');
    }
    else {
        alert("Login failed");
    }
}
// ---- end event login ----



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



