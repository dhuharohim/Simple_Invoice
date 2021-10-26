function generatePDF(){
    const element = document.getElementById("Invoice");

    html2pdf()
    .from(element)
    .save();
}