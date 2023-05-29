const sidebarButton = document.querySelector('.sidebar-button');
    const sidebar = document.querySelector('.sidebar');

    sidebarButton.addEventListener('click', function() {
      sidebar.classList.toggle('opened');
    });