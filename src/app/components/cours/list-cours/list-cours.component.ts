import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cours } from '../../../models/cours.model';
import { CoursService } from '../../../services/cours/cours.service';



@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.css']
})
export class ListCoursComponent implements OnInit {

  cours: Cours[];
  displayedColumns = [
    'nom',
    'description',
    'actions'
  ];

  constructor(
    private coursService: CoursService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchCours();
  }
  fetchCours() {
    this.coursService
      .getCours()
      .subscribe((data: Cours[]) => {
        this.cours = data;
        console.log('Donnée demandée');
        console.log(this.cours);
      });
  }
  editCours(id) {
    this.router.navigate([`/editcours/${id}`]);
  }

  deleteCours(id) {
    this.coursService.deleteCours(id).subscribe(() => {
      this.fetchCours();
    });
  }
}
