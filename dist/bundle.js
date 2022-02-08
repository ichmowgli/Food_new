/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((module) => {

eval("function calc () {\n    const result = document.querySelector('.calculating__result span');\n\n    let sex, height, weight, age, ratio;\n\n    if (localStorage.getItem('sex')) {\n        sex = localStorage.getItem('sex');\n    } else {\n        sex = 'female';\n        localStorage.setItem('sex', 'female');\n    }\n\n    if (localStorage.getItem('ratio')) {\n        ratio = localStorage.getItem('ratio');\n    } else {\n        ratio = 1.375;\n        localStorage.setItem('ratio', 1.375);\n    }\n\n    function calcTotal() {\n        if (!sex || !height || !weight || !age || !ratio) {\n            result.textContent = '____';\n            return;\n        }\n\n        if (sex === 'female') {\n            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);\n        } else {\n            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);        \n        }\n    }\n\n    calcTotal();\n\n    function initLocalSettings(selector, activeClass) {\n        const elements = document.querySelectorAll(selector);\n\n        elements.forEach(elem => {\n            elem.classList.remove(activeClass);\n            if (elem.getAttribute('id') === localStorage.getItem('sex')) {\n                elem.classList.add(activeClass);\n            }\n            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {\n                elem.classList.add(activeClass);\n            }\n        });\n    }\n\n    initLocalSettings('#gender div', 'calculating__choose-item_active');\n    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');\n\n    function getStaticInfo(parentSelector, activeClass) {\n        const elements = document.querySelectorAll(selector);\n\n        elements.forEach(elem => {\n            elem.addEventListener('click', (e) => {\n                if (e.target.getAttribute('data-ratio')) {\n                    ratio = +e.target.getAttribute('data-ratio');\n                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));\n                } else {\n                    sex = e.target.getAttribute('id');\n                    localStorage.setItem('sex', e.target.getAttribute('id'));\n                }\n    \n                elements.forEach(elem => {\n                    elem.classList.remove(activeClass);\n                });\n    \n                e.target.classList.add(activeClass);\n    \n                calcTotal();\n            });\n        })\n    }\n\n    getStaticInfo('#gender div', 'calculating__choose-item_active');\n    getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');\n\n\n    function getDynamicInfo(selector) {\n        const input = document.querySelector(selector);\n\n        input.addEventListener('input', () => {\n\n            if (input.value.match(/\\D/g)) {\n                input.style.border = '1px solid red';\n            } else {\n                input.style.border = 'none';\n            }\n\n            switch(input.getAttribute('id')) {\n                case 'height':\n                    height = +input.value;\n                    break;\n                case 'weight':\n                    weight = +input.value;\n                    break;\n                case 'age':\n                    age = +input.value;\n                    break;\n            }\n\n            calcTotal();\n        });\n    }\n\n    getDynamicInfo('#height');\n    getDynamicInfo('#weight');\n    getDynamicInfo('#age');\n}\n\nmodule.exports = calc;\n\n//# sourceURL=webpack://food/./src/js/modules/calc.js?");

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ ((module) => {

eval("function cards() {\n    class MenuCard {\n        constructor(src, alt, title, descr, price, parentSelector, ...classes) {\n            this.src = src;\n            this.alt = alt;\n            this.title = title;\n            this.descr = descr;\n            this.price = price;\n            this.classes = classes;\n            this.parentSelector = document.querySelector(parentSelector);\n            this.transfer = 27;\n            this.changeToUAH();\n        }\n\n        changeToUAH() {\n            this.price = +this.price * this.transfer;\n        }\n\n        render() {\n            const element = document.createElement('div');\n            \n            if (this.classes.length === 0) {\n                this.classes = 'menu__item';\n                element.classList.add(this.classes);\n            } else {\n                this.classes.forEach(className => element.classList.add(className));\n            }\n\n            element.innerHTML = `\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class=\"menu__item-subtitle\">${this.title}</h3>\n                <div class=\"menu__item-descr\">${this.descr}</div>\n                <div class=\"menu__item-divider\"></div>\n                <div class=\"menu__item-price\">\n                    <div class=\"menu__item-cost\">Цена:</div>\n                    <div class=\"menu__item-total\"><span>${this.price}</span> грн/день</div>\n                </div>\n            `;\n            this.parentSelector.append(element);\n        }\n    }\n\n    // getResourse('http://localhost:3000/menu')\n    //     .then(data => {\n    //         data.forEach(({img, altimg, title, descr, price}) => {\n    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();\n    //         });\n    //     });\n\n    axios.get('http://localhost:3000/menu')\n        .then(data => {\n            data.data.forEach(({img, altimg, title, descr, price}) => {\n                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();\n            });\n        });\n}\n\nmodule.exports = cards;\n\n//# sourceURL=webpack://food/./src/js/modules/cards.js?");

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((module) => {

eval("function forms() {\n    const forms = document.querySelectorAll('form');\n    const message = {\n        loading: 'img/form/spinner.svg',\n        success: 'Спасибо! Скоро мы с Вами свяжемся',\n        failure: 'Что-то пошло не так'\n    };\n\n    forms.forEach(item => {\n        bindPostData(item);\n    });\n\n    const postData = async (url, data) => { \n        let res = await fetch(url, {\n            method: \"POST\",\n            headers: {\n                'Content-type': 'application/json'\n            },\n            body: data\n        });\n\n        return await res.json();\n    };\n\n    async function getResource(url) {\n        let res = await fetch(url);\n    \n        if (!res.ok) {\n            throw new Error(`Could not fetch ${url}, status: ${res.status}`);\n        }\n    \n        return await res.json();\n    }\n\n    function bindPostData(form) {\n        form.addEventListener('submit', (e) => {\n            e.preventDefault();\n\n            let statusMessage = document.createElement('img');\n            statusMessage.src = message.loading;\n            statusMessage.style.cssText = `\n                display: block;\n                margin: 0 auto;\n            `;\n            form.insertAdjacentElement('afterend', statusMessage);\n \n            const formData = new FormData(form);\n\n            const json = JSON.stringify(Object.fromEntries(formData.entries()));\n\n            postData('http://localhost:3000/requests', json)\n            .then(data => {\n                console.log(data);\n                showThanksModal(message.success);\n                statusMessage.remove();\n                console.log(\"ghbdtn\");\n\n            }).catch(() => {\n                showThanksModal(message.failure);\n            }).finally(() => {\n                // form.reset();\n            });\n        });\n    }\n\n    function showThanksModal(message) {\n        const prevModalDialog = document.querySelector('.modal__dialog');\n   \n        prevModalDialog.classList.add('hide');\n        openModal();\n\n        const thanksModal = document.createElement('div');\n        thanksModal.classList.add('modal__dialog');\n        thanksModal.innerHTML = `\n            <div class=\"modal__content\">\n                <div class=\"modal__close\" data-close>x</div>\n                <div class=\"modal__title\">${message}</div>\n            </div>\n        `;\n\n        document.querySelector('.modal').append(thanksModal);\n        setTimeout(() => {\n            thanksModal.remove();\n            prevModalDialog.classList.add('show');\n            prevModalDialog.classList.remove('hide');\n            closeModal();\n        }, 4000);\n    }\n}\n\nmodule.exports = forms;\n\n//# sourceURL=webpack://food/./src/js/modules/forms.js?");

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((module) => {

eval("function modal() {\n    const modalTrigger = document.querySelectorAll('[data-modal]'),\n          modal = document.querySelector('.modal');\n\n    \n\n    modalTrigger.forEach(btn => {\n        btn.addEventListener('click', openModal);\n    });\n\n    function closeModal() {\n        modal.classList.add('hide');\n        modal.classList.remove('show');\n        document.body.style.overflow = '';\n    }\n\n    function openModal() {\n        modal.classList.add('show');\n        modal.classList.remove('hide');\n        document.body.style.overflow = 'hidden';\n        clearInterval(modalTimerId);\n    }\n\n    modal.addEventListener('click', (e) => {\n        if (e.target === modal || e.target.getAttribute('data-close') == '') {\n            closeModal();\n        }\n    });\n\n    document.addEventListener('keydown', (e) => {\n        if (e.code === \"Escape\" && modal.classList.contains('show')) {\n            closeModal();\n        }\n    });\n\n    const modalTimerId = setTimeout(openModal, 50000);\n\n    function showModalByScroll() {\n        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {\n            openModal();\n            window.removeEventListener('scroll', showModalByScroll);\n\n        }\n    }\n\n    window.addEventListener('scroll', showModalByScroll);\n}\n\nmodule.exports = modal;\n\n//# sourceURL=webpack://food/./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((module) => {

eval("function slider() {\n    let slideIndex = 1;\n    let offset = 0;\n\n    const slides = document.querySelectorAll('.offer__slide'),\n        slider = document.querySelector('.offer__slider'),\n        prev = document.querySelector('.offer__slider-prev'),\n        next = document.querySelector('.offer__slider-next'),\n        total = document.querySelector('#total'),\n        current = document.querySelector('#current'),\n        slidesWrapper = document.querySelector('.offer__slider-wrapper'),\n        slidesField = document.querySelector('.offer__slider-inner'),\n        width = window.getComputedStyle(slidesWrapper).width;\n\n    if (slides.length < 10) {\n        total.textContent = `0${slides.length}`;\n        current.textContent = `0${slideIndex}`;\n    } else {\n        total.textContent = slides.length;\n        current.textContent = slideIndex;\n\n    }\n    \n    slidesField.style.width = 100 * slides.length + '%';\n    slidesField.style.display = 'flex';\n    slidesField.style.transition = '0.5s all';\n\n    slidesWrapper.style.overflow = 'hidden';\n\n    slides.forEach(slide => {\n        slide.style.width = width;\n    });\n\n    slider.style.position = 'relative';\n\n    const indicators = document.createElement('ol');\n    const dots = [];\n\n    indicators.classList.add('carousel-indicators');\n    indicators.style.cssText = `\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    `;\n    slider.append(indicators);\n\n    for (let i = 0; i < slides.length; i++) {\n        const dot = document.createElement('li');\n        dot.setAttribute('data-slide-to', i + 1);\n        dot.style.cssText = `\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        `;\n\n        if (i == 0) {\n            dot.style.opacity = 1;\n        } \n        indicators.append(dot);\n        dots.push(dot);\n    }\n\n    next.addEventListener('click', () => {\n        if (offset == (deleteNotDigits(width) * (slides.length - 1))) {\n            offset = 0;\n        } else {\n            offset += deleteNotDigits(width);\n        }\n\n        slidesField.style.transform = `translateX(-${offset}px)`;\n\n        if (slideIndex == slides.length) {\n            slideIndex = 1;\n        } else {\n            slideIndex++;\n        }\n\n        if (slides.length < 10) {\n            current.textContent = `0${slideIndex}`;\n        } else {\n            current.textContent = slideIndex;\n        }\n\n        dots.forEach(dot => dot.style.opacity = '.5');\n        dots[slideIndex -1].style.opacity = 1;\n    });\n\n    prev.addEventListener('click', () => {\n        if (offset == 0) {\n            offset = deleteNotDigits(width) * (slides.length - 1);\n        } else {\n            offset -= deleteNotDigits(width);\n        }\n\n        slidesField.style.transform = `translateX(-${offset}px)`;\n\n        if (slideIndex == 1) {\n            slideIndex = slides.length;\n        } else {\n            slideIndex--;\n        }\n\n        if (slides.length < 10) {\n            current.textContent = `0${slideIndex}`;\n        } else {\n            current.textContent = slideIndex;\n        }\n\n        dots.forEach(dot => dot.style.opacity = '.5');\n        dots[slideIndex -1].style.opacity = 1;\n    });\n\n    dots.forEach(dot => {\n        dot.addEventListener('click', (e) => {\n            const slideTo = e.target.getAttribute('data-slide-to');\n\n            slideIndex= slideTo;\n            offset = deleteNotDigits(width) * (slideTo - 1); \n\n            slidesField.style.transform = `translateX(-${offset}px)`;\n\n            if (slides.length < 10) {\n                current.textContent = `0${slideIndex}`;\n            } else {\n                current.textContent = slideIndex;\n            }\n\n            dots.forEach(dot => dot.style.opacity = '.5');\n            dots[slideIndex - 1].style.opacity = 1;\n        });\n    });\n\n    function deleteNotDigits(str) {\n        return +str.replace(/\\D/g, '');\n    }\n}\n\nmodule.exports = slider;\n\n//# sourceURL=webpack://food/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((module) => {

eval("function tabs() {\n    let tabs = document.querySelectorAll('.tabheader__item'),\n          tabsContent = document.querySelectorAll('.tabcontent'),\n          tabsParent = document.querySelector('.tabheader__items');\n\n    function hideTabContent() {\n        tabsContent.forEach(item => {\n            item.classList.add('hide');\n            item.classList.remove('show', 'fade');\n\n        });\n\n        tabs.forEach(item => {\n            item.classList.remove('tabheader__item_active');\n        });\n    }\n\n    function showTabContent(i = 0) {\n        tabsContent[i].classList.add('show', 'fade');\n        tabsContent[i].classList.remove('hide');\n        tabs[i].classList.add('tabheader__item_active');\n    }\n\n    hideTabContent();\n    showTabContent();\n\n    tabsParent.addEventListener('click', (event) => {\n        const target = event.target;\n\n        if (target && target.classList.contains('tabheader__item')) {\n            tabs.forEach((item, i) => {\n                if (target == item) {\n                    hideTabContent();\n                    showTabContent(i);\n                }\n            });\n        }\n    });\n}\n\nmodule.exports = tabs;\n\n//# sourceURL=webpack://food/./src/js/modules/tabs.js?");

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((module) => {

eval("function timer() {\n    const deadline = '2022-02-20';\n\n    function getTimeRemaining(endtime) {\n        const t = Date.parse(endtime) - Date.parse(new Date()),\n              days = Math.floor(t / (1000 * 60 * 60 * 24)),\n              hours = Math.floor((t / (1000 * 60 * 60) % 24)),\n              minutes = Math.floor((t / 1000 / 60) % 60),\n              seconds = Math.floor((t / 1000) % 60);\n\n        return {\n            'total': t,\n            'days': days,\n            'hours': hours,\n            'minutes': minutes,\n            'seconds': seconds,\n        };\n    }\n\n    function getZero(num) {\n        if (num >= 0 && num < 10) {\n            return `0${num}`;\n        } else {\n            return num;\n        }\n    }\n\n    function setClock(selector, endtime) {\n        const timer = document.querySelector(selector),\n              days = timer.querySelector('#days'),\n              hours = timer.querySelector('#hours'),\n              minutes = timer.querySelector('#minutes'),\n              seconds = timer.querySelector('#seconds'),\n              timeInerval = setInterval(updateClock, 1000);\n\n              updateClock();\n\n        function updateClock() {\n            const t = getTimeRemaining(endtime);\n\n            days.innerHTML = getZero(t.days);\n            hours.innerHTML = getZero(t.hours);\n            minutes.innerHTML = getZero(t.minutes);\n            seconds.innerHTML = getZero(t.seconds);\n\n            if (t.total <= 0) {\n                clearInterval(timeInterval);\n            }\n        }\n    }\n\n    setClock('.timer', deadline);\n\n}\n\nmodule.exports = timer;\n\n//# sourceURL=webpack://food/./src/js/modules/timer.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("window.addEventListener('DOMContentLoaded', () => {\n\n    const tabs = __webpack_require__(/*! ./modules/tabs */ \"./src/js/modules/tabs.js\"),\n          modal = __webpack_require__(/*! ./modules/modal */ \"./src/js/modules/modal.js\"),\n          timer = __webpack_require__(/*! ./modules/timer */ \"./src/js/modules/timer.js\"),\n          cards = __webpack_require__(/*! ./modules/cards */ \"./src/js/modules/cards.js\"),\n          calc = __webpack_require__(/*! ./modules/calc */ \"./src/js/modules/calc.js\"),\n          forms = __webpack_require__(/*! ./modules/forms */ \"./src/js/modules/forms.js\"),\n          slider = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n\n    tabs();\n    modal();\n    timer();\n    cards();\n    calc();\n    forms();\n    slider();\n    \n}); \n\n\n\n\n\n//# sourceURL=webpack://food/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;