function popup(){
    const mail=document.getElementById("mail").value;
   const msg=document.getElementById("msg").value;
   var newLine = "\r\n"
   var mesg="Email:"+mail;
   mesg+=newLine;
   mesg+="Message:"+msg;
    alert(mesg);
}