import { Injectable } from '@angular/core';
import { TailwindCategory, TailwindClass, TAILWIND_DATA, tailwindCategories, componentCategories, pageCategories } from './tailwind-data';

export type CategoryType = 'classes' | 'components' | 'pages';

@Injectable({
  providedIn: 'root'
})
export class TailwindService {
  private currentType: CategoryType = 'classes';
  
  setCurrentType(type: CategoryType): void {
    this.currentType = type;
  }
  
  getCurrentType(): CategoryType {
    return this.currentType;
  }

  getCurrentCategories(): TailwindCategory[] {
    switch (this.currentType) {
      case 'classes':
        return tailwindCategories;
      case 'components':
        return componentCategories;
      case 'pages':
        return pageCategories;
      default:
        return tailwindCategories;
    }
  }

  getFilteredCategories(searchTerm: string, selectedCategory: string): TailwindCategory[] {
    const categories = this.getCurrentCategories();
    
    let filtered = categories;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(cat => cat.name === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.map(category => ({
        ...category,
        classes: category.classes.filter(cls => 
          cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cls.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cls.tailwindClass.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.classes.length > 0);
    }

    return filtered;
  }

  // Backward compatibility methods
  getAllCategories(): TailwindCategory[] {
    return TAILWIND_DATA;
  }

  getCategory(categoryName: string): TailwindCategory | undefined {
    return TAILWIND_DATA.find(category => 
      category.name.toLowerCase() === categoryName.toLowerCase()
    );
  }

  searchClasses(searchTerm: string): TailwindClass[] {
    const results: TailwindClass[] = [];
    const term = searchTerm.toLowerCase();

    TAILWIND_DATA.forEach(category => {
      category.classes.forEach(cls => {
        if (
          cls.name.toLowerCase().includes(term) ||
          cls.tailwindClass.toLowerCase().includes(term) ||
          cls.description.toLowerCase().includes(term) ||
          cls.cssEquivalent.toLowerCase().includes(term)
        ) {
          results.push(cls);
        }
      });
    });

    return results;
  }

  getClassesByCategory(categoryName: string): TailwindClass[] {
    const category = this.getCategory(categoryName);
    return category ? category.classes : [];
  }

  getAllClasses(): TailwindClass[] {
    const allClasses: TailwindClass[] = [];
    TAILWIND_DATA.forEach(category => {
      allClasses.push(...category.classes);
    });
    return allClasses;
  }
}
