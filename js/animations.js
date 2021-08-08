const discussion = document.querySelectorAll('.content1 p')[2];
const hi = document.querySelectorAll('.content1 p')[3]
const creativity = document.querySelectorAll('.content2 p')[1];
const experience = document.querySelectorAll('.content2 p')[2];
const content = document.querySelector('.content');
const contentLength = content.offsetTop;
const stackItems = document.querySelector('.stack-items');
const portfolioContainer = document.querySelector('.portfolio_container');


window.addEventListener('scroll', (event) => {
    if (window.scrollY >= 570) {
        animation();
    }
    if (window.scrollY >= 1260) {
        stackItems.classList.add('animate__animated', 'animate__fadeInUp');
        stackItems.style.opacity = 1;
    }
    if (window.scrollY >= 1450) {
        portfolioContainer.classList.add('animate__animated', 'animate__fadeInUp')
        portfolioContainer.style.opacity = 1;
    }
});

function animation() {
    discussion.classList.add('animate__animated', 'animate__fadeInUp')
    hi.classList.add('animate__animated', 'animate__fadeInUp')
    creativity.classList.add('animate__animated', 'animate__fadeInUp')
    experience.classList.add('animate__animated', 'animate__fadeInUp')
    discussion.style.opacity = 1;
    hi.style.opacity = 1;
    creativity.style.opacity = 1;
    experience.style.opacity = 1;
}

