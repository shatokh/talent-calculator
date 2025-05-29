// src/lib/data/hotspots.ts
export interface Hotspot {
  id: string;    // уникальный ключ таланта
  x: number;     // пиксель от левого края (натуральная ширина)
  y: number;     // пиксель от верхнего края (натуральная высота)
  d: number;     // диаметр области в пикселях
}

// Здесь перечислены координаты для каждого класса.
// Добавьте столько точек, сколько талантов у каждого дерева.
const hotspots: Record<string, Hotspot[]> = {
  guardian: [
    { id: '1', x: 145, y: 285, d: 50 },
    // { id: '2', x: ..., y: ..., d: ... },
  ],
  shadow: [
    { id: '1', x: 120, y: 260, d: 50 },
    // …
  ],
  hunter: [
    { id: '1', x: 140, y: 270, d: 50 },
    // …
  ],
  mage: [
    { id: '1', x: 150, y: 300, d: 50 },
    // …
  ],
  alchemist: [
    { id: '1', x: 130, y: 280, d: 50 },
    // …
  ]
};

export default hotspots;