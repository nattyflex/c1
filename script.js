const typhoonContainer = document.getElementById('typhoon-container');

// Function to create a typhoon
function createTyphoon() {
    const typhoon = document.createElement('div');
    typhoon.className = 'typhoon';
    
    // Set random size and position
    const size = Math.random() * 100 + 50; // Size between 50px and 150px
    typhoon.style.width = `${size}px`;
    typhoon.style.height = `${size}px`;
    typhoon.style.left = `${Math.random() * (window.innerWidth - size)}px`;
    typhoon.style.top = `${Math.random() * (window.innerHeight - size)}px`;
    
    // Add click event to the typhoon
    typhoon.addEventListener('click', function() {
        // Randomly determine the direction to fly off (left or right)
        const direction = Math.random() < 0.5 ? 'left' : 'right';
        const flyOffDistance = direction === 'left' ? '-200%' : '200%'; // Move off-screen

        // Apply rotation and translation
        typhoon.style.transition = 'transform 1s ease-out'; // Set transition for smooth effect
        typhoon.style.transform = `rotate(360deg) translateX(${flyOffDistance})`; // Rotate and move

        // Increase the number of spawns by 5
        for (let i = 0; i < 5; i++) {
            setTimeout(createTyphoon, i * 100); // Spawn 5 new typhoons with a slight delay
        }

        // Remove the typhoon after the animation
        setTimeout(() => {
            typhoon.remove(); // Remove the typhoon from the DOM
        }, 1000); // Match the timeout with the transition duration
    });

    typhoonContainer.appendChild(typhoon);
}

// Function to spawn typhoons infinitely
function spawnTyphoons() {
    createTyphoon();
    setTimeout(spawnTyphoons, 500); // Spawn a new typhoon every 500 milliseconds (0.5 seconds)
}

// Start spawning typhoons
spawnTyphoons();