// 앞에 new 키워드 붙이고 대문자로 시작

let book = {
    책이름: 'JavaScript',
    책가격: 1000,
    저자: '곤',
    출판일: '22.10.11'
}

let newBook = {}

newBook['책이름'] = 'JavaScript' // 예를 들어 form에서 입력 받은 값
newBook['책가격'] = 10000
newBook['저자'] = '곤, 곤곤, 곤곤곤'
newBook['출판일'] = '22.10.30'

function Book(책이름, 책가격, 저자, 출판일){
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
}
// this.책이름 여기의 책이름은 다르다 = 뒤에 책이름과 Book 뒤에 책이름이 묶인다

// let data = Book('CSS', 10, '곤', '22.12.30')
// console.log(data) // undefined

let book1 = new Book('HTML', 10, '곤', '22.12.30')
let book2 = Book('CSS', 20, '곤', '23.12.30')
let book3 = new Book('JS', 30, '곤', '24.12.30')

console.log(book1, book2, book3)


// new 키워드를 사용했을 경우
function Book(책이름, 책가격, 저자, 출판일){
    // this = {}
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    // return this
}

let data = new Book('CSS', 10, '곤', '22.12.30')
console.log(data) 
// Book {책이름: 'CSS', 책가격: 10, 저자: '곤', 출판일: '22.12.30'} [프로토타입 오브젝트]
// 객체처럼 나온다 객체를 찍어내는 용도! 메모리상으로도 효율적, 코드도 깔끔