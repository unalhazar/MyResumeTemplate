$(document).ready(function(){	
	$(window).scroll(function(){
		$('.bolum1, .bolum2, .bolum3, .bolum4, .bolum5, #resume, footer').each(function(){
			var ustKenar = $(this).offset().top;
			var pencereAlt = $(window).scrollTop()+$(window).height();
			if(pencereAlt > ustKenar){
				$(this).animate({'opacity':'1'},"slow");
			}
		})
	})
});


$(document).ready(function () {
	$(".baslik:eq(0)").click(function () {
		$(".icerik:eq(0)").slideToggle("slow",function(){
			$(".icerik:eq(1),.icerik:eq(2)").slideUp("slow");
		});
		
	});
	$(".baslik:eq(1)").click(function () {
		$(".icerik:eq(1)").slideToggle("slow",function(){
			$(".icerik:eq(0),.icerik:eq(2)").slideUp("slow");
		});
		
	});
	$(".baslik:eq(2)").click(function () {
		$(".icerik:eq(2)").slideToggle("slow", function(){
			$(".icerik:eq(0),.icerik:eq(1)").slideUp("slow");
		});
		
	});
});
$(document).ready(function () {
	$(".baslik1:eq(0)").click(function () {
		$(".icerik1:eq(0)").slideToggle("slow",function(){
			$(".icerik1:eq(1)").slideUp("slow");
		});
		
	});
	$(".baslik1:eq(1)").click(function () {
		$(".icerik1:eq(1)").slideToggle("slow",function(){
			$(".icerik1:eq(0)").slideUp("slow");
		});
		
	});
});


/*typed*/

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "Freelancer", "Web Designer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
