

//모바일 기기인지 체크하기(isMobile 함수 정의)
function isMobile() {
	const UserAgent = navigator.userAgent;
	if (UserAgent.match(/iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null || navigator.platform.match(/iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || 'ontouchstart' in document.documentElement) {
		return true;
	} else {
		return false;
	}
}



//index.html swiper.js
const swiper = new Swiper('.swiper-container', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	navigation: {
		nextEl: '.swiper-button-next', 
		prevEl: '.swiper-button-prev'
	},
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  } 
});
	const swiperContainer = document.querySelector('.swiper-container');
	const swiperSlides = swiperContainer.querySelectorAll('.swiper-slide');
	

	if (isMobile()) {
		swiper.navigation.nextEl.style.display = 'none';
		swiper.navigation.prevEl.style.display = 'none';
	} 


	/*모바일: 플러스 버튼 누르면 설명 나오기, 엑스 버튼 누르면 다시 사라지기 (+ 배경 투명화)
		pc: 박스 위에 마우스 올리면 설명 나오기, 박스 위에서 치우면 설명 사라지기 (+ 배경 투명화)*/
const btnCirclePlus = swiperContainer.querySelectorAll('.btn-circle-plus');
const contentHidden = swiperContainer.querySelectorAll('.hidden-content');
const btnContentClose = swiperContainer.querySelectorAll('.btn-content-close');
const backgroundOfItems = swiperContainer.querySelectorAll('.background')

for (let i=0; i<btnCirclePlus.length; i++) {
	if (isMobile()) {
		btnCirclePlus[i].style.display = 'inline-block';
	} else {
		btnCirclePlus[i].style.display = 'none';
	};
};

if (isMobile()) { //모바일
	for (let i=0; i<btnCirclePlus.length; i++){
		btnCirclePlus[i].addEventListener('click', function() {
			btnCirclePlus[i].style.display = 'none';
			contentHidden[i].style.display = 'inline-block';
			btnContentClose[i].style.display = 'inline-block';
			backgroundOfItems[i].style.filter = 'blur(6px)';
			backgroundOfItems[i].style.opacity = '0.8';
		});
		btnContentClose[i].addEventListener('click', function() {
			btnCirclePlus[i].style.display = 'inline-block';
			contentHidden[i].style.display = 'none';
			btnContentClose[i].style.display = 'none';
			backgroundOfItems[i].style.filter = 'blur(0)';
			backgroundOfItems[i].style.opacity = '1';
		});
	}
} else { //pc
	for (let i=0; i<btnCirclePlus.length; i++){
		swiperSlides[i].addEventListener('mouseover', function() {
			contentHidden[i].style.display = 'inline-block';
			backgroundOfItems[i].style.filter = 'blur(6px)';
			backgroundOfItems[i].style.opacity = '0.8';
		});
		swiperSlides[i].addEventListener('mouseout', function() {
			contentHidden[i].style.display = 'none';
			backgroundOfItems[i].style.filter = 'blur(0)';
			backgroundOfItems[i].style.opacity = '1';
		});
	}
}

//header btn-hamburg 누르면 nav 펼치기, btn-close-gray 누르면 nav 숨기기
const btnHamburg = document.querySelector(".btn-hamburg");
const btnCloseGray = document.querySelector(".btn-close-gray");
const nav = document.querySelector("nav");
btnHamburg.addEventListener('click', function() {
	nav.style.display = 'block';
	btnHamburg.style.display = 'none';
	btnCloseGray.style.display = 'inline-block';
	document.querySelector('.olla-main').style.filter = 'blur(3px)';
});
btnCloseGray.addEventListener('click', function() {
	nav.style.display = 'none';
	btnHamburg.style.display = 'inline-block';
	btnCloseGray.style.display = 'none';
	document.querySelector('.olla-main').style.filter = 'blur(0)';
})

//index.html <video-container> video custom
const videoContainer = document.querySelector(".video-container");
const videoViewer = videoContainer.querySelector(".video-viewer");
const videoPlayToggle = videoContainer.querySelector(".video-play-toggle");
videoPlayToggle.addEventListener('mouseover', function() {
	videoViewer.style.filter = 'blur(3px)';
	videoViewer.play();
})
videoPlayToggle.addEventListener('mouseout', function() {
	videoViewer.style.filter = 'blur(0)';
})
videoPlayToggle.addEventListener('touchstart', function() {
	videoViewer.style.filter = 'blur(3px)';
	videoViewer.play();
})
videoPlayToggle.addEventListener('touchend', function() {
	videoViewer.style.filter = 'blur(0)';
})

//olla-logo에 홈 새로고침 링크 추가
document.querySelector('.olla-logo').addEventListener('click', event => {
	location.href = "#olla-main";	
	window.location.reload();
})
