window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    var content = document.getElementById('content');
  
    loadingScreen.style.display = 'none'; // Hide the loading screen
    content.style.display = 'block'; // Show the content after all images are loaded
  });
  