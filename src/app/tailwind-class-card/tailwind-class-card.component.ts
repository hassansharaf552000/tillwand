import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TailwindClass } from '../tailwind-data';

@Component({
  selector: 'app-tailwind-class-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 group">
      <!-- Header with gradient background -->
      <div class="p-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 border-b border-gray-100">
        <div class="flex items-start justify-between mb-3">
          <h3 class="text-xl font-bold text-gray-900 tracking-tight">
            {{ tailwindClass?.tailwindClass || tailwindClass?.name }}
          </h3>
          <div [class]="getCategoryBadgeClasses()" class="shrink-0 ml-3">
            <svg class="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
            </svg>
            {{ tailwindClass?.category }}
          </div>
        </div>
        <p class="text-gray-700 leading-relaxed">{{ tailwindClass?.description }}</p>
      </div>

      <!-- Live Demo with improved styling -->
      <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div class="flex items-center mb-4">
          <div class="flex items-center">
            <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Live Demo</h4>
          </div>
        </div>
        <div class="bg-white border-2 border-dashed border-gray-200 rounded-xl overflow-hidden shadow-inner hover:border-gray-300 transition-colors duration-200">
          <div [class]="getContainerClasses()" class="min-h-24 flex items-center justify-center relative">
            <!-- Demo content -->
            <div *ngIf="shouldUseHTMLDemo(); else textDemo" [innerHTML]="getDemoHTML()" class="w-full"></div>
            <ng-template #textDemo>
              <div [class]="getDemoClasses()" class="transition-all duration-200 hover:scale-105">
                <span [class]="getTextClasses()">{{ getDemoText() }}</span>
              </div>
            </ng-template>
            
            <!-- Copy indicator (subtle) -->
            <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button class="p-1 rounded bg-white shadow-sm border text-gray-400 hover:text-gray-600">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Code Preview with better styling -->
      <div *ngIf="tailwindClass?.code" class="p-6 bg-gray-50 border-t border-gray-100">
        <div class="flex items-center mb-4">
          <svg class="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m-4 4l-4 4 4 4m6-8l4 4-4 4"></path>
          </svg>
          <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Code Preview</h4>
        </div>
        <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 overflow-auto shadow-inner border border-gray-700" [innerHTML]="getPreviewHTML()">
        </div>
      </div>

      <!-- CSS Equivalent with enhanced design -->
      <div class="p-6 border-t border-gray-100">
        <div class="flex items-center mb-4">
          <svg class="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">CSS Equivalent</h4>
        </div>
        <div class="relative">
          <pre class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-emerald-400 p-5 rounded-xl text-sm overflow-x-auto shadow-inner border border-gray-700 font-mono leading-relaxed"><code>{{ tailwindClass?.cssEquivalent }}</code></pre>
          <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button class="p-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Example Usage with improved styling -->
      <div *ngIf="tailwindClass?.example" class="p-6 border-t border-gray-100 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div class="flex items-center mb-4">
          <svg class="w-4 h-4 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-wide">Example Usage</h4>
        </div>
        <div class="bg-white rounded-xl p-5 shadow-sm border border-indigo-100">
          <pre class="text-gray-800 text-sm font-mono leading-relaxed whitespace-pre-wrap"><code>{{ tailwindClass?.example }}</code></pre>
        </div>
      </div>
    </div>
  `
})
export class TailwindClassCardComponent {
  @Input() tailwindClass?: TailwindClass;

  getContainerClasses(): string {
    if (!this.tailwindClass) return 'bg-white p-6';
    
    const category = this.tailwindClass.category;
    let containerClasses = 'bg-white p-6 transition-all duration-200';
    
    switch (category) {
      case 'Layout':
      case 'Flexbox':
        containerClasses += ' bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200';
        break;
      case 'Grid':
        containerClasses += ' bg-gradient-to-br from-green-50 to-green-100 border-green-200';
        break;
      case 'Spacing':
        containerClasses += ' bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200';
        break;
      case 'Typography':
        containerClasses += ' bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200';
        break;
      case 'Colors':
        containerClasses += ' bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200';
        break;
      case 'Backgrounds':
        containerClasses += ' bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200';
        break;
      case 'Borders':
        containerClasses += ' bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200';
        break;
      case 'Effects':
        containerClasses += ' bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200';
        break;
      case 'Transitions':
        containerClasses += ' bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200';
        break;
      case 'Transforms':
        containerClasses += ' bg-gradient-to-br from-red-50 to-red-100 border-red-200';
        break;
      case 'Interactivity':
        containerClasses += ' bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200';
        break;
      default:
        containerClasses += ' bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200';
    }
    
    return containerClasses;
  }

  getCategoryBadgeClasses(): string {
    if (!this.tailwindClass) return 'inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800';
    
    const category = this.tailwindClass.category;
    let badgeClasses = 'inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm';
    
    switch (category) {
      case 'Layout':
      case 'Flexbox':
        badgeClasses += ' bg-blue-100 text-blue-800 border border-blue-200';
        break;
      case 'Grid':
        badgeClasses += ' bg-green-100 text-green-800 border border-green-200';
        break;
      case 'Spacing':
        badgeClasses += ' bg-yellow-100 text-yellow-800 border border-yellow-200';
        break;
      case 'Typography':
        badgeClasses += ' bg-purple-100 text-purple-800 border border-purple-200';
        break;
      case 'Colors':
        badgeClasses += ' bg-pink-100 text-pink-800 border border-pink-200';
        break;
      case 'Backgrounds':
        badgeClasses += ' bg-indigo-100 text-indigo-800 border border-indigo-200';
        break;
      case 'Borders':
        badgeClasses += ' bg-gray-100 text-gray-800 border border-gray-200';
        break;
      case 'Effects':
        badgeClasses += ' bg-teal-100 text-teal-800 border border-teal-200';
        break;
      case 'Transitions':
        badgeClasses += ' bg-orange-100 text-orange-800 border border-orange-200';
        break;
      case 'Transforms':
        badgeClasses += ' bg-red-100 text-red-800 border border-red-200';
        break;
      case 'Interactivity':
        badgeClasses += ' bg-emerald-100 text-emerald-800 border border-emerald-200';
        break;
      default:
        badgeClasses += ' bg-gray-100 text-gray-800 border border-gray-200';
    }
    
    return badgeClasses;
  }

  getDemoClasses(): string {
    if (!this.tailwindClass) return '';
    
    const className = this.tailwindClass.tailwindClass || '';
    const category = this.tailwindClass.category;
    let classes = className;
    
    // Add context classes based on category for better visibility
    switch (category) {
      case 'Spacing':
        classes += ' bg-gradient-to-br from-yellow-200 to-yellow-300 border-2 border-yellow-400 shadow-sm';
        break;
      case 'Sizing':
        classes += ' bg-gradient-to-br from-blue-200 to-blue-300 border-2 border-blue-400 shadow-sm';
        break;
      case 'Colors':
        classes += ' p-6 rounded-lg shadow-md border-2 border-white';
        break;
      case 'Borders':
        classes += ' p-6 bg-white shadow-sm';
        break;
      case 'Effects':
        classes += ' p-6 bg-white rounded-lg';
        break;
      case 'Typography':
        // Typography classes apply directly to text with better spacing
        classes += ' px-4 py-2';
        break;
      default:
        classes += ' min-h-12 flex items-center justify-center rounded-lg shadow-sm';
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
        <div class="${className} space-x-3 w-full max-w-md">
          <div class="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-3 rounded-lg shadow-md text-sm font-medium">Item 1</div>
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 rounded-lg shadow-md text-sm font-medium">Item 2</div>
          <div class="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-3 rounded-lg shadow-md text-sm font-medium">Item 3</div>
        </div>
      `;
    }
    
    if (category === 'Grid' || className.includes('grid')) {
      return `
        <div class="${className} gap-3 w-full max-w-md">
          <div class="bg-gradient-to-br from-green-400 to-green-500 text-white p-3 rounded-lg shadow-md text-center text-sm font-bold">A</div>
          <div class="bg-gradient-to-br from-green-500 to-green-600 text-white p-3 rounded-lg shadow-md text-center text-sm font-bold">B</div>
          <div class="bg-gradient-to-br from-green-600 to-green-700 text-white p-3 rounded-lg shadow-md text-center text-sm font-bold">C</div>
          <div class="bg-gradient-to-br from-green-700 to-green-800 text-white p-3 rounded-lg shadow-md text-center text-sm font-bold">D</div>
        </div>
      `;
    }
    
    if (className.includes('absolute') || className.includes('relative') || className.includes('fixed')) {
      return `
        <div class="relative w-40 h-32 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 rounded-xl shadow-inner">
          <div class="${className} bg-gradient-to-br from-red-500 to-red-600 text-white p-2 rounded-lg shadow-lg text-xs font-bold">
            Positioned
          </div>
        </div>
      `;
    }
    
    return `<div class="${className} p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-md border-2 border-gray-300 text-gray-800 font-medium">Demo Element</div>`;
  }

  getTextClasses(): string {
    if (!this.tailwindClass) return 'text-gray-800 font-medium';
    
    const category = this.tailwindClass.category;
    
    switch (category) {
      case 'Typography':
        return 'text-gray-900 leading-relaxed';
      case 'Colors':
        return 'font-semibold text-lg';
      default:
        return 'text-gray-700 font-medium';
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