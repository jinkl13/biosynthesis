const reviews = document.getElementById('reviews');
        const leftBtn = document.getElementById('scrollLeftBtn');
        const rightBtn = document.getElementById('scrollRightBtn');
        const scrollAmount = 640; // Adjust as needed

        leftBtn.onclick = function() {
            if (reviews.scrollLeft === 0) {
                // Jump to end for infinite effect
                reviews.scrollLeft = reviews.scrollWidth;
            } else {
                reviews.scrollLeft -= scrollAmount;
            }
        };

        rightBtn.onclick = function() {
            if (reviews.scrollLeft + reviews.clientWidth >= reviews.scrollWidth) {
                // Jump to start for infinite effect
                reviews.scrollLeft = 0;
            } else {
                reviews.scrollLeft += scrollAmount;
            }
        };



window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('header').classList.add('header-visible');
    document.querySelector('.logo').classList.add('logo-visible');
    document.querySelector('nav').classList.add('nav-visible');
    document.querySelector('.loginButton').classList.add('loginButton-visible');
    document.querySelector('.heroTag').classList.add('heroTagVisible');
    document.querySelector('.abcd').classList.add('abcdVisible');
    document.querySelector('.efgh').classList.add('efghVisible');
    document.querySelector('.ijkl').classList.add('ijklVisible');
    document.querySelector('.getstartedButton').classList.add('getstartedButtonVisible');


    const aboutContainer = document.getElementById('aboutContainer');
    const leftP = document.getElementById('aboutContainerpLeft');
    const rightP = document.getElementById('aboutContainerpRight');

    if (aboutContainer && leftP && rightP) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        leftP.classList.add('slide-in');
                        rightP.classList.add('slide-in');
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(aboutContainer);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            document.querySelectorAll('#reviewCardOne, #reviewCardTwo, #reviewCardThree, #reviewCardFour, #rcmt1, #scrollLeftBtn, #scrollRightBtn')
                .forEach(el => el.classList.add('animate'));
            }
        });
        }, {
        threshold: 0.5
        });

        observer.observe(document.querySelector('#reviews'));
    
    const productsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('#pc1h2').classList.add('slide');
                document.querySelector('#pc2h2').classList.add('slide');
                document.querySelector('#pTextL').classList.add('slide');
                document.querySelector('#pTextR').classList.add('slide');
                document.querySelector('.productsAction').classList.add('animate-rotate');
                productsObserver.disconnect(); 
            }
            });
        }, { threshold: 0.5 });

        productsObserver.observe(document.querySelector('.productsContainer'));
    
    
        const footer = document.querySelector("footer");
        const footerRowTwo = document.querySelector(".footerRowTwo");

        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                footerRowTwo.classList.add("slideIn");
                footerObserver.disconnect(); // Trigger only once
            }
            });
        }, { threshold: 0.5 });

        if (footer) {
            footerObserver.observe(footer);

        }

        
    
        
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};



