// Variable
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");
const social = document.querySelector("#social-nav");
const tab = document.querySelector(".main-col-container")
const options = document.querySelector(".main-col-titles")
const form = document.forms.newsletter;
const inputForm = document.getElementById("input-newsletter");
const error = document.querySelector(".error");
const accItem = document.getElementsByClassName('accordion-item');
const accHD = document.getElementsByClassName('accordion-question');

// EventListener to open haamburger menu
hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  nav.classList.toggle("active");
  social.classList.toggle("active");
})

// EventListener to close hamburger menu
navItem.forEach((item) => {
     item.addEventListener("click", function(){
       hamburger.classList.remove("active");
       nav.classList.toggle("active");
       navMenu.classList.remove("active");
       social.classList.remove("active");
     })
});

// TabContent object
const tabsContent = [
    {
      img: 'images/illustration-features-tab-1.svg',
      heading2: 'Bookmark in one click',
      paragraph:
        'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
      img: 'images/illustration-features-tab-2.svg',
      heading2: 'Intelligent search',
      paragraph:
        'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
      img: 'images/illustration-features-tab-3.svg',
      heading2: 'Share your bookmarks',
      paragraph:
        'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
];

// changing the tab content based on clicked option above it
const tabChanging = (e) => {

    const index = e.target.dataset.position;
    const { img, heading2, paragraph } = tabsContent[index];

    tab.innerHTML = '';
    tab.insertAdjacentHTML(
      'beforeend',
      ` <img src="${img}" alt="" class="header-img col-6" height="350px" width="300">
        <div class="blue-bg main-blue-bg"></div>
        <div class="main-col-text col-6" id="bookmarking">
            <h2 class="main-col-heading heading-color">
            ${heading2}
            </h2>
            <p class="main-col-desc desc-color">
                ${paragraph}
            </p>
        <a href="" class="more-info-btn blue-link">
          More Info
        </a>
      </div>
      `
    );
  };

  options.addEventListener('click', tabChanging);
  options.addEventListener('mouseover', e => {
    e.target.style.boxShadow = `0 1px 0px 0px red`;
  });
  options.addEventListener('mouseout', e => {
    e.target.style.boxShadow = 'none';
  });
  
// Functionns for accordion menu
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordion-item close';
    }
    if (itemClass == 'accordion-item close') {
        this.parentNode.className = 'accordion-item open';
    }
}

let regex = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
// EventListener for form to show error on wrong email format
form.addEventListener("submit", function(event){

  event.preventDefault();

  if(!inputForm.value){
    error.classList.add("show");
    inputForm.classList.add("show");
    error.innerHTML = "Enter Email";
    return;
  }
  if(!regex.test(inputForm.value)){
    error.classList.add("show");
    inputForm.classList.add("show");
    error.innerHTML="Whoops, make sure it's an email";
    return;
  }

  error.classList.remove("show");
  inputForm.classList.remove("show");
  error.innerHTML = "";
  inputForm.value = "";
  return;

})
