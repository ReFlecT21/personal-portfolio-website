let width=screen.width;
if(width<=600){
  var swiper = new Swiper('.Slider-container', {
    effect: 'cards',
    grabCursor: true,
    centerdSlides: true,
    loop: true,
  });
}
if (width>600){

  const con=document.getElementById("con");
  const stage1=document.getElementById("stage1");
  const stage2=document.getElementById("stage2");
  const stage3=document.getElementById("stage3");
  const stage4=document.getElementById("stage4");
  con.className="hilli";
  
  stage1.className="heolll";
  
  stage2.className="bro";
  stage3.className="swiper-slid img1";
  stage4.className="swiper-slid img2";
  
  
  
  
  }

// swiper.changeDirection('vertical');
