// Author: Palmani. K
$(document).ready(function () {

    // Global declaration

    var imgLength = $('#slideImage').children('img').length;
    var first, last, curr, prev, isFirstIteration = true, temp, k, prevIndex = 0, autoIndex = 0;
    first = $('img').first().show();
    last = $('img').last();
    curr = first;
    prev = curr;
    var addCircleImg = $('#circleBtn');

    function loadCircelImg() { // Bining the icon cicrle image dynamically when the page is landing
        try {
            for (index = 0; index < imgLength; index++) {
                if (index == 0)
                    $(addCircleImg).append('<i class="fa fa-circle imgCircleHover"  ></i>');
                else
                    $(addCircleImg).append('<i class="fa fa-circle imgCircle"  ></i>');
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
            $(addCircleImg).children('i').eq(prevIndex).removeClass('imgCircleHover').addClass('imgCircle');
            $(prev).hide("slide", { direction: "right" }, 2000);
            prev = $('#slideImage').children('img').eq(index).show("slide", { direction: "left" }, 2000);
            prevIndex = index + 1;
            if (imgLength == autoIndex) {
                prev = $('#slideImage').children('img').eq(0).show("slide", { direction: "left" }, 2000);
                $(addCircleImg).children('i').eq(prevIndex).removeClass('imgCircleHover').addClass('imgCircle');
                $(addCircleImg).children('i').eq(0).removeClass('imgCircle').addClass('imgCircleHover');
                prevIndex = 0;
                autoIndex = 0;
            }
            else {
                $(addCircleImg).children('i').eq(index + 1).removeClass('imgCircle').addClass('imgCircleHover');
            }
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
        moveImg(autoIndex++);
    }, 4000);
});
     
