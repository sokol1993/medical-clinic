package pl.dmcs.ksokolowski.utils;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;
import pl.dmcs.ksokolowski.domain.MedicalVisit;

/**
 * Created by sokol on 2016-12-28.
 */
public class PDFBuilder extends AbstractITextPdfView {

    @Override
    protected void buildPdfDocument(Map<String, Object> model, Document doc,
                                    PdfWriter writer, HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        // get data model which is passed by the Spring container
        MedicalVisit visit = (MedicalVisit) model.get("visit");
        doc.addTitle("Faktura VAT");
        doc.add(new Phrase("Sprzedawca: \n"));
        doc.add(new Phrase("Przychodnia Medyczna \n "));
        doc.add(new Phrase("ul. Janowa 11 \n "));
        doc.add(new Phrase("99-021, Warszawa \n \n "));
        doc.add(new LineSeparator());
        doc.add(new Phrase("Nabywca: \n"));
        doc.add(new Phrase(visit.getUser().getFirstName() + " " + visit.getUser().getLastName() + "\n"));
        doc.add(new Phrase("Pesel: \n" + visit.getUser().getPesel() + "\n"));
        doc.add(new Phrase("Adres: \n" + visit.getUser().getStreetName() + " " + visit.getUser().getStreetNumber() + "\n"));
        doc.add(new Phrase(visit.getUser().getCity() + ", " + visit.getUser().getPostcode() + "\n \n"));
        doc.add(new LineSeparator());
        doc.add(new Paragraph("\n Faktura VAT"));

        PdfPTable table = new PdfPTable(6);
        table.setWidthPercentage(100.0f);
        table.setWidths(new float[]{2.0f, 2.0f, 2.0f, 2.0f, 2.0f, 2.0f});
        table.setSpacingBefore(10);

        // define font for table header row
        Font font = FontFactory.getFont(FontFactory.HELVETICA);
        font.setColor(BaseColor.WHITE);

        // define table header cell
        PdfPCell cell = new PdfPCell();
        cell.setBackgroundColor(BaseColor.BLUE);
        cell.setPadding(6);

        // write table header
        cell.setPhrase(new Phrase("Data", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Imie lekarza", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Nazwisko lekarza", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Specjalizacja", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Tytulem", font));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Cena wizyty", font));
        table.addCell(cell);

        table.addCell(visit.getDate().toString());
        table.addCell(visit.getDoctor().getFirstName());
        table.addCell(visit.getDoctor().getLastName());
        table.addCell(visit.getDoctor().getMedicalSpecialization().getSpecializationName());
        table.addCell("Usluga medyczna");
        table.addCell("100,00 zl");

        doc.add(table);

    }

}
