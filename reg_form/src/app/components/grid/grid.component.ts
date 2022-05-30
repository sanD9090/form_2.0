import { Component, Output,  
  EventEmitter } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import autoTable from 'jspdf-autotable';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { RegServiceService } from 'src/app/services/reg-service.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  private gridApi!: GridApi;
  public rowSelection = 'multiple';
 

  public columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'FirstName', field: 'firstname' },
    { headerName: 'LastName', field: 'lastname' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Country', field: 'country' },
  ];

  constructor(private http: HttpClient, public dialog:MatDialog, private reg:RegServiceService ) {}

  public rowData: any = this.http.get<any>('http://localhost:3000/posts');
  ngOninit() {}

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  //  convertToPDF() {
  //   html2canvas(document.getElementById('cors')!).then((canvas) => {
  //     // Few necessary setting options

  //     const contentDataURL = canvas.toDataURL('image/png');
  //     let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  //     var width = pdf.internal.pageSize.getWidth();
  //     var height = (canvas.height * width) / canvas.width;
  //     pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
  //     pdf.save('output.pdf'); // Generated PDF
  //   });
  // }

  generatePDF() {
    html2canvas(document.getElementById('cors')!, {scrollY: -window.scrollY}).then((canvas) => {
      // var imgWidth = 208;
      // var imgHeight = (canvas.height * imgWidth) / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4');
      // var position = 0;
      // pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('newPDF.pdf');
    });
  }


  getSelectedRowData() {
    let selectedNodes = this.gridApi.getSelectedNodes();
    let selectedData = selectedNodes.map(node => node.data);
    // let a =JSON.stringify(selectedData);
    // alert("Selected Nodes:\n " +a);
    this.reg.setData(selectedData);
    
    

    // this.send.emit(a);  
    this.dialog.open(PopupComponent);
      
  }
}
  
     
  

