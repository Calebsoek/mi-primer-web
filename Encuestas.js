function submitForm(formId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log('Formulario enviado:', data);

    // Aquí puedes añadir el código para enviar los datos a una base de datos o servicio backend.
    alert('Formulario enviado exitosamente!');
    location.href = 'encuestas.html'; // Regresar a la página de encuestas
}

