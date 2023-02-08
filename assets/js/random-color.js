var colors = [
    // '#f7fcf0',
    // '#f3fbed',
    // '#eff9e9',
    // '#ecf8e6',
    // '#e8f6e2',
    // '#e4f5df',
    // '#e0f3db',
    // '#ddf2d8',
    // '#daf1d4',
    // '#d7efd1',
    '#d3eecd',
    '#d0edc9',
    '#cdebc6',
    '#c8e9c3',
    '#c2e7c0',
    '#bce5be',
    '#b6e2bb',
    '#b0e0b9',
    '#aadeb6',
    '#a3dbb7',
    '#9cd8b9',
    '#95d6bb',
    '#8dd3be',
    // '#86d0c0',
    // '#7fcdc3',
    // '#77cac5',
    // '#70c6c8',
    '#69c2ca',
    '#61becd',
    '#5abacf',
    '#53b6d1',
    '#4cb1d2',
    '#46aace',
    '#40a4cb',
    '#3b9ec7',
    '#3597c4',
    '#2f91c1',
    '#2a8bbd',
    '#2485ba',
    '#1e7fb7',
    // '#1879b4',
    // '#1373b2',
    // '#0d6daf',
    // '#0867ab',
    // '#0861a4',
    // '#085a9d',
    // '#085496',
    // '#084d8f',
    // '#084788',
    // '#084081'
];

var buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    var random_color_hover = colors[Math.floor(Math.random() * colors.length)];
    buttons[i].style.backgroundColor = random_color;}

var jlg_btn = document.getElementsByClassName("jlg_btn");
for (let i = 0; i < buttons.length; i++) {
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    var random_color_hover = colors[Math.floor(Math.random() * colors.length)];
    jlg_btn[i].style.backgroundColor = random_color;
}