import { test, expect } from '@playwright/test';

test.describe('Xebia Website Tests', () => {
  test('Page loads successfully', async ({ page }) => {
    await page.goto('https://xebia.com/de/');
    await expect(page).toHaveTitle(/xebia/i);
  });

  test('Navigation contains main links', async ({ page }) => {
    await page.goto('https://xebia.com/de/');
    const navLinks = await page.locator('a').allTextContents();
    expect(navLinks.some(link => link.includes('Industries'))).toBeTruthy();
    expect(navLinks.some(link => link.includes('Solutions'))).toBeTruthy();
  });

  test('Contact link is visible in header', async ({ page }) => {
    await page.goto('https://xebia.com/de/');
    const contactLink = page.locator('a[href="/de/about-us/contact/"]').first();
    await expect(contactLink).toBeVisible();
  });

  test('Article content is visible on homepage', async ({ page }) => {
    await page.goto('https://xebia.com/de/');
    const articles = page.locator('article');
    await expect(articles.first()).toBeVisible();
  });

  test('Language switcher button is visible', async ({ page }) => {
    await page.goto('https://xebia.com/de/');
    const langButton = page.locator('header button img[alt="German"]').first();
    await expect(langButton).toBeVisible();
  });

  test('Footer links are accessible', async ({ page }) => {
    await page.goto('https://xebia.com/de/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const footerLinks = page.locator('footer a');
    await expect(footerLinks.first()).toBeVisible();
  });

  test('Dropdown menu appears on Industries link', async ({ page }) => {
    await page.goto('https://xebia.com/de/');
    const industriesLink = page.locator('nav a:has-text("Industries")').first();
    await industriesLink.hover();
    const dropdown = page.locator('nav ul').first();
    await expect(dropdown).toBeVisible();
  });

  test('Contact page loads when contact link is clicked', async ({ page }) => {
    await page.goto('https://xebia.com/de/');
    await page.locator('a[href="/de/about-us/contact/"]').first().click();
    await page.waitForURL('**/about-us/contact/**');
    expect(page.url()).toContain('contact');
  });

  test('Insights section displays article content', async ({ page }) => {
    await page.goto('https://xebia.com/de/');
    const insightsLink = page.locator('a:has-text("Unsere Einblicke")').first();
    if (await insightsLink.isVisible()) {
      await insightsLink.click();
      const articles = page.locator('article');
      await expect(articles.first()).toBeVisible();
    }
  });

  test('Page has proper heading structure', async ({ page }) => {
    await page.goto('https://xebia.com/de/');
    const headings = page.locator('h1, h2, h3');
    expect(await headings.count()).toBeGreaterThan(0);
  });
});
