// Create and style elements using JavaScript

// Create a function to set styles for elements
function setStyles(element, styles) {
    Object.assign(element.style, styles);
}

// Create main container
const container = document.createElement('div');
setStyles(container, {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f4f4f4',
    margin: '0',
    padding: '0',
});

// Create header
const header = document.createElement('header');
setStyles(header, {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
});

// Create navigation
const nav = document.createElement('nav');
const navList = document.createElement('ul');
['Home', 'About Us', 'Services', 'Contact'].forEach((text) => {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.textContent = text;
    navLink.href = `#${text.toLowerCase().replace(' ', '')}`;
    setStyles(navLink, {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 15px',
    });
    navItem.appendChild(navLink);
    setStyles(navItem, { display: 'inline' });
    navList.appendChild(navItem);
});
nav.appendChild(navList);
header.appendChild(nav);

// Create main title
const mainTitle = document.createElement('h1');
mainTitle.textContent = 'Welcome to Lion King Parties & Events Filming Co. L.L.C.';
header.appendChild(mainTitle);

// Create About Us section
const aboutSection = document.createElement('section');
aboutSection.id = 'about';
setStyles(aboutSection, {
    padding: '20px',
    margin: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
});

const aboutTitle = document.createElement('h2');
aboutTitle.textContent = 'About Us';
const aboutText = document.createElement('p');
aboutText.textContent = 'We bring your events to life with unmatched creativity and filming excellence.';

aboutSection.appendChild(aboutTitle);
aboutSection.appendChild(aboutText);

// Create Services section
const servicesSection = document.createElement('section');
servicesSection.id = 'services';
setStyles(servicesSection, {
    padding: '20px',
    margin: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
});

const servicesTitle = document.createElement('h2');
servicesTitle.textContent = 'Our Services';

const eventPlanningService = document.createElement('div');
const eventPlanningTitle = document.createElement('h3');
eventPlanningTitle.textContent = 'Event Planning';
const eventPlanningText = document.createElement('p');
eventPlanningText.textContent = 'We plan events tailored to your desires.';
eventPlanningService.appendChild(eventPlanningTitle);
eventPlanningService.appendChild(eventPlanningText);

const filmingService = document.createElement('div');
const filmingTitle = document.createElement('h3');
filmingTitle.textContent = 'Filming';
const filmingText = document.createElement('p');
filmingText.textContent = 'Professional filming to capture your memorable moments.';
filmingService.appendChild(filmingTitle);
filmingService.appendChild(filmingText);

const learnMoreButton = document.createElement('button');
learnMoreButton.id = 'learnMoreBtn';
learnMoreButton.textContent = 'Learn More';
setStyles(learnMoreButton, {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
});
learnMoreButton.addEventListener('click', () => {
    alert('Learn more about our services by contacting us!');
});

servicesSection.appendChild(servicesTitle);
servicesSection.appendChild(eventPlanningService);
servicesSection.appendChild(filmingService);
servicesSection.appendChild(learnMoreButton);

// Create Contact section
const contactSection = document.createElement('section');
contactSection.id = 'contact';
setStyles(contactSection, {
    padding: '20px',
    margin: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
});

const contactTitle = document.createElement('h2');
contactTitle.textContent = 'Contact Us';

const contactForm = document.createElement('form');
contactForm.id = 'contactForm';

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.placeholder = 'Your Name';

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.placeholder = 'Your Email';

const messageInput = document.createElement('textarea');
messageInput.id = 'message';
messageInput.placeholder = 'Your Message';

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Send';
setStyles(submitButton, {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
});

contactForm.appendChild(nameInput);
contactForm.appendChild(emailInput);
contactForm.appendChild(messageInput);
contactForm.appendChild(submitButton);

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We will get back to you shortly.`);
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

contactSection.appendChild(contactTitle);
contactSection.appendChild(contactForm);

// Create footer
const footer = document.createElement('footer');
setStyles(footer, {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
});

const footerText = document.createElement('p');
footerText.textContent = '© 2024 Lion King Parties & Events Filming Co. L.L.C. All rights reserved.';
footer.appendChild(footerText);

// Append all sections to the container
container.appendChild(header);
container.appendChild(aboutSection);
container.appendChild(servicesSection);
container.appendChild(contactSection);
container.appendChild(footer);

// Append the container to the document body
document.body.appendChild(container);
