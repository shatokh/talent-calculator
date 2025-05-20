// src/lib/components/__tests__/ActionButton.spec.ts
import { render, screen, fireEvent, cleanup } from '@testing-library/svelte';
import { vi } from 'vitest';
import ActionButton from '../ActionButton.svelte';

describe('ActionButton', () => {
  afterEach(() => cleanup()); // Очистка DOM после каждого теста

  it('should render the button with default slot content', () => {
    // Arrange
    const buttonText = 'Нажать меня';
    // Передаем пропсы как первый объект, а содержимое слота как третий аргумент.
    // Это стандартный паттерн для testing-library/svelte.
    render(ActionButton, { onClick: vi.fn() }, buttonText); 

    // Act
    // Ищем кнопку по ее доступному имени (тексту внутри слота)
    const button = screen.getByRole('button', { name: buttonText });

    // Assert
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(buttonText);
  });

  it('should call onClick handler when clicked', async () => {
    // Arrange
    const handleClick = vi.fn();
    render(ActionButton, { onClick: handleClick }, 'Тестовая кнопка'); 

    const button = screen.getByRole('button', { name: 'Тестовая кнопка' });

    // Act
    await fireEvent.click(button);

    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply data-test-id correctly', () => {
    // Arrange
    const customTestId = 'my-custom-button-id';
    render(ActionButton, {
      onClick: vi.fn(),
      testId: customTestId // Передаем кастомный testId как обычный пропс
    }, 'Кнопка'); 

    // Act
    // Ищем элемент по его data-test-id
    const button = screen.getByTestId(customTestId);

    // Assert
    expect(button).toBeInTheDocument();
  });

  it('should apply additionalClass prop', () => {
    // Arrange
    const extraClass = 'mt-10';
    render(ActionButton, {
      onClick: vi.fn(),
      additionalClass: extraClass // Передаем additionalClass как обычный пропс
    }, 'Кнопка с классом'); 

    // Act
    const button = screen.getByRole('button', { name: 'Кнопка с классом' });

    // Assert
    expect(button).toHaveClass(extraClass);
  });

  it('should be disabled when disabled prop is true', () => {
    // Arrange
    render(ActionButton, {
      onClick: vi.fn(),
      disabled: true // Передаем disabled как обычный пропс
    }, 'Неактивная кнопка'); 

    // Act
    const button = screen.getByRole('button', { name: 'Неактивная кнопка' });

    // Assert
    expect(button).toBeDisabled(); // Проверяем, что кнопка отключена
    expect(button).toHaveClass('opacity-50');
    expect(button).toHaveClass('cursor-not-allowed');
  });

  it('should not call onClick handler when disabled', async () => {
    // Arrange
    const handleClick = vi.fn();
    render(ActionButton, {
      onClick: handleClick,
      disabled: true
    }, 'Неактивная кнопка'); 

    const button = screen.getByRole('button', { name: 'Неактивная кнопка' });

    // Act
    await fireEvent.click(button); // Пытаемся кликнуть по отключенной кнопке

    // Assert
    expect(handleClick).not.toHaveBeenCalled(); // Ожидаем, что обработчик не будет вызван
  });
});