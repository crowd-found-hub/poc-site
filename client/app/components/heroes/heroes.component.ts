/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {HeroService} from "../../_services/index";
import {Hero} from "../../_models/index";

@Component({
    selector: 'my-heroes',
    templateUrl: './app/components/heroes/heroes.component.html'
})

export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;
    error: any;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this.router.navigate(['/heroes', this.selectedHero._id]);
    }

    addHero() {
        this.selectedHero = null;
        this.router.navigate(['/detail', 'new']);
    }

    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }
}
