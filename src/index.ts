import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument();
doc.registerFont('NotoSansJP', './fonts/NotoSansJP-Regular.ttf');
doc.font('NotoSansJP');
doc.pipe(fs.createWriteStream('output.pdf'));
doc.text('Hello World!');
doc.text('こんにちは世界！');
doc.text('位置を指定してテキストを追加することもできます', 300, 50);
doc.image('images/150x150.png', 100, 200, { width: 150 });
doc.end();

