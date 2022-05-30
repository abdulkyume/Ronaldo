var myNav ;
// window.onload = function () {
//   myNav = document.getElementById("mynav");
// };
myNav = document.getElementById("mynav");
window.onscroll = function () {
  console.log(myNav);
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.add("responsivenav");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    myNav.classList.remove("responsivenav");
  }
};

function serviceschange(svc) {
  svc.childNodes[1].childNodes[0].classList.add("text-white");
  svc.childNodes[7].childNodes[1].classList.remove("text-muted");
  svc.childNodes[7].childNodes[1].classList.add("text-white");
}
function serviceschange1(svc) {
  svc.childNodes[1].childNodes[0].classList.remove("text-white");
  svc.childNodes[7].childNodes[1].classList.add("text-muted");
  svc.childNodes[7].childNodes[1].classList.remove("text-white");
}

//animate text
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
//animate text
