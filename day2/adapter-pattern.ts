class PDFViewer {
  viewPDF(filename: string): void {
    console.log(`Viewing PDF document: ${filename}`);
  }
}

class WordViewer {
  viewDOCX(filename: string): void {
    console.log(`Viewing Word document: ${filename}`);
  }
}

class DocumentAdapter {
  private pdfViewer: PDFViewer;
  private wordViewer: WordViewer;

  constructor() {
    this.pdfViewer = new PDFViewer();
    this.wordViewer = new WordViewer();
  }

  view(filename: string): void {
    if (filename.endsWith('.pdf')) {
      this.pdfViewer.viewPDF(filename);
    } else if (filename.endsWith('.docx')) {
      this.wordViewer.viewDOCX(filename);
    } else {
      throw new Error(`Unsupported file type: ${filename}`);
    }
  }
}

const viewer = new DocumentAdapter();
viewer.view('report.pdf');
viewer.view('resume.docx');
