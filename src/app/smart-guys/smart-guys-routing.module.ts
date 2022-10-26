import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfSmartGuysComponent } from './components/list-of-smart-guys/list-of-smart-guys.component';

const routes: Routes = [{ path: '', component: ListOfSmartGuysComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SmartGuysRoutingModule {}