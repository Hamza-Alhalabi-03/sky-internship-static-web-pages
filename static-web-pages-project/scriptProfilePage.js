// profile page data related to the user himself
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
        },
        {
            title: "Vacation Days Left:",
            text: "10 Days",
            icon: ""
        },
        {
            title: "Sick Days Left:",
            text: "14 Days",
            icon: ""
        }
    ]
};

  function loadProfilePageProfileData() {
    
    // Insert profile image and information
    document.getElementById("profile-image-pp").src = personalProfileData.image;
    document.getElementById("profile-name-pp").innerText = personalProfileData.name;
    document.getElementById("profile-position-pp").innerText = personalProfileData.position;
  
    // Insert (Reporting To, Corporate Level, Lifetime, etc.)
    personalProfileData.sections.forEach((section, index) => {
      document.getElementById(`section-title-${index}`).innerText = section.title;
      document.getElementById(`section-text-${index}`).innerText = section.text;
    });
}

const profilePageHistory = {
    titles : [
        "Annual Vacation", "Sick Vacation", "Annual Vacation","Non Paid Vacation","Annual Vacation","Non Paid Vacation","Sick Vacation",
    ],
    date: "2/3/2023 - 10/3/2023",
    days: "8 days",
    approvedBy: "Approved by: Hazem Azmi"
}

const profilePagePending = {
    name : "Ahmad Attar",
    image: "images/ahmad-attar.jpg",
    submitDate: "1/3/2024",
    duration: "2 Weeks (1/4/2023 - 14/4/2023)",
    currentlyAt: "Omar Ahmad"
}


function loadProfilePagePending() {
    
  
    // Insert information
    document.getElementById("pending-image").src = profilePagePending.image;
    document.getElementById("pending-name").innerText = profilePagePending.name;
    document.getElementById("pending-submit").innerText = profilePagePending.submitDate;
    document.getElementById("pending-duration").innerText = profilePagePending.duration;
    document.getElementById("pending-currently").innerText = profilePagePending.currentlyAt;
    document.getElementById("pending2-image").src = profilePagePending.image;
    document.getElementById("pending2-name").innerText = profilePagePending.name;
    document.getElementById("pending2-submit").innerText = profilePagePending.submitDate;
    document.getElementById("pending2-duration").innerText = profilePagePending.duration;
    document.getElementById("pending2-currently").innerText = profilePagePending.currentlyAt;
  
}


  // Load content after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar(); // load the navbar
    loadProfilePageProfileData(); // load profile data on home page
    loadProfilePagePending(); // load pending requests data
});