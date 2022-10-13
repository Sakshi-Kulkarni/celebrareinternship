function setNewImage1(){
    document.getElementById("page1-img").src="ASSETS/Page2.jpg";
    document.getElementById("page2-img").src="ASSETS/Page3.jpg";
     document.getElementById("page3-img").src="ASSETS/Page1.jpg";

}
function  setOldImage(){
    document.getElementById("page1-img").src="ASSETS/Page1.jpg";
    document.getElementById("page2-img").src="ASSETS/Page2.jpg";
    document.getElementById("page3-img").src="ASSETS/Page3.jpg";

}

(function () {

    const dots = document.querySelectorAll('.dot');
    const image1 = document.getElementById('page1-img');
    const image2 = document.getElementById('page2-img');
    const image3 = document.getElementById('page3-img');
    const imageHolder = document.getElementById('img-slider');
    let index = 0;
    let opacityset = 0;


    imageHolder.addEventListener('click', () => {
        showcards();
        if (index === 0) {
            dots[index].classList.remove('active-img');
            index = 1;
            dots[index].classList.add('active-img');
            image1.src = "ASSETS/Page2.jpg";
            image2.src = " ASSETS/Page3.jpg";
            image3.src = " ASSETS/Page1.jpg";
        }
        else if (index == 1) {
            dots[index].classList.remove('active-img');
            index = 2;
            dots[index].classList.add('active-img');
            image1.src = " ASSETS/Page3.jpg";
            image2.src = " ASSETS/Page1.jpg";
            image3.src = " ASSETS/Page2.jpg";
        }
        else {
            dots[index].classList.remove('active-img');
            index = 0;
            dots[index].classList.add('active-img');
            image1.src = "ASSETS/Page1.jpg";
            image2.src = "ASSETS/Page2.jpg";
            image3.src = " ASSETS/Page3.jpg";
        }
    });

    function showcards() {
        let myfirstInterval = setInterval(() => {
            if (opacityset < 1) {
                opacityset += 0.01;
                image1.style.opacity = opacityset;
                image2.style.opacity = opacityset;
                image3.style.opacity = opacityset;
            }
            else {
                clearInterval(myfirstInterval);
                opacityset = 0;
            }
        }, 1);
    }


})(window);
