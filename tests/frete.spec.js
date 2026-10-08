
const { test, expect } = require('@playwright/test');

test('CT07 - frete grátis com subtotal de R$ 200,00',
async ({ page }) => {
  await page.goto('/');

  const produto = page
    .getByText('Mochila Urbana 20L', { exact: true })
    .locator('..');

  // Duas mochilas de R$ 100,00.
  await produto.getByRole('button', { name: /adicionar/i })
    .click();

  await produto.getByRole('button', { name: /adicionar/i })
    .click();

  await page.getByRole('link', { name: /carrinho/i })
    .click();

  await expect(page).toHaveURL(/carrinho/);

  // Conferir o subtotal real do carrinho.
  const subtotal = page
    .getByText('Subtotal', { exact: true })
    .locator('..');

  await expect(subtotal)
    .toContainText('R$ 200,00');

  // Verificar especificamente o valor do frete.
  const frete = page
    .getByText('Frete', { exact: true })
    .locator('..');

  // Preservar o print mesmo se o teste falhar.
  await page.screenshot({
    path: 'evidencias/automatizados/CT07-frete.png',
    fullPage: true
  });

  await expect(frete)
    .toContainText(/grátis|R\$\s*0,00/i);
});
