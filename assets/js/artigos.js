let lista = document.querySelectorAll("div .blog-post__button a[href]");
let itemzin = document.querySelector("div .blog-post__button a[href]").href.split("#");

console.log(itemzin)
let div = document.getElementById(itemzin[1])
console.log(div.parentElement.parentElement)

console.log(lista);

lista.forEach(a => {
    a.addEventListener("click", event => {
        let item = event.target.href.split("#");
        console.log(item);
        let div = document.getElementById(item[1])
        console.log(div)

        item = event.target
        console.log(item.parentElement.parentElement.style.display = "none")

        div.style.display = "flex"
    });
});

document.getElementById("fechar").addEventListener('click', function () {
    document.getElementById('resposta').style.display = 'none'
})

function iframe (){
    document.getElementById('resposta').style.display = 'flex'
}