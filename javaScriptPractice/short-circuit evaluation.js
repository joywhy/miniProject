var elem = null;
// var value = elem.value; //오류

// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할때
var values = elem && elem.value; //단축평가를 쓰면 오류가 나지 않음
console.log(values); //null
