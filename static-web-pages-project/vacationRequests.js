const vacationRequests = [
    {
        name: "Ahmad Attar",
        image: "images/ahmad-attar.jpg",
        submitDate: "1/3/2024",
        duration: "2 Weeks (1/4/2023 - 14/4/2023)",
        salary: "1000 AED"
    },
    {
        name: "belal Mahmoud",
        image: "images/ahmad-attar.jpg",
        submitDate: "2/3/2024",
        duration: "1 Week (5/4/2023 - 12/4/2023)",
        salary: "1500 AED"
    },
    {
        name: "Khalid Othman",
        image: "images/ahmad-attar.jpg",
        submitDate: "10/3/2024",
        duration: "3 Weeks (20/4/2023 - 10/5/2023)",
        salary: "2000 AED"
    },
    {
        name: "salah El Din",
        image: "images/ahmad-attar.jpg",
        submitDate: "12/3/2024",
        duration: "2 Days (15/4/2023 - 16/4/2023)",
        salary: "1500 AED"
    },
    {
        name: "waleed Hassan",
        image: "images/ahmad-attar.jpg",
        submitDate: "15/3/2024",
        duration: "10 Days (18/4/2023 - 28/4/2023)",
        salary: "1000 AED"
    },
    {
        name: "Khalid Othman",
        image: "images/ahmad-attar.jpg",
        submitDate: "10/3/2024",
        duration: "3 Weeks (20/4/2023 - 10/5/2023)",
        salary: "2000 AED"
    },
    {
        name: "abod Elgeri",
        image: "images/ahmad-attar.jpg",
        submitDate: "12/3/2024",
        duration: "2 Days (15/4/2023 - 16/4/2023)",
        salary: "1500 AED"
    },
    {
        name: "fadi Hassan",
        image: "images/ahmad-attar.jpg",
        submitDate: "15/3/2024",
        duration: "10 Days (18/4/2023 - 28/4/2023)",
        salary: "1000 AED"
    },
    {   // 9
        name: "Mostafa Saad",
        image: "images/ahmad-attar.jpg",
        submitDate: "10/3/2024",
        duration: "3 Weeks (20/4/2023 - 10/5/2023)",
        salary: "2000 AED"
    },
    {   // 10
        name: "Tamer Yahya",
        image: "images/ahmad-attar.jpg",
        submitDate: "12/3/2024",
        duration: "2 Days (15/4/2023 - 16/4/2023)",
        salary: "1500 AED"
    },
    {   // 11
        name: "Hassan Naji",
        image: "images/ahmad-attar.jpg",
        submitDate: "15/3/2024",
        duration: "10 Days (18/4/2023 - 28/4/2023)",
        salary: "1000 AED"
    }
    ,
    {   // 12
        name: "David ali",
        image: "images/ahmad-attar.jpg",
        submitDate: "15/3/2024",
        duration: "10 Days (18/4/2023 - 28/4/2023)",
        salary: "1000 AED"
    }
];

function loadsmallVacation() {
    // Select all the cards that contain the class 'vacationRequests-card'
    const vacationCards = document.querySelectorAll(".vacationRequests-card");

    // Iterate over the first three objects in the vacationRequests array
    vacationCards.forEach((card, index) => {
        if (index < vacationRequests.length) {
            const request = vacationRequests[index];
            
            // Set the values of each card's fields
            card.querySelector("#pending-image").src = request.image;
            card.querySelector("#pending-name").innerText = request.name;
            card.querySelector("#pending-submit").innerText = request.submitDate;
            card.querySelector("#pending-duration").innerText = request.duration;
            card.querySelector("#pending-currently").innerText = request.salary;
        }
    });
}

function loadlargeVacation() {
    // Select all the cards that contain the class 'vacationRequests-card'
    const vacationCards = document.querySelectorAll(".vacationRequests-card");

    // Iterate over the first three objects in the vacationRequests array
    vacationCards.forEach((card, index) => {
        if (index < vacationRequests.length) {
            const request = vacationRequests[index];
            
            // Set the values of each card's fields
            card.querySelector("#pending-image").src = request.image;
            card.querySelector("#pending-name").innerText = request.name;
            card.querySelector("#pending-submit").innerText = request.submitDate;
            card.querySelector("#pending-duration").innerText = request.duration;
            card.querySelector("#pending-currently").innerText = request.salary;
        }
    });
}


function filterCards() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase();
    const cards = document.getElementsByClassName('vacation-card');
    
    for (let i = 0; i < cards.length; i++) {
        const cardTitle = cards[i].getAttribute('data-name').toLowerCase();

        if (cardTitle.includes(searchValue)) {
            cards[i].style.display = 'block'; // Show the card
        } else {
            cards[i].style.display = 'none';  // Hide the card
        }
    }
}


// Function to select all checkboxes
function selectAll() {
    const checkboxes = document.querySelectorAll('.card-checkbox');
    const selectAllButton = document.getElementById('select-all-btn');
    
    if (selectAllButton.textContent === 'Select All') {
        checkboxes.forEach(checkbox => checkbox.checked = true);
        selectAllButton.textContent = 'Deselect All'; // Change button text to 'Deselect All'
    } else {
        checkboxes.forEach(checkbox => checkbox.checked = false);
        selectAllButton.textContent = 'Select All'; // Change button text back to 'Select All'
    }
}





// Load content after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes("home.html")) {
        loadsmallVacation();
    }
    if (window.location.pathname.includes("vacation-request.html")) {
        loadlargeVacation();
    }
});


