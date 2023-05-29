document.addEventListener('DOMContentLoaded', function() {
    const cards = Array.from(document.querySelectorAll('.card'));
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const paginationLinks = document.querySelectorAll('.page');
  
    let currentPage = 1;
    const cardsPerPage = 5;
  
    showPage(currentPage);
  
    prevBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
      }
    });
  
    nextBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const totalPages = Math.ceil(cards.length / cardsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
      }
    });
  
    paginationLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        currentPage = parseInt(link.textContent);
        showPage(currentPage);
      });
    });
  
    function showPage(page) {
      const startIndex = (page - 1) * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
  
      cards.forEach(function(card, index) {
        if (index >= startIndex && index < endIndex) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
  
      updatePagination(page);
    }
  
    function updatePagination(page) {
      paginationLinks.forEach(function(link) {
        if (Number(link.textContent) === page) {
          link.classList.add('current');
        } else {
          link.classList.remove('current');
        }
      });
  
      if (currentPage === 1) {
        prevBtn.classList.add('disabled');
      } else {
        prevBtn.classList.remove('disabled');
      }
  
      const totalPages = Math.ceil(cards.length / cardsPerPage);
      if (currentPage === totalPages) {
        nextBtn.classList.add('disabled');
      } else {
        nextBtn.classList.remove('disabled');
      }
    }
  });
  