const form = document.getElementById('form');
form.addEventListener('submit',sent);
function sent(e){
    e.preventDefault();
    const selectForm = e.target;
   const data = selectForm.querySelectorAll('.form-control');
   var nbError = 0;
   data.forEach(element => {
       const parentElement = element.parentNode
       if(element.value.trim()==''){
            parentElement.classList.add('has-error'); 
            parentElement.querySelector('span.error').innerHTML = 'require field'
            nbError++;
       }
       else{
           parentElement.classList.remove('has-error');
           parentElement.querySelector('span.error').innerHTML = ''
       }
       if(element.type && element.type == 'email'){
        var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
        if (!(regEmail.test(element.value.trim()))) {
            parentElement.classList.add('has-error'); 
            parentElement.querySelector('span.error').innerHTML = 'please provide a valid email'
            nbError++;  
        } else {
            parentElement.classList.remove('has-error');
           parentElement.querySelector('span.error').innerHTML = ''
            
        }
       }
       
       
       
   });
   if(nbError == 0){
       alert('je suis victoire ondelet je vous invite à me suivre sur mon Linkedin')
   }
}