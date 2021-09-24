/* To zoom in the projects miniatures on mouseover and mouseout*/

let hoverAll = document.getElementsByClassName('gridEl');


let hoover = (a) => {
    a.style.transform = 'scale(1.1)';
    a.style.transition = 'all .5s';
    a.style.border = '2px solid yellow'
}

let mouseOut = (a) => {
    a.style.transform = 'scale(1.0)';
    a.style.transition = 'all .5s';
    a.style.border = ''
}


hoverAll[0].onmouseover = function () {hoover(hoverAll[0])};
hoverAll[0].onmouseout = function () {mouseOut(hoverAll[0])};

hoverAll[1].onmouseover = function () {hoover(hoverAll[1])};
hoverAll[1].onmouseout = function () {mouseOut(hoverAll[1])};

hoverAll[2].onmouseover = function () {hoover(hoverAll[2])};
hoverAll[2].onmouseout = function () {mouseOut(hoverAll[2])};

hoverAll[3].onmouseover = function () {hoover(hoverAll[3])};
hoverAll[3].onmouseout = function () {mouseOut(hoverAll[3])};

/* Zoom-in on hover of contacts icons */

let github = document.getElementById('github')

let change = (b) => {
    b.style.transform = 'scale(2)';
    b.style.transition = 'all .5s';

}
let undo = (b) => {
    b.style.transform = 'scale(1)';
    b.style.transition = 'all .3s';
}

github.onmouseover = function () {change(github)};
github.onmouseout = function () {undo(github)};

linkedin.onmouseover = function () {change(linkedin)};
linkedin.onmouseout = function () {undo(linkedin)};

email.onmouseover = function () {change(email)};
email.onmouseout = function () {undo(email)};


