import PDFDocument from "pdfkit";
import fs from "fs";

export const generateInsurancePDF = () => {

    const filePath = "./pdf/CondicionesSeguro.pdf";

    const doc = new PDFDocument();

    doc.pipe(
        fs.createWriteStream(filePath)
    );

    doc.fontSize(24);
    doc.text("CarGo");

    doc.moveDown();

    doc.fontSize(18);
    doc.text("Condiciones del seguro");

    doc.moveDown();

    doc.fontSize(16);
    doc.text("Su seguro incluye cobertura para los siguientes daños y situaciones:");
    
    doc.moveDown();

    doc.fontSize(12);

    doc.text("✔ Daños por colisión, arañazos y robo");
    doc.text("✔ Daños del interior como derrames en asientos o alfombras");
    doc.text("✔ Daños en neumáticos, llantas, parabrisas y ventanillas");
    doc.text("✔ Asistencia en carretera 24 horas");
    doc.text("✔ Seguro para conductor y pasajeros");

    doc.moveDown();

    doc.text("Franquicia: 300 €");

    doc.moveDown();

    doc.text(
        "Se deberá abonar la cantidad en la oficina física y luego al devolver el coche se entregará el importe. El cliente deberá devolver el vehículo en el mismo estado en el que fue entregado."
    );

    doc.end();

    return filePath;
};

