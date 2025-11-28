import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://xebia.com/de/');

  /*
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('heading', { name: 'Shaping Tomorrow with AI Today' }).click();
  await page.getByText('Gewinnen Sie wertvolle').click();
  await page.getByRole('heading', { name: 'Data & AI Monitor', exact: true }).click();
  await page.getByText('Wir leben in einer neuen Ära').click();
  await page.getByText('Beratung |').click();
  await page.getByRole('heading', { name: 'Wer wir sind' }).click();
  await page.getByRole('heading', { name: 'KI: Die neue Agenda für' }).click();
  await page.getByText('Künstliche Intelligenz als').click();
  await page.getByText('Künstliche Intelligenz ermö').click();
  await page.getByRole('heading', { name: 'Mehr Entdecken' }).first().click();
  await page.getByText('Künstliche Intelligenz ermö').click();
  await page.getByRole('link', { name: 'KI-getriebene' }).click();

  */
});