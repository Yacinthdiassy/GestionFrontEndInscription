import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TalentService } from '../../../services/talent/talent.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-talent',
  templateUrl: './create-talent.component.html',
  styleUrls: ['./create-talent.component.css']
})
export class CreateTalentComponent implements OnInit {

  createForm: FormGroup;

  constructor(private talentService: TalentService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      sexe: ['', Validators.required],
      tel: ['', Validators.required],
      adresse: ['', Validators.required],
    });
  }

  addTalent(prenom, nom, sexe, tel, adresse) {
    this.talentService.addTalent(prenom, nom, sexe, tel, adresse).subscribe(() => {
      this.router.navigate(['/listtalent']);
    });
  }

  ngOnInit() {
  }

}
