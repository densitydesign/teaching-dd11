$(document).ready(function () {
    var res = new Firebase('https://blinding-heat-5038.firebaseio.com/resources'),
        ans = new Firebase('https://blinding-heat-5038.firebaseio.com/answers'),
        aus = ans.child('austria'),
        bel = ans.child('belgium'),
        bul = ans.child('bulgaria'),
        cro = ans.child('croatia'),
        cyp = ans.child('cyprus'),
        czr = ans.child('czechRepublic'),
        den = ans.child('denmark'),
        est = ans.child('estonia'),
        fin = ans.child('finland'),
        fra = ans.child('france'),
        ger = ans.child('germany'),
        gre = ans.child('greece'),
        hun = ans.child('hungary'),
        ire = ans.child('ireland'),
        ita = ans.child('italy'),
        lat = ans.child('latvia'),
        lit = ans.child('lithuania'),
        lux = ans.child('luxembourg'),
        mal = ans.child('malta'),
        net = ans.child('netherlands'),
        pol = ans.child('poland'),
        por = ans.child('portugal'),
        rom = ans.child('romania'),
        slk = ans.child('slovakia'),
        sln = ans.child('slovenia'),
        spa = ans.child('spain'),
        swe = ans.child('sweden'),
        unk = ans.child('unitedKingdom');

    $('.contribute-submit').click(function () {
        var link = $('.contribute-link').val();
        res.push({
            link: link
        });
    });
    
    
    

});