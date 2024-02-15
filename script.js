let menubtn =document.querySelector('#menu_bars');
let mynav =document.querySelector('.navbar');

menubtn.onclick = () =>{
 menubtn.classList.toggle('fa-times');
 mynav.classList.toggle('active');
}
window.onscroll = () =>{
    menubtn.classList.remove('fa-times');
    mynav.classList.remove('active');
}