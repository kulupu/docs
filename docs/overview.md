---
title: Overview
---

Kulupu is a proof of work blockchain with on-chain governance and
online upgrade.

Kulupu is a self-updating self-governed blockchain system, using
proof-of-work as its consensus engine. Kulupu is built with the [Substrate framework](https://github.com/paritytech/substrate). It
is one of the first blockchains that combine proof-of-work consensus
engine with forkless upgrades.

Kulupu has all the normal features you'd expect in a proof of work
blockchain.

* *No pre-mine.* Kulupu was launched in September 2019, with 0 coin in
   its genesis block. It then emits 1 KLP per second to miners, till
   today.
* *ASIC-resistant.* Kulupu uses the battle tested RandomX mining algorithm from Monero.
* Like any decentralized blockchain system, it is censorship
  resistant, accessible to everyone, peer-to-peer and permission-less.

In addition, Kulupu contains several unique features:

* *On-chain governance and forkless upgrade.* Kulupu has an on-chain
   democracy system. Users and a democratically elected council can
   submit referendum proposals, which are voted by coin holders. This
   user-driven governance system allows Kulupu to enact runtime
   upgrade much more easily, and with much reduced risk of network
   split, compared with hard-fork-based governance systems. The same
   system also allows upgrading the consensus, including mining
   algorithm and difficulty adjustment algorithm.
* *Signed mining and block reward lock.* A miner provides security at
   a specific point-in-time for the blockchain. In the mean time, that
   specific point-in-time security is expected to have a lasting
   effect for the blockchain for a certain period of time. Block
   reward lock and signed mining allows Kulupu to account for that
   security aspect. It also prevents hash-power rental attacks and
   botnets.
* *Voluntary taxation and treasury.* A democracy governance system
   allows Kulupu to build a public-good treasury system, with coin
   holders having the final say on how funds are spent. The treasury
   taxation is fair, and at the same time voluntary, reducing the risk
   of centralization and misuse.sidenote:wip-treasury[The
   donation-based treasury system can be used right now in production,
   but the voluntary taxation system is still work-in-progress.]
* *Actor-based smart contract.* Actor-based smart contract aims at
   solving some of the outstanding issues in normal call-based smart
   contract system, improving backward compatibility, fee payment and
   other areas.sidenote:wip-actor[Actor-based smart contract system is
   still work-in-progress.]
* *Interoperability with Polkadot.* By using Substrate, building on
   the same framework that Polkadot is built on, Kulupu allows easy
   interoperaibility with Polkadot in the future.

== Resources

* *[Reference Implementation](https://github.com/kulupu/kulupu)*:
  Github Repository for the Rust implementation of Kulupu.
* *[Discord Community](https://discord.gg/DZbg4rZ)*: Chat room
  hosted on Discord.
* *[Matrix Community](https://riot.im/app/#/room/#kulupu:matrix.org)*: Chat room hosted on Matrix.
* *[Wallet](https://polkadot.js.org/apps)* Wallet and governance
   app for Kulupu.
* *[Network Status](https://telemetry.polkadot.io/#list/Kulupu)*:
  Polkadot telemetry for Kulupu, showing network status, using nodes
  that voluntarily participate in telemetry on the Kulupu network.
