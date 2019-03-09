import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { TalentService } from '../../../services/talent/talent.service';



@Component({
  selector: 'app-edit-talent',
  templateUrl: './edit-talent.component.html',
  styleUrls: ['./edit-talent.component.css']
})
export class EditTalentComponent implements OnInit {

  id: string;
  talent: any = {};
  updateForm: FormGroup;

  constructor(
    private talentService: TalentService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      sexe: ['', Validators.required],
      tel: ['', Validators.required],
      adresse: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.talentService.getTalentById(this.id).subscribe(res => {
        this.talent = res;
        this.updateForm.get('prenom').setValue(this.talent.prenom);
        this.updateForm.get('nom').setValue(this.talent.nom);
        this.updateForm.get('sexe').setValue(this.talent.sexe);
        this.updateForm.get('tel').setValue(this.talent.tel);
        this.updateForm.get('adresse').setValue(this.talent.adresse);
      });
    });
  }

  updateTalent(prenom, nom, sexe, tel, adresse) {
    this.talentService.updateTalent(
      this.id,
      prenom,
      nom,
      sexe,
      tel,
      adresse
      ).subscribe(() => {
      this.snackBar.open('Talent modifié avec succé', 'ok', {
        duration: 3000
      });
    });
  }

}
