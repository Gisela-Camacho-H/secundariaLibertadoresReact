import React from 'react'


export default function Nosotros() {
	return (
		<>
        <br/><br/>
        <h1>Contacto</h1>
        <form action="/" method="POST" className="contactoFormulario" id="contactoFormaulario">


        <div className="formCreate1">
			<br/>
            <label className="label" ><b>Nombre</b></label><br/>
            <input className="input nombre" type="text" name="UsuarioNombre"/><p id="errorNombre"></p>
			<br/>
            <label className="label" ><b>Correo</b></label><br/>
            <input className="input nombre" type="text" name="UsuarioEmail"/><p id="errorNombre"></p>
			<br/>
            <label className="label" ><b>Telefono</b></label><br/>
            <input className="input nombre" type="text" name="UsuarioTelefono"/><p id="errorNombre"></p>
			<br/>
            <label className="label" ><b>Consulta</b></label><br/>
            <textarea class="input consulta" name="consulta" cols="30" rows="4"></textarea><p id="errorConsulta"></p><br/>
			<button className="login" type="submit">Enviar</button>
		</div>
        </form>
		</>

	)
}