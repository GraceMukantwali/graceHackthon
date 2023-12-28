document.addEventListener('click', function(event) {
    var isClickInside = document.querySelector('.sidebar').contains(event.target);
    if (!isClickInside) {
      document.getElementById('check').checked = false;
    }
   });
   