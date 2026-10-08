# Relatório de bugs

## BUG01 — Frete cobrado no limite de R$ 200,00

- **Critério:** CA06.
- **Situação:** falha reproduzida no CT07.
- **Severidade sugerida:** média.
- **Pré-condição:** carrinho vazio.
- **Passos:** adicionar duas Mochilas Urbanas 20L (R$ 100,00 cada) e abrir o carrinho.
- **Esperado:** subtotal R$ 200,00 e frete R$ 0,00.
- **Observado:** subtotal confirmado em R$ 200,00, mas frete exibido de R$ 19,90.
- **Evidência:** [Print CT07](../evidencias/automatizados/CT07-frete.png).

O comportamento diverge do CA06 documentado no projeto. Conferir a regra também na documentação oficial da loja.

O teste permanece reprovado enquanto a regra não for atendida.
