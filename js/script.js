const $right=$('.right');
const $left=$('.left');
const $moving=$('.insertBox ul');

$right.click(function(){
    $moving.stop().animate({left:200*-1},500,function(){
        $(this).children("li:first").insertAfter($(this).children("li:last"));
        $(this).css({left:0})
    });
});

$left.click(function(){
    $moving.children("li:last").insertBefore($moving.children("li:first"));
    $moving.css({left:200*-1})
    $moving.stop().animate({left: 0},500)
    //animate역할은 자연스럽게 transition처럼 움직여주는 역할을 한다.
});