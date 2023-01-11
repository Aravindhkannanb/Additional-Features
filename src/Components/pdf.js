import React from "react";
import jsPDF from 'jspdf';
const Pdfgenerate=()=>{
    const generate=()=>{
var doc=new jsPDF('portrait','px','a4','false');
doc.setFont('Helvertica','bold');
doc.text(60,60,'Name:');
doc.text(60,80,'Phone:');
doc.text(60,120,'Email Id:');
doc.text(60,140,'Address:');
doc.setFont('Helvertica','bold');
doc.text(100,60,'ABC');
doc.text(100,80,'123424533');
doc.text(130,120,'abc@gmail.com');
doc.text(120,140,'Tricy');
doc.save("Report.pdf");
    }
    return(
        <div>
            <button onClick={generate}>Download Report</button>
        </div>
    )
}
export default Pdfgenerate;
