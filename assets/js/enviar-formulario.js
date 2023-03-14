const $form = document.querySelector("#form")
$form.addEventListener('submit', enviarForm)

async function enviarForm(event){
    event.preventDefault()
    const formulario =  new FormData(this)
    const response = await fetch(this.action,{
        method: this.method,
        body: formulario,
        headers: {
            'Accept': 'aplication/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Gracias por su mensaje, le respondo en la brevedad posible. Saludos!')
    }
}