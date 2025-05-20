// src/lib/components/__tests__/TalentButton.spec.ts
import { render } from '@testing-library/svelte';
import TalentButton from '../TalentButton.svelte';
import type { Talent } from '$lib/types';

describe('TalentButton', () => {
  const sample: Talent = {
    id: 't1',
    nameRU: 'Тестовый',
    nameEN: 'Test',
    descriptionRU: 'Описание',
    descriptionEN: 'Description',
    icon: '/images/classes/mage.png',
    type: 'main_active',
    shape: 'round',
    position: { row: 1, col: 1 },
    dependencies: [],
    maxRank: 1
  };

  it('renders the icon with correct src and alt', () => {
    const { getByRole } = render(TalentButton, {
      props: { talent: sample, isActive: false }
    });

    const img = getByRole('img');
    expect(img).toHaveAttribute('src', sample.icon);
    expect(img).toHaveAttribute('alt', sample.nameRU);
  });

  it('adds active-state class when isActive toggles to true', async () => {
    const { getByRole, rerender } = render(TalentButton, {
      props: { talent: sample, isActive: false }
    });

    const button = getByRole('button');
    expect(button).not.toHaveClass('active-state');

    // Вместо component.$set используем rerender:
    await rerender({ talent: sample, isActive: true });

    expect(button).toHaveClass('active-state');
  });
});