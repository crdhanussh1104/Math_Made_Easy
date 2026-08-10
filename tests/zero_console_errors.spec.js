import { test, expect } from '@playwright/test';

const auditPages = [
  { id: 'home', name: 'Homepage' },
  { id: 'learn', name: 'Syllabus Map' },
  { id: 'threeLab', name: '3D Math Lab' },
  { id: 'olympiadHub', name: 'Olympiad Hub' },
  { id: 'quiz', name: 'Practice Quiz' },
  { id: 'library', name: 'Digital Library' },
  { id: 'arLab', name: 'AR Explorer' },
  { id: 'dashboard', name: 'Progress Report' },
  { id: 'profile', name: 'Avatar & Shop' }
];

test.describe('Strict Zero Console & Zero Runtime Errors Gatekeeper Suite', () => {

  auditPages.forEach((pageObj) => {
    test(`Strict Console Audit: ${pageObj.name} (${pageObj.id})`, async ({ page }) => {
      const consoleErrors = [];
      const pageErrors = [];
      const networkErrors = [];
      const httpErrors = [];

      // 1. Listen for console.error messages (TypeError, ReferenceError, SyntaxError, etc.)
      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push({
            text: msg.text(),
            location: msg.location()
          });
        }
      });

      // 2. Listen for uncaught JS page errors & stack traces
      page.on('pageerror', err => {
        pageErrors.push({
          message: err.message,
          name: err.name,
          stack: err.stack
        });
      });

      // 3. Listen for failed network requests
      page.on('requestfailed', req => {
        networkErrors.push({
          url: req.url(),
          failure: req.failure()?.errorText || 'Network request failed'
        });
      });

      // 4. Listen for HTTP 404 / 500 status codes
      page.on('response', res => {
        if (res.status() >= 400) {
          httpErrors.push({
            url: res.url(),
            status: res.status(),
            statusText: res.statusText()
          });
        }
      });

      // Open Page
      await page.goto('/');
      
      if (pageObj.id !== 'home') {
        const navBtn = page.locator(`[data-testid="nav-${pageObj.id}"]`);
        if (await navBtn.isVisible()) {
          await navBtn.click({ force: true });
          await page.waitForTimeout(500);
        }
      }

      await page.waitForTimeout(500);

      // Verify ZERO Uncaught JS Errors (ReferenceError, TypeError, SyntaxError, Undefined Variable)
      if (pageErrors.length > 0) {
        await page.screenshot({ path: `test-results/error-${pageObj.id}-stack.png` });
        console.error(`❌ STACK TRACE FOR ${pageObj.name}:`, pageErrors);
      }
      expect(pageErrors, `Uncaught JS Page Error in ${pageObj.name}:\n${JSON.stringify(pageErrors, null, 2)}`).toHaveLength(0);

      // Verify ZERO Console Errors
      if (consoleErrors.length > 0) {
        await page.screenshot({ path: `test-results/error-${pageObj.id}-console.png` });
        console.error(`❌ CONSOLE ERRORS FOR ${pageObj.name}:`, consoleErrors);
      }
      expect(consoleErrors, `Browser Console Error in ${pageObj.name}:\n${JSON.stringify(consoleErrors, null, 2)}`).toHaveLength(0);

      // Verify ZERO Network Errors & ZERO 404 / 500 Responses
      expect(networkErrors, `Network Error in ${pageObj.name}:\n${JSON.stringify(networkErrors, null, 2)}`).toHaveLength(0);
      expect(httpErrors, `HTTP 404/500 Error in ${pageObj.name}:\n${JSON.stringify(httpErrors, null, 2)}`).toHaveLength(0);
    });
  });

});
