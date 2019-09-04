function validate(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let title = document.getElementById('title').value;
    let message = document.getElementById('message').value;
    
   

    if(name == ""  || email == "" || title =="" || message ==""){
        document.getElementById('result').textContent= "All field is required";
        return false;
        }
    if(name.length > 0 && name.length < 4){
    document.getElementById('result1').textContent= "A user's name cannot be less than 4 characters";
    return false;
    }

   else if ((email.indexOf('@') == 0) && (email.indexOf('@') < 4)) {
        document.getElementById('result2').textContent = "Invalid @ Position";
        return false
        }
        
   else if  ((email.charAt(email.length-4)!='.') &&  (email.charAt(email.length-3)!='.')){
    document.getElementById('result2').textContent = "Invalid Email ";
    return false
    }
     
    else if  (email.indexOf('.') < 6) {
        document.getElementById('result2').textContent = "Invalid email pattern";
        return false
        }
     

      
    else if((title.length > 0 )  && (title.length < 4)){
        document.getElementById('result3').textContent= "Title cannot be less than 4 characters";
        return false;
        }

        else if((message.length > 0) && (message.length < 20)){
            document.getElementById('result4').textContent = "Message cannot be less than 20 characters";
            return false;
            }
     else{
         return true;
     }
} 
  validate(); 