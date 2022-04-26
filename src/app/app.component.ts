import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pdfmakedemo';

  generatePDF() {
    let docDefinition = {
      content: [
        {
          style: 'tableExample',
          table: {
            widths: ['*', '*', '*', '*', '*', '*'],
            body: [
              [
                {
                  text: 'PATIENT NAME',
                  style: 'tableHeader',
                  alignment: 'left',
                },
                {
                  text: 'ROOM NUMBER',
                  style: 'tableHeader',
                  alignment: 'left',
                },
                {
                  text: 'DATE OF BIRTH',
                  style: 'tableHeader',
                  alignment: 'left',
                },
                {
                  text: 'SEX',
                  style: 'tableHeader',
                  alignment: 'left',
                },
                {
                  text: 'MONTH',
                  style: 'tableHeader',
                  alignment: 'left',
                },
                {
                  text: 'YEAR',
                  style: 'tableHeader',
                  alignment: 'left',
                },
              ],
              ['Joe Jones', '', '15-May-1991', 'M', 'April', '2022'],

              [
                {
                  text: 'ALLERGIES:',
                  style: 'tableHeader',
                  alignment: 'left',
                  colSpan: 3,
                },
                {},
                {},
                {
                  text: 'RESIDENT ID NO: 2027',
                  style: 'tableHeader',
                  alignment: 'left',
                  colSpan: 3,
                },
                {},
                {},
              ],
              [
                {
                  text: 'DIAGNOSIS & COMMENTS:',
                  colSpan: 6,
                  alignment: 'left',
                },
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {
                  text: 'DOCTOR NAME:',
                  colSpan: 3,
                  alignment: 'left',
                },
                {},
                {},
                {
                  text: 'DOCTOR CONTACT:',
                  colSpan: 3,
                  alignment: 'left',
                },
                {},
                {},
              ],
            ],
          },
        },
      ],
      defaultStyle: {
        fontSize: 8,
        // italics: true,
        fillColor: '#81D4FA',
      },
    };

    pdfMake.createPdf(docDefinition).open();
  }
}
