import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'enlace-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  @Input() appTitle!: string

  constructor() {}

  ngOnInit(): void {}
}
