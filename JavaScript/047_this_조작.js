var peter = {
    name : 'Peter Parker',
    sayName : function(느낌표){    
            console.log(this.name + 느낌표);
    }
}

var bruce = {
    name : 'Bruce Wayne',
}

peter.sayName('!')
peter.sayName.call(bruce, '!');

////

var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
            console.log(this.name+ ' is '+ is + ' or ' + is2);
        }
}

var bruce = {
    name : 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);

////

function sayName(){
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName : sayName
}

var peter = {
    name : 'peter',
    sayName : sayName.bind(bruce)
}

sayName();
peter.sayName();
bruce.sayName();