const fileInput = document.getElementById("file");
const comments = document.getElementById("floatingTextarea");
const button = document.getElementById("submit");
const form = document.getElementById("form");

button.addEventListener("click", async () => {
    if(comments.value = "" || fileInput.files[0] == undefined) {
        return;
    }
    const file = fileInput.files[0];
    const userComments = comments.value

    const formData = new FormData();
    formData.append("image", file)
    formData.append("comments", userComments)

    // fetch("http://localhost:3000/", {
    //     method: "POST",
    //     body: formData
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
    try {
        const res = await fetch("http://localhost:3000/", {
            method: "POST",
            body: formData
        })
        const data = await res.json();
        console.log(data)
    } catch(err) {
        console.log(err)
    }
});

