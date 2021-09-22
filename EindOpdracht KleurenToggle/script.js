//Het toggle menu

const toggleNavStatus = false;

const toggleNav = function () {
    const getSidebar = document.querySelector(".nav-sidebar");
    const getSidebarUl = document.querySelector(".nav-sidebar ul");
    const getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "300px";


        const arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        const toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "0px";
        getSidebarUl.style.visibility = "hidden";

        const arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {

            getSidebarLinks[i].style.opacity = "0";


        }
        const toggleNavStatus = false;
    }
}

//Veranderenvan achtergrond kleuren.

//wit achtergrond
const changeColorToWhite = function () {
    document.body.style.backgroundColor = "White";
};
const backGrWhite = document.getElementById("home-Btn");
backGrWhite.addEventListener('click', function () { changeColorToWhite(), toggleNav() });

//rood achtergrond
const changeColorToRed = function () {
    document.body.style.backgroundColor = "red";
};
const backGrRed = document.getElementById("red-Btn");
backGrRed.addEventListener('click', function () { changeColorToRed(), toggleNav() });

//oranje achtergrond
const changeColorToOrange = function () {
    document.body.style.backgroundColor = "orange";
};
const backGrOrange = document.getElementById("orange-Btn");
backGrOrange.addEventListener('click', function () { changeColorToOrange(), toggleNav() });

//paars achtergrond
const changeColorToPurple = function () {
    document.body.style.backgroundColor = "purple";
};
const backGrPurple = document.getElementById("purple-Btn");
backGrPurple.addEventListener('click', function () { changeColorToPurple(), toggleNav() });

//groen achtergrond
const changeColorToGreen = function () {
    document.body.style.backgroundColor = "green";
};
const backGrGreen = document.getElementById("green-Btn");
backGrGreen.addEventListener('click', function () { changeColorToGreen(), toggleNav() });


