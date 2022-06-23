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