/*Creating a sidebar with javascript */
let toggleNavStatus = false;

let toggleNav = function(){

  //Declaring the variables and linking them to components in the sidebar
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl= document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks= document.querySelectorAll(".nav-sidebar a");
  //Opens the sidebar if it is clicked on
  if (toggleNavStatus === false){
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++){
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  }
  //closes the sidebar if clicked on
  else if (toggleNavStatus === true){
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++){
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
}