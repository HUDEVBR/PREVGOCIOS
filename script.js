function mascara(i,t){

    var v = i.value;

    if(isNaN(v[v.length-1])){
        i.value = v.substring(0, v.length-1);
        return;
    }
  
    if (t == "cpf"){
        i.setAttribute("maxlength", "14");
        if (v.length == 3 || v.length == 7) i.value += ".";
        if (v.length == 11) i.value += "-";
    }
    if(t == "tel"){
        if(v[0] == 9){
           i.setAttribute("maxlength", "10");
           if (v.length == 5) i.value += "-";
        }else{
           i.setAttribute("maxlength", "9");
           if (v.length == 4) i.value += "-";
        }
    }

}

// script.js
window.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.querySelector(".whatsApp");
  const form = document.querySelector("form");

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "whatsapp_click" });
    });
  }

  if (form) {
    form.addEventListener("submit", function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "form_submit" });
    });
  }
});
