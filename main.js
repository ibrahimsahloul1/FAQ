let questions = [...document.getElementsByClassName('question')]

for(let i=0;i<questions.length;i++){
    questions[i].onclick = function(){
        if(questions[i].nextElementSibling.style.display === 'none'){
            questions[i].nextElementSibling.style.cssText = 'display:block;border-bottom:1px solid hsl(240, 5%, 91%);padding-bottom:20px';
            questions[i].style.cssText = 'border:none; font-weight:bold;'

        }else{
            questions[i].nextElementSibling.style.cssText = 'display:none;border:none';
            questions[i].style.cssText = 'border-bottom:1px solid hsl(240, 5%, 91%)'
        }
    }
}