/**
 * The following allows smooth scrolling for anchor links within the same page
 */
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        1000,
        'swing'
    )
});