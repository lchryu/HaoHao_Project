//JS CHO SLIDE VIDEO
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

function slide1() {
    let main_play = document.getElementById('main_play')
    main_play.innerHTML =
    "<div id='main_play'><div class='main-player' style='margin: 0px 170px;'><div class='container'>\r\
    <div class='row'><div class='col video-wrapper'><div class='tv-top justify-content-center'><img src='./Img/Photo/tv_top.png' alt='' style='height: 70px; margin-left: 240px;'></div>\r\
    <div class='video'><img src='Img/Photo/Home_card3.jpg' alt=''></div></div>\r\
	<div class='col'><div class='info-video' style='padding: 130px 0px;'>\r\
    <h3>HAO HAO MUSIC BOX - TRAO NIỀM HỨNG KHỞI,<br>KẾT TRIỆU YÊU THƯƠNG</h3><div class='content-text'>Để lại thông tin để nhận được những phần quà ý nghĩa đến từ Hảo Hảo</div>\r\
    <div class='btn-dangki-thongtin' style='margin-top: 30px;'><a href='#' class='btn-dangki'>ĐĂNG KÍ THÔNG TIN</a></div>\r\
    </div></div></div></div></div>"
}

function slide2() {
    let main_play = document.getElementById('main_play')
    main_play.innerHTML =
    "<div id='main_play'><div class='main-player' style='margin: 0px 170px;'><div class='container'>\r\
    <div class='row'><div class='col video-wrapper'><div class='tv-top justify-content-center'><img src='./Img/Photo/tv_top.png' alt='' style='height: 70px; margin-left: 240px;'></div>\r\
    <div class='video'><img src='Img/Photo/anmihaohao.jpg' alt=''></div></div>\r\
	<div class='col'><div class='info-video' style='padding: 130px 0px;'>\r\
    <h3>THỂ LỆ CHƯƠNG TRÌNH KHUYẾN MÃI: “ĂN MÌ HẢO HẢO VI VU CÙNG SAO</h3><div class='content-text'>Bấm vào “ Xem thêm ” để cùng tìm hiểu chương “ĂN MÌ HẢO HẢO VI VU CÙNG SAO” sắp tới nhé!</div>\r\
    <div class='btn-dangki-thongtin' style='margin-top: 30px;'><a href='#' class='btn-dangki'>Xem thêm</a></div>\r\
    </div></div></div></div></div>"
}

function slide3() {
    let main_play = document.getElementById('main_play')
    main_play.innerHTML =
    "<div id='main_play'><div class='main-player' style='margin: 0px 170px;'><div class='container'>\r\
    <div class='row'><div class='col video-wrapper'><div class='tv-top justify-content-center'><img src='./Img/Photo/tv_top.png' alt='' style='height: 70px; margin-left: 240px;'></div>\r\
    <div class='video'><img src='Img/Photo/Card1_promotion.jpg' alt=''></div></div>\r\
	<div class='col'><div class='info-video' style='padding: 130px 0px;'>\r\
    <h3>CHƯƠNG TRÌNH KHUYẾN MÃI: “TẢI APP HẢO HẢO, QUÉT MÃ NHẬN QUÀ”</h3><div class='content-text'>Bấm vào “xem thêm” để cùng tìm hiểu chương trình khuyến mại CHƯƠNG TRÌNH KHUYẾN MÃI: “TẢI APP HẢO HẢO, QUÉT MÃ NHẬN QUÀ”</div>\r\
    <div class='btn-dangki-thongtin' style='margin-top: 30px;'><a href='#' class='btn-dangki'>Xem thêm</a></div>\r\
    </div></div></div></div></div>"
}

function HH_sa_te(){
	let haohao_play = document.getElementById('haohao_play')
	haohao_play.innerHTML = 
	"<div id='haohao_play'><div class='main-player' style='margin: 0px 170px;'>\r\
    <div class='container'><div class='row'><div class='col'><div class='info-video' style='padding: 30px 0px;'>\r\
    <h3>HẢO HẢO SA TẾ HÀNH TÍM</h3><div class='content-text'>\r\
    Được sản xuất theo đúng tiêu chuẩn, công nghệ Nhật Bản, với sự điều hành, hỗ trợ và giám sát liên tục,tỉ mỉ của chính nguồn nhân lực Nhật Bản cùng đội ngũ nhân sự người Việt được đào tạo bài bản tại\r\
    Acecook chính là “bảo chứng” cho chất lượng của mỗi gói mì Hảo Hảo trước khi được tung ra thị trường.\r\
    Đây cũng chính là tôn chỉ giúp thương hiệu mì Hảo Hảo luôn là sự lựa chọn an toàn, chất lượng và phù\r\
    hợp với người tiêu dùng Việt ngay từ khi mới “ra mắt” thị trường vào năm 2000.\r\
    </div><div class='btn-dangki-thongtin' style='margin-top: 30px;'><a href='#' class='btn-dangki'>Chi tiết</a>\r\
    </div></div></div><div class='col video-wrapper'><div class='img-product'>\r\
    <img src='Img/Photo/Home-hao-hao-sa-te-hanh-tim-acecook.jpg' alt=''>\r\
    </div></div></div></div></div></div>"
}

