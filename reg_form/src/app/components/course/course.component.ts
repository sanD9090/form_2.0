import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  q = ['Java', 'Python', 'Rust'];
  cf: FormGroup;

  columnDefs = [{ field: 'Course' }, { field: 'Fees' }];
  rowData = [
    { Course: 'Java', Fees: '15000' },
    { Course: 'Python', Fees: '12000' },
    { Course: 'Rust', Fees: '13000' },
  ];

  constructor(private cb: FormBuilder) {
    this.cf = this.cb.group({
      course: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public convertToPDF() {
    html2canvas(document.getElementById("cors")!).then((canvas) => {
      // Few necessary setting options

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var width = pdf.internal.pageSize.getWidth();
      var height = (canvas.height * width) / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
      pdf.save('output.pdf'); // Generated PDF
    });
  }
}
