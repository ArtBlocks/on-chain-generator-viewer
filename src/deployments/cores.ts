import { Hex } from "viem";

export type CoreDeployment = {
  label?: string;
  address: Hex;
  version?: 0 | 1 | 3;
  startingProjectId?: number;
};

export const coreDeployments: {
  [key: string]: CoreDeployment[];
} = {
  "1": [
    {
      label: "Art Blocks Flagship: V0",
      address: "0x059EDD72Cd353dF5106D2B9cC5ab83a52287aC3a",
      version: 0,
      startingProjectId: 0,
    },
    {
      label: "Art Blocks Flagship: V1",
      address: "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270",
      version: 1,
      startingProjectId: 3,
    },
    {
      label: "Art Blocks Flagship: V3",
      address: "0x99a9B7c1116f9ceEB1652de04d5969CcE509B069",
      version: 3,
      startingProjectId: 374,
    },
    {
      label: "Art Blocks Curated: V3.2",
      address: "0xAB0000000000aa06f89B268D604a9c1C41524Ac6",
      version: 3,
      startingProjectId: 495,
    },
    {
      label: "Art Blocks Curated: V3.2 Flex Onchain",
      address: "0xAB00000000002ADE39f58F9D8278a31574fFBe77",
      version: 3,
      startingProjectId: 505,
    },
  ],
  "11155111": [
    {
      label: "Sepolia Example",
      address: "0xEC5DaE4b11213290B2dBe5295093f75920bD2982",
      version: 3,
      startingProjectId: 0,
    },
  ],
};
