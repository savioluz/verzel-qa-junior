// Importa as funções para executar testes e validar resultados
const { test, expect } = require('@playwright/test');

// CT07 - Verifica se compras de R$ 200,00 recebem frete grátis
test('CT07 - frete grátis com subtotal de R$ 200,00',
async ({ page }) => {

  // Acessa a página inicial da loja
  await page.goto('/');

  // Localiza a mochila pelo nome e seleciona seu elemento pai
  const produto = page
    .getByText('Mochila Urbana 20L', { exact: true })
    .locator('..');

  // Duas mochilas de R$ 100,00.

  // Adiciona a primeira mochila ao carrinho
  await produto.getByRole('button', { name: /adicionar/i })
    .click();

  // Adiciona a segunda mochila ao carrinho
  await produto.getByRole('button', { name: /adicionar/i })
    .click();

  // Acessa a página do carrinho
  await page.getByRole('link', { name: /carrinho/i })
    .click();

  // Confirma que estamos na página do carrinho
  await expect(page).toHaveURL(/carrinho/);

  // Conferir o subtotal real do carrinho.

  // Localiza o campo que apresenta o subtotal
  const subtotal = page
    .getByText('Subtotal', { exact: true })
    .locator('..');

  // Confirma que o subtotal corresponde a R$ 200,00
  await expect(subtotal)
    .toContainText('R$ 200,00');

  // Verificar especificamente o valor do frete.

  // Localiza o campo que apresenta o valor do frete
  const frete = page
    .getByText('Frete', { exact: true })
    .locator('..');

  // Preservar o print mesmo se o teste falhar.

  // Salva uma captura completa da página como evidência
  await page.screenshot({
    path: 'evidencias/automatizados/CT07-frete.png',
    fullPage: true
  });

  // Verifica se o frete está grátis ou com valor de R$ 0,00
  // Se apresentar outro valor, o teste será reprovado
  await expect(frete)
    .toContainText(/grátis|R\$\s*0,00/i);
});