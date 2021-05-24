---
id: node-operator
title: How to run a node
---

:::important

Tewai Chain is a Bit.Country Metaverse Public Testnet. Tewai means "The Water in Maori", and we aim to create a Tewai Protocol to become the most important substances on metaverse and flows like water that adjust to any objects.

If you would like to support and be a part of the most important aspects of the future Metaverse, you can apply to become a Node Operator to run the Tewai Protocol using this section [Run a node](node-operator#run-a-node). Or if you simply wanted to accessing the User Interface, head to this section [Accessing User Interface](node-operator#ui).

## Run a node

### Initial Set-up

#### **Requirements**
The most common way for a beginner to run a validator is on a cloud server running Linux. You can choose whatever VPS provider e.g AWS, Azure, or running on your own local setup.

Standard Hardware Specs

* CPU - 2.2 GHz 6-Core Intel Core i7
* Storage - SSD - Should be reasonably sized to deal with blockchain growth. Starting around 10 GB - 80 GB will be okay for the first six months. Recommend to re-evaluate every six month
* RAM - 8 Gb

Or 

AWS Medium EC2 instance with 30 GB Hard drive should be efficient.

## **Running a Node**

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
git checkout 387b953085dfc21f44cf083d89c0fb3bb7931056
```

**Install Rust**
```bash
curl https://sh.rustup.rs -sSf | sh
```

**Initialize your Wasm Build environment**
```bash
./scripts/init.sh
```
*if init.sh file is not found, make sure you are currently inside Bit-Country-Blockchain directory*

After initializing you can then start building by using the cargo command:

```sh
cargo build --release --features=with-bitcountry-runtime
```

Once the build has finished you will have the bitcountry-node binary available in the target/release folder. You can start a node for Tewai Chain from the root of the directory like so:

```sh
./target/release/bitcountry-node --chain tewai --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooWED5HGA9fKcS1ifHeZ1KeShk2SnH6euwC1nnMAj1zUF4A
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
docker pull bitcountry/bitcountry-node:0.2
```

#### Running the docker image
You can test if the docker image is running by using the following command, but the node id
and the chain data will be deleted after you shut down the docker container:
```sh
docker run bitcountry/bitcountry-node:0.2 --chain tewai
```

Now, it's time to set up your node to connect to Tewai Chain Bootnode, you need to choose which folder that you would like to store your chain data. Ensure the folder is exists and you have write permission in the folder.

Assuming the path you want to use locally is */tewaiDb/bitcountry-node*, 
the command would be:
```sh
docker run -network=host -v /tewaiDb/bitcountry-node:/bitcountry-db bitcountry/bitcountry-node:0.2 -d /bitcountry-db --chain tewai --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooWED5HGA9fKcS1ifHeZ1KeShk2SnH6euwC1nnMAj1zUF4A
```

That's it, your node should be running and syncing with other nodes.

## **Become a Validator and earn a reward**

*$NUUM on Tewai Chain Testnet is for testing purpose, they have no value or reflection of NUUM on public mainnet*

### Run the node as validator

Once your node from step 1 is fully synced then you can stop the node by Control + C, and run the node again with --validator and --name arguments.
**Running from source**

```sh
./target/release/bitcountry-node --chain tewai --validator --name 'your node name' --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooWED5HGA9fKcS1ifHeZ1KeShk2SnH6euwC1nnMAj1zUF4A
```
**Running from docker**

```sh
docker run bitcountry/bitcountry-node:0.2 --chain tewai --validator --name 'your node name' --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooWED5HGA9fKcS1ifHeZ1KeShk2SnH6euwC1nnMAj1zUF4A
```

### Bond NUUM

Go to [Tewai Chain Explorer](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftewai-node.bit.country#/explorer/node)

Bond the **$NUUM** of the Stash account. These **$NUUM** will be put at stake for the security of the network and can be slashed.
Select the Controller. This is the account that will decide when to start or stop validating.

First, go to the [Staking](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftewai-node.bit.country#/staking) section. Click on "Account Actions", and then the "+ Stash" button.

### Generate Session Keys

You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator node with your Controller account on Tewai Chain.

Your generate session keys on [Tewai Explorer](https://explorer.bit.country/apps/?rpc=wss%3A%2F%2Ftewai-node.bit.country#/rpc)

**You need to change the node connection to your validator node in order to use rpc author call**

### Submitting the setKeys Transaction

You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator with your Controller account.

Go to Staking > Account Actions, and click "Set Session Key" on the bonding account you generated earlier. Enter the output from author_rotateKeys in the field and click "Set Session Key".

Submit this extrinsic and you are now ready to start validating.

### Validate

To verify that your node is live and synchronized, head to Telemetry and find your node. Note that this will show all nodes on the Bit.Country Tewai Chain network, which is why it is important to select a unique name!

If everything looks good, go ahead and click on "Validate" in Explorer UI.

**Congratulations!** If you have followed all of these steps, and been selected to be a part of the validator set, you are now running a Bit.Country Tewai Chain validator!

