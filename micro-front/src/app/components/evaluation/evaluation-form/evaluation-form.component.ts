import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluation } from '../../../models/evaluation';
import { EvaluationService } from '../../../services/evaluation.service';
import { DepartmentService } from '../../../services/department.service'; // ✅ New!

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.scss']
})
export class EvaluationFormComponent implements OnInit {
  evaluationForm: FormGroup;
  isEditMode = false;
  evaluationId!: string;
  loading = false;
  submitted = false;
  error = '';
  departments: any[] = []; // ✅ Now it's departments not formations!

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private evaluationService: EvaluationService,
    private departmentService: DepartmentService, // ✅ Inject DepartmentService
  ) {
    this.evaluationForm = this.formBuilder.group({
      departmentId: ['', Validators.required], 
      titre: ['', Validators.required],
      description: [''],
      dateEvaluation: ['', Validators.required],
      noteMaximale: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.evaluationId = this.route.snapshot.params['id'];
    this.isEditMode = !!this.evaluationId;

    if (this.isEditMode) {
      this.loading = true;
      this.evaluationService.getEvaluationById(this.evaluationId).subscribe({
        next: (evaluation) => {
          this.evaluationForm.patchValue({
            departmentId: evaluation.departmentId, // ✅
            titre: evaluation.titre,
            description: evaluation.description,
            dateEvaluation: new Date(evaluation.dateEvaluation).toISOString().substring(0, 10),
            noteMaximale: evaluation.noteMaximale
          });
          this.loading = false;
        },
        error: (e) => {
          this.error = 'Failed to load evaluation data.';
          console.error(e);
          this.loading = false;
        }
      });
    }

    this.loadDepartments(); // ✅ Load departments instead of formations
  }

  get f() {
    return this.evaluationForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.evaluationForm.invalid) {
      return;
    }

    this.loading = true;
    const evaluation: Evaluation = {
      ...this.evaluationForm.value,
      dateEvaluation: new Date(this.evaluationForm.value.dateEvaluation)
    };

    if (this.isEditMode) {
      // You can implement update logic here if needed
    } else {
      this.evaluationService.createEvaluation(evaluation).subscribe({
        next: () => {
          this.router.navigate(['/evaluations']);
        },
        error: (e) => {
          this.error = 'Failed to create evaluation.';
          console.error(e);
          this.loading = false;
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/evaluations']);
  }

  loadDepartments() {
    this.departmentService.getAllDepartments().subscribe({
      next: (data) => {
        this.departments = data;
      },
      error: (err) => {
        console.error('Failed to load departments', err);
      }
    });
  }
}
