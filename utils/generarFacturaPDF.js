import PDFKit from 'pdfkit';
import { buffer } from 'stream/consumers';

const PDFDocument = PDFKit;

export async function generarFacturaPDF(nombreUsuario, productos, totalPagado, direccionCliente = '') {
  const doc = new PDFDocument({ margin: 50 });

  // Función para asegurar valores numéricos
  const ensureNumber = (value, defaultValue = 0) => {
    const num = Number(value);
    return isNaN(num) ? defaultValue : num;
  };

  // Compatibilidad: si productos es string, convertirlo a array
  const items = typeof productos === 'string'
    ? [{
      nombre: productos,
      cantidad: 1,
      precioUnitario: ensureNumber(totalPagado),
      codigo: 'ITEM-001'
    }]
    : productos.map(p => ({
      ...p,
      cantidad: ensureNumber(p.cantidad, 1),
      precioUnitario: ensureNumber(p.precioUnitario)
    }));

  // Validar y formatear el total pagado
  const total = ensureNumber(totalPagado);

  // Encabezado
  doc.fontSize(30).fillColor('#FF6F00').text('AV', { align: 'center' });
  doc.fontSize(18).fillColor('#000000').text('ANVIC ACCESORIOS', { align: 'center' });
  doc.fontSize(10).text('Calle Falsa 123, Ciudad, Estado', { align: 'center' });
  doc.fontSize(10).text('RFC: XAXX010101000 | Tel: 555-123-4567', { align: 'center' });

  doc.moveDown();
  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

  // Información de la factura
  const fechaEmision = new Date().toLocaleDateString('es-MX', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const invoiceID = 'FAC-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

  doc.fontSize(14).text(`Factura: ${invoiceID}`, { align: 'right' });
  doc.fontSize(14).text(`Fecha: ${fechaEmision}`, { align: 'right' });
  doc.moveDown();

  // Datos del cliente
  doc.fontSize(16).text('Datos del Cliente', { underline: true });
  doc.fontSize(12).text(`Nombre: ${nombreUsuario}`);
  if (direccionCliente) doc.text(`Telefono: ${direccionCliente}`);
  doc.moveDown();

  // Tabla de productos
  doc.fontSize(16).text('Detalle de Productos', { underline: true });
  doc.moveDown(0.5);

  const tableTop = doc.y;
  const descriptionX = 50;
  const quantityX = 350;
  const priceX = 400;
  const amountX = 500;

  // Encabezados de la tabla
  doc.font('Helvetica-Bold').fontSize(10);
  doc.text('Descripción', descriptionX, tableTop);
  doc.text('Cantidad', quantityX, tableTop);
  doc.text('Precio Unitario', priceX, tableTop);
  doc.text('Total', amountX, tableTop);
  doc.moveTo(50, doc.y + 5).lineTo(550, doc.y + 5).stroke();

  // Filas de productos
  doc.font('Helvetica');
  let y = tableTop + 25;
  items.forEach((producto) => {
    doc.fontSize(10);
    doc.text(producto.nombre, descriptionX, y);
    doc.text(producto.cantidad.toString(), quantityX, y, { width: 40, align: 'right' });
    doc.text(`$${producto.precioUnitario.toFixed(2)}`, priceX, y, { width: 60, align: 'right' });
    doc.text(`$${(producto.precioUnitario * producto.cantidad).toFixed(2)}`, amountX, y, { width: 60, align: 'right' });
    y += 20;
  });

  // Total
  doc.moveTo(50, y).lineTo(550, y).stroke();
  y += 10;
  doc.font('Helvetica-Bold');
  doc.text('Total:', 400, y);
  doc.text(`$${total.toFixed(2)}`, amountX, y, { width: 60, align: 'right' });
  doc.font('Helvetica');

  doc.moveDown(3);
// Asumiendo que ya tienes inicializado doc con PDFKit

// Espaciado antes del título
doc.moveDown(2);

// Título centrado y subrayado
doc.fontSize(12).text('Términos y Condiciones', {
  underline: true,
  align: 'center'
});

// Espaciado después del título
doc.moveDown();

// Texto de los términos
const terminosTexto = `1. Todos los precios están expresados en pesos colombianos (COP).
2. Los productos se entregan según disponibilidad.
3. No se aceptan devoluciones después de 15 días de la compra.
4. Para realizar un reclamo es obligatorio presentar la factura original.
5. Esta factura es válida como comprobante fiscal emitido por ANVIC Accesorios.
Para más información, visite nuestra página oficial: https://anvicaccesorios.com/`;

// Dibujar un rectángulo de fondo gris clarito
const startY = doc.y - 5; // un poquito arriba para que cubra bien
const boxHeight = 170; // altura suficiente para todo el texto
doc.rect(45, startY, 510, boxHeight)
   .fill('#f5f5f5')
   .stroke();

// Volver a color negro para el texto
doc.fillColor('#000000');

// Escribir los términos dentro del cuadro
doc.text(terminosTexto, 50, startY + 10, {
  width: 500,       // ocupar el ancho disponible
  align: 'justify', // justificar el texto
  lineGap: 4,       // espacio entre líneas
  paragraphGap: 6   // espacio entre párrafos
});

  // Pie de página
  doc.fontSize(10).text('¡Gracias por su preferencia!', { align: 'center' });
  doc.text('ANVIC ACCESORIOS - www.anvicaccesorios.com', { align: 'center' });

  doc.end();
  return await buffer(doc);
}
