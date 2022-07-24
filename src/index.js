// Import stylesheet
import './style.css';

// Images
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

// Gather all images based on location in the grid
const images = [logo, home, user, comment, past, ballot, userAlt, settings, help, protection];

// Get all the image elements inside the sidebar
const sidebarIcons = Array.from(document.querySelectorAll('.sidebar img'));

// Dynamically set the source
for(let i = 0; i < sidebarIcons.length; i++) {
    sidebarIcons[i].src = images[i];
}






