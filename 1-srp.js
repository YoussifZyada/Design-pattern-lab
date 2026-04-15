class Report {
  constructor(data) {
    this.data = data;
  }

  generateReport() {
    return `Report generated with data: ${JSON.stringify(this.data)}`;
  }

  getData() {
    return this.data;
  }
}

class PDFExporter {
  export(report) {
    const data = report.getData();
    return `PDF exported with: ${JSON.stringify(data)}`;
  }
}

// Usage
const report = new Report({ sales: 1000, month: 'January' });
console.log(report.generateReport());

const pdfExporter = new PDFExporter();
console.log(pdfExporter.export(report));

module.exports = { Report, PDFExporter };
