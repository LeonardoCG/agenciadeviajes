import { Testimonial } from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) => {

    // validar formulario 
    const { nombre, correo, mensaje } = req.body;

    const errores = []

    if( nombre.trim() === '') {
        errores.push({mensaje : 'el nombre esta vacio'});
    }
    if( correo.trim() === '') {
        errores.push({mensaje : 'campo vacio'});
    }
    if( mensaje.trim() === '') {
        errores.push({mensaje : 'Campo vacio'});
    }
    if( errores.length > 0) {

        // consultar Testimonial existentes
        const testimoniales = await Testimonial.findAll();

        // mostrar el error 
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        // almacenrlo en la base de datos 
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}