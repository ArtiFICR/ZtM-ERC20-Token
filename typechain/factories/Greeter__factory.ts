/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Greeter, GreeterInterface } from "../Greeter";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000c8238038062000c828339818101604052810190620000379190620003a3565b6200006760405180606001604052806022815260200162000c6060229139826200008760201b620001ce1760201c565b80600090805190602001906200007f92919062000156565b5050620004f1565b620001298282604051602401620000a092919062000451565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200012d60201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546200016490620004bb565b90600052602060002090601f016020900481019282620001885760008555620001d4565b82601f10620001a357805160ff1916838001178555620001d4565b82800160010185558215620001d4579182015b82811115620001d3578251825591602001919060010190620001b6565b5b509050620001e39190620001e7565b5090565b5b8082111562000202576000816000905550600101620001e8565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200026f8262000224565b810181811067ffffffffffffffff8211171562000291576200029062000235565b5b80604052505050565b6000620002a662000206565b9050620002b4828262000264565b919050565b600067ffffffffffffffff821115620002d757620002d662000235565b5b620002e28262000224565b9050602081019050919050565b60005b838110156200030f578082015181840152602081019050620002f2565b838111156200031f576000848401525b50505050565b60006200033c6200033684620002b9565b6200029a565b9050828152602081018484840111156200035b576200035a6200021f565b5b62000368848285620002ef565b509392505050565b600082601f8301126200038857620003876200021a565b5b81516200039a84826020860162000325565b91505092915050565b600060208284031215620003bc57620003bb62000210565b5b600082015167ffffffffffffffff811115620003dd57620003dc62000215565b5b620003eb8482850162000370565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60006200041d82620003f4565b620004298185620003ff565b93506200043b818560208601620002ef565b620004468162000224565b840191505092915050565b600060408201905081810360008301526200046d818562000410565b9050818103602083015262000483818462000410565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004d457607f821691505b60208210811415620004eb57620004ea6200048c565b5b50919050565b61075f80620005016000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a41368621461003b578063cfae321714610057575b600080fd5b6100556004803603810190610050919061052f565b610075565b005b61005f61013c565b60405161006c9190610600565b60405180910390f35b610122604051806060016040528060238152602001610707602391396000805461009e90610651565b80601f01602080910402602001604051908101604052809291908181526020018280546100ca90610651565b80156101175780601f106100ec57610100808354040283529160200191610117565b820191906000526020600020905b8154815290600101906020018083116100fa57829003601f168201915b50505050508361026a565b8060009080519060200190610138929190610332565b5050565b60606000805461014b90610651565b80601f016020809104026020016040519081016040528092919081815260200182805461017790610651565b80156101c45780601f10610199576101008083540402835291602001916101c4565b820191906000526020600020905b8154815290600101906020018083116101a757829003601f168201915b5050505050905090565b61026682826040516024016101e4929190610683565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610309565b5050565b610304838383604051602401610282939291906106ba565b6040516020818303038152906040527f2ced7cef000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610309565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461033e90610651565b90600052602060002090601f01602090048101928261036057600085556103a7565b82601f1061037957805160ff19168380011785556103a7565b828001600101855582156103a7579182015b828111156103a657825182559160200191906001019061038b565b5b5090506103b491906103b8565b5090565b5b808211156103d15760008160009055506001016103b9565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61043c826103f3565b810181811067ffffffffffffffff8211171561045b5761045a610404565b5b80604052505050565b600061046e6103d5565b905061047a8282610433565b919050565b600067ffffffffffffffff82111561049a57610499610404565b5b6104a3826103f3565b9050602081019050919050565b82818337600083830152505050565b60006104d26104cd8461047f565b610464565b9050828152602081018484840111156104ee576104ed6103ee565b5b6104f98482856104b0565b509392505050565b600082601f830112610516576105156103e9565b5b81356105268482602086016104bf565b91505092915050565b600060208284031215610545576105446103df565b5b600082013567ffffffffffffffff811115610563576105626103e4565b5b61056f84828501610501565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156105b2578082015181840152602081019050610597565b838111156105c1576000848401525b50505050565b60006105d282610578565b6105dc8185610583565b93506105ec818560208601610594565b6105f5816103f3565b840191505092915050565b6000602082019050818103600083015261061a81846105c7565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061066957607f821691505b6020821081141561067d5761067c610622565b5b50919050565b6000604082019050818103600083015261069d81856105c7565b905081810360208301526106b181846105c7565b90509392505050565b600060608201905081810360008301526106d481866105c7565b905081810360208301526106e881856105c7565b905081810360408301526106fc81846105c7565b905094935050505056fe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a26469706673582212201b19d411190fd52c26e2d48212053cac587c6180f5110826f3bc3fefe6ccc5eb64736f6c634300080b00334465706c6f79696e67206120477265657465722077697468206772656574696e673a";

export class Greeter__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Greeter> {
    return super.deploy(_greeting, overrides || {}) as Promise<Greeter>;
  }
  getDeployTransaction(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_greeting, overrides || {});
  }
  attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}
