import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { TimepickerModule } from 'ngx-bootstrap';

@NgModule({
    declarations: [],
    imports: [
        TimepickerModule.forRoot(),
        NgxPaginationModule,
        CommonModule
    ],
    providers: [
        TimepickerModule,
        NgxPaginationModule,
        CommonModule
    ]
})
export class SharedModule {}
