// Get Launch Time
const passedDateTime = document.querySelectorAll('script[src*="countdown.js"]');
let inputDateTime;

passedDateTime.forEach(function(script) {
    let inputDateTimeAttr = script.getAttribute('date-time');
    if (typeof inputDateTimeAttr !== 'undefined') {
        inputDateTime = inputDateTimeAttr;
    }
});

// Set Launch Time
const countToDate = new Date(inputDateTime).getTime();
    let codeInjected = false;

const intervalId = setInterval(() => {

    const currentDate = new Date();
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);

    if (timeBetweenDates >= -1 && !codeInjected) {
        if (codeInjected == false){
            injectJS();
            injectHTML();
            injectCSS();
        // Prevent further execution.
            codeInjected = true;
        }
        return;

    } else if (timeBetweenDates == -2 && codeInjected) {
        console.warn("John Cena : You Can't See Me !!");
        window.location.reload();
    }
    flipAllcard(timeBetweenDates);
}, 1000);

function injectCSS(){
// Create a <style> element
let styleElement = document.createElement('style');
// Set the CSS text
let cssText =`
    @import url(https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap);.font-redHatText{font-family:'Red Hat Text',sans-serif}.bg-grayishBlue{background-color:#8385a9}.text-grayishBlue{color:#8385a9}.text-softRed{color:#fa5f86}.bg-darkDesaturatedBlue{background-color:#343650}.bg-slightlyDarkerDesBlue{background-color:#28293d}.bg-veryDarkBlue{background-color:#1d1e29}.bgmostlyBlackBlue{background-color:#191a23}.container-shadow{-webkit-box-shadow:0 17px 12px 1px rgba(0,0,0,.75);-moz-box-shadow:0 17px 12px 1px rgba(0,0,0,.75);box-shadow:0 17px 12px 1px rgba(0,0,0,.75)}.bottom-flip-shadow{-webkit-box-shadow:inset 0 -2px 1px 0 rgba(0,0,0,.42);-moz-box-shadow:inset 0 -2px 1px 0 rgba(0,0,0,.42);box-shadow:inset 0 -2px 1px 0 rgba(0,0,0,.42)}.top-flip-shadow{-webkit-box-shadow:inset 0 2px 1px 0 rgba(0,0,0,.42);-moz-box-shadow:inset 0 2px 1px 0 rgba(0,0,0,.42);box-shadow:inset 0 2px 1px 0 rgba(0,0,0,.42)}.flip-card-top{animation:350ms ease-in flip-top;transform-origin:bottom}@keyframes flip-top{100%{transform:rotateX(90deg)}}.flip-card-bottom{animation:350ms ease-in-out 350ms flip-bottom;transform-origin:top;transform:rotateX(90deg)}@keyframes flip-bottom{100%{transform:rotateX(0)}}.full-screen-section{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;overflow:hidden}
    #promotion{font-style:italic;color:#a9a9a9}
    #url{font-weight:700;font-style:normal;color:#000}

    @media only screen and (max-width: 600px) {
        #time {
            transform: scale(0.45);
            margin: 0;
            padding: 0;
        }
    }
    @media only screen and (max-width: 600px) {
        #container {
            transform: scale(0.9);
            margin: 0;
            padding: 0;
        }
    }
`;
// Set the CSS text to the <style> element
    styleElement.appendChild(document.createTextNode(cssText));
// Append the <style> element to the <head> of the document
    document.head.appendChild(styleElement);
}

function injectJS(){
// TW Injection
    let scriptElement = document.createElement('script');
// Source URL of the JavaScript file
    scriptElement.src = 'https://codeartisanriz.github.io/launch-countdown/vendor/js/tailwind_3.4.1.js';
// Append the <script> element to the <head> of the document
    document.head.appendChild(scriptElement);
}

