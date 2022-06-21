//click đổi tab
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");
tabLinks.forEach(function (el) {
	el.addEventListener("click", openTabs);
});
function openTabs(el) {
	var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
	var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic
	tabContent.forEach(function (el) {
		el.classList.remove("active");
	}); //lặp qua các tab content để remove class active
	tabLinks.forEach(function (el) {
		el.classList.remove("active");
	}); //lặp qua các tab links để remove class active
	document.querySelector("#" + electronic).classList.add("active");
	// trả về phần tử đầu tiên có id="" được add class active
	btn.classList.add("active");
	// các button mà chúng ta click vào sẽ được add class active
}





//  tab danh sách sản phẩm
var data = [
	{
		Id: 1,
		Name: 'Hảo hảo tôm chua cay',
		Images: './assets/img/hao-hao-tom-chua-cay-acecook.jpg',
		Numbers: '1000',
		Price: '3500'
	},
	{
		Id: 2,
		Name: 'Hảo hảo sa tế hành tím',
		Images: './assets/img/hao-hao-sa-te-hanh-tim-acecook.jpg',
		Numbers: '2000',
		Price: '3500'
	},
	{
		Id: 3,
		Name: 'Hảo hảo sườn heo tỏi phi',
		Images: './assets/img/hao-hao-suon-heo-toi-phi-acecook.jpg',
		Numbers: '3000',
		Price: '3500'
	},
	{
		Id: 4,
		Name: 'Hảo hảo mì xào tôm hành',
		Images: './assets/img/hao-hao-mi-xao-tom-hanh-acecook.jpg',
		Numbers: '4000',
		Price: '3500'
	}
]


let table = ''

// begin
render()

// end


let srcImg = '';


// xử lý ảnh cho thẻ input[type=file] và lấy ra đường dẫn ảnh
var upload = document.querySelector('#images');
upload.addEventListener('change', function (e) {
	// console.log(typeof URL.createObjectURL(upload.files[0]))
	// console.log('đây là link ảnh', URL.createObjectURL(upload.files[0]));
	srcImg = (URL.createObjectURL(upload.files[0])).toString();
	// srcImga = URL.createObjectURL(e.target.files[0]);
})



function add() {
	var itemHeaderPost = document.getElementById('id').value
	var itemNamePost = document.getElementById('name').value
	// var itemImgPost = document.getElementById('images').value
	var itemDescPost = document.getElementById('numbers').value
	var itemPrice = document.getElementById('price').value



	var item = {
		Id: itemHeaderPost,
		Name: itemNamePost,
		// Images: itemImgPost,
		Images: srcImg,
		Numbers: itemDescPost,
		Price: itemPrice
	}
	let index = data.findIndex((c) => c.Id == item.Id)
	if (index >= 0) {
		data.splice(index, 1, item)
	}
	else {
		data.push(item)
	}
	render()
	clear()
}


//In thông tin sản phẩm
function render() {

	table =
		`<tr>
			<th scope="col">Mã sản phẩm</th>
			<th scope="col">Tên sản phẩm</th>
			<th scope="col">Ảnh sản phẩm</th>
			<th scope="col">Số lượng</th>
			<th scope="col">Giá sản phẩm</th>
			<th scope="col">Sửa/Xóa</th>
		</tr>`



	for (let i = 0; i < data.length; i++) {
		table +=
			`<tr>
				<th scope="col">${data[i].Id}</th>
				<th scope="col">${data[i].Name}</th>
				<th scope="col"><img style="height: 50px;" src=${data[i].Images}></th>
				<th scope="col">${data[i].Numbers}</th>
				<th scope="col">${data[i].Price}</th>
				<th scope="col">
					<button class="btn btn-warning" onclick="editItem(${data[i].Id})">Sửa</button>
					<button class="btn btn-danger" onclick="deleteItem(${data[i].Id})">Xóa</button>
				</th>
			</tr>`
	}
	document.getElementById('render').innerHTML = table
}
function clear() {
	var itemHeaderPost = document.getElementById('id').value = ""
	var itemNamePost = document.getElementById('name').value = ""
	var itemImgPost = document.getElementById('images').value = ""
	var itemDescPost = document.getElementById('numbers').value = ""
	var itemPrice = document.getElementById('price').value = ""
}
function deleteItem(x) {
	for (let i = 0; i < data.length; i++) {
		if (data[i].Id == x) {
			data.splice(i, 1)
			render()
		}
	}
}
function editItem(x) {
	for (let i = 0; i < data.length; i++) {
		if (data[i].Id == x) {
			document.getElementById('id').value = data[i].Id
			document.getElementById('name').value = data[i].Name
			// document.getElementById('images').value = data[i].Images
			srcImg = data[i].Images
			document.getElementById('numbers').value = data[i].Numbers
			document.getElementById('price').value = data[i].Price
		}
	}
}



