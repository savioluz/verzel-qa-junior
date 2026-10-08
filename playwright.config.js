// Importa a função que configura o Playwright
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  // Pasta onde estão os arquivos de teste
  testDir: './tests',

  // Tempo máximo para executar cada teste: 45 segundos
  timeout: 45000,

  expect: {
    // Tempo máximo para validar um resultado: 10 segundos
    timeout: 10000,
  },

  use: {
    // URL principal do sistema que será testado
    baseURL: 'https://verzel-store.qa-test-verzel-store.workers.dev',

    // Salva uma captura de tela somente se o teste falhar
    screenshot: 'only-on-failure',

    // Guarda o rastreamento da execução somente se houver falha
    trace: 'retain-on-failure',

    // Tempo máximo para ações como clicar e preencher: 10 segundos
    actionTimeout: 10000,

    // Tempo máximo para navegar entre páginas: 15 segundos
    navigationTimeout: 15000,
  },

  // Define como os resultados dos testes serão apresentados
  reporter: [
    // Mostra os resultados no terminal
    ['list'],

    // Gera um relatório HTML sem abrir automaticamente
    ['html', {
      open: 'never'
    }],

    // Salva os resultados em um arquivo JSON
    ['json', {
      outputFile: 'playwright-results.json'
    }]
  ],

  // Define os navegadores utilizados nos testes
  projects: [
    {
      // Nome do ambiente de teste
      name: 'chromium',

      use: {
        // Executa os testes no navegador Chromium
        browserName: 'chromium',
      },
    },
  ],
});