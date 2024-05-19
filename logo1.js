document.getElementById("rd1").addEventListener("click",myTheme1);
document.getElementById("rd2").addEventListener("click",myTheme2);
document.getElementById("rd3").addEventListener("click",myTheme3);
document.getElementById("rd4").addEventListener("click",myTheme4);
document.getElementById("myclr").addEventListener("change",mycolor);
document.getElementById("chkshdw").addEventListener("click",myshadow);
document.getElementById("chkshdw1").addEventListener("click",myshadow1);
document.getElementById("fontStyleSelect").addEventListener("change",myfont1);



function myTheme1()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("boxData").innerHTML=data;
    let dataobj=document.getElementById("boxData");
    dataobj.style.fontFamily="Wide Latin";
}
function myTheme2()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("boxData").innerHTML=data;
    let dataobj=document.getElementById("boxData");
    dataobj.style.fontFamily="French Script MT";
}
function myTheme3()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("boxData").innerHTML=data;
    let dataobj=document.getElementById("boxData");
    dataobj.style.fontFamily="Elephant";
}
function myTheme4()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("boxData").innerHTML=data;
    let dataobj=document.getElementById("boxData");
    dataobj.style.fontFamily="Snap ITC";
}

function mycolor()
{
    let dataobj=document.getElementById("boxData");
    dataobj.style.color=document.getElementById("myclr").value;
}
function myshadow()
{
    let dataobj=document.getElementById("boxData");
    dataobj.style.textShadow="0px 4px 4px lightblue";
}
function myshadow1()
{
    let dataobj=document.getElementById("boxData");
    dataobj.style.textShadow="";
}
const fontSizeRange = document.getElementById('fontSizeRange');
const content = document.getElementById('boxData');

content.style.fontSize = fontSizeRange.value + 'px';

fontSizeRange.addEventListener('input', function() {
    const fontSize = fontSizeRange.value;
    content.style.fontSize = fontSize + 'px';
});




function myfont1()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("boxData").innerHTML=data;
    let dataobj=document.getElementById("boxData");
    dataobj.style.fontFamily=document.getElementById("selectedFontStyle");
}

