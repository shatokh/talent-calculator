import { render, screen, fireEvent } from '@testing-library/svelte';
import { vi } from 'vitest';
import Page from '../../../routes/class/[className]/+page.svelte';

// Mock SvelteKit page store to provide params
vi.mock('$app/stores', () => ({
  page: { subscribe: (fn: (value: { params: { className: string } }) => void) => { fn({ params: { className: 'guardian' } }); return () => {}; } }
}));
// Mock navigation
vi.mock('$app/navigation', () => ({ goto: vi.fn() }));

describe('Hotspots overlay', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders hotspots based on config', async () => {
    render(Page);
    const img = screen.getByTestId('talent-tree-image');
    // Set natural dimensions for percentage calculation
    Object.defineProperty(img, 'naturalWidth', { value: 200 });
    Object.defineProperty(img, 'naturalHeight', { value: 400 });
    await fireEvent.load(img);
    const hotspot = await screen.findByTestId('talent-guardian-1');
    expect(hotspot).toBeInTheDocument();
  });

  it('calls showDescription on click', async () => {
    render(Page);
    const img = screen.getByTestId('talent-tree-image');
    Object.defineProperty(img, 'naturalWidth', { value: 200 });
    Object.defineProperty(img, 'naturalHeight', { value: 400 });
    await fireEvent.load(img);
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const hotspot = await screen.findByTestId('talent-guardian-1');
    await fireEvent.click(hotspot);
    expect(alertSpy).toHaveBeenCalledWith('Show description for 1 (guardian)');
  });
});