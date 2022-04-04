import React from 'react'

export default function Signin() {
	return (
		<>
        <form action="/" method="POST">
        <h1>Login</h1>
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
            </div>
        </form>
		</>

	)
}