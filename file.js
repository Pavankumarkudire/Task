document.addEventListener('DOMContentLoaded', () => {
    const uploadButton = document.getElementById('uploadButton');
    const photoUpload = document.getElementById('photoUpload');
    const uploadedPhoto = document.getElementById('uploadedPhoto');
    const photoName = document.getElementById('photoName');
    const ImagePosition = document.getElementById('Image_position');
    const photoContainer = document.getElementById('photoContainer');
    const colorButtons = document.querySelectorAll('.colorButton');
    const imageContainer = document.getElementById('imageContainer');
    const colorSelect = document.getElementById('colorSelect');
    const FontContext = document.getElementById('Font_context');
    const submitButton = document.getElementById('submit');


    uploadButton.addEventListener('click', () => {
        photoUpload.click();
    });

    photoUpload.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                uploadedPhoto.src = event.target.result;
                uploadedPhoto.style.display = 'block';
                uploadedPhoto.alt = file.name;
                photoName.textContent = file.name;
            };
            reader.readAsDataURL(file);
        }
    });

    ImagePosition.addEventListener('click', () => {
        photoContainer.style.display = 'flex';
        photoContainer.style.justifyContent = 'center';
        photoContainer.style.alignItems = 'center';
    });

    colorButtons.forEach(button => {
        button.addEventListener('click', function () {
            imageContainer.style.backgroundColor = button.textContent.toLowerCase();
        });
    });

    colorSelect.addEventListener('click', function () {
        imageContainer.style.backgroundColor = colorSelect.value;
    })

    submitButton.addEventListener('click', function () {
        photoName.style.fontSize = FontContext.value + "px";
    });
});