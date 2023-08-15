document.getElementById('btn').addEventListener('click',function(){
    const email = document.getElementById('email');
    const emailvalue = email.value;
    const password = document.getElementById('password');
    const passwordvalue = password.value;
    console.log(typeof password)
    email.value=''
  password.value=''
  if(emailvalue =='smdsharifulislam70@gmail.com' && passwordvalue =='1234'){
    window.location ="main.html";
  }
  else{
   return alert('invalid input ')
  }
})




