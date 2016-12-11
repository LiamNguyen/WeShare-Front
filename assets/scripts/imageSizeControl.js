$( document ).ready(function() {
	imageResize();
});

$( window ).resize(function () {
	imageResize();
});

function imageResize() {
	var img = $('.posted-image .image-row img'),
	btnTakePic = $('.btn-take-picture'),
	leftLine = $('#left-line'),
	rightLine = $('#right-line'),
	rowWidth = $(window).width(),
	windowWidth = $(window).width(),
	imageWidth, imageHeight, leftMargin, marginLine, lineWidth;

	if (rowWidth > 600) {
		rowWidth = 600;

		marginLine = windowWidth / 2 - 300;
		lineWidth = 300 - 25;
		
	} else {
		marginLine = 0;
		lineWidth = windowWidth / 2 - 25;
	}

	imageWidth = (rowWidth - 8) / 3;
	imageHeight = imageWidth;

	leftMargin = windowWidth / 2 - 25;

	img.css('width', imageWidth);
	img.css('height', imageHeight);

	btnTakePic.css('margin-left', leftMargin);

	leftLine.css('margin-left', marginLine);
	leftLine.css('width', lineWidth);
	rightLine.css('margin-right', marginLine);
	rightLine.css('width', lineWidth);
}