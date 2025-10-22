import { z } from 'zod'

const createProductSchema = z.object({
  tituloProducto: z.string({ required_error: 'El nombre del producto es requerido' })
    .min(1, { message: 'El nombre del producto es requerido' })
    .max(255, { message: 'El nombre del producto debe ser menor o igual a 255 caracteres' }),
  precio: z.number({ required_error: 'El precio del producto es requerido' })
    .positive({ message: 'El precio del producto no puede ser menor a 0' }),
  marca: z.string({ required_error: 'La marca del producto es requerida' }),
  productoDescripcion: z.string({ required_error: 'La descripción del producto es requerida' })
    .max(1000, { message: 'La descripción del producto debe ser menor o igual a 1000 caracteres' }),
  fecha: z.string({ required_error: 'La fecha de creación del producto es requerida' }),
  idCategoria: z.number({ required_error: 'La categoría del producto es requerida' }),
  idTipoProducto: z.number({ required_error: 'El tipo de publicación del producto es requerido' }),
  fichaTecnica: z.object({}).refine(val => Object.keys(val).length > 0, { message: 'La ficha técnica del producto no puede estar vacía' })
})

const createColorSquema = z.object({
  color: z.string({ required_error: 'El nombre del color es requerido' })
})

const createProductColorSquema = z.object({
  idColor: z.number({ required_error: 'El color es requerido' }),
  cantidad: z.number({ required_error: 'La cantidad es requerida' }),
  medida: z.string({ required_error: 'La medida es requerida' }),
  idMedida: z.number({ required_error: 'La medida es requerida' })
})

const createImage = z.object({
  url: z.string({ required_error: 'La imagen es requerida' }).url({ message: 'La imagen es requerida' })
})

const updateProductSquema = z.object({
  nombre_producto: z.string({ required_error: 'El nombre del producto es requerido' })
    .min(1, { message: 'El nombre del proyecto es requerido' }),
  descripcion: z.string({ required_error: 'La descripción del proyecto es requerida' })
    .max(1000, { message: 'La descripción del proyecto debe ser menor o igual a 1000 caracteres' }),
  marca: z.string({ required_error: 'La marca del producto es requerida' }),
  precio: z.number({ required_error: 'El precio del producto es requerido' })
    .positive({ message: 'El precio del producto no puede ser menor a 0' }),
  id_categoria: z.number({ required_error: 'La categoria del producto es requerida' }),
  id_tipo_publicacion: z.number({ required_error: 'El tipo de publicación del producto es requerido' })

})

const updateColorProduct = z.object({
  idColor: z.number({ required_error: 'El color es requerido' }),
  cantidad: z.number({ required_error: 'La cantidad es requerida' }),
  logitud_producto: z.string({ required_error: 'La medida es requerida' }),
  id_unidad_medida: z.number({ required_error: 'La medida es requerida' })
})

const deleteImage = z.object({
  url_img: z.string({ required_error: 'La imagen es requerida' }).url({ message: 'La imagen es requerida' })
})

export function validateProductDataCreate (input) {
  return createProductSchema.safeParse(input)
}

export function validateColorDataCreate (input) {
  return createColorSquema.safeParse(input)
}

export function validateProductColorDataCreate (input) {
  return createProductColorSquema.safeParse(input)
}

export function validateImage (input) {
  return createImage.safeParse(input)
}

export function validateProductDataUpdate (input) {
  return updateProductSquema.safeParse(input)
}

export function validateProductColorDataUpdate (input) {
  return updateColorProduct.safeParse(input)
}

export function validateDeleteImage (input) {
  return deleteImage.safeParse(input)
}
