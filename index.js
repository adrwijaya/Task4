let dataBlog = []
function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("project-name").value
    let content = document.getElementById("description").value
    let image = document.getElementById("upload-image").files

    image = URL.createObjectURL(image[0])
    console.log(image);

    let blog = {
        title,
        content,
        image,
    }

    dataBlog.push(blog)
    console.log(dataBlog);

    renderBlog()
}


function renderBlog(){

    document.getElementById("konten").innerHTML = ''

    for (let index = 0; index < dataBlog.length;  index++){  
        console.log(dataBlog[index]);

        document.getElementById("konten").innerHTML += `

        <div class="mycontent">
            <div>
                <img src="${dataBlog[index].image}" alt="gambar">
            </div>
            <div>
                <h4>
                    <a href="blog_content.html" target="_blank">${dataBlog[index].title}</a>
                </h4>
                <p>durasi: 3 bulan</p>
            </div>
            <div>
                <p>${dataBlog[index].content}</p>
            </div>
            <div class="icon">
                <i class='fab fa-google-play'></i>
                <i class="fa fa-android"></i>
                <i class='fab fa-java'></i>
            </div>
            <div class="div-button">
                <button type="button" onclick="">edit</button>
                <button type="button" onclick="">delete</button>
            </div>
        </div>
        `
    }
}