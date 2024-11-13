$(document).ready(function() {
  let countZeroReached = false;
  let shownWarnings = [];

  function showWarning() {
    if (!countZeroReached && !$('.advertencia1:visible, .advertencia2:visible, .advertencia3:visible').length) {
      const warnings = $('.advertencia1, .advertencia2, .advertencia3').filter(function() {
        return !$(this).find('.state-checkbox').is(':checked') && !shownWarnings.includes($(this).attr('class'));
      });

      if (warnings.length) {
        const randomWarning = warnings[Math.floor(Math.random() * warnings.length)];
        $(randomWarning).show();
        shownWarnings.push($(randomWarning).attr('class'));

        // Reset shown warnings if all have been displayed
        if (shownWarnings.length === 3) {
          shownWarnings = [];
        }
      } else {
        $('.first').show();
      }
    }

    // Check visibility of warnings
    updateVisibility();
  }

  function updateCount() {
    const uncheckedCount = $('.state-checkbox').not(':checked').length;
    $('#count').text(uncheckedCount);

    // Hide or show paragraphs based on unchecked count
    if (uncheckedCount === 0) {
      $('.first').hide();
      $('.secondhidden').show();
      countZeroReached = true;
    } else {
      $('.secondhidden').hide();
    }
  }

  function updateVisibility() {
    if ($('.advertencia1:visible, .advertencia2:visible, .advertencia3:visible').length) {
      $('.first').hide();
    } else if (!countZeroReached) {
      $('.first').show();
    }
  }

  // Initial call to update count and visibility
  updateCount();
  updateVisibility();

  // Show a random warning every 3 seconds
  setInterval(showWarning, 3000);

  // Close button click handler
  $('.close').click(function() {
    $(this).closest('.advertencia1, .advertencia2, .advertencia3').hide();
    updateVisibility();
    updateCount();
  });

  // Checkbox change handler
  $('.state-checkbox').change(function() {
    $(this).closest('.advertencia1, .advertencia2, .advertencia3').hide();
    updateVisibility();
    updateCount();
  });
});

