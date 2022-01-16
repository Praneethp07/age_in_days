function ageindays()
{
    var birth = prompt("enter your birthyearzx:");
    var days = (2022 - birth)*365;
    var h1 = document.createElement('h1');
    var ans = document.createTextNode("you are "+days+" days old!");
    h1.setAttribute('id',ageindays);
    h1.appendChild(ans);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset()
{
    document.getElementById(ageindays).remove();
    
}