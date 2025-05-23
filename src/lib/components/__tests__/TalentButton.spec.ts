// src/lib/components/__tests__/TalentButton.spec.ts
import { render, screen, cleanup } from '@testing-library/svelte';
import TalentButton from '../TalentButton.svelte';
import type { Talent } from '$lib/types'; // Убедитесь, что Talent Type доступен по этому пути

describe('TalentButton', () => {
	// Определяем общие данные для тестов
	const sampleTalent: Talent = {
		id: 't1',
		nameRU: 'Тестовый талант',
		nameEN: 'Test Talent',
		descriptionRU: 'Описание тестового таланта',
		descriptionEN: 'Description of test talent',
		icon: '/images/talents/test-icon.png', // Используем более общий путь к иконке
		type: 'main_active',
		shape: 'round',
		position: { row: 1, col: 1 },
		dependencies: [],
		maxRank: 1
	};

	// Очистка DOM после каждого теста
	afterEach(() => cleanup());

	it('should render the talent icon with correct src and alt attributes', () => {
		// Arrange
		render(TalentButton, {
			props: { talent: sampleTalent, isActive: false }
		});

		// Act
		const img = screen.getByRole('img', { name: sampleTalent.nameRU }); // Ищем по роли и доступному имени

		// Assert
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src', sampleTalent.icon);
		expect(img).toHaveAttribute('alt', sampleTalent.nameRU);
	});

	it('should not have "active-state" class by default', () => {
		// Arrange
		render(TalentButton, {
			props: { talent: sampleTalent, isActive: false }
		});

		// Act
		const button = screen.getByRole('button');

		// Assert
		expect(button).not.toHaveClass('active-state');
	});

	it('should add "active-state" class when isActive prop becomes true', async () => {
		// Arrange
		const { rerender } = render(TalentButton, {
			props: { talent: sampleTalent, isActive: false }
		});

		const button = screen.getByRole('button');

		// Act
		await rerender({ talent: sampleTalent, isActive: true });

		// Assert
		expect(button).toHaveClass('active-state');
	});

	// Дополнительный тест: если кнопка активна изначально
	it('should have "active-state" class when isActive prop is true on initial render', () => {
		// Arrange
		render(TalentButton, {
			props: { talent: sampleTalent, isActive: true }
		});

		// Act
		const button = screen.getByRole('button');

		// Assert
		expect(button).toHaveClass('active-state');
	});
});
