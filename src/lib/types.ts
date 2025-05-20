// src/lib/types.ts
export interface Talent {
	id: string;
	nameRU: string;
	nameEN: string;
	descriptionRU: string;
	descriptionEN: string;
	icon: string;
	type: 'main_active' | 'passive' | 'shard' | 'parameter_bonus';
	shape: 'round' | 'square' | 'rhombus';
	position: { row: number; col: number };
	dependencies: string[];
	maxRank: number;
}
