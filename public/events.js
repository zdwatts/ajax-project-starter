window.addEventListener('DOMContentLoaded',()=>{

    fetch('/kitten/image')
        .then(res => {
            //console.log("res:", res);
            if(!res.ok){
                throw res
            }
            return res.json();
        }).then(data => {
            console.log("data:", data);
            let pic = document.querySelector(".cat-pic")
            pic.src = data.src;
        }).catch(err => {
            err.json().then(data => {
                document.querySelector(".error").innerHTML = data.message;
            })
            alert("Something went wrong! Please try again!")
        })

    document.getElementById("new-pic").addEventListener("click", () => {
        document.querySelector(".loader").innerHTML = "loading..."
        document.querySelector(".error").innerHTML = ""
        fetch("/kitten/image")
            .then(res => {
                // console.log("res:", res);
                if(!res.ok){
                    throw res
                }
                return res.json();
            }).then(data => {
                console.log("data:", data);
                let pic = document.querySelector(".cat-pic")
                pic.src = data.src;
            }).catch(err => {
                err.json().then(data => {
                    document.querySelector(".error").innerHTML = data.message;
                })
                alert("Something went wrong! Please try again!")
            })
    })

    document.getElementById("upvote").addEventListener("click", () => {
        fetch("/kitten/upvote", { method: "PATCH" })
        .then(res => {
            //console.log("res:", res)
            if(!res.ok){
                throw res
            }
            return res.json();
        }).then(data => {
            document.querySelector(".score").innerHTML = data.score;
        }).catch(err => {
            document.querySelector(".error").innerHTML = "Something went wrong"
        })
    })

    document.getElementById("downvote").addEventListener("click", () => {
        fetch("/kitten/downvote", { method: "PATCH" })
        .then(res => {
            //console.log("res:", res)
            if(!res.ok){
                throw res
            }
            return res.json();
        }).then(data => {
            document.querySelector(".score").innerHTML = data.score;
        }).catch(err => {
            document.querySelector(".error").innerHTML = "Something went wrong"
        })
    })
})
