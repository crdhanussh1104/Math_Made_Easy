import { test, expect } from '@playwright/test';

const interactiveLabs = [
  { id: 'trig_unit_circle', title: 'Trigonometry Unit Circle' },
  { id: 'heights_distances', title: 'Heights & Distances' },
  { id: 'algebra_parabola', title: 'Linear & Quadratic Parabola Grapher' },
  { id: 'algebra_balance', title: 'Algebraic Equation Balance Scale' },
  { id: '3d_solids', title: '3D Shapes, Polyhedrons & Unfolding Nets' },
  { id: 'angles_protractor', title: 'Angles & Protractor' },
  { id: '2d_tangrams', title: '2D Shapes & Tangrams' },
  { id: 'transformations', title: 'Geometric Transformations' },
  { id: 'quadrant_grid', title: 'Cartesian Coordinate Grid' },
  { id: 'fraction_pizza', title: 'Fractions & Fraction Pizza Slicer' },
  { id: 'abacus_place_value', title: 'Abacus & Place Value' },
  { id: 'counting_placevalue', title: 'Whole Numbers & Base-10 Blocks' },
  { id: 'probability_sim', title: 'Probability Spinner & Dice Simulator' },
  { id: 'data_charts', title: 'Data Charts (Bar, Line & Pie Plots)' },
  { id: 'stats_bar_chart', title: 'Statistics Data Lab' },
  { id: 'commercial_interest', title: 'Commercial Math & EMI Calculator' },
  { id: 'time_work_pipes', title: 'Time, Work & Pipes Simulator' },
  { id: 'set_theory', title: 'Set Theory & Venn Diagrams' },
  { id: 'clock_time', title: 'Interactive Analog Clock' },
  { id: 'metric_conversions', title: 'Metric Conversions Lab' }
];

test.describe('Automated Interactive Math Labs E2E Audit Suite', () => {

  interactiveLabs.forEach((lab, index) => {
    test(`Lab #${index + 1}: ${lab.title} (${lab.id})`, async ({ page }) => {
      const consoleErrors = [];
      page.on('pageerror', err => consoleErrors.push(err.message));

      // 1. Open App & Navigate to 3D Math Lab
      await page.goto('/');
      await page.click('[data-testid="nav-threeLab"]');
      await page.waitForTimeout(400);

      // 2. Click Topic-Wise Visualizers & Labs tab
      await page.locator('button:has-text("Topic-Wise Visualizers & Labs")').first().click({ force: true });
      await page.waitForTimeout(400);

      // 3. Select subtopic button matching lab.title or lab.id if visible
      const subtopicBtn = page.locator(`button:has-text("${lab.title.split(' ')[0]}")`).first();
      if (await subtopicBtn.isVisible()) {
        await subtopicBtn.click({ force: true });
        await page.waitForTimeout(400);
      }

      // 4. Capture 'BEFORE interaction' screenshot
      await page.screenshot({ path: `test-results/lab-${lab.id}-before.png` });

      // 5. Verify non-blank simulation container loaded
      const bodyText = await page.textContent('body');
      expect(bodyText.length).toBeGreaterThan(100);
      expect(bodyText).toContain('3D Math Lab');

      // 6. Test interactive elements: buttons, sliders, reset controls
      const buttons = page.locator('button');
      const count = await buttons.count();
      if (count > 0) {
        // Click first 3 available buttons cleanly
        for (let i = 0; i < Math.min(count, 3); i++) {
          const btn = buttons.nth(i);
          if (await btn.isVisible()) {
            try {
              await btn.click({ force: true, timeout: 1000 });
            } catch (e) {
              // Ignore non-clickable overlays
            }
          }
        }
      }

      // Test sliders if present safely within bounds
      const sliders = page.locator('input[type="range"]');
      const sliderCount = await sliders.count();
      if (sliderCount > 0) {
        for (let i = 0; i < sliderCount; i++) {
          const slider = sliders.nth(i);
          if (await slider.isVisible()) {
            await slider.evaluate((el) => {
              const max = parseFloat(el.max) || 100;
              const min = parseFloat(el.min) || 0;
              el.value = String((max + min) / 2);
              el.dispatchEvent(new Event('input', { bubbles: true }));
              el.dispatchEvent(new Event('change', { bubbles: true }));
            });
          }
        }
      }

      await page.waitForTimeout(400);

      // 7. Capture 'AFTER interaction' screenshot
      await page.screenshot({ path: `test-results/lab-${lab.id}-after.png` });

      // 8. Verify ZERO console errors or uncaught React exceptions occurred
      expect(consoleErrors).toHaveLength(0);
    });
  });

});
