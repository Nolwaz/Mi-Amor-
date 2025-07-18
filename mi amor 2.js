const searchers = document.querySelector('.search2');
const pages = document.querySelectorAll('.new2');

searchers.addEventListener('input',() =>{
    if(searchers.value !==""){
        pages.forEach(n =>{
            const pageHeading = n.querySelector('.name')

            const pageHeadingText = pageHeading.innerHTML.toLowerCase();

            const input = searchers.value.toLowerCase();

            if(!pageHeadingText.includes(input)){
                pageHeading.parentElement.style.display ="none";

            }else{
                pageHeading.parentElement.style.display = "block";
            }
        });
    }else{
        pages.forEach(n =>{
            n.style.display ="block";
        });
    }
});





