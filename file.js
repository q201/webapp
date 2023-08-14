function clr(str)
{
    str.innerHTML="You clicked on me";
    str.style.color="red";
    str.style.fontSize ="50px";
}
function bg()
{
    document.getElementById("label").style.backgroundColor="red";

}
function calc(x)
{
    console.log(document.getElementById("label").innerHTML);
    if (x=="reset")
        document.getElementById("label").innerHTML="";
    else if(x=="=")
    {
        r=document.getElementById("label").innerHTML;
        if (r!='')
        document.getElementById("label").innerHTML=eval(r);
        
    }
    else
        document.getElementById("label").innerHTML+=x;
}