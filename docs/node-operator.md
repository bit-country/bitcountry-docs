---
id: node-operator
title: How to run a node
---

Tewai Chain is a Bit.Country Metaverse Public Testnet. Tewai means "The Water in Maori", and we aim to create a Tewai Protocol to become the most important substances on metaverse and flows like water that adjust to any objects.

If you would like to support and be a part of the most important aspects of the future Metaverse, you can apply to become a Node Operator to run the Tewai Protocol using this section [Run a node](node-operator/#run-a-node). Or if you simply wanted to access the Bit.Country metaverse, click [Access Bit.Country](https://bit.country).

## Run a node

### Initial Set-up

#### **Requirements**
The most common way for a beginner to run a validator is on a cloud server running Linux. You can choose whichever VPS provider (e.g AWS, Azure), or try running on your own local setup.

Standard Hardware Specs

* CPU - 2.2 GHz 6-Core Intel Core i7
* Storage - SSD - Should be reasonably sized to deal with blockchain growth. Starting around 10 GB - 80 GB will be okay for the first six months. Re-evaluating every six month
* RAM - 8 Gb

Or 

AWS Medium EC2 instance with 30 GB Hard drive should be sufficient.

## **Running a Node as Collator Node Operator**

There are two ways that you can run a node and connect to the Bit.Country Tewai Chain testnet. 

* Build from source (takes about 5 - 15 minutes with standard specs)
* Use Docker

#### **Building from source**

Window users: please use [this tutorial](https://substrate.dev/docs/en/knowledgebase/getting-started/windows-users) to setup your build environment 

Linux-based machine

**Clone Bit.Country Blockchain code**

Go to [Bit.Country repo](https://github.com/bit-country/Bit-Country-Blockchain), clone the repo from correct commit hash.

``` git
# clone the code locally

git clone https://github.com/bit-country/Bit-Country-Blockchain.git

# change directory

cd Bit-Country-Blockchain

# select correct commit hash
git checkout bfece87795f3b4bd4be225989af2ed717fbf9f8c
```

**Install Rust**
```bash
curl https://sh.rustup.rs -sSf | sh
```

**Initialize your Wasm Build environment**
```bash
./scripts/init.sh
```
*if init.sh file is not found, make sure you are currently inside the Bit-Country-Blockchain directory*

After initializing you can then start building by using the cargo command:

```sh
cargo build --release --features=with-bitcountry-runtime
```

In case your build fails, please use this command first:
```sh
sudo apt install cmake git clang libclang-dev build-essential
```

Once the build has finished you will have the bitcountry-node binary available in the target/release folder. You can start a node for Tewai Chain from the root of the directory like so:

```sh
./target/release/bitcountry-node --chain tewai --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooW9rDqyS5S5F6oGHYsmFjSdZdX6HAbTD88rPfxYfoXJdNU --name 'your_node_name' --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' 
```
You should see your node begin to sync blocks.

Feel free to play around with the other available options, which you can inspect by executing:
```sh
./target/release/bitcountry-node --help
```

Then you can start bonding NUUM to become validator or nominator

#### **Using Docker**

We publish the latest version to the [Docker Hub](https://hub.docker.com/repository/docker/bitcountry/bitcountry-node/tags?page=1&ordering=last_updated) that can be pulled and ran locally to connect to the network. In order to do this first make sure that you have Docker installed locally. [How to install and run Docker](https://docs.docker.com/engine/install/)

#### Downloading the docker image
```sh
docker pull bitcountry/bitcountry-node:5f860f4
```

#### Running the docker image
You can test if the docker image is running by using the following command, but the node id
and the chain data will be deleted after you shut down the docker container:
```sh
docker run bitcountry/bitcountry-node:5f860f4 --chain tewai
```

Now, it's time to set up your node to connect to Tewai Chain Bootnode, you need to choose which folder you would like to store your chain data. Ensure the folder exists and you have write permission for the folder.

Assuming the example path you want to use locally is *path/to/tewaiDb/bitcountry-node*, 
the command would be:
```sh
docker run --network=host -v /tewaiDb/bitcountry-node:/bitcountry-db bitcountry/bitcountry-node:5f860f4 -d /bitcountry-db --chain tewai --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooW9rDqyS5S5F6oGHYsmFjSdZdX6HAbTD88rPfxYfoXJdNU --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' 
```

That's it, your node should be running and syncing with other nodes. Please note, if you want to participate in our Collator Node Operator application, please make sure your node id is permanent and has a high up-time. To continue to receive the reward - if you lose your data (by any chance) - then you can restore the secret_ed25519 inside your database folder that you set up above (e.g *path/to/tewaiDb/bitcountry-node/network/secret_ed25519*). 

Make sure you back up the secret_ed25519 in the safe place.

You can apply to becoming a Collator via [Bit.Country Collator Node Operator Program](https://forms.zohopublic.com/industryconnect/form/BCCollatorNodeApplication/formperma/ua5J1ddpxRlIoLmc-dEZgqKa2rAL7zRMUy7sBHiEyds)

## **Become a Validator - authority of producing block**

*$NUUM on Tewai Chain Testnet is for testing purpose, it has no value or reflection of $NUUM on the public mainnet*

### Run the node as validator

Once your node from step 1 is fully synced then you can stop the node by pressing Control + C, and run the node again with --validator and --name arguments.
**Running from source**

```sh
./target/release/bitcountry-node --chain tewai --validator --name 'your node name' --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooW9rDqyS5S5F6oGHYsmFjSdZdX6HAbTD88rPfxYfoXJdNU --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' 
```
**Running from docker**

```sh
docker run bitcountry/bitcountry-node:5f860f4 --chain tewai --validator --name 'your node name' --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooW9rDqyS5S5F6oGHYsmFjSdZdX6HAbTD88rPfxYfoXJdNU --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' 
```

**Running as a service**
```
[Unit]
Description=Bit.Country Node
After=network.target
[Service]
User=root
WorkingDirectory=/home/bitcountry/
ExecStart=$HOME/Bit-Country-Blockchain/target/release/bitcountry-node --chain tewai --validator --name 'PutYourNodeName' --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooW9rDqyS5S5F6oGHYsmFjSdZdX6HAbTD88rPfxYfoXJdNU --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'
Restart=always
RestartSec=3
[Install]
WantedBy=multi-user.target
```

**Running as a service (docker)**
```
[Unit]
Description=Bit.Country Node
After=docker.service
Requires=docker.service
[Service]
User=root
WorkingDirectory=/home/bitcountry/
ExecStart=/usr/bin/docker run --network=host -v /home/bitcountry/bitcountry-node:/bitcountry-db bitcountry/bitcountry-node:5f860f4 -d /bitcountry-db --chain tewai --validator --name 'PutYourNodeName' --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooW9rDqyS5S5F6oGHYsmFjSdZdX6HAbTD88rPfxYfoXJdNU --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0'
Restart=always
RestartSec=3
[Install]
WantedBy=multi-user.target
```

### Bond NUUM

Go to [Tewai Chain Explorer](https://explorer.bit.country/#/rpc)

Bond the **$NUUM** of the Stash account. These **$NUUM** will be put at stake for the security of the network and could be slashed.
Select the Controller. This is the account that will decide when to start or stop validating.

First, go to the [Staking](https://explorer.bit.country/#/staking) section. Click on "Account Actions", and then the "+ Stash" button.

### Generate Session Keys

You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator node with your Controller account on Tewai Chain.

You can generate session keys on [Tewai Explorer](https://explorer.bit.country/#/rpc)

**You need to change the node connection to YOUR validator node in order to use rpc author call**

### Submitting the setKeys Transaction

You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator with your Controller account.

Go to Staking > Account Actions, and click "Set Session Key" on the bonding account you generated earlier. Enter the output from author_rotateKeys in the field and click "Set Session Key".

Or you can run on your node to get session key:
```sh
$ curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933 
```

Submit this extrinsic and you are now ready to start validating.

### Validate

To verify that your node is live and synchronized, head to Telemetry and find your node. Note that this will show all nodes on the Bit.Country Tewai Chain network, which is why it is important to select a unique name!

If everything looks good, go ahead and click on "Validate" in Explorer UI.

**Congratulations!** If you have followed all of these steps, and been selected to be a part of the validator set, you are now running a Bit.Country Tewai Chain validator!

