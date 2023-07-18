const $form = document.querySelector("#form");
const $formMessage = document.querySelector("#form-message");

$form.addEventListener("submit", enviarForm);

async function enviarForm(event) {
    event.preventDefault();
    const formulario = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: formulario,
        headers: {
            Accept: "aplication/json",
        },
    });
    if (response.ok) {
        this.reset();
        mostrarMensaje("Gracias por su mensaje, le respondo en la brevedad posible. Saludos!", "success");
        ocultarCampos();
        cambiarTextoBoton("Mensaje Enviado");
    } else {
        mostrarMensaje("Hubo un error al enviar el mensaje. Por favor, inténtelo nuevamente.", "error");
    }
}

function mostrarMensaje(mensaje, tipo) {
    $formMessage.textContent = mensaje; 
    $formMessage.classList.remove("success-message", "error-message");
    $formMessage.classList.add(`${tipo}-message`);
}

function ocultarCampos() {
    const $campos = $form.querySelectorAll(".formcontato__input, .formcontato__textarea, .formcontato__boton");
    $campos.forEach((campo) => {
        campo.style.display = "none";
    });
}

function cambiarTextoBoton(texto) {
    const $boton = $form.querySelector(".formcontato__boton");
    $boton.textContent = texto;
}
