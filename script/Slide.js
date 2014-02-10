
$(document).ready(function () {

    // Global declaration

    var imgLength = $('#slideImage').children('img').length;
    var first, last, curr, prev, isFirstIteration = true, temp, k, autoIndex = 0;
    first = $('img').first().show();
    last = $('img').last();
    curr = first;
    prev = curr;
    var addCircleImg = $('#circleBtn');

    function loadCircelImg() { // Bining the icon cicrle image dynamically when the page is landing
        try {
            //console.log('Image Length: ' + imgLength);
            for (index = 0; index < imgLength; index++) {
                $(addCircleImg).append('<img  src="images/circleNormal.jpg" class="circle" alt="2" ></img>');
            }
        }
        catch (e) {
            console.log(e.Message);
        }
    }

    loadCircelImg();
    ///////////////////////////////////////////////////
    function moveImg(index) { // Common image move when it's click event or time interval
        try {
            $(addCircleImg).children('img').eq($(prev).index()).attr('src', 'images/circleNormal.jpg')
            $(prev).hide();
            prev = $('#slideImage').children('img').eq(index).show();
            $(addCircleImg).children('img').eq(index).attr('src', 'images/circleHover.jpg')
        }
        catch (e) {
            console.log(e.Message);
        }

    }
    ///////////////////////////////////////////////////////////////////////


    $('#circleBtn').on('click', '.circle', function () { //Click event to change the images
        moveImg($(this).index());
    });

    window.setInterval(function () {//Change the image automatically some time interval
        if (imgLength == autoIndex) {
            autoIndex = 0;
        }
        moveImg(autoIndex++);
    }, 1000);

    function arrangeElement(floatVal, firstEle, secondEle) { // Arrage the element based on the option view
        try {
            $(firstEle).insertAfter(secondEle);
            $(firstEle).css('float', floatVal);
            $(secondEle).css('float', floatVal);
        }
        catch (e) {
            console.log(e.Message);
        }
    }

    $(':radio').click(function () { // Choose the option to view the tool icon
        console.log($(this).attr('id'));
        if ($(this).attr('id') == 'circleRight') {
            arrangeElement('left', '#circleBtn', '#slideImage');
        }
        else if ($(this).attr('id') == 'circleLeft') {
            arrangeElement('left', '#slideImage', '#circleBtn');
        }
        else if ($(this).attr('id') == 'circleTop') {
            arrangeElement('none', '#slideImage', '#circleBtn');
        }
        else if ($(this).attr('id') == 'circleBottom') {
            arrangeElement('none', '#circleBtn', '#slideImage');
        }
    });
});
     
