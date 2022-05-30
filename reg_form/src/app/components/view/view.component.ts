import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegServiceService } from 'src/app/services/reg-service.service';
import { Student } from 'src/app/common/student';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  students:Student[];
  constructor(private service:RegServiceService,private router:Router) {}
  profilelist() {
    this.service.getprofile().subscribe((data) => { this.students=data    });
  }
  deleteStudent(id: number) {
    this.service.deleteStudent(id).subscribe((data) => {
    console.log(data);
    this.profilelist();
    });}
    
    
  ngOnInit(): void {
    this.profilelist();
  }
  downloadPDF(){
    let doc = new jsPDF();
    autoTable(doc,{html:"#tal"})
    doc.save("PDF");

  }

}
