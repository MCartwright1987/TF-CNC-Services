window.addEventListener('scroll', function() {
    var titleImageAndTxt = document.querySelector('.titleImageAndTxt');
    var img = document.querySelector('.titleImageAndTxt img');
  
    var scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    // Adjust the translateY value to control the downward movement
    var translateY = Math.min(190, scrollY * 0.6); // Adjust the factor as needed
  
    img.style.transform = 'translate(50px, ' + translateY + 'px)';
  });