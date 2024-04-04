'use client'
import { useState } from "react"


export default function BudgetForm() {
    const [formData, setFormData] = useState({
        nombre_cliente: '',
        email: '',
        telefono: '',
        categoria: '',
        descripcion: '',
        politica_privacidad: false    
    })
    const url_api = process.env.NEXT_PUBLIC_API_URL
    const query   = `proyectos-clientes`
    
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
        form.reset()       
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
                name ="nombre_cliente" 
                placeholder='Ingrese su nombre completo'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" 
                onChange={handleOnChange}
                value={formData.nombre_cliente}
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
                name='categoria'                         
                placeholder='Ingrese la categoría del proyecto'
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" 
                onChange={handleOnChange}
                value={formData.categoria}
            />
            <textarea 
                placeholder='Ingrese de que se trata el proyecto...' 
                rows="6"
                name='descripcion'
                className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
                onChange={handleOnChange}
                value={formData.descripcion}
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
