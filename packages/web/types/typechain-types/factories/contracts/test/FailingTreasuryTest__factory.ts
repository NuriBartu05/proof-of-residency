/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FailingTreasuryTest,
  FailingTreasuryTestInterface,
} from "../../../contracts/test/FailingTreasuryTest";

const _abi = [
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50604880601d6000396000f3fe6080604052348015600f57600080fd5b5000fea264697066735822122068f8dd716e64f6d33c71a135ed2e3db0d00b138d97e707b5f0608fe6621f62b264736f6c63430008070033";

type FailingTreasuryTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FailingTreasuryTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FailingTreasuryTest__factory extends ContractFactory {
  constructor(...args: FailingTreasuryTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FailingTreasuryTest> {
    return super.deploy(overrides || {}) as Promise<FailingTreasuryTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FailingTreasuryTest {
    return super.attach(address) as FailingTreasuryTest;
  }
  override connect(signer: Signer): FailingTreasuryTest__factory {
    return super.connect(signer) as FailingTreasuryTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FailingTreasuryTestInterface {
    return new utils.Interface(_abi) as FailingTreasuryTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FailingTreasuryTest {
    return new Contract(address, _abi, signerOrProvider) as FailingTreasuryTest;
  }
}
