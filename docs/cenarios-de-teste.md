# Cenários de Teste - Verzel Store

## Objetivo

Validar a implementação de cupom de desconto e frete grátis conforme os critérios de aceite da entrega VZS-142.

---

## CT01 - Aplicar cupom BEMVINDO10

**Critério:** CA01

**Dado** que tenho produtos no carrinho  
**Quando** aplico o cupom `BEMVINDO10`  
**Então** deve ser aplicado desconto de 10% sobre o subtotal dos produtos.

**Resultado esperado:** desconto de 10%.

---

## CT02 - Cupom deve ignorar letras maiúsculas e minúsculas

**Critério:** CA02

**Dado** que tenho produtos no carrinho  
**Quando** informo o cupom `bemvindo10`  
**Então** o sistema deve reconhecer o cupom como `BEMVINDO10`.

**Resultado esperado:** cupom aplicado normalmente.

---

## CT03 - Cupom deve ignorar espaços

**Critério:** CA02

**Dado** que tenho produtos no carrinho  
**Quando** informo `  BEMVINDO10  `  
**Então** os espaços antes e depois devem ser ignorados.

**Resultado esperado:** cupom aplicado normalmente.

---

## CT04 - Cupom inválido

**Critério:** CA03

**Dado** que tenho produtos no carrinho  
**Quando** informo um cupom inexistente  
**Então** deve ser apresentada a mensagem `Cupom inválido.`

**Resultado esperado:** nenhum desconto aplicado.

---

## CT05 - Cupom expirado

**Critério:** CA04

**Dado** que tenho produtos no carrinho  
**Quando** informo o cupom `VERAO2026`  
**Então** deve ser apresentada a mensagem `Cupom expirado.`

**Resultado esperado:** nenhum desconto aplicado.

---

## CT06 - Apenas um cupom por vez

**Critério:** CA05

**Dado** que já existe um cupom aplicado  
**Quando** tento aplicar outro cupom  
**Então** o sistema não deve manter dois cupons simultaneamente.

**Resultado esperado:** para trocar o cupom, o atual deve ser removido.

---

## CT07 - Frete grátis exatamente em R$ 200,00

**Critério:** CA06

**Dado** que o subtotal é exatamente R$ 200,00  
**Quando** o carrinho é calculado  
**Então** o frete deve ser grátis.

**Resultado esperado:** frete R$ 0,00.

---