function injectHTML(){
    // Create a new section element
    let sectionElement = document.createElement('section');

    // Set attributes for the section element
    sectionElement.id = 'countdown-section';
    sectionElement.className = 'relative w-full h-screen m-0 bg-gradient-to-b from-mostlyBlackBlue to-veryDarkBlue font-redHatText';

    // Set inner HTML for the section element
    sectionElement.innerHTML = `<div id="container" class="w-full h-full flex flex-col justify-center items-center"><div class="text-xl text-center tracking-[8px] md:text-4xl text-grayishBlue md:tracking-[14px] font-bold">WE'RE LAUNCHING SOON</div><div id="time" class="mt-[80px] flex justify-center items-center gap-[40px]"><div class="flex flex-col-reverse justify-center items-center space-y-10"><h1 class="mt-[30px] text-2xl text-grayishBlue font-bold">DAYS</h1><div class="flex justify-center items-center"><div class="flex flex-col text-softRed space-y-[1px] rounded-xl container-shadow" data-days><span class="relative w-[180px] h-[90px] bg-slightlyDarkerDesBlue overflow-hidden rounded-tl-xl rounded-tr-xl flex justify-center items-end text-8xl"><div class="absolute w-full h-full flex justify-start items-end"><div class="w-[10px] h-[8px] rounded-tr-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-end"><div class="w-[10px] h-[8px] rounded-tl-full bg-veryDarkBlue"></div></div><span class="translate-y-[46px]" data-card-top>09</span><span class="absolute w-[180px] h-[90px] bg-slightlyDarkerDesBlue overflow-hidden rounded-tl-xl rounded-tr-xl flex justify-center items-end text-8xl top-flip-shadow" data-flip-top><div class="absolute w-full h-full flex justify-start items-end"><div class="w-[10px] h-[8px] rounded-tr-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-end"><div class="w-[10px] h-[8px] rounded-tl-full bg-veryDarkBlue"></div></div><span class="translate-y-[46px]" data-flip-top-num data-card-top>00</span></span></span><span class="relative w-[180px] h-[90px] bg-darkDesaturatedBlue overflow-hidden rounded-bl-xl rounded-br-xl flex justify-center items-end text-8xl bottom-flip-shadow"><div class="absolute w-full h-full flex justify-start items-start"><div class="w-[10px] h-[8px] rounded-br-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-start"><div class="w-[10px] h-[8px] rounded-bl-full bg-veryDarkBlue"></div></div><span class="-translate-y-[45px]" data-card-bot>00</span><span class="absolute w-[180px] h-[90px] bg-darkDesaturatedBlue overflow-hidden rounded-bl-xl rounded-br-xl flex justify-center items-end text-8xl bottom-flip-shadow" data-flip-bot><div class="absolute w-full h-full flex justify-start items-start"><div class="w-[10px] h-[8px] rounded-br-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-start"><div class="w-[10px] h-[8px] rounded-bl-full bg-veryDarkBlue"></div></div><span class="-translate-y-[45px]" data-flip-bot-num>00</span></span></span></div></div></div><div class="flex flex-col-reverse justify-center items-center space-y-10"><h1 class="mt-[30px] text-2xl text-grayishBlue font-bold">HOURS</h1><div class="flex justify-center items-center"><div class="flex flex-col text-softRed space-y-[1px] rounded-xl container-shadow" data-hours><span class="relative w-[180px] h-[90px] bg-slightlyDarkerDesBlue overflow-hidden rounded-tl-xl rounded-tr-xl flex justify-center items-end text-8xl"><div class="absolute w-full h-full flex justify-start items-end"><div class="w-[10px] h-[8px] rounded-tr-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-end"><div class="w-[10px] h-[8px] rounded-tl-full bg-veryDarkBlue"></div></div><span class="translate-y-[46px]" data-card-top>00</span><span class="absolute w-[180px] h-[90px] bg-slightlyDarkerDesBlue overflow-hidden rounded-tl-xl rounded-tr-xl flex justify-center items-end text-8xl top-flip-shadow" data-flip-top><div class="absolute w-full h-full flex justify-start items-end"><div class="w-[10px] h-[8px] rounded-tr-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-end"><div class="w-[10px] h-[8px] rounded-tl-full bg-veryDarkBlue"></div></div><span class="translate-y-[46px]" data-flip-top-num data-card-top>00</span></span></span><span class="relative w-[180px] h-[90px] bg-darkDesaturatedBlue overflow-hidden rounded-bl-xl rounded-br-xl flex justify-center items-end text-8xl bottom-flip-shadow"><div class="absolute w-full h-full flex justify-start items-start"><div class="w-[10px] h-[8px] rounded-br-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-start"><div class="w-[10px] h-[8px] rounded-bl-full bg-veryDarkBlue"></div></div><span class="-translate-y-[45px]" data-card-bot>00</span><span class="absolute w-[180px] h-[90px] bg-darkDesaturatedBlue overflow-hidden rounded-bl-xl rounded-br-xl flex justify-center items-end text-8xl bottom-flip-shadow" data-flip-bot><div class="absolute w-full h-full flex justify-start items-start"><div class="w-[10px] h-[8px] rounded-br-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-start"><div class="w-[10px] h-[8px] rounded-bl-full bg-veryDarkBlue"></div></div><span class="-translate-y-[45px]" data-flip-bot-num>00</span></span></span></div></div></div><div class="flex flex-col-reverse justify-center items-center space-y-10"><h1 class="mt-[30px] text-2xl text-grayishBlue font-bold">MINUTES</h1><div class="flex justify-center items-center"><div class="flex flex-col text-softRed space-y-[1px] rounded-xl container-shadow" data-minutes><span class="relative w-[180px] h-[90px] bg-slightlyDarkerDesBlue overflow-hidden rounded-tl-xl rounded-tr-xl flex justify-center items-end text-8xl"><div class="absolute w-full h-full flex justify-start items-end"><div class="w-[10px] h-[8px] rounded-tr-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-end"><div class="w-[10px] h-[8px] rounded-tl-full bg-veryDarkBlue"></div></div><span class="translate-y-[46px]" data-card-top>00</span><span class="absolute w-[180px] h-[90px] bg-slightlyDarkerDesBlue overflow-hidden rounded-tl-xl rounded-tr-xl flex justify-center items-end text-8xl top-flip-shadow" data-flip-top><div class="absolute w-full h-full flex justify-start items-end"><div class="w-[10px] h-[8px] rounded-tr-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-end"><div class="w-[10px] h-[8px] rounded-tl-full bg-veryDarkBlue"></div></div><span class="translate-y-[46px]" data-flip-top-num data-card-top>00</span></span></span><span class="relative w-[180px] h-[90px] bg-darkDesaturatedBlue overflow-hidden rounded-bl-xl rounded-br-xl flex justify-center items-end text-8xl bottom-flip-shadow"><div class="absolute w-full h-full flex justify-start items-start"><div class="w-[10px] h-[8px] rounded-br-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-start"><div class="w-[10px] h-[8px] rounded-bl-full bg-veryDarkBlue"></div></div><span class="-translate-y-[45px]" data-card-bot>00</span><span class="absolute w-[180px] h-[90px] bg-darkDesaturatedBlue overflow-hidden rounded-bl-xl rounded-br-xl flex justify-center items-end text-8xl bottom-flip-shadow" data-flip-bot><div class="absolute w-full h-full flex justify-start items-start"><div class="w-[10px] h-[8px] rounded-br-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-start"><div class="w-[10px] h-[8px] rounded-bl-full bg-veryDarkBlue"></div></div><span class="-translate-y-[45px]" data-flip-bot-num>00</span></span></span></div></div></div><div class="flex flex-col-reverse justify-center items-center space-y-10"><h1 class="mt-[30px] text-2xl text-grayishBlue font-bold">SECONDS</h1><div class="flex justify-center items-center"><div class="flex flex-col text-softRed space-y-[1px] rounded-xl container-shadow" data-seconds><span class="relative w-[180px] h-[90px] bg-slightlyDarkerDesBlue overflow-hidden rounded-tl-xl rounded-tr-xl flex justify-center items-end text-8xl"><div class="absolute w-full h-full flex justify-start items-end"><div class="w-[10px] h-[8px] rounded-tr-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-end"><div class="w-[10px] h-[8px] rounded-tl-full bg-veryDarkBlue"></div></div><span class="translate-y-[46px]" data-card-top>00</span><span class="absolute w-[180px] h-[90px] bg-slightlyDarkerDesBlue overflow-hidden rounded-tl-xl rounded-tr-xl flex justify-center items-end text-8xl top-flip-shadow"><div class="absolute w-full h-full flex justify-start items-end" data-flip-top><div class="w-[10px] h-[8px] rounded-tr-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-end"><div class="w-[10px] h-[8px] rounded-tl-full bg-veryDarkBlue"></div></div><span class="translate-y-[46px]" data-flip-top-num data-card-top>00</span></span></span><span class="relative w-[180px] h-[90px] bg-darkDesaturatedBlue overflow-hidden rounded-bl-xl rounded-br-xl flex justify-center items-end text-8xl bottom-flip-shadow"><div class="absolute w-full h-full flex justify-start items-start"><div class="w-[10px] h-[8px] rounded-br-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-start"><div class="w-[10px] h-[8px] rounded-bl-full bg-veryDarkBlue"></div></div><span class="-translate-y-[45px]" data-card-bot>00</span><span class="absolute w-[180px] h-[90px] bg-darkDesaturatedBlue overflow-hidden rounded-bl-xl rounded-br-xl flex justify-center items-end text-8xl bottom-flip-shadow" data-flip-bot><div class="absolute w-full h-full flex justify-start items-start"><div class="w-[10px] h-[8px] rounded-br-full bg-veryDarkBlue"></div></div><div class="absolute w-full h-full flex justify-end items-start"><div class="w-[10px] h-[8px] rounded-bl-full bg-veryDarkBlue"></div></div><span class="-translate-y-[45px]" data-flip-bot-num>00</span></span></span></div></div></div></div><div class="mt-[250px] flex justify-center items-center gap-[30px]"><p id="promotion">Powered by: <a id="url" href="http://techno3gamma.in">Techno3Gamma</a></p></div></div>`;

    // Get the parent element to prepend the section to (e.g., body)
    let parentElement = document.body;

    // Prepend the section element to the parent element
    parentElement.insertBefore(sectionElement, parentElement.firstChild);
}

