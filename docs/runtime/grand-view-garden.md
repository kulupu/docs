---
title: Grand View Garden
---

Grand View Garden is a runtime upgrade in the Kulupu network, enabling
signed minig and reward lock.

## Voting and activation

The voting of **Grand View Garden** starts on 4 Sep, 2020 and ends on
11 Sep, 2020.

## Changes

The runtime upgrade enables signed mining and reward lock. The theory
of signed mining and reward lock is that a miner provides security at
a specific point-in-time for Kulupu (by producing a block). However,
that specific point-in-time security is expected to have a lasting
effect for the blockchain for a certain period of time.

For details of the specification of Kulupu's signed mining, see [53-KSIGNED](https://specs.corepaper.org/53-ksigned).

After this upgrade, newly minted mining rewards will have a locking
period. First, the voluntary taxation is deducted. After this, at
least 1 KLP will always be without locks, so that the miner can always
have money to pay for transaction fees. For the remainder of the
reward, it has a total lock period of 100 days, and the locks expire
every 10 days releasing 10% of the reward.

Existing balances and already minted coins are not affected by signed
mining or reward lock.

## Benefits

Signed mining and reward lock awards long-term supporters of Kulupu
network, and discourages participants who only look for short-term
profits.

* For miners who support Kulupu long-term, your mining rewards will be
  less affected by short-term mining hopping or rental hash-power.
* For investors and traders, you don't need to worry about miners
  immediately dumping a large amount of freshly mined new coins into
  the market any more.

Signed mining also makes centralized mining pools and hash power
rental impossible to implement, as miners have to store the coinbase
private keys locally. As a side effect, to a certain extent, this also
makes those 51% attacks conducted through rental hash powers much
harder, if not impossible.

## Discussions

Without centralized mining pools, while the average payout remains the
same, small miners reward payout will be less consistent. We don't
believe adding back centralized pools is the solution. Instead, Kulupu
intends to implement decentralized mining pools directly in its
protocol level to address the inconsistent payout issue.

This runtime upgrade is a consensus change, meaning it requires a node
upgrade. At the time of the upgrade, Kulupu node participants must
make sure they are using node version `2.0.0` or greater. Otherwise,
their nodes will drop off the network.
