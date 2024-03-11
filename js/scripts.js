/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar a');
    
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove active class from all links
            links.forEach(function(link) {
                link.classList.remove('active');
            });
            
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});




