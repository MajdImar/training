var name = prompt("what is your name ? ");
document.write('<h1>' + "Hello "+ name+'</h1>' );
var num=prompt("which galaxy do you prefer(spiral or barred or elliptical or irregular galaxy");
while (num !=='spiral' && num !=='barred' && num !=='elliptical' && num!=='irregular'){
    num=prompt("pleaze enter the right name")
}
var you;
function space (num){
if(num=='spiral' || num=='Spiral'){
    you='you are a dreamer person'; }
    else if (num== 'barred'){
        you='you are  a fantastic person';
    }
    else if (num=='elliptical')
{you='you are an ambitious person ';}
else if (num=='irregular'){
    you='you are a nice person ';
}
return(you);
}
document.write('<h1>' + space(num) + '</h1>');

var planet=prompt("How many planet or galaxy you wish to read about")
pic="";0000
function space1 (num){
for(var i=0;i<planet;i++){
   
        if(num=='spiral' || num=='Spiral'){
            pic=pic+'<img src="draemer.jpg"> ';}
      
            else if (num== 'barred'){
                pic=pic+'<img src="fan.jpg"> ';
            }
            else if (num=='elliptical')
        {pic=pic+' <img src="amm.jpg"> '
        ;}
        else if (num=='irregular'){
            pic=pic+'  <img src="ni.jpg"> ';
        }}
        return(pic);
        }
        document.write('<h1>' + space1(num) + '</h1>');
      



