let toastBox = document.querySelector("#toast-box");

let succesMsg = '<i class="fa-solid fa-circle-check" style="color: #1acb38;"></i> succesfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark" style="color: #e01010;"></i> Please Fix this error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation" style="color: #d19a23;"></i> Invalid Input chack again';


function showToast(msg){
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if(msg.includes('error')){
    toast.classList.add("error");
  }
  if(msg.includes('Invalid')){
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove(); 
  }, 6000);

}
