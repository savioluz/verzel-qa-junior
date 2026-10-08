// Importa as funções para criar testes e validar resultados
const { test, expect } = require('@playwright/test');

// Função reutilizável para adicionar um produto ao carrinho
async function prepararCarrinho(page) {

  // Acessa a página inicial da loja
  await page.goto('/');

  // Localiza o produto pelo nome e seleciona seu elemento pai
  const produto = page
    .getByText('Camiseta Essencial', { exact: true })
    .locator('..');

  // Localiza e clica no botão de adicionar o produto
  await produto
    .getByRole('button', { name: /adicionar/i })
    .click();

  // Clica no link para acessar o carrinho
  await page
    .getByRole('link', { name: /carrinho/i })
    .click();

  // Confirma que a URL corresponde à página do carrinho
  await expect(page).toHaveURL(/carrinho/);
}

// CT05 - Cupom expirado
// Objetivo: verificar se a loja rejeita um cupom vencido
test('CT05 - cupom expirado', async ({ page }) => {

  // Prepara o carrinho adicionando um produto
  await prepararCarrinho(page);

  // Localiza o primeiro campo visível e insere o cupom expirado
  await page.locator('input:visible').first()
    .fill('VERAO2026');

  // Clica no botão para aplicar o cupom
  await page.getByRole('button', { name: /aplicar/i })
    .click();

  // Verifica se a mensagem "cupom expirado" aparece na tela
  await expect(
    page.getByText(/cupom expirado/i)
  ).toBeVisible();

  // Salva uma imagem da página como evidência do teste
  await page.screenshot({
    path: 'evidencias/automatizados/CT05-cupom-expirado.png',
    fullPage: true
  });
});

// CT06 - Apenas um cupom por vez
// Objetivo: verificar se um cupom ativo não é substituído por outro
test('CT06 - apenas um cupom por vez', async ({ page }) => {

  // Prepara o carrinho adicionando um produto
  await prepararCarrinho(page);

  // Insere o cupom de desconto BEMVINDO10
  await page.locator('input:visible').first()
    .fill('BEMVINDO10');

  // Clica no botão para aplicar o cupom
  await page.getByRole('button', { name: /aplicar/i })
    .click();

  // Confirma que o valor R$ 5,99 aparece na página
  await expect(page.locator('body'))
    .toContainText('R$ 5,99');

  // Confirma que existe uma opção para remover o cupom
  await expect(
    page.getByText(/remover/i).first()
  ).toBeVisible();

  // Verifico se a loja permite tentar outro cupom.
  const botaoAplicar = page.getByRole(
    'button', { name: /aplicar/i }
  );

  // Se o botão estiver visível, tento aplicar outro cupom
  // O catch evita que um erro nessa verificação interrompa o teste
  if (await botaoAplicar.isVisible().catch(() => false)) {

    // Preenche o campo com outro cupom
    await page.locator('input:visible').first()
      .fill('VERAO2026');

    // Tenta aplicar o segundo cupom
    await botaoAplicar.click();

    // O cupom anterior não pode ser substituído
    // sem ser removido explicitamente.

    // Confirma que o valor R$ 5,99 continua na página
    await expect(page.locator('body'))
      .toContainText('R$ 5,99');

    // Confirma que a opção de remover o cupom continua visível
    await expect(
      page.getByText(/remover/i).first()
    ).toBeVisible();
  }

  // Salva uma captura completa da página como evidência
  await page.screenshot({
    path: 'evidencias/automatizados/CT06-cupom-unico.png',
    fullPage: true
  });
});