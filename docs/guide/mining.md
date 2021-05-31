---
title: Mining
---

This article is a simple guide on how to get started mining Kulupu.

## Import or generate a mining key

Kulupu implements signed mining. To mine Kulupu blocks, you have to
have the coinbase private key stored in the mining software, as a new
signature is produced for every new nonce. We refer to the private key
for signed mining as the **mining key**.

The eaiest way to get a mining key is to generate a new one using the
`generate-mining-key` command:

```
kulupu generate-mining-key
```

Keep your secret seed in a secure place.

Alternatively, you can also import an existing private key as the
mining key, using the `import-mining-key` command:

```
kulupu import-mining-key "<secret seed>"
```

## Pass author argument to node for mining

Remember either the public key or the address, and pass it to node for
mining. For example:

```
kulupu --validator --author <coinbase public key>
```

## Troubleshotting

### Expected pruning mode

If you encounter the following errors:

```
Error: Service(Client(Msg("State database error: Expected pruning mode: constrained")))
```

It means you previously started the node without mining flag. By
default, the node would execute under pruning mode which currently
cannot be used for mining.

To fix it, run the following command and then restart your mining
node.

```
kulupu purge-chain
```

### Unable to mine

If you see any of the "unable to mine" errors in the log, please
ensure that you have started the mining node with approriate
`--author` flag and have imported your mining key.

* "Unable to mine: pre-digest not set" means the `--author` flag is
  missing from the command-line.
* "Unable to mine: fetch pair from author failed" means the mining key
  has not been imported. Please refer to "import or generate a mining
  key" section to get the mining key to the node.

### Custom base path

If you use a custom base path through the `--base-path` or `-d` flag,
when importing the mining key, the flag should also be present for the
keystore import to obtain the correct path.

### Node killed

If you see your node about to generate the RandomX cache and getting
killed, it is due to the machine not having enough memory. You can get
the mining routine running by setting up swap memory (Linux) or
virtual memory (Windows). However, do note that if you do this, the
mining will be done with degraded performance.

### Warnings that can be ignored

If you encountered the following warnings, they are normal and can be
ignored:

* "Ran out of free WASM instances" means it is generating new WASM
  instances.
* "This peer ID uses a legacy, deprecated representation" can be
  ignored. You can also attempt to fix it by completely remove the
  data store and restart the node.
