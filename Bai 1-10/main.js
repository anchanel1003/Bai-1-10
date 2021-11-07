function bai1(){
    let stn1 = parseInt(document.getElementById('stn1').value);
    let text1 = ""
    let i;
    for(i=1; i<=stn1; i++){
        text1 += i + " " + ""
    }
    document.getElementById('ketquab1').value = text1;
}


function bai2(){
    let stn2 = parseInt(document.getElementById('stn2').value);
    let text2 = ""
    let i;
    for(i=1; i<=stn2; i += 2){
        text2 += i + " " + ""
    }
    document.getElementById('ketquab2').value = text2;
}

function bai3(){
    let stn3 = parseInt(document.getElementById('stn3').value);
    let text3 = ""
    let i;
    for(i=2; i<=stn3; i += 2){
        text3 += i + " " + ""
    }
    document.getElementById('ketquab3').value = text3;
}


function bai4(){
    let stn4 = parseInt(document.getElementById('stn4').value);
    let text4 = "";
    let i;
    let j;
    if (stn4 <=1){
        text4 += "Không có sô nguyên tố nào"
    }
    else{
        for(i=2; i<=stn4;i++)
        {
            if(i ==2){
                text4 += i +" " + ""
            }
            else{
                var dem =0;
                for(j =1; j<=i;j++){
                    if(i%j ==0){
                        dem++
                    }
                }
                if(dem ==2){
                    text4 += i + " " + ""
                }
            }
        }
    }
    document.getElementById('ketquab4').value = text4

}


function bai5(){
    let stn5 = parseInt(document.getElementById('stn5').value);
    let tong = 0;
    for (let i =0; i<=stn5; i++){
        tong += i;
    }
    document.getElementById('ketquab5').value = tong
    
}

function bai6(){
    let stn6 = parseInt(document.getElementById('stn6').value);
    let tongbinhphuong = 0;
    for ( let i =0; i <=stn6;i++){
        tongbinhphuong += Math.pow(i,2)
    }
    document.getElementById('ketquab6').value = tongbinhphuong
}

function bai7(){
    let stn7 = parseInt(document.getElementById('stn7').value);
    let tong = 0;
    for (let i =1; i<=stn7; i+=2){
        tong += i;
    }
    document.getElementById('ketquab7').value = tong
    
}

function bai8(){
    document.getElementById("ketquab8").value = "";
    let stn8 = document.getElementById('stn8').value;
    let i;
    for(i=0; i< stn8.length ; i++){
        if(stn8[i] %2 == 0){
            document.getElementById('ketquab8').value = "NO";
            return;
        }
    }
    document.getElementById('ketquab8').value = "YES";
}

function bai10(){
    for(var i =2; i<=9; i++)
    {
       for(var j =1; j<=10; j++)
       {
        document.getElementById("ketquaB10").value += i + " x " + j + " = " + i * j + '\n';
       }
       document.getElementById("ketquaB10").value += "---------------" + '\n'
    }
}

