function validate() {
    validateName();
    validateEmail();
    validatePhone();
    validateAria();
    validateSubject();
    validateContent();
}

function validateName() {
    const inputName = document.querySelector('.input-name');
    const errName = document.getElementById('errName')
    const regex = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
    const normalizerName = toNonAccentVietnamese(inputName.value)
    if(inputName.value === ''){
        errName.innerText = 'Mục này là bắt buộc';
    }
    else if(!regex.test(normalizerName)){
        errName.innerText = 'Tên Không Hợp Lệ';
    }else {
        errName.innerText = '';
    }
}

function validateEmail() {
    const inputEmail = document.querySelector('.input-email');
    const errEmail = document.getElementById('errEmail')
    const regex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(inputEmail.value === ''){
        errEmail.innerText = 'Mục này là bắt buộc';
    }
    else if(!regex.test(inputEmail.value)){
        errEmail.innerText = 'Địa chỉ e-mail không hợp lệ';
    }else {
        errEmail.innerText = '';
    }
}

function validatePhone() {
    const inputPhone = document.querySelector('.input-phone');
    const errPhone = document.getElementById('errPhone')
    const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if(inputPhone.value === ''){
        errPhone.innerText = 'Mục này là bắt buộc';
    }
    else if(regex.test(inputPhone.value) === false){
        errPhone.innerText = 'Số Điện Thoại Không hợp lệ';
    }else {
        errPhone.innerText = '';
    }
}

function validateContent() {
    const inputContent = document.querySelector('.input-content');
    const errContent = document.getElementById('errContent')
    if(inputContent.value === ''){
        errContent.innerText = 'Mục này không được bỏ trống';
    }else {
        errContent.innerText = '';
    }
}

function validateAria() {
    const selectAria = document.querySelector('.select-aria');
    const errAria = document.getElementById('errAria');
    if(selectAria.value === 'none'){
        errAria.innerText = 'Mục này là bắt buộc';
    }else {
        errAria.innerText = '';
    }
}

function validateSubject() {
    const selectSubject = document.querySelector('.select-subject');
    const errSubject = document.getElementById('errSubject');
    if(selectSubject.value === 'none'){
        errSubject.innerText = 'Mục này là bắt buộc';
    }else {
        errSubject.innerText = '';
    }
}

// This function keeps the casing unchanged for str, then perform the conversion
function toNonAccentVietnamese(str) {
    str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
}

const form = document.getElementById('form-contact');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});
