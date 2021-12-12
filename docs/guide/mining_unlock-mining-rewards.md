---
title: Unlocking Mining Rewards
---

The procedure for unlocking mining rewards is as follows:

1. Visit [polkadot.js.org/apps/#/explorer](https://polkadot.js.org/apps/#/explorer)

*note: make sure Kulupu is selected from the network dropdown (top-left corner of the page)*

2. In the main menu, click **Developer** -> **Extrinsics**
3. At the top of Extrinsics is the "using the selected account" dropdown. Make sure it displays the account you're unlocking mining rewards for.
4. Below is "submit the following extrinsic" dropdown. Default should be: `system`. Switch to `rewards`.
5. On the same line, to the right is the  "setLockParams" dropdown. Default value should be: `setCode(code)`. Switch to `unlock(target)`.
6. A new menu appears below: "target: AccountID". By default, it uses the account from 3). Use it to switch to other accounts, if needed.
7. Click "Submit Transaction", bottom-right corner of the page.
8. Click "Sign and Submit".
9. Enter account password to confirm.

![Screenshot from Polkadot.js](/static/img/docs-guide_mining-rewards-unlock.png)