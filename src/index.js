// Import stylesheet
import './style.css';

// Sidebar Images
import ballot from './images/ballot.svg';
import comment from './images/comments.svg';
import home from './images/home.svg';
import help from './images/life-ring.svg';
import settings from './images/settings.svg';
import protection from './images/shield-check.svg';
import past from './images/time-past.svg';
import user from './images/user.svg';
import userAlt from './images/users-alt.svg';
import logo from './images/interface.svg';

//Header Images
import noBell from './images/bell-no.svg';
import yesBell from './images/bell-yes.svg';
import search from './images/search.svg';
import birb from './images/birb.jpg';

// Gather all images in the sidebar based on location in the grid
const images = [logo, home, user, comment, past, ballot, userAlt, settings, help, protection];

// Get all the image elements inside the sidebar
const sidebarIcons = Array.from(document.querySelectorAll('.sidebar img'));

// Dynamically set the source
for(let i = 0; i < sidebarIcons.length; i++) {
    sidebarIcons[i].src = images[i];
}

// Gather all images in the header
const headerImages = [search, noBell, birb];

// Gather all the images element in the hader
const headerImgs = Array.from(document.querySelectorAll('.header img'));

// Change their source dinamically
for(let i = 0; i < headerImages.length; i++) {
    headerImgs[i].src = headerImages[i];
}







// Add tiny animation for fun
// There are two images in, this will only get the notification bell
const bellImg = document.querySelector('.user-bar img');

// Counter
let counter = 0;

bellImg.addEventListener('click', function () {
    if(counter === 0) {
        bellImg.src = yesBell;
        counter = 1; 
    } else {
        bellImg.src = noBell;
        counter = 0;
    }
    
});






