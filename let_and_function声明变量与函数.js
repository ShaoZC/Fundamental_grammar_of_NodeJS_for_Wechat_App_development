/////////1/////////
/////////let命令/////////

var a=1;//声明变量
let b=2;//ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
console.log(a,'--',b)
// 1 '--' 2

//计数器i只在for循环体内有效
for (let i=0;i<10;i++){
    c=a+b+i
    // console.log('i is',i)
    // console.log(c) 3/4/5/6/7/8...
}
console.log('c',c)
//c 12


//变量i是var命令声明的，在全局范围内都有效
var a=[];//声明a为一个数组
for(var i=1;i<10;i++){
    a[i]=function(){
        console.log('i is',i)
    }
    // console.log('i is',i)//i is 1/2/3/4/5...10
    // console.log('a is',a[i])//a is function(){console.log('i is',i)}
}
a[6]();//i is 10
//全局只有一个变量i。每一次循环，变量i的值都会发生改变

//变量i是let声明的
var a=[];//声明a为一个数组
for(let i=1;i<9;i++){
    a[i]=function(){
        console.log('i is',i)
    }
    // console.log('i is',i)//i is 1/2/3/4/5...10
    // console.log('a is',a[i])//a is function(){console.log('i is',i)}
}
a[6]();//i is 6
// i只在本轮循环有效



// for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
for(let i=1;i<5;i++){
    let i='abc';
    // console.log('i is',i)//i is abc
}
console.log('i is +1',i)//i is +1 10(竟然既不是5/9，也不是abc)
//听从var的声明

///////////启发：以后想在区块内使用，就先用var声明这个变量
///////////启发：以后想在区块内使用，就先用var声明这个变量
///////////启发：以后想在区块内使用，就先用var声明这个变量  
///////////var a=[10,20,30];
///////////function bfunction(){
/////////// for(let i=1;i<3;i++){c=a[i]} 
///////////console.log('c is',c) //c is 10/20/30
///////////}
///////////bfunction()
/////////// console.log('c+1 is',c) //c+1 is 30
/////////// console.log('a[] is',a) //a[] is [ 10, 20, 30 ]
/////////// //a还在这儿



//声明两个变量

// function bar(x = y, y = 2) {
//   return [x, y];
// }
// bar(); // 报错，y is not defined
//修正
var x,y
function bar1(x=2,y=x){
    console.log('x,y,x+y,x+i is',x,y,x+y,x+i)//x,y,x+y,x+i is 2 2 4 12
    return [x,y,x+y,x^2,x+i];
}
bar1();



/////////2/////////
/////////块级作用域/////////
// 外层作用域无法读取内层作用域的内部变量（by let）
var tem=new Date()

function cfunction(){
    let tem='tem'
    var dem=tem+1

    console.log('tem is',tem)//tem is tem
    console.log('dem is',dem)//dem is tem1
    return tem
}
// cfunction()//tem is tem 
console.log('tem+1 is',tem)//tem+1 is 2020-02-11T02:47:10.259Z
// 只是在function范围内，tem改变了值
// console.log('dem1 is',dem)//dem is not defined



