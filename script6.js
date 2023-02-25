$(function(){
    $('h1').click(()=>{
        alert('Hello World') ;
    })
})
$('#fieldtwo').click(()=>{
    var a = $('#one').text() ;
    console.log(a) ;
    var b = $('#three').html() ;
    console.log(b);
    var c = $('#fieldone').val() ;
    console.log(c) ;
    var e = $('#fieldone').attr('type');
    console.log(e);
    var f = $('#two').css('color');
    console.log(f)
    $('#two').css('background-color','aqua');
    $('#one').css({'background-color':'red','height':'100px'});
    var g = $('#box').height() ;
    console.log(g)
    console.log($('#box').width())
    console.log($('#box').innerHeight())
    console.log($('#box').outerHeight())
    console.log($('#box').outerWidth())
    // $('#box').height(500) ;
    // $('#box').height(500).width(500);
    // $('#three').addClass('Check')
    // $('#three').removeClass('Check')
    $('#three').toggleClass('Check')
    // $('#three').remove()
    $('#two').after('Hello World')
    // $('#boxtwo').hide();
    // $('#boxtwo').show() ;
    // $('#boxtwo').toggle() ;
    $('#boxthree').slideToggle(4000);
})