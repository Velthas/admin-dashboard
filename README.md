## Admin Dashboard
### Live at: https://velthas.github.io/admin-dashboard
Admin-dashboard is just a page layout made by leaning specifically on CSS Grid and the various properties I've been learning about in the intermediate HTML and CSS course in The Odin Project

### 1. Grid
The star player for this project was Grid, which allowed me to lay out my page in very precise ways even for two dimensional layouts. The properties I used include:

 1. grid-template-columns / grid-template-rows / grid-template
 2. grid-gap
 3. justify-items / align-items / align-self / justify-self
 4. grid-row / grid-column

Some properties I did not find too useful, think for example of text-areas, but I imagine they have some case use that is not yet very clear to me.

### 2. Grid or Flex?
Something that came up during the course was wether one of either Grid or Flex is superior to the other: the answer is simply no.

Grid is amazing for two dimensional layouts, allowing us to achieve responsiveness even without actively going out of your way to write lenghty media queries. 

An example of this was used in this very project, combining the magic of auto-fit with the minmax() function, available only to grid. As a result, the project section is fully responsive with just that line of code, splitting and collapsing depending on page size. As Doug from CS50 would put it, it's kind of sexy, yeah?

This being said, Flex came in handy for one dimensional layouts, and is used pretty consistently throughout the whole project, to arrange sidebar entries and header images and text.

In short, truly no tool is better than the other, and are best used in combination for best results.
