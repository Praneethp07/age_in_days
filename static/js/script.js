function ageindays()
{
    var year = 0;
    var date =0;
    var month = 0;
     year = prompt("ENTER YOUR YEAR OF BIRTH:");
     date = prompt("ENTER YOUR DATE OF BIRTH:");
     month = prompt("ENTER MONTH:")
     if(year == null)
     { 
        var h1 = document.createElement('h1');
        var ans = document.createTextNode("You are dead");
        h1.setAttribute('id',ageindays);
        h1.appendChild(ans);
        document.getElementById('flex-box-result').appendChild(h1);
     }
     else
     {
    var birth = document.getElementById('year');
    var days = (2022 - birth)*365;
    var h1 = document.createElement('h1');
    var ans = document.createTextNode("you are "+days+" days old!");
    h1.setAttribute('id',ageindays);
    h1.appendChild(ans);
    document.getElementById('flex-box-result').appendChild(h1);
     }
}

function reset()
{
    document.getElementById(ageindays).remove();
    
}
