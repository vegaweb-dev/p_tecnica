import { useState } from "react";
import { ApiService } from "../../service";

const PostUserForm = () => {
    const [form, setForm] = useState({
        name: '',
        job: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        ApiService.create(form);
        setForm({ name: '', job: '' })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="container">
                <div className="header">
                    <div className="text">Crea tu usuario</div>
                    <div className="underline"></div>
                </div>

                <div className="inputs">
                    <div className="input">
                        <input type="text" name="name" value={form.name} onChange={handleChange} className='input-value' placeholder="Ingresa tu nombre" />
                    </div>

                    <div className="input">
                        <input type="text" name="job" value={form.job} onChange={handleChange} className='input-value' placeholder="Ingresar tu trabajo" />
                    </div>

                    <div className="input">
                        <input type="submit" value='Enviar Datos' className='input-value' />
                    </div>

                </div>
            </form>
        </>
    )
}

export default PostUserForm