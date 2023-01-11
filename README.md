# click_left_right_slide

애니메이트 효과를 Jquery로 활용하여 만든 프로젝트입니다.  
const로 변하지 않는 변수명을 만들었습니다.

const $right=$('.right');  '.right' 클래스를 오른쪽으로 넘어가는 요소로 지정해 주었습니다. 
const $left=$('.left'); '.left' 클래스를 왼쪽으로 넘어가는 요소로 지정해 주었습니다.
const $moving=$('.insertBox ul'); '.insertBox ul'박스안에 있는 애니메이션이 넘어갈 수 있게끔 지정해주었습니다. 

1. "right" 클래스가 있는 요소를 클릭하면 "insertBox ul" 클래스가 있는 요소를 왼쪽으로 200픽셀 애니메이션 합니다.
2. 애니메이션이 완료된 후 "insertBox ul" 내의 첫 번째 목록의 왼쪽 위치를 다시 0으로 설정합니다.

3."left" 클래스가 있는 요소를 클릭하면 "insertBox ul" 클래스가 있는 요소를 오른쪽으로 200픽셀 애니메이션 합니다.
4. 애니메이션이 완료된 후 "insertBox ul" 내의 첫 번째 목록의 왼쪽 위치를 다시 0으로 설정합니다.

5.animate를 활용하여 0.5초 시간을 주어 자연스럽게 움직이도록 한다.
