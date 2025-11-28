import { test, expect } from '@playwright/test';

test.describe('Xebia.com/de - News Section Exploration', () => {
  test('should navigate to Xebia German site and verify news section displays current articles', async ({ page }) => {
    // Navigate to the Xebia German homepage
    await page.goto('https://xebia.com/de/');
    
    // Wait for the page to load and verify main heading is visible
    const mainHeading = page.getByRole('heading', { name: /Shaping Tomorrow with AI Today/i });
    await expect(mainHeading).toBeVisible();

    // Scroll down to find the news section
    const newsSection = page.getByRole('heading', { name: /Aktuelle News/i });
    await expect(newsSection).toBeVisible();

    // Verify at least one news article is displayed
    const newsArticles = page.getByRole('link').filter({ 
      hasText: /Xebia erhält Auszeichnung|Cloud Services PEAK Matrix|Xebia bringt unternehmenseigene|Data & AI Monitor/i 
    });
    
    const articleCount = await newsArticles.count();
    expect(articleCount).toBeGreaterThan(0);

    // Verify the first news article link is clickable
    const firstNewsLink = newsArticles.first();
    await expect(firstNewsLink).toBeVisible();
    await expect(firstNewsLink).toHaveAttribute('href', /\/de\/news\//);

    // Verify company information sections are present
    const aboutHeading = page.getByRole('heading', { name: /Wer wir sind/i });
    await expect(aboutHeading).toBeVisible();
  });

  test('should display all main value propositions on the homepage', async ({ page }) => {
    await page.goto('https://xebia.com/de/');

    // Verify key service areas are visible
    const aiServices = page.getByText(/Künstliche Intelligenz als Motor für nachhaltiges Wachstum/i);
    await expect(aiServices).toBeVisible();

    const automation = page.getByText(/Unternehmensweite Automatisierung/i);
    await expect(automation).toBeVisible();

    const modernization = page.getByText(/Das Digitale Fundament Modernisieren/i);
    await expect(modernization).toBeVisible();

    // Verify that navigation links to partner ecosystem exist
    const partnerLink = page.getByRole('link', { name: /Alle ansehen/ }).first();
    await expect(partnerLink).toBeVisible();
  });
});
