// Load the navbar and highlight the current page
function loadNavbar() {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
  
        // Highlight the current page in the navbar
        highlightCurrentPage();
      })
      .catch(error => console.error('Error loading navbar:', error));
  }
  
// Highlight the current page
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'home.html'; // consider 'home.html' a default

    const navItems = {
        'home.html': 'nav-home',
        'profile.html': 'nav-profile',
        'vacation-request.html': 'nav-home'
    };

    // Loop through the navItems to find and highlight current page
    Object.keys(navItems).forEach(page => {

        if (currentPage == page) {
            // add a class to the current opened page
            document.getElementById(navItems[page]).classList.add('active-current-link');
        }
    });
}


// profile page data related to the user himself
const personalProfileData = {
    welcomeMessage: "Welcome Back Hazem! Here are your latest updates.",
    image: "images/ahmad-azmi.jpg",
    name: "Ahmad Azmi",
    position: "Junior Accounting Officer",
    sections: [
        {
            title: "Reporting To:",
            text: "Salwa Assem",
            icon: ""
        },
        {
            title: "Corporate Level:",
            text: "Level 10",
            icon: ""
        },
        {
            title: "Lifetime:",
            text: "2.5 Years",
            icon: ""
            // <i class="fa-regular fa-hourglass-half" style="color: #9f9e9e;"></i>
        },
        {
            title: "Vacation Days Left:",
            text: "10 Days",
            icon: ""
            // <i class="fa-solid fa-tree" style="color: #9f9e9e;"></i>
        },
        {
            title: "Sick Days Left:",
            text: "14 Days",
            icon: ""
            // <i class="fa-thin fa-suitcase-medical" style="color: #9f9e9e;"></i>
        }
    ]
};


function loadHomePageProfileData() {
    // Insert welcome message
    document.getElementById("welcome-message").innerText = personalProfileData.welcomeMessage;
  
    // Insert profile image and information
    document.getElementById("profile-image").src = personalProfileData.image;
    document.getElementById("profile-name").innerText = personalProfileData.name;
    document.getElementById("profile-position").innerText = personalProfileData.position;
  
    // Insert (Reporting To, Corporate Level)
    personalProfileData.sections.forEach((section, index) => {
      document.getElementById(`section-title-${index}`).innerText = section.title;
      document.getElementById(`section-text-${index}`).innerText = section.text;
    });
  }


// images path and text
const images = [
    {
      src: "images/water-image.jpg",
      title: "Best Spots For A Summer Vacation",
      text: "Check out these spots where we provide discount"
    },
    {
      src: "images/forest-image.jpg",
      title: "Adventure In The Forest",
      text: "If you're excited about adventure"
    },
    {
      src: "images/fish-image.jpg",
      title: "Curious About Marine Creatures?",
      text: "Your chance to discover the sea world!."
    }
  ];


 






 // Load content after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar(); // load the navbar
    loadHomePageProfileData(); // load profile data on home page
    
});



  