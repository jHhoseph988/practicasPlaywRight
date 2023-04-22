import { test, expect } from '@playwright/test';

test('registro exisitoso', async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/');
    await page.getByRole('link', { name: 'Register' }).click();
    await page.getByLabel('Login').click();
    await page.getByLabel('Login').fill('usernamejosep4');
    await page.getByLabel('First Name').click();
    await page.getByLabel('First Name').fill('josep');
    await page.getByLabel('Last Name').click();
    await page.getByLabel('Last Name').fill('pepito');
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('Qwe12345@');
    await page.getByLabel('Confirm Password').click();
    await page.getByLabel('Confirm Password').fill('Qwe12345@');
    await page.getByRole('button', { name: 'Register' }).click();
    await page.getByText('Registration is successful').click();
});
test('validar que no se puede registrar con un usuario existente', async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/');
    await page.getByRole('link', { name: 'Register' }).click();
    await page.getByLabel('Login').click();
    await page.getByLabel('Login').fill('usernamejosep2');
    await page.getByLabel('First Name').click();
    await page.getByLabel('First Name').fill('josep');
    await page.getByLabel('Last Name').click();
    await page.getByLabel('Last Name').fill('pepito');
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('Qwe12345@');
    await page.getByLabel('Confirm Password').click();
    await page.getByLabel('Confirm Password').fill('Qwe12345@');
    await page.getByRole('button', { name: 'Register' }).click();
    await page.getByText('UsernameExistsException: User already exists').click();
});