'use client'
import { useState } from "react"


export default function ContactUsForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: 'presupuesto',
        mensaje: '',
        politica_privacidad: false    
    })
    const url_api = process.env.NEXT_PUBLIC_API_URL
    const query   = `contactos`
    
    const handleOnSubmit = async (evt) => {
        evt.preventDefault() 
        const data = {data: formData}         
        const url = `${url_api}/${query}`
       if (formData.politica_privacidad === false) {
           alert('Debe aceptar la política de privacidad')
           return        
       }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })        
        if (response.status !== 200) {
            console.log('Error al enviar el mensaje', response.result)
            return
        } 
        alert('Mensaje enviado correctamente')           
        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            asunto: 'presupuesto',
            mensaje: '',
            politica_privacidad: false
        })     
    }
    
    function handleOnChange(event) {
        const form = event.target
        const value = form.type === 'checkbox' ? form.checked : form.value;
        setFormData({
            ...formData,
            [form.name]: value
        });
    }
    // console.log(formData)
    return (
        <form 
            onSubmit={handleOnSubmit}
            className="ml-auo space-y-4"
            // target="_self"
        >
            <input 
                type='text' 
                name ="nombre" 
                placeholder='Ingrese su nombre completo'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" 
                onChange={handleOnChange}
                value={formData.nombre}
            />
            <input 
                type='email' 
                name='email'
                placeholder='Ingrese el Email'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" 
                onChange={handleOnChange}
                value={formData.email}
                required
            />
            <input 
                type='phone' 
                name='telefono'                         
                placeholder='Ingrese el número de teléfono'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" 
                onChange={handleOnChange}
                value={formData.telefono}
            />
            <input 
                type='text' 
                name='asunto'                         
                placeholder='Ingrese el asunto del proyecto'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" 
                onChange={handleOnChange}
                value={formData.asunto}
            />
            <textarea 
                placeholder='Ingrese aquí su mensaje...' 
                rows="6"
                name='mensaje'
                className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
                onChange={handleOnChange}
                value={formData.mensaje}
            >
            </textarea>
            <input 
                type='checkbox' 
                name='politica_privacidad' 
                className="mr-2"
                onChange={handleOnChange}
                checked={formData.politica_privacidad}
                required
            />
            <button className="text-white bg-gray-700 hover:bg-slate-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
        </form>
    )
}