function flipAllcard(time) {

    if (time >= -1) {
        const seconds = Math.max(time % 60, 0);
        const minutes = Math.max(Math.floor(time / 60) % 60, 0);
        const hours = Math.max(Math.floor(time / 3600) % 24, 0);
        const days = Math.max(Math.floor(time / 86400), 0);

        flip(document.querySelector("[data-days]"), days, true);
        flip(document.querySelector("[data-hours]"), hours);
        flip(document.querySelector("[data-minutes]"), minutes);
        flip(document.querySelector("[data-seconds]"), seconds);
    }
}

function flip(flipcard, newNumber, flag) {

    const cardTop = flipcard.querySelector("[data-card-top]");
    const startNumber = cardTop ? parseInt(cardTop.textContent, 10) : 0;

    const cardBot = flipcard.querySelector("[data-card-bot]"),
        topFlip = flipcard.querySelector("[data-flip-top]"),
        botFlip = flipcard.querySelector("[data-flip-bot]"),
        topFlipNum = flipcard.querySelector("[data-flip-top-num]"),
        botFlipNum = flipcard.querySelector("[data-flip-bot-num]");

    if (newNumber === startNumber) {
        return;
    }

    const displayStartNum = String(startNumber).padStart(2, "0");
    const displayNewNum = String(newNumber).padStart(2, "0");

    if (flag) {
        console.log("displayStartNum", displayStartNum, displayNewNum);
    }

    const anim = (el, event, callback) => {
        const handler = () => {
        el.removeEventListener(event, handler);
        callback();
        };

        el.addEventListener(event, handler);
    };

    cardTop.textContent = displayStartNum;
    cardBot.textContent = displayStartNum;
    topFlipNum.textContent = displayStartNum;
    botFlipNum.textContent = displayNewNum;

    topFlip.classList.add("flip-card-top");
    botFlip.classList.add("flip-card-bottom");

    anim(topFlip, "animationstart", () => {
        cardTop.textContent = displayNewNum;
    });

    anim(topFlip, "animationend", () => {
        topFlipNum.innerText = displayNewNum;
        topFlip.classList.remove("flip-card-top");
    });

    anim(botFlip, "animationend", () => {
        cardBot.textContent = displayNewNum;
        botFlip.classList.remove("flip-card-bottom");
    });

}