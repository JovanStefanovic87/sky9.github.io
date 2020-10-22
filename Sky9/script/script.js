/************ Loading events start *************/
const background = document.getElementById('background')
const title = document.querySelector('.title_1')
const cliffhanger = document.getElementById('cliffhanger')
const trigger = document.getElementById('trigger')
function loaded() {
    background.style.opacity = 1
    background.style.backgroundPosition = 'top'
    title.style.margin = '450px auto 0 auto'
    cliffhanger.style.transform = 'translateY(846px)'
    trigger.style.transform = 'translateY(960px)'
}
/************ Loading events end *************/

/************ Parallax start *************/
const translate = document.querySelectorAll('.translate')

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });
})
/************ Parallax end *************/

/************ Menu start *************/
const menu = document.getElementById('menu')
const menuBar = document.querySelector('.menu_bar')

function displayMenuHandler() {
    menu.style.width = '100vw'
    menu.style.height = '100vh'
    menuBar.style.display = 'flex'
}
function hideMenuHandler() {
    menu.style.width = '0'
    menu.style.height = '0'
    menuBar.style.display = 'none'
}
/************ Menu end *************/

/************ Portfolio Wireframe Slider start *************/
const w = window.innerWidth;
const SliderMiddle = document.querySelector('.slider_middle')
const SliderMiddlePos = SliderMiddle.getBoundingClientRect()
const wirefeameLeft = document.getElementById('wirefeame-left')
const wirefeameRight = document.getElementById('wirefeame-right')
const wireframeWhole = document.querySelector('.wireframe_whole')
const flatWhole = document.querySelector('.flat_whole')
const wireframeHalfe = document.querySelector('.wireframe_halfe')
const flatHalfe = document.querySelector('.flat_halfe')

wirefeameLeft.addEventListener('click', () => {
    if (SliderMiddle.style.left < 50 + '%') {
        SliderMiddle.style.left = 50 + '%'
        wireframeHalfe.style.opacity = 1
        flatHalfe.style.opacity = 1
        wireframeWhole.style.opacity = 0
        flatWhole.style.opacity = 0
    }else {
        SliderMiddle.style.left = (SliderMiddlePos.x - w/5) + 'px'
        wireframeHalfe.style.opacity = 0
        flatHalfe.style.opacity = 0
        wireframeWhole.style.opacity = 0
        flatWhole.style.opacity = 1
    }
})

wirefeameRight.addEventListener('click', () => {
    if (SliderMiddle.style.left > 50 + '%') {
        SliderMiddle.style.left = 50 + '%'
        wireframeHalfe.style.opacity = 1
        flatHalfe.style.opacity = 1
        wireframeWhole.style.opacity = 0
        flatWhole.style.opacity = 0
    }else {
        SliderMiddle.style.left = (SliderMiddlePos.x + w/5) + 'px'
        wireframeHalfe.style.opacity = 0
        flatHalfe.style.opacity = 0
        flatWhole.style.opacity = 0
        wireframeWhole.style.opacity = 1
    }
})
/************ Portfolio Wireframe Slider end *************/

/************* Portfolio works slider start ******************/
const slider = document.querySelector('.work_slider')
const wireFrame = document.querySelector('.work_wireframe')
const flat = document.querySelector('.work_flat')
const sliderOpacity = window.getComputedStyle(slider)
const wireFrameOpacity = window.getComputedStyle(wireFrame)
const flatOpacity = window.getComputedStyle(flat)
const workNumber = document.getElementById("workNumber")
const ourWork = document.getElementById("ourWork")
const workName = document.getElementById("workName")

function slideWorkLeft() {
    switch (true) {
        case (sliderOpacity.getPropertyValue("opacity") == '1') :
            slider.style.opacity = '0';
            wireFrame.style.opacity = '1';
            flat.style.opacity = '0';
            workNumber.innerHTML = '2';
            ourWork.innerHTML = '2'
            workName.innerHTML = '<strong>LKnet Media Group / </strong>Wireframe'
        break;
        case (wireFrameOpacity.getPropertyValue("opacity") == '1') :
            slider.style.opacity = '0';
            wireFrame.style.opacity = '0';
            flat.style.opacity = '1';
            workNumber.innerHTML = '1';
            ourWork.innerHTML = '1'
            workName.innerHTML = '<strong>LKnet Media Group / </strong>Flat'
        break;
        case (flatOpacity.getPropertyValue("opacity") == '1') :
            slider.style.opacity = '1';
            wireFrame.style.opacity = '0';
            flat.style.opacity = '0';
            workNumber.innerHTML = '3';
            ourWork.innerHTML = '3'
            workName.innerHTML = '<strong>LKnet Media Group / </strong>experential website'
    }
}

function slideWorkRight() {
    switch (true) {
        case (sliderOpacity.getPropertyValue("opacity") == '1') :
            slider.style.opacity = '0';
            wireFrame.style.opacity = '0';
            flat.style.opacity = '1';
            workNumber.innerHTML = '1';
            ourWork.innerHTML = '1'
            workName.innerHTML = '<strong>LKnet Media Group / </strong>Flat'
        break;
        case (flatOpacity.getPropertyValue("opacity") == '1') :
            slider.style.opacity = '0';
            wireFrame.style.opacity = '1';
            flat.style.opacity = '0';
            workNumber.innerHTML = '2';
            ourWork.innerHTML = '2'
            workName.innerHTML = '<strong>LKnet Media Group / </strong>Wireframe'
        break;
        case (wireFrameOpacity.getPropertyValue("opacity") == '1') :
            slider.style.opacity = '1';
            wireFrame.style.opacity = '0';
            flat.style.opacity = '0';
            workNumber.innerHTML = '3';
            ourWork.innerHTML = '3'
            workName.innerHTML = '<strong>LKnet Media Group / </strong>experential website'
    }
}


const viewCase = document.querySelector('.view-case')

function viewCaseHandler() {
    alert('Coming soon')
}
/************* Portfolio works slider end ******************/

/************* Footer social icons start ******************/
const facebookBubble = document.querySelector('.facebook')
const linkedinBubble = document.querySelector('.linkedin')
const googlePlusBubble = document.querySelector('.google-plus')
const twitterBubble = document.querySelector('.twitter')
const instagramBubble = document.querySelector('.instagram')

function hoverIcon(bubble) {
    bubble.style.opacity = 1;
}
function leaveIcon(bubble) {
    bubble.style.opacity = 0;
}
/************* Footer Social icons end ******************/

/************* Contact form start ******************/
const location_1 = document.getElementById('loc_1')
const location_2 = document.getElementById('loc_2')
const location_3 = document.getElementById('loc_3')
const name = document.getElementById('name')
const address = document.getElementById('address')
const message = document.getElementById('message')
const popup = document.getElementById('popup')

function inputActiveHandler(img) {
    img.style.opacity = 1
}

function inputPassiveHandler(img) {
    img.style.opacity = 0.5
}

function displayPopupHandler() {
    popup.style.display = 'block'
}

function hidePopupHandler() {
    popup.style.display = 'none'
}

/************* Contact form end ******************/