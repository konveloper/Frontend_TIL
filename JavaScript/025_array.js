let data = ['a', 'b', 'c', 'd']
undefined
let first = data.shift()
undefined
first
'a'
data
(3) ['b', 'c', 'd']
data.unshift('e')
4
data
(4) ['e', 'b', 'c', 'd']
data.pop()
'd'
data
(3) ['e', 'b', 'c']
data.push('f')
4
data
(4) ['e', 'b', 'c', 'f']
data.indexOf
ƒ indexOf() { [native code] }
data.indexOf('c')
2
data.indexOf('z')
-1
data.indexOf('e')
0
Array.isArray(data)
true
Array.isArray('abc')
false
Array.join('!!')
VM643:1 Uncaught TypeError: Array.join is not a function
    at <anonymous>:1:7
(anonymous) @ VM643:1
data.join('!!')
'e!!b!!c!!f'
data.join('-')
'e-b-c-f'
data.fill('hello')
(4) ['hello', 'hello', 'hello', 'hello']
data
(4) ['hello', 'hello', 'hello', 'hello']
data.fill('world', 2)
(4) ['hello', 'hello', 'world', 'world']
data.fill('FE', -1)
(4) ['hello', 'hello', 'world', 'FE']
data.fill('FE3', 1, 3)
(4) ['hello', 'FE3', 'FE3', 'FE']
data.join('-')
'hello-FE3-FE3-FE'
data
(4) ['hello', 'FE3', 'FE3', 'FE']
'hello-FE3-FE3-FE'.split('-')
(4) ['hello', 'FE3', 'FE3', 'FE']0: "hello"1: "FE3"2: "FE3"3: "FE"length: 4[[Prototype]]: Array(0)
Array(10)
(10) [empty × 10]length: 10[[Prototype]]: Array(0)
let test = Array(10)
undefined
test.length
10
Array(100).fill(0)
(100) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]0: 01: 02: 03: 04: 05: 06: 07: 08: 09: 010: 011: 012: 013: 014: 015: 016: 017: 018: 019: 020: 021: 022: 023: 024: 025: 026: 027: 028: 029: 030: 031: 032: 033: 034: 035: 036: 037: 038: 039: 040: 041: 042: 043: 044: 045: 046: 047: 048: 049: 050: 051: 052: 053: 054: 055: 056: 057: 058: 059: 060: 061: 062: 063: 064: 065: 066: 067: 068: 069: 070: 071: 072: 073: 074: 075: 076: 077: 078: 079: 080: 081: 082: 083: 084: 085: 086: 087: 088: 089: 090: 091: 092: 093: 094: 095: 096: 097: 098: 099: 0length: 100[[Prototype]]: Array(0)
Array(100).fill('')
(100) ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
Array(100).fill(0).map((_, index)=>index)
(100) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
// 100이 펼쳐지고 인덱스가 펼쳐진 값에 들어간다
// 언더바 의미 없음
Array(100).fill(0).map((_, index)=>index+1)
(100) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
Array(10).fill(0).fill('hello', 0, 3)
(10) ['hello', 'hello', 'hello', 0, 0, 0, 0, 0, 0, 0]
Array(100).fill(0).map((_, index)=>index+1).filter(i => i % 3 === 0)
(33) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99]
// 배열 안에 100개 값 만들어서 3의 공배수 
Array(100).fill(0).map((_, index)=>index+1).filter(i => i % 3 === 0 || i % 5 === 0)
(47) [3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27, 30, 33, 35, 36, 39, 40, 42, 45, 48, 50, 51, 54, 55, 57, 60, 63, 65, 66, 69, 70, 72, 75, 78, 80, 81, 84, 85, 87, 90, 93, 95, 96, 99, 100]0: 31: 52: 63: 94: 105: 126: 157: 188: 209: 2110: 2411: 2512: 2713: 3014: 3315: 3516: 3617: 3918: 4019: 4220: 4521: 4822: 5023: 5124: 5425: 5526: 5727: 6028: 6329: 6530: 6631: 6932: 7033: 7234: 7535: 7836: 8037: 8138: 8439: 8540: 8741: 9042: 9343: 9544: 9645: 9946: 100length: 47[[Prototype]]: Array(0)
let s = 0;
Array(100).fill(0).map((_, index)=>index+1).filter(i => i % 3 === 0 || i % 5 === 0).forEach(x => s += x);
undefined
s
2418

Array(100).fill(0).map((_, index)=>index+1).filter(i => i % 3 === 0 || i % 5 === 0).reduce((누적값, 현재값, 인덱스) => {
    return 누적값 + 현재값
}, 0)

