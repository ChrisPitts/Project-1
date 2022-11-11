

function onLoad(event){
    
    let options = {
        threshold: 0.5
    };

    let timer = 0;

    let intersectionObserver = new IntersectionObserver(modules => {
        
        

        for(let i = 0; i < modules.length; i++){
            if(modules[i].isIntersecting){
                setTimeout(function() {modules[i].target.classList.add('fadeup');}, timer);
                timer += 250;
                intersectionObserver.unobserve(modules[i].target);
                setTimeout(function() {timer = 0; }, 1000);
            }
        }
            
    }, options);

    document.querySelectorAll('.animate').forEach(obj => {
        intersectionObserver.observe(obj);
    });

}

window.addEventListener('load', onLoad());