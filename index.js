let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='C'){
            screenValue = '';
            screen.value= screenValue;
        }
        else if(buttonText=='=')
        {
            
            screen.value = eval(screenValue);
            

        }
        else{
            screenValue+=buttonText;
            screen.value = screenValue;
        }
        

    })
    item.addEventListener('keydown',(e)=>{
        buttonText = e.key;
        if(buttonText=='1' || buttonText=='2' || buttonText=='3' 
        || buttonText=='4' || buttonText=='5' || buttonText=='6'
        || buttonText=='7' || buttonText=='8' || buttonText=='9'
        || buttonText=='0' || buttonText=='(' || buttonText==')'
        || buttonText=='.' || buttonText=='/' || buttonText=='*'
        || buttonText=='+' || buttonText=='-' || buttonText=='%'    
        
        ) {  
         if(buttonText=='C'){
            
            
        }
        else if(buttonText== 'Enter')
        {
            
            screen.value = eval(screenValue);
            

        }
        else{
            screenValue+=buttonText;
            screen.value = screenValue;
        }
        

     }
    else
     {
         screenValue = '';
         screen.value = screenValue;
     }
})
}