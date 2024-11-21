$(document).ready(function() {
    function updateCount() {
        let uncheckedCount = $('.state-checkbox').not(':checked').length;
        $('#count').text(uncheckedCount);

        if (uncheckedCount === 0) {
            $('.first').hide();
            $('.secondhidden').show(); // Show secondhidden
        } else {
            $('.first').show();
            $('.secondhidden').hide(); // Hide secondhidden
        }
        updateVisibility();
    }

    function updateVisibility() {
        if ($('.secondhidden').is(':visible')) {
            $('.first').hide();
        } else if ($('.advertencia1:visible, .advertencia2:visible, .advertencia3:visible').length > 0) {
            $('.first').hide();
        } else {
            $('.first').show();
        }
    }

    $('.close').click(function() {
        $(this).closest('.advertencia1, .advertencia2, .advertencia3').hide();
        updateCount();
        updateVisibility();
    });

    $('.state-checkbox').change(function() {
        if ($(this).is(':checked')) {
            $(this).closest('.advertencia1, .advertencia2, .advertencia3').hide();
        }
        updateCount();
        updateVisibility();
    });

    setInterval(function() {
        if ($('.advertencia1:visible, .advertencia2:visible, .advertencia3:visible').length === 0) {
            let uncheckedDivs = $('.advertencia1, .advertencia2, .advertencia3').filter(function() {
                return !$(this).find('.state-checkbox').is(':checked');
            });
            if (uncheckedDivs.length > 0) {
                let randomDiv = uncheckedDivs.eq(Math.floor(Math.random() * uncheckedDivs.length));
                randomDiv.show();
            }
        }
        updateVisibility();
    }, 3000);

    updateCount();
          $("#miTexto").click(function() {
        window.location.href = "https://camposcocoala.github.io/warnings";
    });
});
