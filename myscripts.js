const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')
console.log(id);
if(id==1)
{
  Document.getElementById("itemlist1").style.display="block";
  Document.getElementById("itemlist2").style.display="none";
}
else if(id==2)
{
  Document.getElementById("itemlist2").style.display="block";
  Document.getElementById("itemlist1").style.display="none";
}
document.getElementsByClassName("courseitem").addEventListener("click", function(e) {
    tgt = e.target;
    srctext= e.target.href;
    if (tgt.classList.contains("mylinks")) {
      e.preventDefault(); // cancel link
      document.getElementById("videotitle").innerText = tgt.innerHTML;
      //myframe
      
      document.getElementById("myframe").src = srctext;
    }
  })

  