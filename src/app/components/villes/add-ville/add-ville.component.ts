import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VilleService } from 'src/app/services/ville.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.css']
})
export class AddVilleComponent implements OnInit {

  villeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private villeService: VilleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.villeForm = this.formBuilder.group({
      villeName: ['', [Validators.required]],
    });
  }

  submitVilleForm() {
    const ville = this.villeForm.value;
    console.log(this.villeForm.value);
    alert(
      ville.villeName
    );

    this.villeService.createVille(ville).subscribe((response) => {
      console.log(response);
      this.villeForm.reset();
      // Redirect the user to the app
      this.router.navigate(['/villes-list']);
    });

  }

}
