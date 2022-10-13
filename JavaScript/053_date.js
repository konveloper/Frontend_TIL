Date()

let d = new Date()

d.date() // 1부터 시작합니다.
d.getMonth() // 0월부터 시작합니다. +1 해야합니다!
d.getDay() // 0부터 시작합니다. 0은 일요일입니다.

// 이렇게 많이 씁니다.
switch (d.getDay()) {
    case 0:
        console.log('일요일')
        break;
    case 1:
        console.log('월요일')
        break;
    case 2:
        console.log('화요일')
        break;
    case 3:
        console.log('수요일')
        break;
    case 4:
        console.log('목요일')
        break;
    case 5:
        console.log('금요일')
        break;
    case 6:
        console.log('토요일')
        break;
    default:
        console.log('날짜의 양식이 잘못되었습니다.')
        break;
}

d.getHours()
d.getMinutes()
d.getSeconds()
d.getFullYear()
// d.getYear() 1900년부터 연도 계산 쓰지 않는다

// 2023년 1월
new Date(2023, 0)

// 2023년 1월 20일 9시
new Date(2023, 0, 20)
// Fri Jan 20 2023 00:00:00 GMT+0900 (한국 표준시)

// 2023년 1월 20일 10시
new Date(2023, 0, 20, 10)
// Sat Jan 20 2023 10:00:00 GMT+0900 (한국 표준시)

new Date('2023/1/20/10:00:00')
// Fri Jan 20 2023 10:00:00 GMT+0900 (한국 표준시)
// 이렇게 표기하면 가독성이 훨씬 좋다. 그러나 왜 1이 2월이 아니다...!

today = new Date() // today의 지정 로캘은 KST다.

//UTC와 today의 지정 로캘 KST와의 차이는 -9시간이다.
today.getTimezoneOffset() / 60

today.toString();     // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toTimeString(); // -> 12:30:00 GMT+0900 (대한민국 표준시)

today = new Date('2023/1/20/10:00:00')
today.toString();
today.toISOString();
today.toISOString().slice(0, 10);
today.toISOString().slice(0, 10).replace(/-/g, '')

//http://www.w3bai.com/ko/tags/ref_language_codes.html#gsc.tab=0
//http://www.w3bai.com/ko/tags/ref_country_codes.html#gsc.tab=0
today.toLocaleString('ko-KR'); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('en-US'); // -> 7/24/2020, 12:30:00 PM
today.toLocaleString('ja-JP'); // -> 2020/7/24 12:30:00


const dayNames = [
    '(일요일)',
    '(월요일)',
    '(화요일)',
    '(수요일)',
    '(목요일)',
    '(금요일)',
    '(토요일)'
];
// getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
const day = dayNames[today.getDay()];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const ampm = hour >= 12 ? 'PM' : 'AM';