import { test, expect } from '@playwright/test';

test('login exitoso', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('danieltodomelo');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('D');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('Daniel0422**');
  await page.locator('input[name="password"]').press('Enter');
});

test('actualizacion de login', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('danieltodomelo');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('D');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('Daniel0422**');
  await page.locator('input[name="password"]').press('Enter');
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByLabel('Age', { exact: true }).click();
  await page.getByLabel('Age', { exact: true }).fill('19');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('The profile has been saved successful').first().click();
});