'.'.repeat(10).split('.')
(11) ['', '', '', '', '', '', '', '', '', '', '']
'.'.repeat(99).split('.') // 100개
(100) ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']0: ""1: ""2: ""3: ""4: ""5: ""6: ""7: ""8: ""9: ""10: ""11: ""12: ""13: ""14: ""15: ""16: ""17: ""18: ""19: ""20: ""21: ""22: ""23: ""24: ""25: ""26: ""27: ""28: ""29: ""30: ""31: ""32: ""33: ""34: ""35: ""36: ""37: ""38: ""39: ""40: ""41: ""42: ""43: ""44: ""45: ""46: ""47: ""48: ""49: ""50: ""51: ""52: ""53: ""54: ""55: ""56: ""57: ""58: ""59: ""60: ""61: ""62: ""63: ""64: ""65: ""66: ""67: ""68: ""69: ""70: ""71: ""72: ""73: ""74: ""75: ""76: ""77: ""78: ""79: ""80: ""81: ""82: ""83: ""84: ""85: ""86: ""87: ""88: ""89: ""90: ""91: ""92: ""93: ""94: ""95: ""96: ""97: ""98: ""99: ""length: 100[[Prototype]]: Array(0)
//'.'.repeat(10).split('.'); 
//자주 사용되는 코드는 아님. 특정한 문자열에서 array를 생성하는 경우. (참고로 원소10개가 아닌 원소 11개가 만들어짐)

Array.from('abcde')
(5) ['a', 'b', 'c', 'd', 'e']
Array.from('a-b-c-d-e')
(9) ['a', '-', 'b', '-', 'c', '-', 'd', '-', 'e']0: "a"1: "-"2: "b"3: "-"4: "c"5: "-"6: "d"7: "-"8: "e"length: 9[[Prototype]]: Array(0)
Array.from('a'.repeat(9))
(9) ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
Array.from('a'.repeat(10))
(10) ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
Array.from('hello'.repeat(10))
(50) ['h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o']
'010-5044-2903'.split('-')
(3) ['010', '5044', '2903']
let arr = [[1, 2, 3], [4, 5, 6]]
undefined
arr.flat()
(6) [1, 2, 3, 4, 5, 6]
arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, [11, 12]]]]
(3) [Array(3), Array(3), Array(3)]
arr.flat(1)
(9) [1, 2, 3, 4, 5, 6, 7, 8, Array(3)]
arr.flat(2)
(11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, Array(2)]
arr.flat(3)
(12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
data = ['a', 'b', 'c', 'd', 'e']
(5) ['a', 'b', 'c', 'd', 'e']
data.includes('a')
true
data.splice(3,0,'100')
[]
data
(6) ['a', 'b', 'c', '100', 'd', 'e']
let a = ['a', 'b']
let b = ['c', 'd']

[...a, 100, ...b]
VM2647:4 Uncaught SyntaxError: Rest parameter must be last formal parameter
let a = ['a', 'b']
let b = ['c', 'd']

let c = [...a, 100, ...b]
undefined
c
(5) ['a', 'b', 100, 'c', 'd']
data.slice(3)
(3) ['100', 'd', 'e']
data.slice(0, 3)
(3) ['a', 'b', 'c']
let result = [...data.slice(3), 10000, ...data.slice(0, 3)]
undefined
result
(7) ['100', 'd', 'e', 10000, 'a', 'b', 'c']
let result = [...data.slice(0, 3), 'hello world', ...data.slice(3)]
undefined
result
(7) ['a', 'b', 'c', 'hello world', '100', 'd', 'e']

///////////////////

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.find(i => i > 5);
6
arr = [{
    'name' : 'title1',
    'contents' : 'contents1',
    'dataNum' : 1
}, {
    'name' : 'title2',
    'contents' : 'contents2',
    'dataNum' : 2
}, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5
}];
//(5) [{…}, {…}, {…}, {…}, {…}]
arr.filter(i => i.contents == 'contents3')
//[{…}]
arr.filter(i => i.dataNum > 3)
//(2) [{…}, {…}]
arr.filter(i => i.name.includes('tit'))
//(5) [{…}, {…}, {…}, {…}, {…}]
arr = [{
    'name' : '안녕1',
    'contents' : 'contents1',
    'dataNum' : 1
}, {
    'name' : '안녕2',
    'contents' : 'contents2',
    'dataNum' : 2
}, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5
}];
//(5) [{…}, {…}, {…}, {…}, {…}]
arr.filter(i => i.name.includes('tit'))
//(3) [{…}, {…}, {…}]
arr.filter(i => i.name.includes('안녕'))
//(2) [{…}, {…}]
arr = [{
    'name' : '안녕1',
    'contents' : '프론트엔드1',
    'dataNum' : 1
}, {
    'name' : '안녕2',
    'contents' : '프론트엔드2',
    'dataNum' : 2
}, {
    'name' : 'title3',
    'contents' : '프론트엔드3',
    'dataNum' : 3
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5
}];
//(5) [{…}, {…}, {…}, {…}, {…}]
arr = [{
    'name' : '안녕1',
    'contents' : '프론트엔드1',
    'dataNum' : 1
}, {
    'name' : '프론트엔드2',
    'contents' : 'content2',
    'dataNum' : 2
}, {
    'name' : 'title3',
    'contents' : '프론트엔드3',
    'dataNum' : 3
}, {
    'name' : '안녕4',
    'contents' : 'contents4',
    'dataNum' : 4
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5
}];
//(5) [{…}, {…}, {…}, {…}, {…}]
arr.filter(i => i.name.includes('프론트'))
//[{…}]
arr.filter(i => i.contents.includes('프론트'))
//(2) [{…}, {…}]
cafe = ['coffee', 'cake', 'tea', 'cookie']
cafe = [{
    'item' : 'coffee',
    'amount' : 5
},{
    'item' : 'cake',
    'amount' : 4
},{
    'item' : 'tea',
    'amount' : 7
},{
    'item' : 'cookie',
    'amount' : 3
}];

