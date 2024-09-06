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
    ,
    {   // 13
        name: "Hussam Ali",
        image: "images/ahmad-attar.jpg",
        submitDate: "15/3/2024",
        duration: "10 Days (18/4/2023 - 28/4/2023)",
        salary: "1700 AED"
    }
    ,
    {   // 14
        name: "Sam Badr",
        image: "images/ahmad-attar.jpg",
        submitDate: "15/3/2024",
        duration: "10 Days (18/4/2023 - 28/4/2023)",
        salary: "1000 AED"
    }
    ,
    {   // 15
        name: "Hamza Waleed",
        image: "images/ahmad-attar.jpg",
        submitDate: "15/3/2024",
        duration: "10 Days (18/4/2023 - 28/4/2023)",
        salary: "2000 AED"
    }
];

function loadsmallVacation() {
    // Select the cards with class 'vacationRequests-card'
    const vacationCards = document.querySelectorAll(".vacationRequests-card");

    // Iterate only on three pbjects
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
    // Select all the cards with class 'vacationRequests-card'
    const vacationCards = document.querySelectorAll(".vacationRequests-card");

    // Iterate over the all available
    vacationCards.forEach((card, index) => {
        if (index < vacationRequests.length) {
            const request = vacationRequests[index];
            
            // Set the values of each card
            card.querySelector("#pending-image").src = request.image;
            card.querySelector("#pending-name").innerText = request.name;
            card.querySelector("#pending-submit").innerText = request.submitDate;
            card.querySelector("#pending-duration").innerText = request.duration;
            card.querySelector("#pending-currently").innerText = request.salary;
        }
    });
}

// filter using the search bar to view the similar names
function filterCards() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase();
    const cards = document.getElementsByClassName('vacation-card');
    
    for (let i = 0; i < cards.length; i++) {
        const cardTitle = cards[i].getAttribute('data-name').toLowerCase();

        if (cardTitle.includes(searchValue)) {
            cards[i].style.display = 'block'; // Show 
        } else {
            cards[i].style.display = 'none';  // Hide 
        }
    }
}


// Select all checkboxes
function selectAll() {
    const checkboxes = document.querySelectorAll('.card-checkbox');
    const selectAllButton = document.getElementById('select-all-btn');
    
    if (selectAllButton.textContent === 'Select All') {
        checkboxes.forEach(checkbox => checkbox.checked = true);
        selectAllButton.textContent = 'Deselect All'; // Change button text to "Deselect All"
    } else {
        checkboxes.forEach(checkbox => checkbox.checked = false);
        selectAllButton.textContent = 'Select All'; // Change button text back to "Select All"
    }
}





// Load content after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes("home.html")) {
        loadsmallVacation();
    }
    if (window.location.pathname.includes("vacation-request.html")) {
        loadlargeVacation();
    }
});





// Number of cards per page to determine each page size
const cardsPerPage = 6;
let currentPage = 1;


const cards = Array.from(document.getElementsByClassName('vacation-card'));
const totalCards = cards.length;
const totalPages = Math.ceil(totalCards / cardsPerPage);

// Display cards for the current page
function displayCards() {
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    cards.forEach((card, index) => {
        card.style.display = index >= start && index < end ? 'block' : 'none';
    });

    document.getElementById('current-page').textContent = currentPage;
    document.getElementById('total-pages').textContent = totalPages;

    // Control buttons based on current page
    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages;
}

// Event listeners for pagination buttons
document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayCards();
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayCards();
    }
});

// Initial display
displayCards();
