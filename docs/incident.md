---
title: Incidents
---

This page documents the past network incidents of the Kulupu
blockchain.

## Decoding error in runtime dealing with multiple parameters

_Early August, 2020_

In the *Red Coast Base* runtime upgrade, an overlooked PR in Substrate repo
resulted in runtime decoding error for WebAssembly function exports. The issue
was fixed in Substrate
[PR#6484](https://github.com/paritytech/substrate/pull/6484). However, it did
not make it into the corresponding runtime upgrade.

### Impact

Fortunately, the decoding error did not affect the core functionality
of the blockchain. Two WebAssembly function exports use multiple
parameters -- `validate_transaction` and `check_inherents`. Their
corresponding native variant does not suffer from the same decoding
error and can be used as alternatives to make sure the chain can
continue to function.

### Resolution

The immediate temporary resolution was to ask miners to continue to
use version `v1.2.0`. That version has the corresponding native
variant of the runtime and the client will prefer to use them when
calling `validate_transaction` and `check_inherents`.

The root issue was fixed in the next *Seeker Camp* runtime upgrade
where PR#6484 was included.

## Missing runtime migration for the scheduler module

_Late August, 2020_

From the *Red Coast Base* to *Seeker Camp* runtime upgrade, the
storage version of scheduler module was changed from `V1` to
`V2`. However, the corresponding runtime migration script for
scheduler module wasn't included.

### Impact

The following events happened that resulted in version mismatch of two
scheduler storage items:

* Referendum#4 was passed and was scheduled using the *Red Coast Base*
  runtime, with scheduler storage version `V1`, at block 151,200.
* Referendum#5 was passed and was scheduled using the *Red Coast Base*
  runtime, with scheduler storage version `V1`, at block 161,280.
* *Seeker Camp* runtime was activated at block 162,720, changing the
  scheduler module storage to version `V2` but did not run the
  migration script.

### Resolution

The issue is planned to be resolved by removing the automatic
scheduling of referendum#4 and referendum#5, and manually enact
referendum#4 and referendum#5, using a fast-tracked democracy
referendum.

A council motion with the preimage of the following root batch call
was submitted:

1. Clear the storage prefix of `Scheduler` module, to remove the
   faulty `Agenda` values.
2. Set `Scheduler::StorageVersion` to `V2` manually.
3. Enact referendum#4 manually.
4. Enact referendum#5 manually.

## Module index change in runtime upgrade

_Late October, 2020_

In the **Gondoa** runtime upgrade, an accidential runtime module index
change happened.

### Impact

This index change did not impact anything in the scheduler module, as
when the runtime happened, no scheduling was in planned. However, the
change impacted all current democracy proposals and the current
democracy referendum, rendering them invalid, because the
dispatchables are stored on-chain.

Past referenda and any on-chain transactions are not impacted by the
module index change.

### Resolution

The council and the technical committee decided to work together to
cancel the current democracy referendum and all current democracy
proposals and to re-submit them again. Alternatively, the current
democracy referendum can also be simply voted down by coin holders. If
the current demoracy referendum passes, it will do no harm to the
chain but it will also be no-op, as the actual dispatachable is
missing.

## Type definition incompatibility between UI and runtime

_29 December, 2020_

In the **Hotel Adriano** runtime upgrade, an overlooked type
definition was updated in runtime, but was not updated promptly in the
polkadot.js UI, resulting in a brief period when the node will not
accept transactions constructed by polkadot.js.

### Impact

This incident only impacts polkadot.js UI, and does not impact node
consensus. However, as most exchanges and explorers depend on the
polkadot.js library, it results in non-updated services unable to send
extrinsics or parse extrinsics coming from the network.

### Resolution

The type definition update
link:https://github.com/polkadot-js/apps/pull/4281[PR] is submitted to
the polkadot.js repository. We're in the process of notifying
exchanges and explorers about this update.
