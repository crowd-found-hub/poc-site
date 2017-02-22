import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'features-dashboard',
    templateUrl: './app/components/features-dashboard/features-dashboard.component.html'
})
export class FeaturesDashboardComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    addFeature() {
        this.router.navigate(['/features', 'new']);
    }
}