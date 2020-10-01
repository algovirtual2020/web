import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BannerComponent } from './page/banner/banner.component';
import { OneComponent } from './page/one/one.component';


const routes: Routes = [

    {path:'', component: BannerComponent},
    {path:'one', component: OneComponent},
    {path:'**', redirectTo: ''},

]

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes, { anchorScrolling: 'enabled', initialNavigation: 'enabled' }),
      
    ],
    exports: [
      RouterModule
    ]
})

export class AppRoutingModule {}