function navAnimation() {
    const list = document.querySelector(".list-wrapper")

    list.addEventListener("mousemove", function () {

        const underline = document.getElementById("underline")
        underline.style.height = "150px"
    })
    list.addEventListener("mouseout", function () {

        const underline = document.getElementById("underline")
        underline.style.height = "1px"
    })
}
navAnimation()

function cardAnimation() {
    const page2Cards = document.querySelectorAll(".page2-cards");

    page2Cards.forEach(page2Card => {
        const arrow1 = page2Card.querySelector(".arrow1");
        const arrow2 = page2Card.querySelector(".arrow2");
        const floatingCursor = page2Card.querySelector(".cursor");

        page2Card.addEventListener("mouseenter", function () {
            arrow2.style.transform = "translate(50%, -50%)";
            arrow2.style.opacity = "0";
            arrow1.style.transform = "translate(0%, 0%)";
            arrow1.style.opacity = "1";
            floatingCursor.style.scale = "1";
        });

        page2Card.addEventListener("mouseleave", function () {
            arrow2.style.transform = "translate(0%, 0%)";
            arrow2.style.opacity = "1";
            arrow1.style.transform = "translate(-50%, 50%)";
            arrow1.style.opacity = "0";
            floatingCursor.style.scale = "0";
        });

        page2Card.addEventListener("mousemove", function (e) {
            gsap.to(floatingCursor, {
                x: e.clientX - page2Card.getBoundingClientRect().x,
                y: e.clientY - page2Card.getBoundingClientRect().y,
                ease: "none",
                duration: 0.1
            });
        });
    });
}
cardAnimation();

function videoPlay() {
    const playBtn = document.querySelector(".reel .playbtn svg")
    playBtn.addEventListener("mouseenter", function () {
        const watchShowreel = document.querySelector(".reel .playbtn span")
        // console.log("mouse inside");
        watchShowreel.style.opacity = "1";
        watchShowreel.style.top = "1rem";
    })
    playBtn.addEventListener("mouseleave", function () {
        const watchShowreel = document.querySelector(".reel .playbtn span")
        watchShowreel.style.opacity = "0";
        watchShowreel.style.top = "2rem";
    })

    playBtn.addEventListener("click", function () {
        const video = document.querySelector(".reel video")
        video.style.height = "100%";
        video.style.width = "100%";
        video.requestFullscreen();
        // console.log("mai dab gaya");
        video.play()
    })
}
videoPlay()

function videoPause() {

    let Reelvideo = document.getElementById("reelVid");

    Reelvideo.addEventListener("click", function (e) {
        e.preventDefault()
        // console.log("Video clicked"); //to check if the event listener is triggered
        Reelvideo.pause();
        Reelvideo.style.height = "0%";
        Reelvideo.style.width = "0%";
        document.exitFullscreen();
        // console.log("Video paused"); //to check if video is paused
    });
    Reelvideo.pause()
}
videoPause()


function arrowAnim() {
    const pikaarrow1 = document.querySelector(".pikaarrow")
    const pikaarrow2 = document.querySelector(".pikaarrow2")
    const pika = document.querySelector(".pikaAI .pikaAI-left")

    pika.addEventListener("mouseenter", function () {
        // console.log("ander");
        pikaarrow2.style.transform = "translate(-50%, -50%)";
        pikaarrow2.style.opacity = "1";
        pikaarrow1.style.transform = " translate(50%, -150% ";
        pikaarrow1.style.opacity = "0";
    });

    pika.addEventListener("mouseleave", function () {
        // console.log("bahar");
        pikaarrow1.style.transform = "translate(-50%, -50%)";
        pikaarrow1.style.opacity = "1";
        pikaarrow2.style.transform = " translate(-150%, 50% ";
        pikaarrow2.style.opacity = "0";
    });
}
arrowAnim()


function Pika() {
    let pikaVid = document.getElementById("pikaVid")
    let pikaFrame = document.getElementById("pika-frame")

    pikaFrame.addEventListener("mouseenter", () => {
        pikaVid.style.opacity = "1"
        pikaVid.currentTime = 0;
        pikaVid.play()
        pikaFrame.style.border = "2px solid #1562f0"
    })
    pikaFrame.addEventListener("mouseleave", () => {
        pikaVid.style.opacity = "0";
        pikaVid.pause();
        pikaFrame.style.border = "none"
    })

}
Pika()
