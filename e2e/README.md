## 🧪 Testing

We use two complementary testing setups:

### 1. Unit tests with Vitest

- **Framework**: [Vitest](https://vitest.dev/)
- **Helpers**: [@testing-library/svelte](https://testing-library.com/docs/svelte-testing-library/), [@testing-library/jest-dom](https://github.com/testing-library/jest-dom)
- **Config file**: `vitest.config.ts`
- **Setup file**: `src/setupTests.ts`

**Install**

```bash
npm install -D vitest @testing-library/svelte @testing-library/jest-dom jsdom vite-tsconfig-paths
```

**Package.json scripts**

```json
{
	"scripts": {
		"test:unit": "vitest"
	}
}
```

**Basic commands**

```bash
# Run all unit tests once
npm run test:unit

# Watch mode (re-runs on file changes)
npm run test:unit -- --watch
```

### 2. E2E tests with Playwright

- **Framework**: [Playwright Test](https://playwright.dev/)
- **Config file**: `playwright.config.ts`
- **Setup file**: `tests/e2e/`

**Prerequisites**

- Node.js ≥14
- Dev server running on `http://localhost:5173` (`npm run dev`)

**Install**

```bash
npm install -D @playwright/test
npx playwright install
```

**Package.json scripts**

```json
{
	"scripts": {
		"test:e2e": "playwright test"
	}
}
```

Basic commands

```bash
# Run all E2E tests
npm run test:e2e

# Run a single test file
npm run test:e2e -- tests/e2e/home.spec.ts
```