function HH_suon_heo(){
	let haohao_play = document.getElementById('haohao_play')
	haohao_play.innerHTML = 
	"<div id='haohao_play'><div class='main-player' style='margin: 0px 170px;'>\r\
    <div class='container'><div class='row'><div class='col'><div class='info-video' style='padding: 30px 0px;'>\r\
    <h3>HẢO HẢO SƯỜN HEO TỎI PHI</h3><div class='content-text'>\r\
    Được sản xuất theo đúng tiêu chuẩn, công nghệ Nhật Bản, với sự điều hành, hỗ trợ và giám sát liên tục,tỉ mỉ của chính nguồn nhân lực Nhật Bản cùng đội ngũ nhân sự người Việt được đào tạo bài bản tại\r\
    Acecook chính là “bảo chứng” cho chất lượng của mỗi gói mì Hảo Hảo trước khi được tung ra thị trường.\r\
    Đây cũng chính là tôn chỉ giúp thương hiệu mì Hảo Hảo luôn là sự lựa chọn an toàn, chất lượng và phù\r\
    hợp với người tiêu dùng Việt ngay từ khi mới “ra mắt” thị trường vào năm 2000.\r\
    </div><div class='btn-dangki-thongtin' style='margin-top: 30px;'><a href='#' class='btn-dangki'>Chi tiết</a>\r\
    </div></div></div><div class='col video-wrapper'><div class='img-product'>\r\
    <img src='Img/Photo/Home-hao-hao-suon-heo-toi-phi-acecook.jpg' alt=''>\r\
    </div></div></div></div></div></div>"
}

function HH_chua_cay(){
	let haohao_play = document.getElementById('haohao_play')
	haohao_play.innerHTML = 
	"<div id='haohao_play'><div class='main-player' style='margin: 0px 170px;'>\r\
    <div class='container'><div class='row'><div class='col'><div class='info-video' style='padding: 30px 0px;'>\r\
    <h3>HẢO HẢO TÔM CHUA CAY</h3><div class='content-text'>\r\
    Được sản xuất theo đúng tiêu chuẩn, công nghệ Nhật Bản, với sự điều hành, hỗ trợ và giám sát liên tục,tỉ mỉ của chính nguồn nhân lực Nhật Bản cùng đội ngũ nhân sự người Việt được đào tạo bài bản tại\r\
    Acecook chính là “bảo chứng” cho chất lượng của mỗi gói mì Hảo Hảo trước khi được tung ra thị trường.\r\
    Đây cũng chính là tôn chỉ giúp thương hiệu mì Hảo Hảo luôn là sự lựa chọn an toàn, chất lượng và phù\r\
    hợp với người tiêu dùng Việt ngay từ khi mới “ra mắt” thị trường vào năm 2000.\r\
    </div><div class='btn-dangki-thongtin' style='margin-top: 30px;'><a href='#' class='btn-dangki'>Chi tiết</a>\r\
    </div></div></div><div class='col video-wrapper'><div class='img-product'>\r\
    <img src='Img/Photo/Home-hao-hao-tom-chua-cay-acecook.jpg' alt=''>\r\
    </div></div></div></div></div></div>"

}
function HH_mi_xao(){
	let haohao_play = document.getElementById('haohao_play')
	haohao_play.innerHTML = 
	"<div id='haohao_play'><div class='main-player' style='margin: 0px 170px;'>\r\
    <div class='container'><div class='row'><div class='col'><div class='info-video' style='padding: 30px 0px;'>\r\
    <h3>HƯƠNG VỊ TÔM HÀNH</h3><div class='content-text'>\r\
	Cùng Hảo Hảo Mì Xào trải nghiệm ẩm thực mì ăn liền mới lạ & độc đáo ngay tại nhà với cách ăn mì mới dạng xào. Sản phẩm với sợi mì tròn dai, hòa quyện vào gia vị thơm ngon cho sợi mì trơn bóng thấm vị, hấp dẫn như món mì xào ngoài hàng quán.\r\
    </div><div class='btn-dangki-thongtin' style='margin-top: 30px;'><a href='#' class='btn-dangki'>Chi tiết</a>\r\
    </div></div></div><div class='col video-wrapper'><div class='img-product'>\r\
    <img src='Img/Photo/Home-hao-hao-mi-xao-tom-hanh-acecook.jpg' alt=''>\r\
    </div></div></div></div></div></div>"
}

function HH_mi_chay(){
	let haohao_play = document.getElementById('haohao_play')
	haohao_play.innerHTML = 
	"<div id='haohao_play'><div class='main-player' style='margin: 0px 170px;'>\r\
    <div class='container'><div class='row'><div class='col'><div class='info-video' style='padding: 30px 0px;'>\r\
    <h3>HẢO HẢO CHAY HƯƠNG VỊ RAU NẤM</h3><div class='content-text'>\r\
	Xu hướng ăn chay hiện nay đang phổ biến trên toàn thế giới. Theo các nghiên cứu khoa học, ăn chay giúp tốt cho sức khỏe, loại bỏ việc tiếp thu độc tố vào cơ thể và góp phần tiêu thụ các loại thực phẩm có lợi. Để đáp ứng nhu cầu ăn chay, Hảo Hảo giới thiệu sản phẩm mới là Hảo Hảo mì chay nhằm giúp người tiêu dùng thưởng thức món chay một cách nhanh chóng và cung cấp dinh dưỡng cho cuộc sống hàng ngày.\r\
    </div><div class='btn-dangki-thongtin' style='margin-top: 30px;'><a href='#' class='btn-dangki'>Chi tiết</a>\r\
    </div></div></div><div class='col video-wrapper'><div class='img-product'>\r\
    <img src='Img/Photo/hao-hao-mi-chay-huong-rau-nam-acecook.jpg' alt=''>\r\
    </div></div></div></div></div></div>"
}

// form đăng ký thông tin
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', () => {
        modal.classList.add('open');
    });
}


modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
});


// ấn ra ngoài container thì đóng modal (*)
modal.addEventListener('click', () => {
    modal.classList.remove('open');
})

// ngăn chặn nổi bọt của bước (*)
modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
})






function RegisterMusicBox(){
    alert("Thông tin của bạn đã được ghi lại!")
}



