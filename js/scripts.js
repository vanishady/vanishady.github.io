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

/*
document.addEventListener("DOMContentLoaded", function () {
    // Load common elements dynamically
    var sidebar = document.querySelector(".sidebar");
    sidebar.innerHTML = `
        <a href='#bio' style="background: rgba(36, 14, 239, 0.7);">Bio</a>
        <a href='#coding' style="background:rgba(141, 60, 250, 0.7)">Coding</a>
        <a href='#music' style="background:rgba(237, 64, 245, 0.7)">Music</a>
        <a href='#contacts' style="background:rgba(253, 33, 176, 0.7)">Contacts</a>
    `;
});*/


