//function fact(a) {
//    let c = 1;
//    while(a>0) {
//        c*=a;
//        a--;
//    }
//    console.log(c);
//}
//fact(5);
////////////////////////////////////////////////
// let arr = [1, 2, 9, 7, 0];
//var i, len = arr.length, temp, j, val=0;
//for(i=0; i < len; i+=1) {
//    for(j=0; j<len; j++) {
//        if(arr[j] > arr[j+1]) {
//            temp = arr[j];
//            arr[j] = arr[j+1];
//            arr[j+1] = temp;
//            val++;
//            console.log(val);
//          }
//      }
//    
//  }
//console.log(arr);
/////////////////////////////////////////
//let a = 2;
//let b = 3;
//a = a+b;
//b = a-b;
//a = a-b;
//console.log(a, b);
/////////////////////////////////////////////////////
//window.addEventListener('load', function() {
//    if(navigator && navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(geo_succ, geo_err);
//    }
//    else {
//        error('Geo not support');
//    }
//})
//
//function geo_succ(position) {
//    printLatLong(position.coords.latitude, position.coords.longitude, position.coords.accuracy);
//}
//function printLatLong(lat, long, acc) {
//    $('body').append('<p> Coords: ' + lat + ' ' + long + ' ' + acc + '</p>');
////    $('body').append('<p> Longitude :' + long + '</p>');
//}
//function geo_err(err) {
//    if(err.code == 1) {
//        error('Geo blocked by user')
//    }
//    else if(err.code == 2) {
//        error('Geo ...');
//    }
//    else if (err.code == 3) {
//        error('qqqqqqqqq');
//    }
//    else {
//        error('Unknown error');
//    }
//}
//function error(msg) {
//    alert(msg);
//}
////////////////////////////////////////////////////
//var mycanvas = document.getElementById('mycanvas');
//var mycontext = mycanvas.getContext('2d');
//function draw_circle(x, y) {
//    mycontext.fillStyle = '#e5bd64';
//    mycontext.beginPath();
//    mycontext.arc(x, y, 10, 0, Math.PI * 2, true);
//    mycontext.fill();
//}
//function erraseCircle(x ,y) {
//    mycontext.clearRect(x - 10, y - 10, 20, 20);
//}
//var ball_x = 50;
//var ball_y = 50;
//var delta = 3;
//draw_circle(ball_x, ball_y);
//setInterval(function() {
//    if(ball_x > 100 || ball_y < 15 || ball_x < 15 || ball_y > 100) {
//        delta *= -1;
//    }
//    erraseCircle(ball_x, ball_y);
//    ball_x += delta;
//    ball_y += delta;
//    draw_circle(ball_x, ball_y);
//}, 25);
/////////////////////////////////////////////////////////////
//var user_id = "asdasd";
//var user_data = {
//    name: 'A',
//    logged_in: true,
//    cloor: 'red'
//};
//sessionStorage.setItem(user_id, JSON.stringify(user_data));
//if(sessionStorage.getItem(user_id)) {
//    let user_d = (JSON.parse(sessionStorage.getItem(user_id)));
//    console.log(user_d);
//    console.log(sessionStorage.length);
//}
//////////////////////////////////////
//var xhr = new XMLHttpRequest();
//xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', false);
//xhr.send();
//var reqObj = JSON.parse(xhr.responseText);
//var arrExch = Array.from(document.getElementsByClassName('exchange_item'));
//var i;
//for(i = 0; i < arrExch.length; i++) {
//    arrExch[i].innerHTML = Math.round(Number(document.getElementById('salary').textContent) / reqObj[i].sale) + " " + reqObj[i].ccy;
//    if(reqObj[i].ccy == 'BTC') {
//        arrExch[i].innerHTML = '<strike>' + Math.round(Number(document.getElementById('salary').textContent) / reqObj[i].sale) + " " + reqObj[i].ccy + '/' +            reqObj[i].base_ccy + '</strike>';
//    }
}
/////////////////////////////////////////
//function sum(a) {
//    return function(b) {
//        return console.log(a+b);
//    }
//}
//sum(5)(-1);
//////////////////////////////
//function makeBuffer() {
//  var text = '';
//  return function(piece) {
//    if (arguments.length == 0) { // вызов без аргументов
//      return text;
//    }
//    text += piece;
//  };
//};
//var buffer = makeBuffer();
//// добавить значения к буферу
//buffer('Замыкания');
//buffer(' Использовать');
//buffer(' Нужно!');
//alert( buffer() ); // 'Замыкания Использовать Нужно!'
//var buffer2 = makeBuffer();
//buffer2(0);
//buffer2(1);
//buffer2(0);
//alert( buffer2() );
/////////////////////////////////////////////////
    /*Recursion Fibonacci*/
//var prev = 1;
//var curr = 1;
//var next = 2;
//function fi(n) {
//    if(n > 3) {
//        fi(n-1);
//        prev = curr;
//        curr = next;
//        next = prev + curr;
//        return next;
//    }
//    else if(n == 3) {
//        return 2;
//    }
//    else if (n == 2) {
//        return 1;
//    }
//    else if (n == 1) {
//        return 1;
//    }
//    else {
//        return "WTF";
//    }
//}
//console.log(fi(8));
    /*loop Fibonacci*/
//function fi(n) {
//    var prev = 1, curr = 1, next = 2, i;
//    for(i = n; i > 3; i--) {
//        prev = curr;
//        curr = next;
//        next = prev + curr;
//    }    
//    return next;
//}
//console.log(fi(8));
/////////////////////////////////////
//var arr = [1,2,3,4,5,6,7,8,9,10];
//
//function filter(arr) {
//    var nArr = [];
//    function checkEl(el) {
//        if(el % 2 == 0) {
//            return true;
//        }
//    }  
//    var i;
//    for(i=0; i<arr.length; i++) {
//        if(A(arr[i])) {
//            nArr[nArr.length] = arr[i];
//        }
//    }
//    return nArr;
//}
//
//console.log(filter(arr));
/////////////////////////////////////////////


















