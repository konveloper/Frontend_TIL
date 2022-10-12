function getEmptyRoomCount(hotel) {
    return hotel.방의개수 - hotel.예약자수;
}

let 호텔 = [
    {
        '이름': '호텔1',
        '방의개수': 50,
        '예약자수': 25,
        '남은방의개수': function(){return this.방의개수 - this.예약자수}
    }, {
        '이름': '호텔2',
        '방의개수': 40,
        '예약자수': 25,
        '남은방의개수': function(){return this.방의개수 - this.예약자수}
    }, {
        '이름': '호텔3',
        '방의개수': 30,
        '예약자수': 25,
        '남은방의개수': function(){return this.방의개수 - this.예약자수}
    }, {
        '이름': '호텔4',
        '방의개수': 25,
        '예약자수': 25,
        '남은방의개수': function(){return this.방의개수 - this.예약자수}
    },
]

// 호텔[0]['방의개수'] - 호텔[0]['예약자수']
console.log(호텔[0]['남은방의개수']()) // 아래 결과 값과 같습니다.
console.log(호텔[0].남은방의개수()) // 자료구조 파악이 용이
console.log(getEmptyRoomCount(호텔[0])) // 메모리 공간에 이득