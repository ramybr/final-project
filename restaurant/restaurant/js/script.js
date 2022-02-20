const loadingText = document.querySelector('.loading-txt');
const welcomeText = document.querySelector('.welcome-txt');
const loadingBg = document.querySelector('.bg');
const btn = document.querySelector('.btn');
let load = 0;
let int = setInterval(blurring, 30);
//  SCALE FUNCTION
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// BLURRING FUNCTION
function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }

    loadingText.innerText = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    welcomeText.style.opacity = scale(load, 0, 100, 0, 1);
    btn.style.opacity = scale(load, 90, 100, 0, 1);
    loadingBg.style.filter = `blur(${scale(load, 0, 100, 10, 0)}px)`;

}


blurring();