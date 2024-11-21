$(document).ready(function() {
    updateCount();

    $('.close').click(function() {
        $(this).closest('.warning').hide();
        updateCount();
        updateVisibility();
    });

    $('.check').change(function() {
        if ($(this).is(':checked')) {
            $(this).closest('.warning').hide();
        }
        updateCount();
        updateVisibility();
    });

    setInterval(function() {
        if ($('.warning:visible').length === 0) {
            let uncheckedDivs = $('.warning').filter(function() {
                return !$(this).find('.check').is(':checked');
            });
            if (uncheckedDivs.length > 0) {
                let randomDiv = uncheckedDivs.eq(Math.floor(Math.random() * uncheckedDivs.length));
                randomDiv.show();
            }
        }
        updateVisibility();
    }, 3000);

    function updateCount() {
        let uncheckedCount = $('.check').not(':checked').length;
        $('#count').text(uncheckedCount);
        if (uncheckedCount === 0) {
            $('.first').hide();
            $('.second').removeClass('hidden');
        } else {
            $('.first').show();
            $('.second').addClass('hidden');
        }
        updateVisibility();
    }

    function updateVisibility() {
        if ($('.second').is(':visible')) {
            $('.first').hide();
        } else if ($('.warning:visible').length > 0) {
            $('.first').hide();
        } else {
            $('.first').show();
        }
    }
        $("#miTexto").click(function() {
        window.location.href = "https://camposcocoala.github.io/";
    });
});
