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