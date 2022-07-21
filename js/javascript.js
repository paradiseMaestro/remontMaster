substrate = document.querySelector('.substrate_black_all'),
repair_button = document.getElementById('repair'),
form_repair = document.getElementById('form_repair'),
close_form_repair = document.getElementById('close');

repair_button.onclick = function(){
  substrate.style.display = "block";
  form_repair.style.display = "block";
}
close_form_repair.onclick = function(){
  substrate.style.display = "none";
  form_repair.style.display = "none";
}
substrate.onclick = function(){
  substrate.style.display = "none";
  form_repair.style.display = "none";
}


privacy = document.getElementById('privacy'),
privacy_text = document.getElementById('privacy_text'),
privacy_text_open = false;


openText = function(){
  privacy_text_open = true;
  privacy_text.style.height = "auto";

  privacy_text.style.padding = "5px 20px";
  privacy_text.style.border = " 1px solid #e2e2e2";
}
closeText = function(){
  privacy_text_open = false;
  privacy_text.style.height = "0px";
  privacy_text.style.padding = "0px";
  privacy_text.style.border = "0";
}
privacy.onclick = function(){
  privacy_text_open == false ? openText() : closeText();

}
