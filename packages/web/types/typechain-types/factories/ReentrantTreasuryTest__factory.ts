/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReentrantTreasuryTest,
  ReentrantTreasuryTestInterface,
} from "../ReentrantTreasuryTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "victim",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "HitFallback",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161015c38038061015c83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b60ca806100926000396000f3fe608060405236608f576040517f7d5cd9daf528e533ba8cae574873331c202235d7f9a7748ed50410618a9544b090600090a1600054604051632e1a7d4d60e01b8152606460048201526001600160a01b0390911690632e1a7d4d90602401600060405180830381600087803b158015607657600080fd5b505af11580156089573d6000803e3d6000fd5b50505050005b600080fdfea2646970667358221220f00d7a11d3f138f157d97ce739b228e7c1501209f240b2b58e5b76ceafb2ef3a64736f6c63430008070033";

type ReentrantTreasuryTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReentrantTreasuryTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReentrantTreasuryTest__factory extends ContractFactory {
  constructor(...args: ReentrantTreasuryTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    victim: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReentrantTreasuryTest> {
    return super.deploy(
      victim,
      overrides || {}
    ) as Promise<ReentrantTreasuryTest>;
  }
  getDeployTransaction(
    victim: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(victim, overrides || {});
  }
  attach(address: string): ReentrantTreasuryTest {
    return super.attach(address) as ReentrantTreasuryTest;
  }
  connect(signer: Signer): ReentrantTreasuryTest__factory {
    return super.connect(signer) as ReentrantTreasuryTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReentrantTreasuryTestInterface {
    return new utils.Interface(_abi) as ReentrantTreasuryTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrantTreasuryTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ReentrantTreasuryTest;
  }
}
