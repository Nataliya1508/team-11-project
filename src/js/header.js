
    (() => {
        const refs = {
            openMenuBtn: document.querySelector('[data-menu-open]'),
            closeMenuBtn: document.querySelector('[data-menu-close]'),
            menu: document.querySelector('[data-menu]'),
        };

        refs.openMenuBtn.addEventListener('click', toggleModal);
        refs.closeMenuBtn.addEventListener('click', toggleModal);

        function toggleModal() {
            document.body.classList.toggle("modal-open")
            refs.menu.classList.toggle('is-open');
        }
    })();
    const header = document.querySelector(".header-scroll");
        window.addEventListener("scroll", () => {
            window.scrollY > 10
                ? header.classList.add("header--filled")
                : header.classList.remove("header--filled");
        })

// $(document).ready(function(){
//     $("#menu").on("click","a", function (event) {
//         event.preventDefault();
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 2000);
//     });
// });
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
(() => {
const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    };

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }
})();

