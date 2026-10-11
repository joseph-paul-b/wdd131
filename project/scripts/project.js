const interestForm = document.querySelector(`#interest-form`);
const topicInterest = document.querySelector(`#topic-interest`);
const interestMessage = document.querySelector(`#interest-message`);
const currentYear = document.querySelector(`#current-year`);

const topics = [
    { name: `Proteins`, description: `Learn how proteins support living organisms.` },
    { name: `Carbohydrates`, description: `Explore how carbohydrates provide energy.` },
    { name: `Lipids`, description: `Discover how lipids store energy and form cell membranes.` },
    { name: `Enzymes`, description: `Understand how enzymes help chemical reactions.` },
    { name: `ATP and metabolism`, description: `Explore how cells transfer and use energy.` }
];

function saveInterest(event) {
    event.preventDefault();

    const selectedTopic = topicInterest.value;

    if (selectedTopic === ``) {
        interestMessage.textContent = `Please select a topic before saving your interest.`;
        return;
    }

    const topic = topics.find(item => item.name === selectedTopic);

    if (topic) {
        localStorage.setItem(`biochemInterest`, selectedTopic);

        interestMessage.textContent = `Your interest in ${topic.name} has been saved! ${topic.description}`;
    }
}

function loadInterest() {
    const savedTopic = localStorage.getItem(`biochemInterest`);

    if (savedTopic) {
        const topicExists = topics.some(item => item.name === savedTopic);

        if (topicExists) {
            topicInterest.value = savedTopic;
            interestMessage.textContent = `Welcome back! Your saved topic is ${savedTopic}.`;
        }
    }
}

if (interestForm && topicInterest && interestMessage) {
    interestForm.addEventListener(`submit`, saveInterest);
    loadInterest();
}

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}