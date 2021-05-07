var html_to_pdf = require('html-pdf-node');

let options = { format: 'A4', path : "archive/email-" + Math.floor(Math.random() * 1000000 ) + ".pdf" };

let file = { url: "https://view.comms-test.acc.co.nz/?qs=dd9af7246230f8cb4b45eaf6ab29e195bddb46d867ef019e30ad68554c951973d798130990d6c0bf3976fd86892acbad2212d7d24157b02c" };
html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
    console.log("Processed :)");
});

/* Need to add the following in stylesheet to render background images in PDF :)
body {
  -webkit-print-color-adjust: exact !important;
}
*/