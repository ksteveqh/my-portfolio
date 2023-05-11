let menuVisible = false;
// Function that hide or show menu

function showHideMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function select() {
    // hides the menu once an option is selected
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// this function aplies animations to skills 

// function efectSkill() {
//     var skills = document.getElementById("skills");
//     var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
//     if (distance_skills >= 300){
//         let skills = document.getElementsByClassName("progress");
//         skills[0].classList.add("htmlcss");
//         skills[1].classList.add("javascript");
//         skills[2].classList.add("photoshop");
//         skills[3].classList.add("wordpress");
//         skills[4].classList.add("drupa");
//         skills[5].classList.add("comunication");
//         skills[6].classList.add("teamwork");
//         skills[7].classList.add("creativity");
//         skills[8].classList.add("dedication");
//         skills[9].classList.add("projectManagement");
//     }
// }

// first, I detect the scrolling to apply the animations in the skills bar

// window.onscroll = function(){
//     efectSkill();
// }