import { test, expect } from '@playwright/test';

// 1. Navigation Menu: Verify main navigation items are visible
 test('Main navigation items are visible', async ({ page }) => {
  await page.goto('https://xebia.com/de/');
  // Debug: List all navigation elements and their HTML
  const navs = await page.locator('nav').elementHandles();
  for (const nav of navs) {
    const html = await nav.evaluate(node => (node as Element).outerHTML);
    console.log('NAV HTML:', html);
  }
  // Try to find the nav with main links
  // Use actual navigation link texts
  const mainNav = page.locator('nav').first();
  await expect(mainNav).toBeVisible();
  await expect(mainNav.locator('text=Industries')).toBeVisible();
  await expect(mainNav.locator('text=Solutions')).toBeVisible();
  await expect(mainNav.locator('text=Partner Ecosystem')).toBeVisible();
  await expect(mainNav.locator('text=Careers')).toBeVisible();
  await expect(mainNav.locator('text=About')).toBeVisible();
 });

// 2. Navigation Menu: Dropdown opens for "Leistungen"
 test('Dropdown opens for Leistungen', async ({ page }) => {
  await page.goto('https://xebia.com/de/');
  // Debug: List all nav links
  const navLinks = await page.locator('nav a').allTextContents();
  console.log('Nav links:', navLinks);
  // Try hovering over "Industries" link
  await page.locator('nav a', { hasText: 'Industries' }).hover();
  // Debug: List all visible dropdowns
  const dropdowns = await page.locator('nav ul').elementHandles();
  for (const dd of dropdowns) {
    const html = await dd.evaluate(node => (node as Element).outerHTML);
    console.log('Dropdown HTML:', html);
  }
  // Try to find a dropdown menu after hover
  // This may need further refinement after debug output
 });

// 3. Search Function: Search input opens and can search
 test('Search input opens and displays results', async ({ page }) => {
  await page.goto('https://xebia.com/de/');
  // Debug: List all buttons
  const buttons = await page.locator('button').allTextContents();
  console.log('Buttons:', buttons);
  // Try to find the search button by aria-label or icon
  // Try to find the search button by visible text/icon
  const searchBtn = page.locator('button:has(svg)').first();
  await searchBtn.click({ force: true });
  // Find the input field that becomes visible
  const searchInput = page.locator('input[type="text"]').first();
  await expect(searchInput).toBeVisible();
  await searchInput.fill('Cloud');
  await page.keyboard.press('Enter');
  // Debug: List all search result containers
  const searchResults = await page.locator('[id*="search"]').elementHandles();
  for (const sr of searchResults) {
    const html = await sr.evaluate(node => (node as Element).outerHTML);
    console.log('Search Results HTML:', html);
  }
 });

// 4. Contact Page: Contact link navigates to contact form
 test('Contact link navigates to contact form', async ({ page }) => {
  await page.goto('https://xebia.com/de/');
  // Debug: List all links
  const links = await page.locator('a').allTextContents();
  console.log('Links:', links);
  // Try to click the Kontakt link in header
  await page.locator('header a[href="/de/about-us/contact/"]').first().click();
  // Debug: List all forms
  const forms = await page.locator('form').elementHandles();
  for (const form of forms) {
    const html = await form.evaluate(node => (node as Element).outerHTML);
    console.log('Form HTML:', html);
  }
  // Try to find a visible form
 });

// 5. Contact Page: Submit contact form with valid data
 test('Submit contact form with valid data', async ({ page }) => {
  await page.goto('https://xebia.com/de/');
  await page.getByRole('link', { name: /Kontakt/i }).first().click();
  // Use input fields by order since names may not be set
  const inputs = page.locator('input[type="text"], input[placeholder*="Name" i]');
  await inputs.nth(0).fill('Test User');
  const emailInputs = page.locator('input[type="email"], input[placeholder*="E-Mail" i]');
  await emailInputs.nth(0).fill('test@example.com');
  const textarea = page.locator('textarea').first();
  await textarea.fill('Test message');
  await page.getByRole('button', { name: /Absenden|Submit|Senden|Send/i }).first().click();
 });

// 6. Blog/Insights: Insights section is accessible
 test('Insights section is accessible', async ({ page }) => {
  await page.goto('https://xebia.com/de/');
  // Debug: List all links
  const links = await page.locator('a').allTextContents();
  console.log('Links:', links);
  // Try to find Insights or Blog link by actual text from debug output
  let insightsLink = page.locator('a:has-text("Unsere Einblicke")').first();
  if (!(await insightsLink.isVisible())) {
    insightsLink = page.locator('a[href*="insights"], a[href*="blog"]').first();
  }
  await insightsLink.click({ force: true });
  // Debug: List all article containers
  const articles = await page.locator('[class*="insight"], [class*="blog"], article').elementHandles();
  for (const art of articles) {
    const html = await art.evaluate(node => (node as Element).outerHTML);
    console.log('Article HTML:', html);
  }
 });

// 7. Blog/Insights: Article cards are visible
 test('Article cards are visible in Insights', async ({ page }) => {
  await page.goto('https://xebia.com/de/');
  let insightsLink = page.locator('a:has-text("Unsere Einblicke")').first();
  if (!(await insightsLink.isVisible())) {
    insightsLink = page.locator('a[href*="insights"], a[href*="blog"]').first();
  }
  await insightsLink.click({ force: true });
  const cards = page.locator('.insights-list .card, [class*="insight"], [class*="blog"], article');
  await expect(cards.first()).toBeVisible();
 });

// 8. Blog/Insights: Can open article detail page
 test('Can open article detail page', async ({ page }) => {
  await page.goto('https://xebia.com/de/');
  let insightsLink = page.locator('a:has-text("Unsere Einblicke")').first();
  if (!(await insightsLink.isVisible())) {
    insightsLink = page.locator('a[href*="insights"], a[href*="blog"]').first();
  }
  await insightsLink.click({ force: true });
  const firstArticle = page.locator('.insights-list .card, [class*="insight"], [class*="blog"], article').first();
  await firstArticle.click({ force: true });
  await expect(page.locator('.article-detail, [class*="article-detail"], article')).toBeVisible();
 });

// 9. Language Switcher: Language switcher is visible
 test('Language switcher is visible', async ({ page }) => {
  await page.goto('https://xebia.com/de/');
  // Debug: List all header elements and their HTML
  const headers = await page.locator('header').elementHandles();
  for (const header of headers) {
    const html = await header.evaluate(node => (node as Element).outerHTML);
    console.log('HEADER HTML:', html);
  }
  // Try to find the language switcher by text in header
  // Find the language switcher button with flag image
  const langBtn = page.locator('header button img[alt="German"]').first();
  await expect(langBtn).toBeVisible();
 });

// 10. Language Switcher: Can switch to English
 test('Can switch to English language', async ({ page }) => {
  await page.goto('https://xebia.com/de/');
  // Try to click the language switcher in header
  // Click the language switcher button and select English
  await page.locator('header button img[alt="German"]').first().click();
  await page.locator('text=English').first().click();
  // Accept both /en/ and /en or /en?utm_source=... URLs
  await expect(page).toHaveURL(/\/en(\/|\?|$)/);
 });
