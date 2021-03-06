import {Component, OnInit} from '@angular/core';
import {CountryService} from '../../../../demo/service/countryservice';
import {SelectItem, MenuItem} from 'primeng/api';
import {BreadcrumbService} from '../../../../shared/breadcrumb/breadcrumb.service';

@Component({
    selector: 'app-dashboard-coordinador',
    templateUrl: './matriculas.component.html'
})
export class MatriculasComponent implements OnInit {


    constructor(private countryService: CountryService, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Dashboard', routerLink: ['/dashboard/coordinador']},
            {label: 'Formación Académica', routerLink: ['/dashboard/formacion-academica']},
            {label: 'Matriculas'},
        ]);

    }

    ngOnInit() {

    }
}
