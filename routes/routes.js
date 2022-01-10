import express from 'express';
import { 
    paginaContacto, 
    paginaInicio, 
    paginaNostros, 
    paginaTestimoniales, 
    paginaViajes, 
    paginaDetalleViaje
} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNostros);

router.get('/viajes', paginaViajes);
// crea un comodin para mostrar una nueva pgina
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
// inserta info a la base datos
router.post('/testimoniales', guardarTestimonial);

router.get('/contacto', paginaContacto);

export default router;