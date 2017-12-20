/* Skrollr */

var s = skrollr.init({
    edgeStrategy: 'set',
    easing: {
        WTF: Math.random,
        inverted: function (p) {
            return 1 - p;
        }
    }
});

/* Disclaimer */

$(".cookie_visible").click(function () {
    $(this).switchClass("cookie_visible", "cookie_hidden", 500, "easeInOutQuad");
});


/* Valori nutrizionali */

$(".crossRotate").click(function () {
    if ($(this).css("transform") == 'none') {
        $(this).css("transform", "rotate(45deg)");
    } else {
        $(this).css("transform", "");
    }
});

$('#plus').click(function () {
    $('#valori_nutrizionali').toggleClass('valori_nutrizionali_hidden');
    $('#valori_nutrizionali').toggleClass('valori_nutrizionali_visible');
    $('#organic_milk').toggleClass('milks');
    $('#organic_milk').toggleClass('milks_hidden');
    $('#lactose_free').toggleClass('milks');
    $('#lactose_free').toggleClass('milks_hidden');
    $('#cow_milk').toggleClass('milks');
    $('#cow_milk').toggleClass('milks_hidden');
    $('#plant_milk').toggleClass('milks');
    $('#plant_milk').toggleClass('milks_hidden');
});


$('#plus').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

/* Grafico parole */

function changeParole(objName) {
    var obj = document.getElementById(objName);
    var objId = new Array();

    objId[0] = "parole1";
    objId[1] = "parole2";
    objId[2] = "parole3";
    objId[3] = "parole4";
    objId[4] = "parole5";
    objId[5] = "parole6";
    objId[6] = "parole7";
    objId[7] = "parole8";
    objId[8] = "parole9";

    for (i = 0; i < objId.length; i++) {
        if (objName == objId[i]) {
            obj.style.display = "block";
        } else {
            tempObj = document.getElementById(objId[i]);
            tempObj.style.display = "none";
        }
    }
    return;
}

/* Approfondimento mucca primo giro */
$('#cow_milk').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

$('#x_cow').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

/* Approfondimento organico primo giro */
$('#organic_milk').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

$('#x_organic').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

/* Approfondimento senza lattosio primo giro */
$('#lactose_free').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

$('#x_lactose_free').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

/* Approfondimento vegetale primo giro */
$('#plant_milk').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

$('#x_plant_milk').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

/* Scelta latti */
$('#scelta_latti').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

$('#x_milk_megastore').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

/* Approfondimento mucca secondo giro */
$('#plus_cow').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

$('#x_cow_milk_2').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

/* Approfondimento vegetale secondo giro */
$('#plus_plant').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

$('#x_plant_milk_2').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

/* Approfondimento senza lattosio secondo giro */
$('#plus_lactose').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

function byId(e) {
    return document.getElementById(e);
}

function genderComboChange() {
    var combo1 = byId('genderCombo');
    var combo2 = byId('ageCombo');
    var combo_img = byId('combo_img');


    emptyCombo(combo2, combo_img);
    switch (combo1.value) {
    case '-1':
        addOption(combo2, -1, 'Age');
        break;
    case '0':
        addOption(combo2, -1, 'Age', '');
        addOption(combo2, 0, '0-3 yr', '700 mg');
        addOption(combo2, 1, '4-8 yr', '1.000 mg');
        addOption(combo2, 2, '9-18 yr', '1.300 mg');
        addOption(combo2, 3, '19-50 yr', '1.000 mg');
        addOption(combo2, 4, '51-70 yr', '1.000 mg');
        addOption(combo2, 5, '70+ yr', '1.200 mg');
        break;
    case '1':
        addOption(combo2, -1, 'Age', '');
        addOption(combo2, 0, '0-3 yr', '700 mg');
        addOption(combo2, 1, '4-8 yr', '1.000 mg');
        addOption(combo2, 2, '9-18 yr', '1.300 mg');
        addOption(combo2, 3, '19-50 yr', '1.000 mg');
        addOption(combo2, 4, '51-70 yr', '1.200 mg');
        addOption(combo2, 5, '70+ yr', '1.200 mg');
        break;
    case '2':
        addOption(combo2, -1, 'Age', '');
        addOption(combo2, 0, '14-18 yr', '1.300 mg');
        addOption(combo2, 1, '19-50 yr', '1.000 mg');
        break;
    }
    ageComboChange();
}

function ageComboChange() {
    var combo2, tgt, combo_img;
    combo2 = byId('ageCombo');
    tgt = byId('tgt');
    combo_img = byId('combo_img');

    tgt.innerHTML = combo2.options[combo2.options.selectedIndex].title;

    var valore = combo2.options[combo2.options.selectedIndex].title;


    if (valore == "700 mg") {
        combo_img.innerHTML = '<img src="../img/700.svg" alt="700 mg">';
    } else if (valore == "1.000 mg") {
        combo_img.innerHTML = '<img src="../img/1000.svg" alt="700 mg">';
    } else if (valore == "1.200 mg") {
        combo_img.innerHTML = '<img src="../img/1200.svg" alt="700 mg">';
    } else if (valore == "1.300 mg") {
        combo_img.innerHTML = '<img src="../img/1300.svg" alt="700 mg">';
    } else {
        combo_img.innerHTML('');
    }
}

function emptyCombo(e, i) {
    e.innerHTML = '';
    i.innerHTML = '';
}

function addOption(combo, val, txt, disp) {
    var option = document.createElement('option');
    option.value = val;
    option.title = disp;
    option.appendChild(document.createTextNode(txt));
    combo.appendChild(option);
}

$('#x_lactose_milk_2').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

/* Approfondimento mucca-lattosio secondo giro */
$('#plus_cow_3').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

$('#x_cow_milk_3').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

/* Approfondimento organico secondo giro */
$('#plus_organic').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

$('#x_organic_milk_2').click(function () {
    var overflowY = 'hidden';
    if ($("html").css('overflow-y') == 'hidden') overflowY = 'visible';
    $("html").css({
        'overflow-y': overflowY
    });
});

/* Quattro tipologie */

function changeTipologie(objName) {
    var obj = document.getElementById(objName);
    var objId = new Array();

    objId[0] = "tipologie0";
    objId[1] = "tipologie1";
    objId[2] = "tipologie2";
    objId[3] = "tipologie3";
    objId[4] = "tipologie4";

    for (i = 0; i < objId.length; i++) {
        if (objName == objId[i]) {
            obj.style.display = "inline";
        } else {
            tempObj = document.getElementById(objId[i]);
            tempObj.style.display = "none";
        }
    }
    return;
}

/* Finale */

$('#yes').on('click', function () {
    if ($('#aware').css('display') != 'none') {
        $('#knowledge').html($('#knowledge').html()).show().siblings('div').hide();
    } else if ($('#knowledge').css('display') != 'none') {
        $('#aware').show().siblings('div').hide();
    }
});

$('#no').on('click', function () {
    if ($('#aware').css('display') != 'none') {
        $('#informed').html($('#informed').html()).show().siblings('div').hide();
    } else if ($('#informed').css('display') != 'none') {
        $('#aware').show().siblings('div').hide();
    }
});