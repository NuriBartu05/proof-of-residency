/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ReentrantTreasuryTest,
  ReentrantTreasuryTestInterface,
} from "../../../contracts/test/ReentrantTreasuryTest";

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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "country",
        type: "uint16",
      },
      {
        internalType: "string",
        name: "commitment",
        type: "string",
      },
    ],
    name: "respondToChallenge",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105ea3803806105ea83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610557806100936000396000f3fe6080604052600436106100225760003560e01c806398fa22481461012757600080fd5b36610122576040517f7d5cd9daf528e533ba8cae574873331c202235d7f9a7748ed50410618a9544b090600090a16000805460015460025460405163131f444960e31b81526001600160a01b03909316926398fa22489261009192909161ffff90911690600390600401610414565b602060405180830381600087803b1580156100ab57600080fd5b505af11580156100bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e391906102af565b90508061011f5760405162461bcd60e51b815260206004820152600660248201526519985a5b195960d21b604482015260640160405180910390fd5b50005b600080fd5b34801561013357600080fd5b506101476101423660046102d8565b61015b565b604051901515815260200160405180910390f35b60018390558051600090610176906003906020850190610216565b506002805461ffff191661ffff851617905560005460405163131f444960e31b81526001600160a01b03909116906398fa2248906101bc908790879087906004016103ac565b602060405180830381600087803b1580156101d657600080fd5b505af11580156101ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020e91906102af565b949350505050565b828054610222906104d0565b90600052602060002090601f016020900481019282610244576000855561028a565b82601f1061025d57805160ff191683800117855561028a565b8280016001018555821561028a579182015b8281111561028a57825182559160200191906001019061026f565b5061029692915061029a565b5090565b5b80821115610296576000815560010161029b565b6000602082840312156102c157600080fd5b815180151581146102d157600080fd5b9392505050565b6000806000606084860312156102ed57600080fd5b83359250602084013561ffff8116811461030657600080fd5b9150604084013567ffffffffffffffff8082111561032357600080fd5b818601915086601f83011261033757600080fd5b8135818111156103495761034961050b565b604051601f8201601f19908116603f011681019083821181831017156103715761037161050b565b8160405282815289602084870101111561038a57600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b8381526000602061ffff85168184015260606040840152835180606085015260005b818110156103ea578581018301518582016080015282016103ce565b818111156103fc576000608083870101525b50601f01601f19169290920160800195945050505050565b8381526000602061ffff851681840152606060408401526000845481600182811c91508083168061044657607f831692505b85831081141561046457634e487b7160e01b85526022600452602485fd5b60608801839052608088018180156104835760018114610494576104bf565b60ff198616825287820196506104bf565b60008b81526020902060005b868110156104b9578154848201529085019089016104a0565b83019750505b50949b9a5050505050505050505050565b600181811c908216806104e457607f821691505b6020821081141561050557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea26469706673582212205e5580b10b5de8fd792e20107261ee4f89e7a53e9a901a75654474f5b343ac4d64736f6c63430008070033";

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

  override deploy(
    victim: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReentrantTreasuryTest> {
    return super.deploy(
      victim,
      overrides || {}
    ) as Promise<ReentrantTreasuryTest>;
  }
  override getDeployTransaction(
    victim: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(victim, overrides || {});
  }
  override attach(address: string): ReentrantTreasuryTest {
    return super.attach(address) as ReentrantTreasuryTest;
  }
  override connect(signer: Signer): ReentrantTreasuryTest__factory {
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
