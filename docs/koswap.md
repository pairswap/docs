---
sidebar_position: 2
title: KOSwap
---

## What is KOSwap?

KO Swap is a decentralized exchange (or DEX, for short). KOSwap allows users to trade trustlessly, peer-to-peer, with liquidity that is supplied by other users. This means that new projects can easily connect to their desired markets as long as some entity is willing to provide the liquidity.

KOSwap uses a token wrapping approach for swapping tokens cross chain. Each token swap is a 1:1 mapping from one chain to another chain. For example, you send 1 wrapped Dai token to gateway on chain A, you receive one wrapped Dai token on chain B. If you want to convert your wrapped token to another token, you can use other services inside a blockchain to do the task and hence we will not go into details here.

There are few other models used for cross chain token swapping. A common model is the automated market maker (AMM) which was introduced by the Uniswap team on Ethereum mainnet.

Both wrapping tokens and AMM swapping have their pros and cons. No model is perfect. After weighing each model, the KO team decided to use the wrapping tokens approach as it produces more predictable output and does not require multiple token pairs to work. However, this decision can change in subsequent versions of the app.

KO swap uses Sisu, a decentralized network for cross chain transactions.
