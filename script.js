document.addEventListener('DOMContentLoaded', function() {
    const presents = document.getElementById('presents');
    const mainTitle = document.getElementById('mainTitle');
    const feature1 = document.getElementById('feature1');
    const feature2 = document.getElementById('feature2');
    const feature3 = document.getElementById('feature3');
    const continueButton = document.getElementById('continueButton');
    
    const elements = [presents, mainTitle, feature1, feature2, feature3];
    
    let index = 0;
    
    const showElement = (element) => {
        element.classList.remove('hidden');
        element.classList.add('fadeIn');
        element.style.visibility = 'visible';
        element.style.opacity = 1;
    };
    
    const animateNextElement = () => {
        if (index < elements.length) {
            showElement(elements[index]);
            index++;
            setTimeout(animateNextElement, 1000); // Change to 1 second
        } else {
            // Reveal the continue button after all elements are shown
            continueButton.classList.remove('hidden');
            continueButton.classList.add('fadeIn');
            continueButton.style.visibility = 'visible';
            continueButton.style.opacity = 1;
            continueButton.addEventListener('click', () => window.location.href = './purpose.html');
        }
    };
    
    animateNextElement();
});