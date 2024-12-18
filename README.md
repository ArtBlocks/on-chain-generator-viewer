# Art Blocks On-Chain Generator Viewer

This repository contains a viewer application for the Art Blocks On-Chain Generator.

You can interact with the application here:

- Hosted: [https://artblocks.io/onchain/generator](https://artblocks.io/onchain/generator)
- Decentralized: [https://ipfs.io/ipns/onchain-generator.artblocks.io](https://ipfs.io/ipns/onchain-generator.artblocks.io)

You may also run the application locally by following [the instructions below](#local-development)

## Overview

The Art Blocks On-Chain Generator is a unique smart contract that assembles various on-chain resources, including project scripts, dependency scripts, and token data into a cohesive template. All of these components are stored on-chain. The generator leverages Scripty.sol to efficiently orchestrate the integration of these resources, producing the executable code needed to render an Art Blocks NFT in a web browser.

This viewer application retrieves the data URI of the NFT from a single contract call and injects it as the source of an iframe to display the token.

No dependencies on off-chain Art Blocks APIs are required to view the NFTs. The viewer application is designed to be self-contained and can be run locally.

## Local Development

Before running the application, you may optionally create a `.env.local` file in the root directory of the project based on `.env.example`. This file allows you to specify the network and RPC endpoint to use when fetching NFT data. If you do not create a `.env.local` file, the application will default to using mainnet and a public viem RPC endpoint.

To run the application, use the following commands:

```
npm install
npm run dev
```

To fill out a form and view a supported Art Blocks artwork, navigate to `http://localhost:5173/on-chain-generator-viewer/`.

To view an Art Blocks artwork directly, navigate to `http://localhost:5173/on-chain-generator-viewer/<contract-address>/<token-id>`, replacing <contract-address> and <token-id> with the address of the NFT contract and the ID of the token you want to view. The application will fetch the html for the NFT and display it within an iframe on a new tab.

## Hosting

The application is hosted on centralized servers as well as on the decentralized IPFS network.

### Pin the On-Chain Generator

Help support decentralized access to the Art Blocks on-chain generator by pinning it to IPFS.

IPFS detail:

- CID: `bafybeicodqh762wabjalew7ysiprzsb5cpbqdxtkbtffpgj25ep2bkfluu`
- DNSLink: `onchain-generator.artblocks.io`

#### What is Pinning?

Pinning ensures the generator interface remains accessible through the IPFS network. The more people who pin the content, the more resilient and decentralized the network becomes.

#### Pin Using Local IPFS Node

If you're running your own IPFS node you can pin via CID or DNSLink

Pin via CID:

```
ipfs pin add bafybeicodqh762wabjalew7ysiprzsb5cpbqdxtkbtffpgj25ep2bkfluu
```

or

Pin via DNSLink:

```
ipfs pin add /ipns/onchain-generator.artblocks.io
```

#### Other Pinning Services

You can also use other IPFS pinning services like:

- Pinata
- Infura
- Web3.storage
- Filebase
