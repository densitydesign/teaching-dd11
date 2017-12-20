$(document).ready(function () {

    var counter = 0,
        number = 3,
        tot = 0;

    //Data handling
    var res = new Firebase('https://blinding-heat-5038.firebaseio.com/resources'),
        ans = new Firebase('https://blinding-heat-5038.firebaseio.com/answers');


    ans.child('italy').orderByChild('value').once('value', function (snapshot) {
        snapshot.forEach(function (data) {
            var top = data.val();
            tot += top.value;
        });
        ans.child('italy').orderByChild('value').startAt(1).limitToLast(3).once('value', function (snapshot) {
            if (snapshot.val() == null) {
                $('.placeholder-span').after('<p class="text white legend-bottom--text legend-bottom--not">Not enough user data</p>');
            } else {
                snapshot.forEach(function (data) {
                    var top = data.val();
                    var perc = Math.round((top.value / tot) * 10000) / 100;
                    $('.placeholder-span').after('<p class="text white legend-bottom--text">' + number + '. ' + top.label + ' - ' + perc + '%</p>');
                    number--;
                });
            }
        });
    });
    number = 3;
    tot = 0;


    //Scrollspy
    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".nav-main",
        offset: 50
    });

    // Add smooth scrolling on all links inside the navbar
    $("#navbar a").on('click', function (event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });


    //Popover
    $('[data-toggle="popover"]').popover();


    //Select plugin
    $(".js-example-placeholder-single").select2({
        placeholder: "Select your Country"
    });

    $('.select2').click(function () {
        $(this).addClass('button-hover');
        $('.select2-dropdown').addClass('list-hover');
    });


    //Choice - Average link
    $('.question-01').click(function () {
        if ($(this).hasClass('button-img')) {
            $('.answer-01').addClass('red-border');
        } else {
            $('.answer-01').removeClass('red-border');
        }
    });
    $('.question-02').click(function () {
        if ($(this).hasClass('button-img')) {
            $('.answer-02').addClass('red-border');
        } else {
            $('.answer-02').removeClass('red-border');
        }
    });
    $('.question-03').click(function () {
        if ($(this).hasClass('button-img')) {
            $('.answer-03').addClass('red-border');
        } else {
            $('.answer-03').removeClass('red-border');
        }
    });
    $('.question-04').click(function () {
        if ($(this).hasClass('button-img')) {
            $('.answer-04').addClass('red-border');
        } else {
            $('.answer-04').removeClass('red-border');
        }
    });
    $('.question-05').click(function () {
        if ($(this).hasClass('button-img')) {
            $('.answer-05').addClass('red-border');
        } else {
            $('.answer-05').removeClass('red-border');
        }
    });
    $('.question-06').click(function () {
        if ($(this).hasClass('button-img')) {
            $('.answer-06').addClass('red-border');
        } else {
            $('.answer-06').removeClass('red-border');
        }
    });
    $('.question-07').click(function () {
        if ($(this).hasClass('button-img')) {
            $('.answer-07').addClass('red-border');
        } else {
            $('.answer-07').removeClass('red-border');
        }
    });
    $('.question-08').click(function () {
        if ($(this).hasClass('button-img')) {
            $('.answer-08').addClass('red-border');
        } else {
            $('.answer-08').removeClass('red-border');
        }
    });
    $('.question-09').click(function () {
        if ($(this).hasClass('button-img')) {
            $('.answer-09').addClass('red-border');
        } else {
            $('.answer-09').removeClass('red-border');
        }
    });
    $('.question-10').click(function () {
        if ($(this).hasClass('button-img')) {
            $('.answer-10').addClass('red-border');
        } else {
            $('.answer-10').removeClass('red-border');
        }
    });


    //Checkbox
    $('.checkbox-img').click(function () {
        if ($(this).hasClass('button-img')) {
            $(this).removeClass('button-img').addClass('button-img--checked');
            counter++;
            if (counter == 3) {
                $('.counter-text').text("Good! You selected enough elements");
                $('.counter-text').addClass('visible');
            } else if (counter > 3) {
                $('.counter-text').text("You chose too many, need only three!");
            } else {
                $('.counter-text').removeClass('visible');
            }
        } else {
            $(this).removeClass('button-img--checked').addClass('button-img');
            counter--;
            if (counter == 3) {
                $('.counter-text').text("Good! You selected enough elements");
                $('.counter-text').addClass('visible');
            } else if (counter > 3) {
                $('.counter-text').text("You chose too many, need only three!");
            } else {
                $('.counter-text').removeClass('visible');
            }
        }
    });

    $('.form-submit').click(function () {
        if (counter == 3) {
            var country = $('.select2-selection__rendered').text().toLowerCase().replace(/\s/g, '');
            var countryPath = ans.child(country);
            $('.button-img--checked').each(function () {
                var choice = $(this).next().text().toLowerCase().replace(/\s/g, '');
                var oldValue = countryPath.child(choice).child('value');
                oldValue.once('value', function (snapshot) {
                    var oldData = snapshot.val();
                    var newData = oldData + 1;
                    oldValue.set(newData);
                });
            });
            if (country == 'italy') {
                $('.legend-bottom--text').remove();
                countryPath.orderByChild('value').once('value', function (snapshot) {
                    snapshot.forEach(function (data) {
                        var top = data.val();
                        tot += top.value;
                    });
                    countryPath.orderByChild('value').startAt(1).limitToLast(3).once('value', function (snapshot) {
                        if (snapshot.val() == null) {
                            $('.placeholder-span').after('<p class="text white legend-bottom--text legend-bottom--not">Not enough user data</p>');
                        } else {
                            snapshot.forEach(function (data) {
                                var top = data.val();
                                var perc = Math.round((top.value / tot) * 10000) / 100;
                                $('.placeholder-span').after('<p class="text white legend-bottom--text">' + number + '. ' + top.label + ' - ' + perc + '%</p>');
                                number--;
                            });
                        }
                    });
                });
                number = 3;
                tot = 0;
            }
            $(this).addClass('form-submit--clicked');
            $('.form-submit--clicked .form-submit--text').text('Thank you!');
        }
    });


    //Graph02
    $('.graph02-country').click(function () {
        $('.graph02-group').removeClass('graph02-active');
        $(this).parent().addClass('graph02-active');
        $('.legend-bottom--text').remove();
        var country = $(this).attr('class').replace(/graph02-country\s/, '');
        var countryPath = ans.child(country);
        number = 3;
        tot = 0;
        countryPath.orderByChild('value').once('value', function (snapshot) {
            snapshot.forEach(function (data) {
                var top = data.val();
                tot += top.value;
            });
            countryPath.orderByChild('value').startAt(1).limitToLast(3).once('value', function (snapshot) {
                if (snapshot.val() == null) {
                    $('.placeholder-span').after('<p class="text white legend-bottom--text legend-bottom--not">Not enough user data</p>');
                } else {
                    snapshot.forEach(function (data) {
                        var top = data.val();
                        var perc = Math.round((top.value / tot) * 10000) / 100;
                        $('.placeholder-span').after('<p class="text white legend-bottom--text">' + number + '. ' + top.label + ' - ' + perc + '%</p>');
                        number--;
                    });
                }
            });
        });
    });


    //Timeline
    $(window).scroll(function () {
        if ($('.timeline').visible()) {
            $('.timeline').addClass('timeline-visible');
        }
    });


    //Wall of gifs
    $('.wall-img').hover(function () {
        var $parent = $(this).parent('.wall-item').index();
        var pick = $parent - 1;
        $('.wall-img').each(function (i) {
            $(this).attr('src', 'img/wall/' + i + '.jpg');
        });
        $(this).attr('src', 'img/wall/' + pick + '.gif');
    }, function () {
        $('.wall-img').each(function (i) {
            $(this).attr('src', 'img/wall/' + i + '.gif');
        });
    });


    //Boat
    $('.boat-item').click(function () {
        $('.boat-item').removeClass('boat-item--checked');
        $(this).addClass('boat-item--checked');
    });


    //Resources 
    $('.pick').addClass('resources-item--shown');
    $('.filter-item').click(function () {
        $('.filter-item').removeClass('filter-item--checked');
        $(this).addClass('filter-item--checked');
        $('.resources-item').removeClass('resources-item--shown');
        if ($(this).hasClass('filter-pick')) {
            $('.pick').addClass('resources-item--shown');
        } else if ($(this).hasClass('filter-campaign')) {
            $('.campaign').addClass('resources-item--shown');
        } else if ($(this).hasClass('filter-ddj')) {
            $('.ddj').addClass('resources-item--shown');
        } else if ($(this).hasClass('filter-doc')) {
            $('.doc').addClass('resources-item--shown');
        } else if ($(this).hasClass('filter-news')) {
            $('.news').addClass('resources-item--shown');
        } else {
            $('.ong').addClass('resources-item--shown');
        }
    });


    //Contribute
    $('.contribute-submit').click(function () {
        if ($('.contribute-link').val() !== '') {
            var link = $('.contribute-link').val();
            res.push({
                link: link
            });
            $(this).addClass('contribute-submit--clicked');
            $('.contribute-submit--clicked .contribute-submit--text').text('Thank you!');
        }
    });

});