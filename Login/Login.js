function Regis() {

    const usuario1 = document.getElementById("usuario1").value
    const pass1 = document.getElementById("pass1").value

    if (usuario1 != "" && pass1 != "") {
        localStorage.setItem("usuarioG", usuario1)
        localStorage.setItem("passG", pass1)
        alert("Registro completado")
    } else {
        alert("Complete el registro")
    }
}


function Login() {

    const usuario2 = document.getElementById("usuario2").value 
    const pass2 = document.getElementById("pass2").value

    const usuarioR = localStorage.getItem("usuarioG")
    const passR = localStorage.getItem("passG")

    if (usuario2 === usuarioR && pass2 === passR) {
        alert("Bienvenido " + usuario2)
    } else if (usuario2 != "" && pass2 != "") {
       alert("Datos equivocados")
    }else {
        alert("Complete todos los campos")
    }
}


