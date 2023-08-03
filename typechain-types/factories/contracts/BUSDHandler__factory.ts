/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  BUSDHandler,
  BUSDHandlerInterface,
} from "../../contracts/BUSDHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "_owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getBusdBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEtherBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferBusdToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
] as const;

const _bytecode =
  "0x60806040526040518060400160405280600981526020017f42555344546f6b656e0000000000000000000000000000000000000000000000815250600690816200004a91906200067e565b506040518060400160405280600481526020017f4255534400000000000000000000000000000000000000000000000000000000815250600790816200009191906200067e565b503480156200009f57600080fd5b5060405162001e8f38038062001e8f8339818101604052810190620000c591906200079b565b60068054620000d4906200046d565b80601f016020809104026020016040519081016040528092919081815260200182805462000102906200046d565b8015620001535780601f10620001275761010080835404028352916020019162000153565b820191906000526020600020905b8154815290600101906020018083116200013557829003601f168201915b50505050506007805462000167906200046d565b80601f016020809104026020016040519081016040528092919081815260200182805462000195906200046d565b8015620001e65780601f10620001ba57610100808354040283529160200191620001e6565b820191906000526020600020905b815481529060010190602001808311620001c857829003601f168201915b50505050508160039081620001fc91906200067e565b5080600490816200020e91906200067e565b50505033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000286600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16826200028d60201b60201c565b50620008e8565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620002ff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002f6906200082e565b60405180910390fd5b6200031360008383620003fa60201b60201c565b80600260008282546200032791906200087f565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003da9190620008cb565b60405180910390a3620003f660008383620003ff60201b60201c565b5050565b505050565b505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200048657607f821691505b6020821081036200049c576200049b6200043e565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005067fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620004c7565b620005128683620004c7565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200055f6200055962000553846200052a565b62000534565b6200052a565b9050919050565b6000819050919050565b6200057b836200053e565b620005936200058a8262000566565b848454620004d4565b825550505050565b600090565b620005aa6200059b565b620005b781848462000570565b505050565b5b81811015620005df57620005d3600082620005a0565b600181019050620005bd565b5050565b601f8211156200062e57620005f881620004a2565b6200060384620004b7565b8101602085101562000613578190505b6200062b6200062285620004b7565b830182620005bc565b50505b505050565b600082821c905092915050565b6000620006536000198460080262000633565b1980831691505092915050565b60006200066e838362000640565b9150826002028217905092915050565b620006898262000404565b67ffffffffffffffff811115620006a557620006a46200040f565b5b620006b182546200046d565b620006be828285620005e3565b600060209050601f831160018114620006f65760008415620006e1578287015190505b620006ed858262000660565b8655506200075d565b601f1984166200070686620004a2565b60005b82811015620007305784890151825560018201915060208501945060208101905062000709565b868310156200075057848901516200074c601f89168262000640565b8355505b6001600288020188555050505b505050505050565b600080fd5b62000775816200052a565b81146200078157600080fd5b50565b60008151905062000795816200076a565b92915050565b600060208284031215620007b457620007b362000765565b5b6000620007c48482850162000784565b91505092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000816601f83620007cd565b91506200082382620007de565b602082019050919050565b60006020820190508181036000830152620008498162000807565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200088c826200052a565b915062000899836200052a565b9250828201905080821115620008b457620008b362000850565b5b92915050565b620008c5816200052a565b82525050565b6000602082019050620008e26000830184620008ba565b92915050565b61159780620008f86000396000f3fe6080604052600436106100f75760003560e01c806395d89b411161008a578063b2bdfa7b11610059578063b2bdfa7b14610382578063cdddd09e146103ad578063dd62ed3e146103c9578063ea46193e14610406576100fe565b806395d89b41146102a0578063a457c2d7146102cb578063a9059cbb14610308578063aed619e614610345576100fe565b8063313ce567116100c6578063313ce567146101d057806339509351146101fb5780636f9fb98a1461023857806370a0823114610263576100fe565b806306fdde0314610100578063095ea7b31461012b57806318160ddd1461016857806323b872dd14610193576100fe565b366100fe57005b005b34801561010c57600080fd5b50610115610431565b6040516101229190610dde565b60405180910390f35b34801561013757600080fd5b50610152600480360381019061014d9190610e99565b6104c3565b60405161015f9190610ef4565b60405180910390f35b34801561017457600080fd5b5061017d6104e6565b60405161018a9190610f1e565b60405180910390f35b34801561019f57600080fd5b506101ba60048036038101906101b59190610f39565b6104f0565b6040516101c79190610ef4565b60405180910390f35b3480156101dc57600080fd5b506101e561051f565b6040516101f29190610fa8565b60405180910390f35b34801561020757600080fd5b50610222600480360381019061021d9190610e99565b610528565b60405161022f9190610ef4565b60405180910390f35b34801561024457600080fd5b5061024d61055f565b60405161025a9190610f1e565b60405180910390f35b34801561026f57600080fd5b5061028a60048036038101906102859190610fc3565b6105c1565b6040516102979190610f1e565b60405180910390f35b3480156102ac57600080fd5b506102b5610609565b6040516102c29190610dde565b60405180910390f35b3480156102d757600080fd5b506102f260048036038101906102ed9190610e99565b61069b565b6040516102ff9190610ef4565b60405180910390f35b34801561031457600080fd5b5061032f600480360381019061032a9190610e99565b610712565b60405161033c9190610ef4565b60405180910390f35b34801561035157600080fd5b5061036c60048036038101906103679190610fc3565b610735565b6040516103799190610f1e565b60405180910390f35b34801561038e57600080fd5b50610397610747565b6040516103a49190610fff565b60405180910390f35b6103c760048036038101906103c29190610e99565b61076d565b005b3480156103d557600080fd5b506103f060048036038101906103eb919061101a565b6107cb565b6040516103fd9190610f1e565b60405180910390f35b34801561041257600080fd5b5061041b610852565b6040516104289190610f1e565b60405180910390f35b60606003805461044090611089565b80601f016020809104026020016040519081016040528092919081815260200182805461046c90611089565b80156104b95780601f1061048e576101008083540402835291602001916104b9565b820191906000526020600020905b81548152906001019060200180831161049c57829003601f168201915b5050505050905090565b6000806104ce610871565b90506104db818585610879565b600191505092915050565b6000600254905090565b6000806104fb610871565b9050610508858285610a42565b610513858585610ace565b60019150509392505050565b60006012905090565b600080610533610871565b905061055481858561054585896107cb565b61054f91906110e9565b610879565b600191505092915050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105bb57600080fd5b47905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461061890611089565b80601f016020809104026020016040519081016040528092919081815260200182805461064490611089565b80156106915780601f1061066657610100808354040283529160200191610691565b820191906000526020600020905b81548152906001019060200180831161067457829003601f168201915b5050505050905090565b6000806106a6610871565b905060006106b482866107cb565b9050838110156106f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f09061118f565b60405180910390fd5b6107068286868403610879565b60019250505092915050565b60008061071d610871565b905061072a818585610ace565b600191505092915050565b6000610740826105c1565b9050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081116107b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a7906111fb565b60405180910390fd5b6107ba33826104c3565b506107c63383836104f0565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60003373ffffffffffffffffffffffffffffffffffffffff1631905090565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108df9061128d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610957576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094e9061131f565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a359190610f1e565b60405180910390a3505050565b6000610a4e84846107cb565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ac85781811015610aba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab19061138b565b60405180910390fd5b610ac78484848403610879565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b349061141d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610bac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba3906114af565b60405180910390fd5b610bb7838383610d44565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3490611541565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d2b9190610f1e565b60405180910390a3610d3e848484610d49565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d88578082015181840152602081019050610d6d565b60008484015250505050565b6000601f19601f8301169050919050565b6000610db082610d4e565b610dba8185610d59565b9350610dca818560208601610d6a565b610dd381610d94565b840191505092915050565b60006020820190508181036000830152610df88184610da5565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e3082610e05565b9050919050565b610e4081610e25565b8114610e4b57600080fd5b50565b600081359050610e5d81610e37565b92915050565b6000819050919050565b610e7681610e63565b8114610e8157600080fd5b50565b600081359050610e9381610e6d565b92915050565b60008060408385031215610eb057610eaf610e00565b5b6000610ebe85828601610e4e565b9250506020610ecf85828601610e84565b9150509250929050565b60008115159050919050565b610eee81610ed9565b82525050565b6000602082019050610f096000830184610ee5565b92915050565b610f1881610e63565b82525050565b6000602082019050610f336000830184610f0f565b92915050565b600080600060608486031215610f5257610f51610e00565b5b6000610f6086828701610e4e565b9350506020610f7186828701610e4e565b9250506040610f8286828701610e84565b9150509250925092565b600060ff82169050919050565b610fa281610f8c565b82525050565b6000602082019050610fbd6000830184610f99565b92915050565b600060208284031215610fd957610fd8610e00565b5b6000610fe784828501610e4e565b91505092915050565b610ff981610e25565b82525050565b60006020820190506110146000830184610ff0565b92915050565b6000806040838503121561103157611030610e00565b5b600061103f85828601610e4e565b925050602061105085828601610e4e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806110a157607f821691505b6020821081036110b4576110b361105a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110f482610e63565b91506110ff83610e63565b9250828201905080821115611117576111166110ba565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611179602583610d59565b91506111848261111d565b604082019050919050565b600060208201905081810360008301526111a88161116c565b9050919050565b7f416d6f756e74206d7573742067726561746572207468616e207a65726f000000600082015250565b60006111e5601d83610d59565b91506111f0826111af565b602082019050919050565b60006020820190508181036000830152611214816111d8565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611277602483610d59565b91506112828261121b565b604082019050919050565b600060208201905081810360008301526112a68161126a565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611309602283610d59565b9150611314826112ad565b604082019050919050565b60006020820190508181036000830152611338816112fc565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611375601d83610d59565b91506113808261133f565b602082019050919050565b600060208201905081810360008301526113a481611368565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611407602583610d59565b9150611412826113ab565b604082019050919050565b60006020820190508181036000830152611436816113fa565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611499602383610d59565b91506114a48261143d565b604082019050919050565b600060208201905081810360008301526114c88161148c565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061152b602683610d59565b9150611536826114cf565b604082019050919050565b6000602082019050818103600083015261155a8161151e565b905091905056fea26469706673582212208fbcaecba4279ba57001dfd00231d2fe54c8884a55d7fdd2aa8eb894e699be5564736f6c63430008130033";

type BUSDHandlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BUSDHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BUSDHandler__factory extends ContractFactory {
  constructor(...args: BUSDHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  override deploy(
    initialSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialSupply, overrides || {}) as Promise<
      BUSDHandler & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BUSDHandler__factory {
    return super.connect(runner) as BUSDHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BUSDHandlerInterface {
    return new Interface(_abi) as BUSDHandlerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): BUSDHandler {
    return new Contract(address, _abi, runner) as unknown as BUSDHandler;
  }
}
