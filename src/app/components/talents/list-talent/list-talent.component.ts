import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Talent } from '../../../models/talent.model';
import { TalentService } from '../../../services/talent/talent.service';

@Component({
  selector: 'app-list-talent',
  templateUrl: './list-talent.component.html',
  styleUrls: ['./list-talent.component.css']
})
export class ListTalentComponent implements OnInit {

  talents: Talent[];
  displayedColumns = [
    'prenom',
    'nom',
    'sexe',
    'tel',
    'adresse',
    'actions'
  ];

  constructor(
    private talentService: TalentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchTalents();
  }
  fetchTalents() {
    this.talentService
      .getTalents()
      .subscribe((data: Talent[]) => {
        this.talents = data;
        console.log('Donnée demandée');
        console.log(this.talents);
      });
  }
  editTalent(id) {
    this.router.navigate([`/edittalent/${id}`]);
  }

  deleteTalent(id) {
    this.talentService.deleteTalent(id).subscribe(() => {
      this.fetchTalents();
    });
  }
}
