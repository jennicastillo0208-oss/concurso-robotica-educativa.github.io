// Leer base de datos simulada en formato JSON desde el LocalStorage del navegador
let usuarioRegistrado = JSON.parse(localStorage.getItem('datosUsuario')) || null;

// 1. Función para Registrar un nuevo usuario
function registrarUsuario(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('password').value;
    const categoria = document.getElementById('categoria').value;
    const equipo = document.getElementById('equipo').value;
    const institucion = document.getElementById('institucion').value;
    const proyecto = document.getElementById('proyecto').value;
    const documentos = document.getElementById('documentos').value;
    const archivoInput = document.getElementById('archivoProyecto');
    
    const nombreArchivo = archivoInput.files.length > 0 ? archivoInput.files[0].name : "No se subió archivo";

    // Estructura del Objeto que pasará a JSON
    usuarioRegistrado = {
        usuario: usuario,
        contrasena: contrasena,
        categoria: categoria,
        equipo: equipo,
        institucion: institucion,
        proyecto: proyecto,
        documentos: documentos,
        archivo: nombreArchivo
    };

    // Conversión de Objeto JS a un string JSON para guardarlo en el navegador
    localStorage.setItem('datosUsuario', JSON.stringify(usuarioRegistrado));

    alert("¡Registro guardado con éxito usando JSON! Ya puedes iniciar sesión.");
    document.getElementById('formRegistro').reset();
}

// 2. Función para Iniciar Sesión y comprobar credenciales
function iniciarSesion() {
    const loginUser = document.getElementById('loginUsuario').value;
    const loginPass = document.getElementById('loginPassword').value;

    if (!usuarioRegistrado) {
        alert("No existe ningún registro en el sistema.");
        return;
    }

    // Comparar los datos ingresados con el JSON cargado
    if (loginUser === usuarioRegistrado.usuario && loginPass === usuarioRegistrado.contrasena) {
        alert("¡Bienvenido! Sesión iniciada.");
        mostrarPerfil();
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

// 3. Función para renderizar el perfil en pantalla
function mostrarPerfil() {
    if (usuarioRegistrado) {
        document.getElementById('verUsuario').innerText = usuarioRegistrado.usuario;
        document.getElementById('verCategoria').innerText = usuarioRegistrado.categoria;
        document.getElementById('verEquipo').innerText = usuarioRegistrado.equipo;
        document.getElementById('verInstitucion').innerText = usuarioRegistrado.institucion;
        document.getElementById('verProyecto').innerText = usuarioRegistrado.proyecto;
        document.getElementById('verDocumentos').innerText = usuarioRegistrado.documentos;
        document.getElementById('verArchivo').innerText = usuarioRegistrado.archivo;

        // Cambiar el estilo a block para hacerlo visible
        document.getElementById('perfilUsuario').style.display = 'block';
        document.getElementById('perfilUsuario').scrollIntoView({ behavior: 'smooth' });
    }
}