// Navigation function to show/hide sections
function navigate(page) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Show selected section
    const sectionMap = {
        'vehicles': 'vehicles-section',
        'rent': 'rent-section',
        'lend': 'lend-section',
        'membership': 'membership-section',
        'how-it-works': 'how-it-works-section',
        'login': 'login-section',
        'register': 'register-section',
        'emergency': 'emergency-section',
        'home': 'home-section'
    };

    const sectionId = sectionMap[page] || 'home-section';
    document.getElementById(sectionId).style.display = 'block';

    // Load vehicles if navigating to vehicles section
    if (page === 'vehicles') {
        loadVehicles();
    }

    // Scroll to top of the page
    window.scrollTo(0, 0);
}

// Function to handle booking
function startBooking(type) {
    const bookingMessages = {
        'instant': 'Starting instant booking process...',
        'pre': 'Opening pre-booking calendar...'
    };
    
    alert(bookingMessages[type] || 'Booking process started');
    navigate('vehicles');
}

// Function to load vehicles (dummy data for demonstration)
function loadVehicles() {
    const vehicles = [
        { 
            name: 'SUV Premium', 
            price: '₹5000/day', 
            type: 'instant',
            description: 'Luxury SUV with premium features'
        },
        { 
            name: 'Sedan Deluxe', 
            price: '₹3500/day', 
            type: 'both',
            description: 'Comfortable sedan for city and highway'
        },
        { 
            name: 'Hatchback Economy', 
            price: '₹2000/day', 
            type: 'pre',
            description: 'Fuel-efficient city car' 
        },
        { 
            name: 'Electric Hybrid', 
            price: '₹4500/day', 
            type: 'instant',
            description: 'Eco-friendly hybrid vehicle'
        }
    ];

    const vehicleGrid = document.querySelector('.vehicle-grid');
    vehicleGrid.innerHTML = vehicles.map(vehicle => `
        <div class="booking-option">
            <h3>${vehicle.name}</h3>
            <p>${vehicle.price}</p>
            <p>Booking Type: ${vehicle.type}</p>
            <p>${vehicle.description}</p>
            <button onclick="bookVehicle('${vehicle.name}')">Select Vehicle</button>
        </div>
    `).join('');
}

// Function to handle vehicle booking
function bookVehicle(vehicleName) {
    const confirmBooking = confirm(`Are you sure you want to book ${vehicleName}?`);
    if (confirmBooking) {
        alert(`Booking confirmed for ${vehicleName}. Processing payment...`);
        navigate('home');
    }
}

// Event listener for lend bike form
document.getElementById('lend-bike-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const bikeData = {
        name: document.getElementById('bike-name').value,
        type: document.getElementById('bike-type').value,
        pricePerDay: document.getElementById('price-per-day').value
    };
    
    console.log('Bike Listing Data:', bikeData);
    alert('Bike listed successfully! Our team will review your listing.');
    navigate('home');
});

// Event listener for login form
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const loginData = {
        email: document.getElementById('login-email').value,
        password: document.getElementById('login-password').value
    };
    
    // Simple validation
    if (loginData.email && loginData.password) {
        console.log('Login Attempt:', loginData);
        alert('Login successful! Welcome back to RentalApp.');
        navigate('home');
    } else {
        alert('Please enter both email and password.');
    }
});

// Event listener for registration form
document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const registrationData = {
        name: document.getElementById('register-name').value,
        email: document.getElementById('register-email').value,
        password: document.getElementById('register-password').value,
        documents: {
            aadhar: document.getElementById('register-aadhar').files[0]?.name,
            pan: document.getElementById('register-pan').files[0]?.name,
            license: document.getElementById('register-license').files[0]?.name
        }
    };
    
    // Simple validation
    if (registrationData.name && registrationData.email && registrationData.password) {
        if (registrationData.documents.aadhar && registrationData.documents.pan && registrationData.documents.license) {
            console.log('Registration Data:', registrationData);
            alert('Registration successful! Please login to continue.');
            navigate('login');
        } else {
            alert('Please upload all required documents.');
        }
    } else {
        alert('Please fill in all registration details.');
    }
});

// Event listener for emergency assistance form
document.getElementById('emergency-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const emergencyData = {
        type: document.getElementById('emergency-type').value,
        location: document.getElementById('emergency-location').value,
        rentalId: document.getElementById('emergency-rental-id').value,
        details: document.getElementById('emergency-details').value,
        name: document.getElementById('emergency-name').value,
        phone: document.getElementById('emergency-phone').value
    };
    
    // Validation for emergency form
    if (emergencyData.type && emergencyData.location && emergencyData.name && emergencyData.phone) {
        console.log('Emergency Assistance Request:', emergencyData);
        alert('Emergency request received. Our support team will contact you within 5 minutes!');
        navigate('home');
    } else {
        alert('Please fill in all required emergency details.');
    }
});

// Function to handle membership plan sign-up
function signUpForPlan(plan) {
    const confirmPlan = confirm(`Are you sure you want to sign up for the ${plan} plan?`);
    if (confirmPlan) {
        alert(`You've successfully signed up for the ${plan} membership plan.`);
        console.log(`Membership plan selected: ${plan}`);
        navigate('home');
    }
}

// Function to navigate to the Vehicles section
function navigateToVehicles() {
    navigate('vehicles');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    navigate('home');
});