const video = document.querySelector(".video-background");
let src = video.currentSrc || video.src;

// Retirado de: https://codepen.io/shshaw/pen/vYKBPbv/9e810322d70c306de2d18237d0cb2d78
/* Make sure the video is 'activated' on iOS */
function once(el, event, fn, opts) {
  var onceFn = function (e) {
    el.removeEventListener(event, onceFn);
    fn.apply(this, arguments);
  };
  el.addEventListener(event, onceFn, opts);
  return onceFn;
}

once(document.documentElement, "touchstart", function (e) {
  video.play();
  video.pause();
});


gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  defaults: { duration: 2 }, 
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "bottom bottom",
    scrub: 4
  }
});

once(video, "loadedmetadata", () => {
  tl.fromTo(
    video,
    {
      currentTime: 0
    },
    {
      currentTime: video.duration || 0.05
    }
  );
});

/* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
setTimeout(function () {
  if (window["fetch"]) {
    fetch(src)
      .then((response) => response.blob())
      .then((response) => {
        var blobURL = URL.createObjectURL(response);

        var t = video.currentTime;
        once(document.documentElement, "touchstart", function (e) {
          video.play();
          video.pause();
        });

        video.setAttribute("src", blobURL);
        video.currentTime = t + 0.001;
      });
  }
}, 1000);

function gotoMode(modeId) {
  const modeElement = document.getElementById(modeId);
  if (modeElement) {
    modeElement.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Element with ID '${modeId}' not found.`);
  }
}

