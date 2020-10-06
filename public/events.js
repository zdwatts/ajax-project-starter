window.addEventListener('DOMContentLoaded',()=>{

fetch('/kitten/image')
    .then(res =>{
        if(!res.ok){
            throw res
        }
        return res.json();
    })

})