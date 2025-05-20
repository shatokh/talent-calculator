// src/lib/components/__tests__/TalentButton.spec.ts
import { render } from '@testing-library/svelte';
import TalentButton from '../TalentButton.svelte';
import type { Talent } from '$lib/types'; // теперь резолвится благодаря vite-tsconfig-paths

describe('TalentButton', () => {
	const sample: Talent = {
		/* ... */
	};

	it('renders icon and toggles active', async () => {
		const { getByRole, component } = render(TalentButton, {
			props: { talent: sample, isActive: false }
		});
		const btn = getByRole('button');
		expect(btn.querySelector('img')).toHaveAttribute('src', sample.icon);

		await component.$set({ isActive: true });
		expect(btn).toHaveClass('active-state');
	});
});
