import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../../services/evaluation.service';
import { Evaluation } from '../../../models/evaluation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.scss']
})
export class EvaluationListComponent implements OnInit {
  evaluations: Evaluation[] = [];
  loading = false;
  error = '';

  constructor(
    private evaluationService: EvaluationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEvaluations();
  }

  loadEvaluations(): void {
    this.loading = true;
    this.evaluationService.getAllEvaluations().subscribe({
      next: (data) => {
        this.evaluations = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load evaluations.';
        console.error(err);
        this.loading = false;
      }
    });
  }

  deleteEvaluation(id: string): void {
    if (confirm('Are you sure you want to delete this evaluation?')) {
      this.evaluationService.deleteEvaluation(id).subscribe({
        next: () => this.loadEvaluations(),
        error: (err) => {
          this.error = 'Failed to delete evaluation.';
          console.error(err);
        }
      });
    }
  }
}
