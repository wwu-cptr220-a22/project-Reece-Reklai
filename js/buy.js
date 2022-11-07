
    // Script for a return button to the top of the webpage
    // Get the top button
    const topButton = document.getElementById("topButton");

    // When the user scrolls down by 20px from the top of the webpage, button is displayed
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    }

    // Once Button is clicked, Scroll back to top of the webpage
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
