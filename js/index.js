const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

/* All DOM variables*/ 

// returns first element (querySelector)
//const header = document.querySelector('header');

// returns all a tags within nav element
const navLinks = document.querySelectorAll('nav a');

const ctaImg = document.querySelector('img#cta-img');
const ctaH1 = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");

const mainContentH4 = document.querySelectorAll('h4');
const mainContentP = document.querySelectorAll('.text-content p');
const middleImg = document.querySelector('img#middle-img');

const contactH4 = document.querySelector('.contact h4');
const contactContent = document.querySelectorAll('.contact p');

const footerP = document.querySelector('footer p');

// Example: Update the img src for the logo
let logo = document.querySelector("img#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update nav links
for(let i = 0; i < navLinks.length; i ++) {
    navLinks[i].innerHTML = siteContent["nav"][`nav-item-${i+1}`];
}

// Update cta
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
ctaH1.innerHTML = siteContent["cta"]["h1"];
ctaButton.innerHTML = siteContent["cta"]["button"];

// Update main content
const contentList = ['features', 'about', 'services', 'product', 'vision'];

function updateMainContent(contentList) {
  for(let i = 0; i < contentList.length; i ++) {
    mainContentH4[i].innerHTML = siteContent["main-content"][`${contentList[i]}-h4`];
    mainContentP[i].innerHTML = siteContent["main-content"][`${contentList[i]}-content`];
  }
  middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
}

updateMainContent(contentList);

contactH4.innerHTML = siteContent['contact']['contact-h4'];

const contactContentTitles = ['address', 'phone', 'email'];

for(let i = 0; i < contactContent.length; i++) {
  contactContent[i].innerHTML = siteContent['contact'][`${contactContentTitles[i]}`];
}

footerP.innerHTML = siteContent['footer']['copyright'];