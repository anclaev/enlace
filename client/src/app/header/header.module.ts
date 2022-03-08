import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { HeaderComponent } from './header.component'

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
