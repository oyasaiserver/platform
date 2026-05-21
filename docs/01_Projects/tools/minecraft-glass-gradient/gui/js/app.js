/**
 * app.js
 * Core application logic for Sidebar Navigation.
 */

document.addEventListener('DOMContentLoaded', () => {

    const navItems = document.querySelectorAll('.nav-item');
    const toolViews = document.querySelectorAll('.tool-view');

    // Handle Sidebar Navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');

            // Update active state on nav links
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show target view, hide others
            toolViews.forEach(view => {
                if (view.id === targetId) {
                    view.classList.add('active');
                } else {
                    view.classList.remove('active');
                }
            });
        });
    });

});
