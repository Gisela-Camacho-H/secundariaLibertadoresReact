import React from 'react'

export default function Signin() {
	return (
		<>
        <br/><br/><br/><br/><br/><br/>
        <form action="/" method="POST">
            <div className="formCreate1">
                <div>
                    <label className="label" ><b>Correo</b></label><br/>
                    <input className="input" type="text" name="UsuarioEmail" required/>
                </div>
                <br/>
                <div>
                    <label className="label" ><b>Contraseña</b></label><br/>
                    <input className="input" type="password" name="password" required/>
                </div>
                <br/>
                <div>
                    <button className="login" type="submit">login</button>
                </div>
                <br/>
                <a className="crearCuenta" href="register">Crear Cuenta</a>
                <br/>
            </div>
        </form>
		</>

	)
}