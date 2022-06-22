var prevScrollpos = window.pageYOffset;
var navLinkNew = document.querySelectorAll(".nav-link");

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  let y = window.matchMedia("(min-width: 768px)");
  var navLinks = document.querySelectorAll(".nav-link");  
  if (prevScrollpos > 300) {  
	document.getElementById("myTopnav").style.backgroundColor = "white";
	if (y.matches) {
			navLinks.forEach(navLink => {
			navLink.style.color = "#008080";
		});
	} else {
			navLinks.forEach(navLink => {
			navLink.style.color = "white";
		});
	}
  } else {
	document.getElementById("myTopnav").style.backgroundColor = "transparent";
	navLinks.forEach(navLink => {
		navLink.style.color = "white";
	});
  }; 
  
  prevScrollpos = currentScrollPos;
};


function openNav() {
	let x = window.matchMedia("(max-width: 768px)");
	function myFunction(x) {
		if (x.matches) {
			document.getElementById("myNav").style.width = "100%";
			//document.body.style.backgroundColor = "green";
		} else {
			//document.body.style.backgroundColor = "blue";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
} 
function closeNav() {
	let x = window.matchMedia("(max-width: 768px)");
	function myFunction(x) {
		if (x.matches) {
			document.getElementById("myNav").style.width = "0%";
			//document.body.style.backgroundColor = "green";
		} else {
			document.getElementById("myNav").style.width = "100%";
			//document.body.style.backgroundColor = "blue";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
} 



