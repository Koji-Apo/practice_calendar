var today=new Date();
var kyou=today.getDate();
var year=today.getFullYear();
var month=today.getMonth()+1;


function makecalendar(year,month){
    var firstDate=new Date(year,month-1,1);
    var firstyoubi=firstDate.getDay();

    var lastDate=new Date(year,month,0);
    var matujitu=lastDate.getDate();

    var sengetu=new Date(year,month-1,0);
    var sengetumatujitu=sengetu.getDate();
    var hizuke=1;

    var calendarbody="";
    calendarbody+="<h1>"+year+"年"+month+"月"+"</h1>";
    calendarbody+="<table>";

    var youbi= new Array("日","月","火","水","木","金","土");
    for(var i=0;i<7;i++){
        calendarbody+="<td>"+youbi[i]+"</td>";
    }

    for(var r=0;r<6;r++){
        calendarbody+="<tr>";

        for(var d=0;d<7;d++){
            if(r==0 && d<firstyoubi){
                var hidariue=sengetumatujitu-firstyoubi+1+d;
                calendarbody+="<td class='usuji'>"+hidariue+"</td>";
            }else if(hizuke>matujitu){
                var migisita=hizuke-matujitu;
                calendarbody+="<td class='usuji'>"+migisita+"</td>";
                hizuke++;
            }else if(hizuke==kyou && month==today.getMonth()+1 && year==today.getFullYear()){
                calendarbody+="<td class='kyou'>"+hizuke+"</td>";
                hizuke++;
            }else{
                calendarbody+="<td>"+hizuke+"</td>";
                hizuke++;
            }
        }
        calendarbody+="</tr>";
    }
    calendarbody+="</table>";
    document.getElementById("calendar").innerHTML=calendarbody;
}
makecalendar(year,month);


function sengetushow(){
    month--;
    if(month<1){
        year--;
        month=12;
    }
    makecalendar(year,month);
}
function raigetushow(){
    month++;
    if(month>12){
        year++;
        month=1;
    }
    makecalendar(year,month);
}