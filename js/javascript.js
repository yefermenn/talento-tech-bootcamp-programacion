// Slider
const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;

// Cambiar diapositiva
const updateSlide = () => {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
};

// Navegación manual
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? 2 : currentSlide - 1;
    updateSlide();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 2) ? 0 : currentSlide + 1;
    updateSlide();
});

// Navegación automática
setInterval(() => {
    currentSlide = (currentSlide === 2) ? 0 : currentSlide + 1;
    updateSlide();
}, 5000);
// End Slider

// Evento Click Del Botón Cotización
const btnQuote = document.querySelector('#btn_quote');

btnQuote.addEventListener('click', () => {
    // Mostrar mensaje de cotización de forma llamativa
    showCotizationMessage();
});

// Función para mostrar el mensaje de cotización
function showCotizationMessage() {
    const message = document.createElement('div');
    message.classList.add('cotization-message');
    message.innerHTML = `<p>¡Gracias por tu interés! Nos pondremos en contacto contigo para más detalles sobre la cotización.</p>`;

    // Añadir el mensaje al body
    document.body.appendChild(message);

    // Eliminar el mensaje después de 5 segundos
    setTimeout(() => {
        message.remove();
    }, 5000);
}
// End Evento Click Del Botón Cotización

//Galería
document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los proyectos y botones de filtro
    const allButton = document.getElementById('all');
    const softwareAplicacionButton = document.getElementById('softwareAplicacion');
    const softwareDesarrolloButton = document.getElementById('softwareDesarrollo');

    const allProjects = document.querySelectorAll('.box_projects');
    const softwareAplicacionProjects = document.querySelectorAll('.softwareAplicacion');
    const softwareDesarrolloProjects = document.querySelectorAll('.softwareDesarrollo');

    // Función para mostrar todos los proyectos
    function showAllProjects() {
        allProjects.forEach(project => project.style.display = 'block');
    }

    // Función para mostrar solo los proyectos de "Software de Aplicación"
    function showSoftwareAplicacion() {
        allProjects.forEach(project => project.style.display = 'none');
        softwareAplicacionProjects.forEach(project => project.style.display = 'block');
    }

    // Función para mostrar solo los proyectos de "Software de Desarrollo"
    function showSoftwareDesarrollo() {
        allProjects.forEach(project => project.style.display = 'none');
        softwareDesarrolloProjects.forEach(project => project.style.display = 'block');
    }

    // Escuchar cambios en los botones de filtro
    allButton.addEventListener('change', showAllProjects);
    softwareAplicacionButton.addEventListener('change', showSoftwareAplicacion);
    softwareDesarrolloButton.addEventListener('change', showSoftwareDesarrollo);

    // Inicializar con todos los proyectos visibles por defecto
    showAllProjects();
});
//End Galería

//Formulario
// Esperar a que el contenido del DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Obtener la referencia al elemento del formulario correspondiente a la selección de país
    const countrySelect = document.getElementById("country");
    // Obtener la referencia al elemento del formulario correspondiente a la selección de departamento
    const stateSelect = document.getElementById("state");
    // Obtener la referencia al elemento del formulario correspondiente a la selección de ciudad
    const citySelect = document.getElementById("city");

    // Definir los datos de países, departamentos y ciudades como un objeto anidado
    const data = {
        Colombia: {
            "Norte de Santander": ["Ocaña", "Cúcuta", "Pamplona"], // Ciudades del departamento "Norte de Santander"
            Santander: ["Bucaramanga", "Floridablanca", "Giron"],   // Ciudades del departamento "Santander"
            Cesar: ["Valledupar", "Aguachica", "Codazzi"],          // Ciudades del departamento "Cesar"
        },
        México: {
            Jalisco: ["Guadalajara", "Zapopan", "Tlaquepaque"],      // Ciudades del estado "Jalisco"
            Yucatán: ["Mérida", "Progreso", "Valladolid"],          // Ciudades del estado "Yucatán"
            Chiapas: ["Tuxtla", "San Cristóbal", "Tapachula"],      // Ciudades del estado "Chiapas"
        },
    };

    // Escuchar el evento "change" en el selector de país
    countrySelect.addEventListener("change", function () {
        // Obtener el valor del país seleccionado
        const selectedCountry = this.value;
        // Restablecer las opciones del selector de departamentos
        stateSelect.innerHTML = '<option value="" selected disabled>Seleccione un departamento</option>';
        // Restablecer las opciones del selector de ciudades
        citySelect.innerHTML = '<option value="" selected disabled>Seleccione una ciudad</option>';
        // Deshabilitar el selector de ciudades hasta que se seleccione un departamento
        citySelect.disabled = true;

        // Verificar si se seleccionó un país
        if (selectedCountry) {
            // Habilitar el selector de departamentos
            stateSelect.disabled = false;
            // Obtener los nombres de los departamentos/estados del país seleccionado
            Object.keys(data[selectedCountry]).forEach((state) => {
                // Crear una nueva opción para cada departamento
                const option = document.createElement("option");
                // Establecer el valor de la opción como el nombre del departamento
                option.value = state;
                // Establecer el texto visible de la opción como el nombre del departamento
                option.textContent = state;
                // Agregar la opción al selector de departamentos
                stateSelect.appendChild(option);
            });
        } else {
            // Si no se seleccionó un país, deshabilitar el selector de departamentos
            stateSelect.disabled = true;
        }
    });

    // Escuchar el evento "change" en el selector de departamento
    stateSelect.addEventListener("change", function () {
        // Obtener el valor del país seleccionado
        const selectedCountry = countrySelect.value;
        // Obtener el valor del departamento seleccionado
        const selectedState = this.value;
        // Restablecer las opciones del selector de ciudades
        citySelect.innerHTML = '<option value="" selected disabled>Seleccione una ciudad</option>';

        // Verificar si se seleccionó un departamento
        if (selectedState) {
            // Habilitar el selector de ciudades
            citySelect.disabled = false;
            // Obtener las ciudades del departamento seleccionado
            data[selectedCountry][selectedState].forEach((city) => {
                // Crear una nueva opción para cada ciudad
                const option = document.createElement("option");
                // Establecer el valor de la opción como el nombre de la ciudad
                option.value = city;
                // Establecer el texto visible de la opción como el nombre de la ciudad
                option.textContent = city;
                // Agregar la opción al selector de ciudades
                citySelect.appendChild(option);
            });
        } else {
            // Si no se seleccionó un departamento, deshabilitar el selector de ciudades
            citySelect.disabled = true;
        }
    });
});
//End Formulario