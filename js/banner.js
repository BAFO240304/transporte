document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        init: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        slidesPerView: 1,
        parallax: true,
        navigation: {
            nextEl: '.nav-arrow.next',
            prevEl: '.nav-arrow.prev',
        },
        on: {
            init: function () {
                updateCustomPagination(this.realIndex);
            },
            slideChange: function () {
                updateCustomPagination(this.realIndex);
            }
        }
    });

    function updateCustomPagination(activeIndex) {
        const totalSlides = document.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;
        const paginationContainer = document.querySelector('.custom-pagination');
        paginationContainer.innerHTML = '';

        for (let i = 0; i < totalSlides; i++) {
            const bullet = document.createElement('div');
            bullet.className = `pagination-bullet ${i === activeIndex ? 'pagination-bullet-active' : ''}`;
            bullet.addEventListener('click', () => {
                swiper.slideTo(i);
            });
            paginationContainer.appendChild(bullet);
        }
    }
});