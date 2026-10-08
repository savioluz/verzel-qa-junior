# Execução dos testes

Ambiente: Verzel Store | Entrega VZS-142 | Playwright/Chromium.

## Testes manuais (4)

| ID | Cenário | Resultado | Evidência |
|---|---|---|---|
| CT01 | Cupom BEMVINDO10 | Passou (registro anterior) | [Print](../evidencias/manual/CT01-cupom-bemvindo10.png) |
| CT02 | Cupom em minúsculas | Passou (registro anterior) | [Print](../evidencias/manual/CT02-cupom-minusculo.png) |
| CT03 | Cupom com espaços | Passou (registro anterior) | [Print](../evidencias/manual/CT03-cupom-espacos.png) |
| CT04 | Cupom inválido | Passou (registro anterior) | [Print](../evidencias/manual/CT04-cupom-invalido.png) |

## Testes automatizados (3)

| ID | Cenário | Resultado | Evidência |
|---|---|---|---|
| CT05 | Cupom expirado | Passou | [Print](../evidencias/automatizados/CT05-cupom-expirado.png) |
| CT06 | Apenas um cupom por vez | Passou | [Print](../evidencias/automatizados/CT06-cupom-unico.png) |
| CT07 | Frete grátis em R$ 200,00 | Falhou | [Print](../evidencias/automatizados/CT07-frete.png) |

**Resultado:** 2 aprovados; 1 não aprovados.

Falhas reais não são alteradas artificialmente para aprovação.
