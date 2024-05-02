document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header h1');
  
    header.addEventListener('click', function() {
      // Generate a random color
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      
      // Change the color of the header text
      header.style.color = randomColor;
    });
  });
  
  function openPopup(imageUrl) {
    // Specify the width and height of the popup window
    var width = 600;
    var height = 400;
    
    // Calculate the left and top positions to center the window
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    
    // Open the popup window
    var popupWindow = window.open(imageUrl, 'ImagePopup', 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top);
    
    // Focus the popup window
    if (popupWindow) {
        popupWindow.focus();
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               entry.target.classList.add('visible');
//           } else {
//               entry.target.classList.remove('visible');
//           }
//       });
//   }, {
//       threshold: 3 // Adjust if necessary to trigger earlier or later
//   });

//   const elements = document.querySelectorAll('.fade-in');
//   elements.forEach(el => observer.observe(el));
// });
