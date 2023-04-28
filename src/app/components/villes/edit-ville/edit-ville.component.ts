import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { VilleService } from 'src/app/services/ville.service';
import { VilleModel } from 'src/app/models/ville.model';

@Component({
  selector: 'app-edit-ville',
  templateUrl: './edit-ville.component.html',
  styleUrls: ['./edit-ville.component.css']
})
export class EditVilleComponent implements OnInit {
  submitted = false;
  villeData!: VilleModel[]
  villeForm!: FormGroup;

  constructor(
    private actRoute: ActivatedRoute,
    private villeService: VilleService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.updateVille();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getVille(id);
    this.villeForm = this.formBuilder.group({
      villeName: ['', [Validators.required]],
    });
  }

  getVille(id: any) {
    this.villeService.getVille(id).subscribe((data) => {
      this.villeForm.setValue({
        villeName: data['villeName']
      })
    });

  }

  updateVille() {
    this.villeForm = this.formBuilder.group({
      villeName: ['', [Validators.required]]

    })
  }

  /* Update book */
  onSubmitVilleForm() {
    this.submitted = true;
    if  (!this.villeForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id'); 
        if (id){
          this.villeService.updateVille(id, this.villeForm.value).subscribe({
            complete: () => {
              this.router.navigate(['/villes-list']);
              //this.router.navigate('/villes-list');
              console.log('Content updated successfully!');
            },
            error: (e) => {
              console.log(e);
            },
          });
        }
      }
      return "totot"
    } 
    
  }
}
