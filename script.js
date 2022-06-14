	/* 프로덕트 메뉴 눌렀을때 */

	var tab = document.getElementsByClassName("tab");

	function handleClick(event) {
	  console.log(event.target);
	  // console.log(this);
	  // 콘솔창을 보면 둘다 동일한 값이 나온다

	  console.log(event.target.classList);

	  if (event.target.classList[1] === "clicked") {
		event.target.classList.remove("clicked");
	  } else {
		for (var i = 0; i < tab.length; i++) {
		  tab[i].classList.remove("clicked");
		}

		event.target.classList.add("clicked");
	  }
	}

	function init() {
	  for (var i = 0; i < tab.length; i++) {
		tab[i].addEventListener("click", handleClick);
	  }
	}

	init();

  /* 사진 바꾸기 */
  var bigPic = document.querySelector("#big");
  var smallPics = document.querySelectorAll(".small");

  for(var i = 0; i<smallPics.length; i++){
      smallPics[i].addEventListener("click",changePic);
  }

  function changePic(){
      var smallPicAttribute = this.getAttribute("src");
      bigPic.setAttribute("src",smallPicAttribute);
  }


const tabs = document.querySelectorAll("[data-tab-target]");
const tabcon = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabcon.forEach((tabc_all) => {
      tabc_all.classList.remove("active");
    });

    target.classList.add("active");
  });
});


/* 비디오 재생 */

let clip = document.querySelector(".vid")

clip.addEventListener("mouseover", function (e) {
    clip.play();
})

clip.addEventListener("mouseout", function (e) {
    clip.pause();
})


/*product-detail*/


function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
	const total = document.getElementById('price');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
	let totalnumber = total.innerText;
    
	console.log(totalnumber);

    // 더하기/빼기
    if(type === 'plus') {
      number = parseInt(number) + 1;
	  totalnumber = parseInt(totalnumber) + 59200;

    }else if(type === 'minus')  {
      number = parseInt(number) - 1;
	  totalnumber = parseInt(totalnumber)-59200;
    }
    
    // 결과 출력
	total.innerText = totalnumber;
    resultElement.innerText = number;
  }


  /*슬라이더*/

  var slides = document.querySelector('.slides'),
		slide = document.querySelectorAll('.slides li'),
		currentIdx = 0,
		slideCount = slide.length,
		orgslideCount = slide.length,
		prevBtn  =  document.querySelector('.prev'),
		slideWidth = 200,
		slideMargin = 30,
		nextBtn = document.querySelector('.next');		

		makeClone();

		function makeClone(){
			for(var i = 0; i<slideCount;i++){				
				var cloneSlide = slide[i].cloneNode(true);
				cloneSlide.classList.add('clone');
				slides.appendChild(cloneSlide);	
			}
			for(var i = orgslideCount -1; i>=0;i--){				
				var cloneSlide = slide[i].cloneNode(true);
				cloneSlide.classList.add('clone');
				slides.prepend(cloneSlide);	
			}
			updateWidth();
			setInitialPos();

			setTimeout(function(){
				slides.classList.add('animated');
			},100);			
		}		

		function updateWidth(){
			var currentSlides = document.querySelectorAll('.slides li');
			slideCount = currentSlides.length;

			var newWidth = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';
			slides.style.width = newWidth;
		}
		function setInitialPos(){
			var initialTransLateValue = -(slideWidth + slideMargin)*orgslideCount;
			console.log(initialTransLateValue);
			
			slides.style.transform = 'translateX('+initialTransLateValue+'px)';
		}


		function moveSlide(num){			
			slides.style.left = -num * (slideWidth + slideMargin) + 'px';

			currentIdx = num;

			if(orgslideCount == currentIdx ||  currentIdx == -orgslideCount ){
				//slides.classList.remove('animated');				

				setTimeout(function(){	
					slides.style.left = '0px';
					currentIdx = 0;
					slides.classList.remove('animated');		
				},500);	

				setTimeout(function(){		
					slides.classList.add('animated');		
				},700);				
				
				console.log(orgslideCount,currentIdx,'0 으로');		
				
			}			
			
		}

		nextBtn.addEventListener('click', function(){
			moveSlide(currentIdx + 1);
		});
		prevBtn.addEventListener('click', function(){		
			moveSlide(currentIdx - 1);
		});


    let mainText = document.querySelector(".controls p")
	window.addEventListener("scroll", function(){
	let value = window.scrollY;
	console.log("scrollY",value);

  	if(value>1477){
		document.getElementById("move").style.animation = "slide 2s ease-out"
	}

	if(value>2400){
		document.getElementById("move2").style.animation = "slide 2s ease-out"
	}

	if(value>4046){
		document.getElementById("move5").style.animation = "slide 2s ease-out"
	}

	if(value>4611){
		document.getElementById("move6").style.animation = "right-slide 2s ease-out"
	}

	if(value>5956){
		document.getElementById("move7").style.animation = "upper-slide 1s ease-out"
	}

	})



