import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationService } from '../../../services/evaluation.service';
import { Evaluation } from '../../../models/evaluation';

@Component({
  selector: 'app-evaluation-details',
  templateUrl: './evaluation-details.component.html',
  styleUrls: ['./evaluation-details.component.scss']
})
export class EvaluationDetailsComponent implements OnInit {
  evaluation?: Evaluation;
  loading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private evaluationService: EvaluationService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadEvaluation(id);
    } else {
      this.error = 'Invalid evaluation ID.';
    }
  }

  private loadEvaluation(id: string): void {
    this.loading = true;
    this.evaluationService.getEvaluationById(id).subscribe({
      next: (data) => {
        this.evaluation = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load evaluation.';
        console.error(err);
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/evaluations']);
  }
}
