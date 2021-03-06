//create map
const map = L.map('mapid').setView([-23.6522688,-46.7062056], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

//create icon
const icon =  L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor:[29,68]
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker);
//create and add marker 
    marker = L.marker([lat, lng], { icon })
.addTo(map)
})





//adicionar o campo de fotos
function addPhotoField(){
    console.log("aqui")
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo está vazio, se sim, não adiconar ao cargar
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    //cadicionar o clone ao container de #imagens
    container.appendChild(newFieldContainer)
}
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value =""
        return
    }
    //deletar o campo
    span.parentNode.remove();
}

//select yes or no
function toggleSelect(event){
    //retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('.active');
    })

    //colocar a class .active nese botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}

//desafio
// function validate(event) {
//     //validar se lat e lng estao preenchidos
//     const needsLatAndLng = true;
//     if(needsLatAndLng) {
//         event.preventDefault()
//         alert(' valor nulo')
//     }
// }

