# Teste técnico — QA Júnior | Verzel

Projeto de testes da Verzel Store, entrega VZS-142.

**Escopo: 4 testes manuais e 3 automatizados.**

## Cenários

**Manuais:**
- CT01 — Cupom BEMVINDO10.
- CT02 — Cupom em letras minúsculas.
- CT03 — Cupom com espaços.
- CT04 — Cupom inválido.

**Automatizados:**
- CT05 — Cupom expirado.
- CT06 — Apenas um cupom por vez.
- CT07 — Frete grátis em R$ 200,00.

## Tecnologias

JavaScript, Node.js, Playwright e Chromium.

## Instalação

```bash
npm ci
npx playwright install chromium
```

## Execução

```bash
npm run test:verzel
```

Para executar com navegador visível:

```bash
npm run test:headed
```

Os testes precisam de conexão com a loja.

## Entregas

- [Cenários em Gherkin](docs/cenarios-de-teste.md)
- [Execução dos testes](docs/execucao-testes.md)
- [Evidências](docs/evidencias.md)
- [Relatório de bugs](docs/bugs.md)

Arquivos de automação:

- `tests/cupom.spec.js`
- `tests/frete.spec.js`

Evidências manuais: `evidencias/manual/`

Evidências automatizadas: `evidencias/automatizados/`

Os prints manuais são de execuções anteriores. Os resultados automatizados são atualizados pela execução local.

## Referências

- [Verzel Store](https://verzel-store.qa-test-verzel-store.workers.dev/)
- [Documentação oficial](https://verzel-store.qa-test-verzel-store.workers.dev/documentacao)

## Uso de IA

Utilizei inteligência artificial como apoio na organização da documentação e estruturação dos testes. Os resultados devem ser conferidos antes da entrega.

## Autor

Savio Luz Araujo
