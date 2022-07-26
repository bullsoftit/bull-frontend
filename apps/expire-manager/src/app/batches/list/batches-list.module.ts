import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchesListRoutingModule } from './batches-list-routing.module';
import { BatchesListComponent } from './batches-list.component';

@NgModule({
    declarations: [BatchesListComponent],
    imports: [CommonModule, BatchesListRoutingModule],
})
export class BatchesListModule {}
