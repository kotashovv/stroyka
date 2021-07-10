;(function(){
    
    // Плавный скролл до меню

    const menuLinks = document.querySelectorAll('.link[data-goto]')
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLinks => {
            menuLinks.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                if(headerBurger.classList.contains('is-active')) {
                    headerList.classList.remove('is-active');
                    body.classList.remove('lock');
                    headerBurger.classList.remove('is-active');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }

    //Показ меню 

    function showMenu() {
        print('Hello world')
    }

})();