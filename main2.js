var val = document.getElementById('salary');
var select_with = document.getElementById('currency-with');
var select_to = document.getElementById('currency-to');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', false);
xhr.send();
var reqObj = JSON.parse(xhr.responseText);
reqObj.forEach(function(item) {
    if(item.ccy != 'BTC') {
        var opt_with = new Option(item.ccy, item.ccy);
        var opt_to = new Option(item.ccy, item.ccy);
        select_with.appendChild(opt_with);
        select_to.appendChild(opt_to);
    }
});
var UAN;
var opt_with_uan = new Option('UAN', 'UAN');
var opt_to_uan = new Option('UAN', 'UAN');
select_with.appendChild(opt_with_uan);
select_to.appendChild(opt_to_uan);
var doing = document.getElementById('do');
doing.addEventListener('click', Do);
function Do() {
    var res;
    var with_Val;
    reqObj.forEach(function(item) {
       if(item.ccy == select_with.value) {
           with_Val = item.sale;
       } 
    });
    reqObj.forEach(function(item) {
        if(item.ccy == select_to.value) {
            res = (val.value*with_Val/item.sale).toFixed(2);
        }
    });
    document.getElementById('result').innerHTML = res;
}
////////////////////
//let butt = document.getElementById('butt');
//butt.addEventListener('click', F);
//function F() {
//    if(document.getElementById('test').style.width == 0) {
//        document.getElementById('test').style.width = 130 + 'px';
//        document.getElementById('test2').style.backgroundColor = 'rgba(225, 225, 225, 0.5)';
//    }
//    else {
//        document.getElementById('test').style.width = 0 + 'px';
//        document.getElementById('test2').style.backgroundColor = 'bisque';
//    }    
//}