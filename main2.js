var val = document.getElementById('salary');
var select_with = document.getElementById('currency-with');
var select_to = document.getElementById('currency-to');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', false);
xhr.send();
var reqObj = JSON.parse(xhr.responseText);
reqObj.forEach(function(item) {
    var opt_with = new Option(item.ccy, item.ccy);
    var opt_to = new Option(item.ccy, item.ccy);
    select_with.appendChild(opt_with);
    select_to.appendChild(opt_to);
    if(item.ccy == 'BTC') {
        select_to.removeChild(opt_to);
        select_with.removeChild(opt_with);
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
        if(select_with.value == 'UAN') {
            if(item.ccy == select_to.value) {
                res = val / item.sale;
            }
        }
    });
    reqObj.forEach(function(item) {
        if(item.ccy == select_to.value) {
            res = val.value*with_Val/item.sale;
        }
        if(select_to.value == 'UAN') {
            if(item.ccy == select_with.value) {
                res = val * item.sale;
            }
        }
    });
    document.getElementById('result').innerHTML = res;
}