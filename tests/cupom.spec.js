
const { test, expect } = require('@playwright/test');

async function prepararCarrinho(page) {
  await page.goto('/');

  const produto = page
    .getByText('Camiseta Essencial', { exact: true })
    .locator('..');

  await produto
    .getByRole('button', { name: /adicionar/i })
    .click();

  await page
    .getByRole('link', { name: /carrinho/i })
    .click();

  await expect(page).toHaveURL(/carrinho/);
}

// CT05 - Cupom expirado
test('CT05 - cupom expirado', async ({ page }) => {
  await prepararCarrinho(page);

  await page.locator('input:visible').first()
    .fill('VERAO2026');

  await page.getByRole('button', { name: /aplicar/i })
    .click();

  await expect(
    page.getByText(/cupom expirado/i)
  ).toBeVisible();

  await page.screenshot({
    path: 'evidencias/automatizados/CT05-cupom-expirado.png',
    fullPage: true
  });
});

// CT06 - Apenas um cupom por vez
test('CT06 - apenas um cupom por vez', async ({ page }) => {
  await prepararCarrinho(page);

  await page.locator('input:visible').first()
    .fill('BEMVINDO10');

  await page.getByRole('button', { name: /aplicar/i })
    .click();

  await expect(page.locator('body'))
    .toContainText('R$ 5,99');

  await expect(
    page.getByText(/remover/i).first()
  ).toBeVisible();

  // Verifico se a loja permite tentar outro cupom.
  const botaoAplicar = page.getByRole(
    'button', { name: /aplicar/i }
  );

  if (await botaoAplicar.isVisible().catch(() => false)) {
    await page.locator('input:visible').first()
      .fill('VERAO2026');

    await botaoAplicar.click();

    // O cupom anterior não pode ser substituído
    // sem ser removido explicitamente.
    await expect(page.locator('body'))
      .toContainText('R$ 5,99');

    await expect(
      page.getByText(/remover/i).first()
    ).toBeVisible();
  }

  await page.screenshot({
    path: 'evidencias/automatizados/CT06-cupom-unico.png',
    fullPage: true
  });
});
