// スムーススクロール

const headerHeight = document.querySelector('header').offsetHeight;

//querySelectorAllメソッドを使用してページ内のhref属性が#で始まるものを選択
//forEachメソッドを使って、各アンカータグにクリックされた時の処理
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // クリックされたときのデフォルトの挙動を防ぐ
    e.preventDefault();
    // クリックされたアンカータグのhref属性を取得
    const href = anchor.getAttribute('href');
    // href属性の#を取り除いた部分と一致するIDを取得
    const target = document.getElementById(href.replace('#', ''));
    //取得した要素の位置を取得するために、getBoundingClientRect()を呼び出し、ページ上の位置を計算。
    //headerの高さを引いて、スクロール位置がヘッダーの下になるように調整します。
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    // window.scrollTo()を呼び出して、スクロール位置を設定します。behaviorオプションをsmoothに設定することで、スムーズなスクロールを実現します。
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
  });
});

function fadeAnime(){
  $('.fadeUpTrigger').each(function(){
    var elemPos = $(this).offset().top+220;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    }else{
    $(this).removeClass('fadeUp');
    }
    });
}

$(window).scroll(function (){
  fadeAnime();
});

$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});