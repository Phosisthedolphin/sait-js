function displayDate() {
    let mydate = new Date();
    let year = mydate.getFullYear();
        if(year < 1000){
            year +=1900
        }
    let day = mydate.getDay();
    let month = mydate.getMonth();
    let daym = mydate.getDate();
    let dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    let montharray = new Array("January","February","March","April","May","June","July","August","Septemeber","October","November","December");
    
    let currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
        if(h == 24){
            h = 0;
        } else if(h > 12){
            h = h - 0;
        }

        if(h < 10){
            h = "0" + h;
        }

        if(m < 10){
            m = "0" + m;
        }

        if(s < 10){
            s = "0" + s;
        }

        let myClock = document.getElementById('time');
        myClock.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
        myClock.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

        setTimeout('displayDate()', 1000);
}
displayDate();

function agentGen() {
    let nameArray = new Array("John Simco", "Judy Steiner", "Rod Barley", "Quaid Wilson", "Frank Booth");
    let phoneArray = new Array("403-000-000", "403-111-1111", "403-222-2222", "403-333-3333", "403-444-4444");
    for (i = 0; i < nameArray.length; i += 1) {
        info = nameArray[i] + " " + phoneArray[i];
        console.log(info);
    } for (i = 0; 1 < info.length; i += 1) {
        let agentInfo = document.getElementById('agent');
        agentInfo.textContent = info
    }
}
agentGen();