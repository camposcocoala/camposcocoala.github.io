$(document).ready(function() {
  const divs = ['#div1', '#div2', '#div3'];

  function updateCounts() {
    const uncheckedCount = divs.filter(id => $(id).hasClass('unchecked')).length;
    $('.first').text(`Te faltan ${uncheckedCount} características`);

    if (uncheckedCount === 0) {
      $('.first').hide();
      $('.second').show();
    } else {
      $('.first').show();
      $('.second').hide();
    }
  }

  function toggleParagraphVisibility() {
    const visibleDiv = divs.some(id => !$(id).hasClass('hidden'));
    $('.first').css('display', visibleDiv ? 'none' : 'block');
  }

  function showRandomDiv() {
    toggleParagraphVisibility();

    const visibleDiv = divs.some(id => !$(id).hasClass('hidden'));
    if (visibleDiv) {
      return;
    }

    const uncheckedDivs = divs.filter(id => $(id).hasClass('unchecked'));
    if (uncheckedDivs.length === 0) {
      return;
    }
    const randomDiv = uncheckedDivs[Math.floor(Math.random() * uncheckedDivs.length)];
    $(randomDiv).removeClass('hidden');

    const checkbox = $(randomDiv).find('.state-checkbox');
    checkbox.prop('checked', false);
    checkbox.off('change').on('change', function() {
      if (checkbox.is(':checked')) {
        $(randomDiv).addClass('checked').removeClass('unchecked hidden');
        updateCounts();
        toggleParagraphVisibility();
      }
    });

    const closeButton = $(randomDiv).find('.close-button');
    closeButton.off('click').on('click', function() {
      $(randomDiv).addClass('hidden');
      updateCounts();
      toggleParagraphVisibility();
    });

    updateCounts();
    toggleParagraphVisibility();
  }

  setInterval(showRandomDiv, 3000);
  updateCounts(); // Actualiza el contador al cargar la página
});
