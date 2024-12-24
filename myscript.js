// const images = document.querySelectorAll('.karuselka img.img2');
// const controls = document.querySelectorAll('.smalls');
// let imageIndex = 0;

// // Function to show the image by index
// function show(index) {
//   images[imageIndex].classList.remove('active'); // Remove the 'active' class from the current image
//   images[index].classList.add('active'); // Add the 'active' class to the new image
//   imageIndex = index; // Update the current image index
// }

// // Event listeners for prev and next buttons
// controls.forEach((control) => {
//   control.addEventListener('click', (event) => {
//     if (event.target.classList.contains('prev')) {
//       let index = imageIndex - 1;
//       if (index < 0) {
//         index = images.length - 1; // Loop to the last image if on the first image
//       }
//       show(index);
//     } else if (event.target.classList.contains('next')) {
//       let index = imageIndex + 1;
//       if (index >= images.length) {
//         index = 0; // Loop to the first image if on the last image
//       }
//       show(index);
//     }
//   });
// });

// // Initially show the first image
// show(imageIndex);


document.getElementById('scrollToContacts').addEventListener('click', function() {
    const contactsHeader = document.getElementById('contactsHeader');
    if (contactsHeader) {
        contactsHeader.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error('Element with ID "contactsHeader" not found.');
    }
});

document.getElementById('scrollToIntroduction').addEventListener('click', function() {
    const introductionHeader = document.getElementById('introductionHeader');
    if (introductionHeader) {
        introductionHeader.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error('Element with ID "introductionHeader" not found.');
    }
});



document.getElementById('scrollToContent').addEventListener('click', function() {
    const ContentHeader = document.getElementById('ContentHeader');
    if (ContentHeader) {
        ContentHeader.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error('Element with ID "portfolioImage" not found.');
    }
});




document.getElementById('scrollToportfolio-image').addEventListener('click', function() {
    const portfolioImage = document.getElementById('portfolioImage');
    if (portfolioImage) {
        portfolioImage.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error('Element with ID "portfolioImage" not found.');
    }
});
