/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


document.addEventListener('DOMContentLoaded', function() {
    const sidebarRoot = document.getElementById('sidebar-root');
    if (sidebarRoot) {
        fetch('../common/sidebar.html')
            .then(function(response) { return response.text(); })
            .then(function(html) {
                sidebarRoot.innerHTML = html;
                setupSidebarLinks();
            });
        return;
    }

    setupSidebarLinks();
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container-parent.bio-page');
    if (container) {
        container.addEventListener('wheel', function(e) {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        }, { passive: false });
    }
});

function setupSidebarLinks() {
    const links = document.querySelectorAll('.sidebar a');
    const currentPath = window.location.pathname.toLowerCase();

    links.forEach(function(link) {
        const linkPath = new URL(link.getAttribute('href'), window.location.href).pathname.toLowerCase();
        if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });
    
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
}






