function gen(){
  var arr = [];
  while(arr.length < 1){
    var r = Math.floor(Math.random() * 9) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
  }
  return arr[0];
}
var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
  images[i].flag=true;
  images[i].onmousemove=imagepreview;
  images[i].onmouseout=origimg;
  images[i].onclick=revealimage;
}

var victory=false;
var attempt=0;

index=gen()-1;
console.log(index);
images[index].onclick=revealprize;
function imagepreview(event)
{
  image=event.target;
  if(image.flag)
  {
    image.src="hover.jpg";
  }
}
function origimg(event)
{
 image=event.target;
 if(image.flag)
 {
    image.src="curtain.jpg";
  }

}

function revealimage(event)
{
  if(attempt<4)
  {
    image=event.target;
    image.src="goat.jpg";
    image.flag=false;
    attempt++;
    freshtext();
  }
}

function revealprize(event)
{
  if(attempt<4)
  {
    image=event.target;
    image.src="car.jpeg";
    image.flag=false;
    victory=true;
    attempt++;
    freshtext();
  }
}

function freshtext(){

  if(victory)
  {
    para=document.getElementById("commentary");
    para.textContent="Congratulations! You won 🚗🎈";
    attempt=4;

  }
  else
  {
  para=document.getElementById("commentary");
  para.textContent="You have "+(4-attempt)+"  more chance!";
 }
}
