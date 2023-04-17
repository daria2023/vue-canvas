<template>
<img id="image" src="./1.png" width="500" height="500">
</template>
<script setup>
import {onMounted} from 'vue'
onMounted(()=>{
    var img = document.getElementById("image");
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "500");
svg.setAttribute("height", "500");
var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
// path.setAttribute("d", "M 100 100 L 300 100 L 200 300 z");
path.setAttribute("d", "M 150 150 L 350 150 L 250 350 z");
path.setAttribute("fill", "red");
svg.appendChild(path);
var canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;
var ctx = canvas.getContext("2d");

let imgLoaded = false;
let svgLoaded = false;
var svgData = new XMLSerializer().serializeToString(svg);
var imgSrc = 'data:image/svg+xml;base64,' + btoa(svgData);
var svgImg = new Image();

img.onload = ()=>{
	imgLoaded = true
}

svgImg.onload=()=>{
	svgLoaded = true;
}

ctx.drawImage(img, 0, 0);
svgImg.onload = function() {
			ctx.drawImage(svgImg, 0, 0);
			var dataUrl = canvas.toDataURL();
			img.src = dataUrl;
		};
svgImg.src = imgSrc;

})
</script>
<style scoped>

</style>