var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 20;
$('.container').on('mousemove click', function (e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 10 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 10 - e.clientY));
    lFollowX = (-20 * lMouseX) / 200; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (-20 * lMouseY) / 200;

});
$('.container').on('mousemove click', function (e) {

    var mouseX = e.clientY;
    var mouseY = e.clientX;

    if (-10 < mouseY < 10) {
        console.log(mouseY);
    }

    $('.container .holder').css({
        top: mouseX,
        left: mouseY
    });
});

function moveBackground() {
    console.log(x);
    a = x;
    b = y;
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
    for (let index = 1; index < 21; index++) {
        var translate = [];
        translate[index] = 'translate(' + (-x * index) + 'px, ' + (-y * index) + 'px)';
        translate1 = 'translate(' + (-x * index) + 'px, ' + (-y * index) + 'px)';
        blur = 'blur(' + x + 'px)';
        $('.container .div' + index).css({
            '-webit-transform': translate[index],
            '-moz-transform': translate[index],
            'transform': translate[index]
        });

        // $('.container').css({
        //     '-webkit-filter': blur,
        //     'filter': blur
        // });
    }




    window.requestAnimationFrame(moveBackground);
}

// function magnify(zoom) {
//     var img, glass, w, h, bw;
//     img = document.getElementById(imgID);
//     glass = document.createElement("div");
//     glass.setAttribute("class", "div div11 magifier");
//     img.parentElement.insertBefore(glass, img);

//     glass.style.backgroundImage = "url("+ img.src +")";
//     glass.style.backgroundRepeat = "no-repeat";
//     glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
//     bw = 3;
//     w = glass.offsetWidth / 2;
//     h = glass.offsetHeight / 2;
//     /*execute a function when someone moves the magnifier glass over the image:*/
//     glass.addEventListener("mousemove", moveMagnifier);
//     img.addEventListener("mousemove", moveMagnifier);
//     /*and also for touch screens:*/
//     glass.addEventListener("touchmove", moveMagnifier);
//     img.addEventListener("touchmove", moveMagnifier);

//     function moveMagnifier(e) {
//         var pos, x, y;
//         /*prevent any other actions that may occur when moving over the image*/
//         e.preventDefault();
//         /*get the cursor's x and y positions:*/
//         pos = getCursorPos(e);
//         x = pos.x;
//         y = pos.y;
//         /*prevent the magnifier glass from being positioned outside the image:*/
//         if (x > img.width - (w / zoom)) {
//             x = img.width - (w / zoom);
//         }
//         if (x < w / zoom) {
//             x = w / zoom;
//         }
//         if (y > img.height - (h / zoom)) {
//             y = img.height - (h / zoom);
//         }
//         if (y < h / zoom) {
//             y = h / zoom;
//         }
//         /*set the position of the magnifier glass:*/
//         glass.style.left = (x - w) + "px";
//         glass.style.top = (y - h) + "px";
//         /*display what the magnifier glass "sees":*/
//         glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
//     }

//     function getCursorPos(e) {
//         var a, x = 0,
//             y = 0;
//         e = e || window.event;
//         /*get the x and y positions of the image:*/
//         a = img.getBoundingClientRect();
//         /*calculate the cursor's x and y coordinates, relative to the image:*/
//         x = e.pageX - a.left;
//         y = e.pageY - a.top;
//         /*consider any page scrolling:*/
//         x = x - window.pageXOffset;
//         y = y - window.pageYOffset;
//         return {
//             x: x,
//             y: y
//         };
//     }
// }

moveBackground();