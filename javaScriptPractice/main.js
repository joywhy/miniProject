// 자바스크립트  연습을 위한 파일입니다.

//이스케이프 시퀀스
const text =
  '이건 백스페이스 입니다. \b 그리고 이건 \r 이건 뭘까요? 또한 저거는 뭘까요? \t 요런것은 뭐라고 할수있을까요?   \v dfdfd';

console.log(text);
// 이건 뭘까요? 또한 저거는 뭘까요?        요런것은 뭐라고 할수있을까요?
//                                                        dfdfd

// \r 개행 : 커서를 처음으로 이동
// \t 탭(수평)
// \v 탭(수직)

let arr = ['프론트엔드에서', '냠냠맨을', '모르면 간첩'];

for (let i = 1; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((text) => console.log(text));

loop1: for (let i = 100; i > 0; i--) {
  loop2: while (true) {
    console.log(i);
    if (뫄뫄) {
      break;
    }
    break loop1;
  }
}
