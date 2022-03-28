---
sidebar_position: 7
title: How does the KO Exchange tech work?
---

KO Exchange implements a wrapped token approach. This approach requires an ERC20 contract (or some equivalent contract) deployed on each chain. Each token swap is a 1:1 mapping from one chain to another chain. For example, you send 1 wrapped Dai token to gateway on chain A, you receive one wrapped Dai token on chain B. If you want to convert your wrapped token to another token, you can use other services inside a blockchain to do the task and hence we will not go into details here.

This will help with no slippage or impermanent loss when swapping, predictable output for each transaction, simple and easy to understand and track down issues and can support an unlimited number of tokens in theory.