//Biểu đồ doanh số
Highcharts.chart('chart1', {
	title: {
		text: 'Doanh thu',
	},
	xAxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
			'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	},
	yAxis: {
		title: {
			text: 'triệu VND'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	tooltip: {
		valueSuffix: '.000.000 VND'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle',
		borderWidth: 0
	},
	series: [{
		name: 'Doanh thu 2021',
		data: [100, 91, 80, 98, 102, 110, 99, 105, 101, 89, 115, 125]
	},
	{
		name: 'Doanh thu 2022',
		data: [110, 89, 91, 60, 70, 120, 85]
	}]
});
//tab tài khoản
var accounts = [
	{
		Index: 1,
		Id: 'ChungHoi',
		Name: 'Lương Chung Hội',
		Password: 'ChungHoi',
		Numbers: 'lch.ryu2001@gmail.com'
	},
	{
		Index: 2,
		Id: 'ThanhThao2k2',
		Name: 'Trần Thanh Thảo',
		Password: 'ThanhThao2k2',
		Numbers: 'ThanhThao2k2@gmail.com'
	},
	{
		Index: 3,
		Id: 'VanPhu2k2',
		Name: 'Bùi Văn Phú',
		Password: 'VanPhu2k2',
		Numbers: 'VanPhu2k2@gmail.com'
	}
]

var accIndex = document.getElementById('indexAccount').value = accounts.length + 1

// Load những tài khoản mặc định vào table
renderAccount()

// sự kiện khi ấn nút thêm tài khoản
function addAccount() {
	var accIndex = document.getElementById('indexAccount').value
	var accId = document.getElementById('idAccount').value
	var accName = document.getElementById('nameAccount').value
	var accNumbers = document.getElementById('numbersAccount').value
	var accPassword = document.getElementById('passwordAccount').value
	var account = {
		Index: accIndex,
		Id: accId,
		Name: accName,
		Numbers: accNumbers,
		Password: accPassword
	}
	let index = accounts.findIndex((c) => {
		return c.Index == account.Index;
	})
	if (index >= 0) {
		accounts.splice(index, 1, account)
	}
	else {
		accounts.push(account)
	}
	renderAccount()
	clearAccount()
}


//In thông tin sản phẩm
function renderAccount() {
	table =
		`<tr>
			<th scope="col">STT</th>
			<th scope="col">Họ tên</th>
			<th scope="col">Tên tài khoản</th>
			<th scope="col">Mật khẩu</th>
			<th scope="col">Số điện thoại/email</th>
			<th scope="col">Sửa/Xóa</th>
		</tr>`
	for (let i = 0; i < accounts.length; i++) {
		table +=
			`<tr>
			<th scope="col">${accounts[i].Index}</th>
			<th scope="col">${accounts[i].Name}</th>
			<th scope="col">${accounts[i].Id}</th>
			<th scope="col">${accounts[i].Password}</th>
			<th scope="col">${accounts[i].Numbers}</th>
			<th scope="col">
				<button class="btn btn-warning" onclick="editAccount(${accounts[i].Index})">Sửa</button>
				<button class="btn btn-danger" onclick="deleteAccount(${accounts[i].Index})">Xóa</button>
			</th>
		</tr>`
	}
	document.getElementById('renderAccount').innerHTML = table
}
function clearAccount() {
	let newIndex = accounts.length + 1;
	var accId = document.getElementById('idAccount').value = "";
	var accName = document.getElementById('nameAccount').value = ""
	var accNumbers = document.getElementById('numbersAccount').value = ""
	var accPassword = document.getElementById('passwordAccount').value = ""
	var accIndex = document.getElementById('indexAccount').value = newIndex;
}
function deleteAccount(x) {
	for (let i = 0; i < accounts.length; i++) {
		if (accounts[i].Index == x) {
			accounts.splice(i, 1)
			renderAccount()
		}
	}
}
function editAccount(x) {
	for (let i = 0; i < accounts.length; i++) {
		if (accounts[i].Index == x) {
			document.getElementById('idAccount').value = accounts[i].Id
			document.getElementById('nameAccount').value = accounts[i].Name
			document.getElementById('numbersAccount').value = accounts[i].Numbers
			document.getElementById('passwordAccount').value = accounts[i].Password
			document.getElementById('indexAccount').value = accounts[i].Index
		}
	}
}



//  tab ds các bài đăng
var Posts = [
	{
		IdPost: 1,
		HeadPost: "MUSIC BOX”: ÂM NHẠC ĐI XA NỐI YÊU THƯƠNG LẠI GẦN",
		ContentPost: "Với chủ đề tình yêu, “Hảo Hảo Music Box” đã khiến hàng triệu trái tim rung cảm với đêm diễn tại Đà Lạt. Chương trình không chỉ mang đến những bản tình ca đặc sắc mà đó còn gửi gắm thông điệp yêu thương ý nghĩa. Như đã bật mí về địa điểm trước đó, ngày 09/03/2022 vừa qua, dân tình được dịp bấn loạn với sự kiện âm nhạc trực tuyến “Hảo Hảo Music Box” diễn ra tại tỉnh Lâm Đồng. Với sự",
		ImagesPost: "./assets/img/Post1.jpg",
		DescPost: "Bài viết số 1",
	},
	{
		IdPost: 2,
		HeadPost: "HẢO HẢO LÀ ĐƠN VỊ TÀI TRỢ CHÍNH THỨC TẠI GIẢI ĐẤU TRƯỜNG DANH VỌNG MÙA XUÂN 2022",
		ContentPost: "Đấu Trường Danh Vọng mùa Xuân 2022 – mùa giải đầu tiên trong năm 2022 thuộc hệ thống giải đấu chuyên nghiệp cấp cao nhất của Liên Quân Mobile tại Việt Nam hân hạnh được tài trợ bởi thương hiệu Mì Hảo Hảo. Đây là lần thứ hai một thương hiệu mì ăn liền của Acecook đồng hành cùng tựa game có lượng người chơi tích cực hàng tháng cao nhất tại Việt Nam trong năm 2021. Điều",
		ImagesPost: "./assets/img/Post2.jpg",
		DescPost: "Bài viết số 2",
	},
	{
		IdPost: 3,
		HeadPost: "HẢO HẢO – MUSIC BOX”: TRAO NIỀM HỨNG KHỞI, KẾT TRIỆU YÊU THƯƠNG",
		ContentPost: "Năm 2021 là một khoảng thời gian cực kỳ khó khăn, sau đại dịch COVID-19, Việt Nam có hơn hàng ngàn trẻ em vào hoàn cảnh khó khăn khi mất đi người thân, chính vì lẽ đó chúng tôi – Hảo Hảo đến từ Acecook Việt Nam phối hợp cùng Quỹ Bảo Trơ Trẻ Em Việt Nam tổ chức chương trình “Music Box” không ngoài mục đích cùng với người tiêu dùng chung tay góp sức vào việc chăm lo tương lai",
		ImagesPost: "./assets/img/Post3.jpg",
		DescPost: "Bài viết số 3",
	},
	{
		IdPost: 4,
		HeadPost: "HẢO HẢO – MÌ ĂN LIỀN SỐ 1 TẠI KHU VỰC THÀNH THỊ 2019",
		ContentPost: "Hảo Hảo ngày càng khẳng định vị trí của mình trong ngành hàng tiêu dùng nhanh nói chung và ngành thực phẩm nói riêng ở Việt Nam. Danh mì Hảo Hảo – tưởng quen mà lạ, tưởng cũ mà mới, luôn đầy hứng khởi cho tất cả mọi người Nếu những con số dễ dàng nói lên được vị trí của một nhãn hàng trên thị trường, thì việc trở thành “thương hiệu quốc dân” sẽ khẳng định được sự yêu thích của",
		ImagesPost: "./assets/img/Post4.jpg",
		DescPost: "Bài viết số 4",
	},
]


renderPost();

let srcImgPost = '';


// xử lý ảnh cho thẻ input[type=file] và lấy ra đường dẫn ảnh
var uploadPost = document.querySelector('#imagesPost');
uploadPost.addEventListener('change', function (e) {
	srcImgPost = (URL.createObjectURL(uploadPost.files[0])).toString();
})






function addPost() {
	var itemIdPost = document.getElementById('idPost').value;
	var itemHeaderPost = document.getElementById('headerPost').value;
	var itemContentPost = document.getElementById('contentPost').value;
	// var itemImgPost = document.getElementById('imagesPost').value;
	var itemDescPost = document.getElementById('descPost').value;
	var item = {
		IdPost: itemIdPost,
		HeadPost: itemHeaderPost,
		ContentPost: itemContentPost,
		ImagesPost: srcImgPost,
		DescPost: itemDescPost,
	}
	let index = Posts.findIndex((c) => c.IdPost == item.IdPost)
	console.log(index);
	if (index >= 0) {
		Posts.splice(index, 1, item);
	}
	else {
		Posts.push(item);
	}
	renderPost();
	clearPost();
}
//In thông tin bài đăng
function renderPost() {
	table = `<tr>
				<th scope="col">ID</th>
				<th scope="col">Tiêu đề</th>
				<th scope="col">Nội dung</th>
				<th scope="col">Ảnh đính kèm</th>
				<th scope="col">Mô tả</th>
				<th scope="col">Sửa/Xóa</th>
			</tr>`

	for (let i = 0; i < Posts.length; i++) {
		table += `<tr>
					<th scope="col">${Posts[i].IdPost}</th>
					<th scope="col">${Posts[i].HeadPost}</th>
					<th scope="col">${Posts[i].ContentPost}</th>
					<th scope="col"><img style="height: 50px;" src=${Posts[i].ImagesPost}></th>
					<th scope="col">${Posts[i].DescPost}</th>
					<th scope="col">
						<button class="btn btn-warning" onclick="editItemPost(${Posts[i].IdPost})">Sửa</button>
						<button class="btn btn-danger" onclick="deleteItemPost(${Posts[i].IdPost})">Xóa</button>
					</th>
				</tr>`
	}
	document.getElementById('renderPost').innerHTML = table;
}
function clearPost() {
	var itemId = document.getElementById('idPost').value = "";
	var itemHead = document.getElementById('headerPost').value = "";
	var itemName = document.getElementById('contentPost').value = "";
	var itemImages = document.getElementById('imagesPost').value = "";
	var itemDesc = document.getElementById('descPost').value = "";
}
function deleteItemPost(x) {
	for (let i = 0; i < Posts.length; i++) {
		if (Posts[i].IdPost == x) {
			Posts.splice(i, 1);
			renderPost();
		}
	}
}
function editItemPost(x) {
	for (let i = 0; i < Posts.length; i++) {
		if (Posts[i].IdPost == x) {
			document.getElementById('idPost').value = Posts[i].IdPost;
			document.getElementById('headerPost').value = Posts[i].HeadPost;
			document.getElementById('contentPost').value = Posts[i].ContentPost;
			// document.getElementById('imagesPost').value = Posts[i].ImagesPost;
			srcImgPost = Posts[i].ImagesPost;
			document.getElementById('descPost').value = Posts[i].DescPost;
		}
	}
}