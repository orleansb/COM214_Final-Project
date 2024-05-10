function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  // Toggle the 'open' class which controls the visibility and transformation of the menu and icon
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add event listeners to the hamburger icon for better performance and separation of concerns
document.addEventListener('scroll', function() {
  var windowHeight = window.innerHeight;
  var textContainer = document.querySelector('.section__text');
  var imageContainerHeight = document.querySelector('.section__pic-container').offsetHeight;
  var textContainerBottom = textContainer.offsetTop + textContainer.offsetHeight;
  
  if (window.scrollY + windowHeight > textContainerBottom + imageContainerHeight) {
      textContainer.style.position = 'absolute'; // Keeps the text within the image
      textContainer.style.bottom = '0'; // Aligns text to the bottom of the image container
      textContainer.style.top = 'auto'; // Prevents the top property from affecting the position
  } else {
      textContainer.style.position = 'fixed'; // Text will scroll with the page
      textContainer.style.top = '50%'; // Center text vertically in the viewport
      textContainer.style.bottom = 'auto'; // Ensure bottom doesn't affect position
  }
});