index = cafe.findIndex(obj => obj.item.length <= 3)
cafe = ['coffee', 'cake', 'tea', 'cookie']

cafe = [{
    'item' : 'coffee',
    'amount' : 5
}, {
    'item' : 'cake',
    'amount' : 4
}, {
    'item' : 'tea',
    'amount' : 7
}, {
    'item' : 'cookie',
    'amount' : 3
}];

index = cafe.findIndex(obj => obj.item.length <= 3)
cafe2 = [{
    'item' : 'coffee',
    'amount' : 5
}, {
    'item' : 'cake',
    'amount' : 4
}, {
    'item' : 'tea',
    'amount' : 7
}, {
    'item' : 'cookie',
    'amount' : 3
}];

index = cafe2.findIndex(obj => obj.item.length <= 3)
index
2

cafe3 = [{
    'item' : 'coffee',
    'amount' : 5
}, {
    'item' : 'cake',
    'amount' : 4
}, {
    'item' : 'tea',
    'amount' : 7
}, {
    'item' : 'cookie',
    'amount' : 3
}, {
    'item' : 'x',
    'amount' : 300
}];

cafe2.findIndex(obj => obj.item.length <= 3)
2
arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

arr.find(i => i > 50);
60
cafe3 = [{
    'item' : 'coffee',
    'amount' : 5
}, {
    'item' : 'cake',
    'amount' : 4
}, {
    'item' : 'tea',
    'amount' : 7
}, {
    'item' : 'cookie',
    'amount' : 3
}, {
    'item' : 'x',
    'amount' : 300
}];

cafe3.findIndex(obj => obj.item.length <= 3)
cafe4 = [{
    'item' : 'coffee',
    'amount' : 5
}, {
    'item' : 'cake',
    'amount' : 4
}, {
    'item' : 'tea',
    'amount' : 7
}, {
    'item' : 'cookie',
    'amount' : 3
}, {
    'item' : 'x',
    'amount' : 300
}];

cafe4.findIndex(obj => obj.item.length <= 3)
2
arr = [{
    'name' : 'title1',
    'contents' : 'contents1',
    'dataNum' : 1,
    'data' : [1, 2, 3]
}, {
    'name' : 'title2',
    'contents' : 'contents2',
    'dataNum' : 2,
    'data' : [1, 2, 3]
}, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3,
    'data' : [1, 2, 100]
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4,
    'data' : [1, 2, 3]
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5,
    'data' : [1, 2, 100]
}];
//(5) [{…}, {…}, {…}, {…}, {…}]
arr.map(i => i.name)
//(5) ['title1', 'title2', 'title3', 'title4', 'title5']
arr.map(i => i.contents)
//(5) ['contents1', 'contents2', 'contents3', 'contents4', 'contents5']
arr.map(i => i.dataNum)
//(5) [1, 2, 3, 4, 5]
arr.map(i => i.data)
//(5) [Array(3), Array(3), Array(3), Array(3), Array(3)]
arr.map(i => i.data[2])
//(5) [3, 3, 100, 3, 100]
arr = [{
    'name' : 'title1',
    'contents' : 'contents1',
    'dataNum' : 1,
    '지역과날짜' : [
        '한국',
        [22, 5, 4]
    ]
}, {
    'name' : 'title2',
    'contents' : 'contents2',
    'dataNum' : 2,
    '지역과날짜' : [
        '한국',
        [22, 5, 4]
    ]
}, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3,
    '지역과날짜' : [
        '한국',
        [23, 5, 4]
    ]
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4,
    '지역과날짜' : [
        '한국',
        [23, 5, 4]
    ]
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5,
    '지역과날짜' : [
        '한국',
        [22, 5, 4]
    ]
}];
//(5) [{…}, {…}, {…}, {…}, {…}]
arr.map(i => i['지역과날짜'][1][0])
//(5) [22, 22, 23, 23, 22]
function 호준(값){
    return 값.name
}
arr.map(호준)
//(5) ['title1', 'title2', 'title3', 'title4', 'title5']
arr = [1, 2, 4, 8, 16]
//(5) [1, 2, 4, 8, 16]




////   복구   ////
arr.map(i => i + 10)

function weniv(x){
    return x + 100
}

arr.map((value, index, array) => ([index, value.contents, array]))