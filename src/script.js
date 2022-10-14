

function onLoad(event){
    
    
    let timer = 0;

    let intersectionObserver = new IntersectionObserver(modules => {
        
        

        for(let i = 0; i < modules.length; i++){
            if(modules[i].isIntersecting){
                setTimeout(function() {modules[i].target.classList.add('fadeup');}, timer);
                timer += 100;
                intersectionObserver.unobserve(modules[i].target);
                setTimeout(function() {timer = 0; }, 1000);
            }
        }
            
    });

    document.querySelectorAll('.animate').forEach(obj => {
        intersectionObserver.observe(obj);
    });

}

window.addEventListener('load', onLoad());