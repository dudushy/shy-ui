import { Component } from '@angular/core';

interface ColorGroup {
  name: string;
  colors: { name: string; value: string; textDark: boolean }[];
}

@Component({
  selector: 'app-colors',
  standalone: true,
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})
export class ColorsComponent {
  colorGroups: ColorGroup[] = [
    {
      name: 'Brand',
      colors: [
        { name: 'Primary', value: '#6366f1', textDark: false },
        { name: 'Primary Dark', value: '#4f46e5', textDark: false },
        { name: 'Primary Light', value: '#a5b4fc', textDark: true },
        { name: 'Secondary', value: '#ec4899', textDark: false },
        { name: 'Secondary Dark', value: '#db2777', textDark: false },
      ]
    },
    {
      name: 'Semantic',
      colors: [
        { name: 'Success', value: '#22c55e', textDark: false },
        { name: 'Warning', value: '#f59e0b', textDark: false },
        { name: 'Danger', value: '#ef4444', textDark: false },
        { name: 'Info', value: '#3b82f6', textDark: false },
      ]
    },
    {
      name: 'Neutral',
      colors: [
        { name: 'Gray 50', value: '#f9fafb', textDark: true },
        { name: 'Gray 100', value: '#f3f4f6', textDark: true },
        { name: 'Gray 200', value: '#e5e7eb', textDark: true },
        { name: 'Gray 300', value: '#d1d5db', textDark: true },
        { name: 'Gray 400', value: '#9ca3af', textDark: true },
        { name: 'Gray 500', value: '#6b7280', textDark: false },
        { name: 'Gray 600', value: '#4b5563', textDark: false },
        { name: 'Gray 700', value: '#374151', textDark: false },
        { name: 'Gray 800', value: '#1f2937', textDark: false },
        { name: 'Gray 900', value: '#111827', textDark: false },
      ]
    }
  ];
}
