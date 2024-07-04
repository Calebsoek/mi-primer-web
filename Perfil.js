document.getElementById('profileImageInput').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const image = document.getElementById('profileImage');
        image.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});

function updateProfile() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const nationality = document.getElementById('nationality').value;
    const description = document.getElementById('description').value;

    console.log('Datos actualizados:');
    console.log('Nombre:', name);
    console.log('Edad:', age);
    console.log('Género:', gender);
    console.log('Nacionalidad:', nationality);
    console.log('Descripción:', description);
    
    // Aquí puedes añadir el código para guardar los datos en una base de datos o servicio backend.
    alert('Datos actualizados exitosamente!');
}