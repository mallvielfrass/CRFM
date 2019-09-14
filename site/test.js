var activate=false;
function active() {
	activate=!activate;
}

function grab(event) {
	
		imgWdh=document.img.width;
		imgHgt=document.img.height;
		img.style.pixelLeft=event.x-imgWdh/2;
		img.style.pixelTop=event.y-imgHgt/2;

}
