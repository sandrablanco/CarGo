import PDFDocument from "pdfkit";
import fs from "fs";

export const generateInvoicePDF = (booking, car, user) => {

  const path = `./pdf/Factura-${booking._id}.pdf`;

  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(path));

  doc.fontSize(22).text("Factura CarGo");

  doc.moveDown();

  doc.fontSize(14);
  doc.text(`Cliente: ${user.name}`);
  doc.text(`Vehículo: ${car.brand} ${car.model}`);
  doc.text(`Inicio: ${booking.startDate}`);
  doc.text(`Fin: ${booking.endDate}`);
  doc.text(`Total: ${booking.totalPrice} €`);
  doc.text(`Seguro: ${booking.insurancePrice} €`);
  doc.end();

  return path;
};
