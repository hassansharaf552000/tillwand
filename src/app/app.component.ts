import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TailwindService, CategoryType } from './tailwind.service';
import { TailwindCategory, TailwindClass } from './tailwind-data';
import { TailwindClassCardComponent } from './tailwind-class-card/tailwind-class-card.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CommonModule, 
    FormsModule, 
    TailwindClassCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tailwind CSS Reference';
  
  currentType: CategoryType = 'classes';
  categories: TailwindCategory[] = [];
  selectedCategory: string = 'all';
  searchTerm: string = '';
  filteredCategories: TailwindCategory[] = [];

  constructor(private tailwindService: TailwindService) {
    this.updateCategories();
  }

  setCurrentType(type: CategoryType): void {
    this.currentType = type;
    this.tailwindService.setCurrentType(type);
    this.selectedCategory = 'all';
    this.searchTerm = '';
    this.updateCategories();
  }

  updateCategories(): void {
    this.categories = this.tailwindService.getCurrentCategories();
    this.filteredCategories = this.tailwindService.getFilteredCategories(this.searchTerm, this.selectedCategory);
  }

  selectCategory(categoryName: string): void {
    this.selectedCategory = categoryName;
    this.searchTerm = '';
    this.updateCategories();
  }

  showAllCategories(): void {
    this.selectedCategory = 'all';
    this.searchTerm = '';
    this.updateCategories();
  }

  onSearch(): void {
    this.updateCategories();
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.updateCategories();
  }

  getCategoryButtonClass(categoryName: string): string {
    return this.selectedCategory === categoryName 
      ? 'bg-blue-100 text-blue-700' 
      : 'text-gray-600 hover:text-gray-900';
  }

  getTypeButtonClass(type: CategoryType): string {
    return this.currentType === type
      ? 'bg-blue-600 text-white'
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
  }

  getTotalClassCount(): number {
    return this.categories.reduce((total, category) => total + category.classes.length, 0);
  }
}

