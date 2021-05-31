---
title: Economics
---

This artcile describes the cryptoeconomies of Kulupu.

The *effective total supply* of Kulupu is expected to be no more than
210 million KLP.

Kulupu implements fee market, which is a method to have more
predictable transaction fees. With this method, the _base_ transaction
fees are burned instead of paid to miners. Miners only retain the
_tips_. Burning the base fee is important as it avoids giving miners
incentives to create artifical transactions to manipulate the fee.

Kulupu may also implement a treasury and voluntary taxation
system. With this implementation, the treasury funding gets burned
every spending cycle.

In a proof of work blockchain, a popular theme is total supply, in
which block rewards initially dominate, and then gradually switch to a
fee only system. However, with burning methods like fee market and
treasury spending, a direct translation of total supply will result in
deflation.

The effective total supply of Kulupu is the total coins in circulation
with both emissions and and burns considered. Assuming blocks in the
future consumes on average half of the total block weight, the burn
each block will be 8 KLP. As a result, an emission scheme with
eventual tail emission of equal or less than 8 KLP will have fixed
effective total supply.
