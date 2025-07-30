import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TailwindClass } from '../tailwind-data';

@Component({
  selector: 'app-tailwind-class-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <!-- Header -->
      <div class="p-4 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-800">{{ tailwindClass?.tailwindClass || tailwindClass?.name }}</h3>
        <p class="text-sm text-gray-600">{{ tailwindClass?.description }}</p>
        <div class="mt-2">
          <span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {{ tailwindClass?.category }}
          </span>
        </div>
      </div>

      <!-- Live Demo -->
      <div class="p-4 bg-gray-50">
        <h4 class="text-sm font-medium text-gray-700 mb-2">Live Demo</h4>
        <div class="border border-gray-300 rounded-lg overflow-hidden">
          <div [class]="getContainerClasses()" class="min-h-20 flex items-center justify-center">
            <div *ngIf="shouldUseHTMLDemo(); else textDemo" [innerHTML]="getDemoHTML()"></div>
            <ng-template #textDemo>
              <div [class]="getDemoClasses()">
                <span [class]="getTextClasses()">{{ getDemoText() }}</span>
              </div>
            </ng-template>
          </div>
        </div>
      </div>

      <!-- Code Preview -->
      <div *ngIf="tailwindClass?.code" class="p-4">
        <h4 class="text-sm font-medium text-gray-700 mb-2">Code Preview</h4>
        <div class="bg-gray-100 border border-gray-300 rounded p-4 overflow-auto" [innerHTML]="getPreviewHTML()">
        </div>
      </div>

      <!-- CSS Equivalent -->
      <div class="p-4 border-t border-gray-200">
        <h4 class="text-sm font-medium text-gray-700 mb-2">CSS Equivalent</h4>
        <pre class="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto"><code>{{ tailwindClass?.cssEquivalent }}</code></pre>
      </div>

      <!-- Example Usage -->
      <div *ngIf="tailwindClass?.example" class="p-4 border-t border-gray-200">
        <h4 class="text-sm font-medium text-gray-700 mb-2">Example Usage</h4>
        <pre class="bg-gray-100 text-gray-800 p-3 rounded text-sm overflow-x-auto"><code>{{ tailwindClass?.example }}</code></pre>
      </div>
    </div>
  `
})
export class TailwindClassCardComponent {
  @Input() tailwindClass?: TailwindClass;

  getContainerClasses(): string {
    if (!this.tailwindClass) return 'bg-white p-4';
    
    const category = this.tailwindClass.category;
    let containerClasses = 'bg-white p-4';
    
    switch (category) {
      case 'Layout':
      case 'Flexbox':
        containerClasses += ' bg-blue-50 border-blue-300';
        break;
      case 'Grid':
        containerClasses += ' bg-green-50 border-green-300';
        break;
      case 'Spacing':
        containerClasses += ' bg-yellow-50 border-yellow-300';
        break;
      case 'Typography':
        containerClasses += ' bg-purple-50 border-purple-300';
        break;
      case 'Colors':
        containerClasses += ' bg-pink-50 border-pink-300';
        break;
      case 'Backgrounds':
        containerClasses += ' bg-indigo-50 border-indigo-300';
        break;
      case 'Borders':
        containerClasses += ' bg-gray-50 border-gray-300';
        break;
      case 'Effects':
        containerClasses += ' bg-teal-50 border-teal-300';
        break;
      case 'Transitions':
        containerClasses += ' bg-orange-50 border-orange-300';
        break;
      case 'Transforms':
        containerClasses += ' bg-red-50 border-red-300';
        break;
      case 'Interactivity':
        containerClasses += ' bg-emerald-50 border-emerald-300';
        break;
      default:
        containerClasses += ' bg-gray-50 border-gray-300';
    }
    
    return containerClasses;
  }

  getDemoClasses(): string {
    if (!this.tailwindClass) return '';
    
    const className = this.tailwindClass.tailwindClass || '';
    const category = this.tailwindClass.category;
    let classes = className;
    
    // Add context classes based on category for better visibility
    switch (category) {
      case 'Spacing':
        classes += ' bg-yellow-200 border border-yellow-400';
        break;
      case 'Sizing':
        classes += ' bg-blue-200 border border-blue-400';
        break;
      case 'Colors':
        classes += ' p-4 rounded';
        break;
      case 'Borders':
        classes += ' p-4 bg-white';
        break;
      case 'Effects':
        classes += ' p-4 bg-white';
        break;
      case 'Typography':
        // Typography classes apply directly to text
        break;
      default:
        classes += ' min-h-8';
    }
    
    return classes;
  }

  shouldUseHTMLDemo(): boolean {
    if (!this.tailwindClass) return false;
    
    const className = this.tailwindClass.tailwindClass || '';
    const category = this.tailwindClass.category;
    
    // Use HTML demos for complex layouts and components/pages
    return category === 'Flexbox' || 
           category === 'Grid' || 
           category === 'Layout' ||
           className.includes('flex') ||
           className.includes('grid') ||
           className.includes('absolute') ||
           className.includes('relative') ||
           className.includes('fixed') ||
           this.tailwindClass.code !== undefined; // Use HTML for components/pages with code
  }

  getDemoHTML(): string {
    if (!this.tailwindClass) return '';
    
    // If it's a component or page with code, show the code
    if (this.tailwindClass.code) {
      return this.tailwindClass.code;
    }
    
    const className = this.tailwindClass.tailwindClass || '';
    const category = this.tailwindClass.category;
    
    // Generate appropriate HTML based on class type
    if (category === 'Flexbox' || className.includes('flex')) {
      return `
        <div class="${className} space-x-2 w-full">
          <div class="bg-blue-200 p-2 rounded text-sm">Item 1</div>
          <div class="bg-blue-300 p-2 rounded text-sm">Item 2</div>
          <div class="bg-blue-400 p-2 rounded text-sm">Item 3</div>
        </div>
      `;
    }
    
    if (category === 'Grid' || className.includes('grid')) {
      return `
        <div class="${className} gap-2 w-full">
          <div class="bg-green-200 p-2 rounded text-center text-sm">A</div>
          <div class="bg-green-300 p-2 rounded text-center text-sm">B</div>
          <div class="bg-green-400 p-2 rounded text-center text-sm">C</div>
          <div class="bg-green-500 p-2 rounded text-center text-sm">D</div>
        </div>
      `;
    }
    
    if (className.includes('absolute') || className.includes('relative') || className.includes('fixed')) {
      return `
        <div class="relative w-32 h-24 bg-gray-200 border rounded">
          <div class="${className} bg-red-400 p-1 rounded text-xs text-white">
            Positioned
          </div>
        </div>
      `;
    }
    
    return `<div class="${className} p-2 bg-gray-100 rounded">Demo Element</div>`;
  }

  getTextClasses(): string {
    if (!this.tailwindClass) return 'text-gray-800';
    
    const category = this.tailwindClass.category;
    
    switch (category) {
      case 'Typography':
        return 'text-gray-800';
      case 'Colors':
        return 'font-medium';
      default:
        return 'text-sm text-gray-700';
    }
  }

  getDemoText(): string {
    if (!this.tailwindClass) return 'Demo Text';
    
    const className = this.tailwindClass.tailwindClass || '';
    const category = this.tailwindClass.category;
    
    // Return appropriate demo text based on class
    if (className.includes('hidden') || className.includes('invisible')) {
      return 'This element would be hidden (shown for demo)';
    }
    
    if (category === 'Typography') {
      if (className.includes('text-xs')) return 'Extra Small Text (12px)';
      if (className.includes('text-sm')) return 'Small Text (14px)';
      if (className.includes('text-base')) return 'Base Text (16px)';
      if (className.includes('text-lg')) return 'Large Text (18px)';
      if (className.includes('text-xl')) return 'Extra Large Text (20px)';
      if (className.includes('text-2xl')) return '2XL Text (24px)';
      if (className.includes('text-3xl')) return '3XL Text (30px)';
      if (className.includes('text-4xl')) return '4XL Text (36px)';
      if (className.includes('text-5xl')) return '5XL Text (48px)';
      if (className.includes('text-6xl')) return '6XL Text (60px)';
      if (className.includes('uppercase')) return 'UPPERCASE TEXT EXAMPLE';
      if (className.includes('lowercase')) return 'lowercase text example';
      if (className.includes('capitalize')) return 'capitalize text example';
      if (className.includes('font-')) return 'Font Weight Example Text';
      if (className.includes('text-center')) return 'This text is center aligned';
      if (className.includes('text-right')) return 'This text is right aligned';
      if (className.includes('text-left')) return 'This text is left aligned';
      if (className.includes('text-justify')) return 'This text is justified and will spread across the available width';
      if (className.includes('italic')) return 'This text is italic';
      if (className.includes('underline')) return 'This text is underlined';
      if (className.includes('line-through')) return 'This text has line-through';
      if (className.includes('leading-')) return 'Line height example with multiple lines to show the effect';
      if (className.includes('tracking-')) return 'Letter spacing example text';
      return 'Typography Example Text';
    }
    
    if (category === 'Colors') return 'Color Example Text';
    if (category === 'Spacing') return 'Element with spacing';
    if (category === 'Sizing') return 'Sized Element';
    if (category === 'Borders') return 'Border Example';
    if (category === 'Effects') return 'Effect Demo';
    if (category === 'Transitions') return 'Hover to see transition';
    if (category === 'Transforms') return 'Transform Example';
    if (category === 'Interactivity') return 'Interactive Element';
    
    return this.tailwindClass.example || 'Live Demo';
  }

  getPreviewHTML(): string {
    if (!this.tailwindClass?.code) {
      return '<div class="p-4 text-center text-gray-500">Preview not available</div>';
    }
    return this.tailwindClass.code;
  }
}