// src/lib/components/__tests__/ActionButton.spec.ts
import { render, screen, fireEvent } from '@testing-library/svelte';
import { vi } from 'vitest';
import ActionButton from '../ActionButton.svelte';

describe('ActionButton', () => {
  it('рендерит элемент <button>', () => {
    render(ActionButton, { props: { onClick: vi.fn() } });
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('вызывает onClick при клике', async () => {
    const handle = vi.fn();
    render(ActionButton, { props: { onClick: handle } });
    await fireEvent.click(screen.getByRole('button'));
    expect(handle).toHaveBeenCalledTimes(1);
  });

  it('не вызывает onClick, когда disabled=true', async () => {
    const handle = vi.fn();
    render(ActionButton, { props: { onClick: handle, disabled: true } });
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    await fireEvent.click(btn);
    expect(handle).not.toHaveBeenCalled();
  });

  it('поддерживает кастомный testId', () => {
    render(ActionButton, {
      props: { onClick: vi.fn(), testId: 'custom-button-id' }
    });
    expect(screen.getByTestId('custom-button-id')).toBeInTheDocument();
  });

  it('применяет additionalClass к списку классов', () => {
    const extra = 'mt-10';
    render(ActionButton, {
      props: { onClick: vi.fn(), additionalClass: extra }
    });
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass(extra);
  });
});
