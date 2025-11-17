let warnSumple = "こちらはサンプルページ用の偽データです。"
let gmailTop = "GmailのTOPページへ遷移します"

let mailButton = document.getElementById("mailAdress");
if (mailButton) { 
    mailButton.addEventListener("click",function(event){
        alert(warnSumple+gmailTop);
        //event.preventDefault()
    });
};

let pageTopButton = document.querySelector(".goPageTop");
pageTopButton.addEventListener("click", scroll_top);

function scroll_top(){
    window.scroll({top: 0, behavior: "smooth"});
}

window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.scrollY > 100) {
    pageTopButton.style.opacity = "1";
  } else {
    pageTopButton.style.opacity = "0";
  }
}