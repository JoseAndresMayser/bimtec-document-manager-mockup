import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() public clickOnProject: EventEmitter<void>;
  @Output() public clickOnCompany: EventEmitter<void>;

  public dropdownOpen: boolean;

  constructor() {
    this.clickOnProject = new EventEmitter();
    this.clickOnCompany = new EventEmitter();
    this.dropdownOpen = false;
  }

  public goToProjectDetail(): void {
    this.clickOnProject.emit();
    this.dropdownOpen = false;
  }
}
