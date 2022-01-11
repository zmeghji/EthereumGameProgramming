var Marketplace = {
  "contractName": "Marketplace",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IERC1155",
          "name": "token",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "stateMutability": "payable",
      "type": "receive",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "buyTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.9+commit.e5eed63a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract IERC1155\",\"name\":\"token\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"buyTokens\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"onERC1155Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Marketplace.sol\":\"Marketplace\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"keccak256\":\"0x8e93de94c9062ebc94fb7e2e3929b0781ac6a2b7772e2f7a59045861c93e5be9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f920a631bf986c610fe573d3c70a2bb6f224f86f4a8550016470c7ee476c9ab5\",\"dweb:/ipfs/QmYzsyVMfnaREKHcHv5RPS8Xg5r1Q38E2SDsGBTnXeFWzb\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"project:/contracts/Marketplace.sol\":{\"keccak256\":\"0x1537478fdae3b22f8ed40022d275947ed2ac58ded8175d4d269a70ea4b4ddb35\",\"urls\":[\"bzz-raw://54a22234ffb4496f780c80a6e79b2e85094ba73d8b57ee43aa68dc88a41821d4\",\"dweb:/ipfs/QmQjq9Dun9WdBFuVzv7gKGzcKTwYqXxuek2cLaqb3SHW23\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b506040516106af3803806106af83398181016040528101906100329190610185565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561006c57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550655af3107a400060016000600181526020019081526020016000208190555065b5e620f48000600160006002815260200190815260200160002081905550660110d9316ec000600160006003815260200190815260200160002081905550506101b2565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061014082610115565b9050919050565b600061015282610135565b9050919050565b61016281610147565b811461016d57600080fd5b50565b60008151905061017f81610159565b92915050565b60006020828403121561019b5761019a610110565b5b60006101a984828501610170565b91505092915050565b6104ee806101c16000396000f3fe60806040526004361061002d5760003560e01c80633610724e14610043578063f23a6e611461005f5761003e565b3661003e5761003c600061009c565b005b600080fd5b61005d600480360381019061005891906101e6565b61009c565b005b34801561006b57600080fd5b50610086600480360381019061008191906102d6565b610177565b60405161009391906103ab565b60405180910390f35b6000349050600160008381526020019081526020016000205481101580156100d857506000600160008481526020019081526020016000205414155b6100e157600080fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a30338560016040518563ffffffff1660e01b81526004016101419493929190610460565b600060405180830381600087803b15801561015b57600080fd5b505af115801561016f573d6000803e3d6000fd5b505050505050565b60007ff23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf9790509695505050505050565b600080fd5b600080fd5b6000819050919050565b6101c3816101b0565b81146101ce57600080fd5b50565b6000813590506101e0816101ba565b92915050565b6000602082840312156101fc576101fb6101a6565b5b600061020a848285016101d1565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061023e82610213565b9050919050565b61024e81610233565b811461025957600080fd5b50565b60008135905061026b81610245565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261029657610295610271565b5b8235905067ffffffffffffffff8111156102b3576102b2610276565b5b6020830191508360018202830111156102cf576102ce61027b565b5b9250929050565b60008060008060008060a087890312156102f3576102f26101a6565b5b600061030189828a0161025c565b965050602061031289828a0161025c565b955050604061032389828a016101d1565b945050606061033489828a016101d1565b935050608087013567ffffffffffffffff811115610355576103546101ab565b5b61036189828a01610280565b92509250509295509295509295565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6103a581610370565b82525050565b60006020820190506103c0600083018461039c565b92915050565b6103cf81610233565b82525050565b6103de816101b0565b82525050565b6000819050919050565b6000819050919050565b600061041361040e610409846103e4565b6103ee565b6101b0565b9050919050565b610423816103f8565b82525050565b600082825260208201905092915050565b50565b600061044a600083610429565b91506104558261043a565b600082019050919050565b600060a08201905061047560008301876103c6565b61048260208301866103c6565b61048f60408301856103d5565b61049c606083018461041a565b81810360808301526104ad8161043d565b90509594505050505056fea26469706673582212202b8085c7a4b5c4e2c2c21e1214174160c3dd7c294674480da2d4903c94b610aa64736f6c63430008090033",
  "deployedBytecode": "0x60806040526004361061002d5760003560e01c80633610724e14610043578063f23a6e611461005f5761003e565b3661003e5761003c600061009c565b005b600080fd5b61005d600480360381019061005891906101e6565b61009c565b005b34801561006b57600080fd5b50610086600480360381019061008191906102d6565b610177565b60405161009391906103ab565b60405180910390f35b6000349050600160008381526020019081526020016000205481101580156100d857506000600160008481526020019081526020016000205414155b6100e157600080fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a30338560016040518563ffffffff1660e01b81526004016101419493929190610460565b600060405180830381600087803b15801561015b57600080fd5b505af115801561016f573d6000803e3d6000fd5b505050505050565b60007ff23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf9790509695505050505050565b600080fd5b600080fd5b6000819050919050565b6101c3816101b0565b81146101ce57600080fd5b50565b6000813590506101e0816101ba565b92915050565b6000602082840312156101fc576101fb6101a6565b5b600061020a848285016101d1565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061023e82610213565b9050919050565b61024e81610233565b811461025957600080fd5b50565b60008135905061026b81610245565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261029657610295610271565b5b8235905067ffffffffffffffff8111156102b3576102b2610276565b5b6020830191508360018202830111156102cf576102ce61027b565b5b9250929050565b60008060008060008060a087890312156102f3576102f26101a6565b5b600061030189828a0161025c565b965050602061031289828a0161025c565b955050604061032389828a016101d1565b945050606061033489828a016101d1565b935050608087013567ffffffffffffffff811115610355576103546101ab565b5b61036189828a01610280565b92509250509295509295509295565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6103a581610370565b82525050565b60006020820190506103c0600083018461039c565b92915050565b6103cf81610233565b82525050565b6103de816101b0565b82525050565b6000819050919050565b6000819050919050565b600061041361040e610409846103e4565b6103ee565b6101b0565b9050919050565b610423816103f8565b82525050565b600082825260208201905092915050565b50565b600061044a600083610429565b91506104558261043a565b600082019050919050565b600060a08201905061047560008301876103c6565b61048260208301866103c6565b61048f60408301856103d5565b61049c606083018461041a565b81810360808301526104ad8161043d565b90509594505050505056fea26469706673582212202b8085c7a4b5c4e2c2c21e1214174160c3dd7c294674480da2d4903c94b610aa64736f6c63430008090033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:1420:25",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:25",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:25",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:25"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:25"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "40:6:25",
                "type": ""
              }
            ],
            "src": "7:75:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:25",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:25",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:25"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:25",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:25",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:25"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "379:81:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "389:65:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "404:5:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "411:42:25",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "400:3:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "400:54:25"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "389:7:25"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "361:5:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "371:7:25",
                "type": ""
              }
            ],
            "src": "334:126:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "511:51:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "521:35:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "550:5:25"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "532:17:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "532:24:25"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "521:7:25"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "493:5:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "503:7:25",
                "type": ""
              }
            ],
            "src": "466:96:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "630:51:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "640:35:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "669:5:25"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "651:17:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "651:24:25"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "640:7:25"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_contract$_IERC1155_$1841",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "612:5:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "622:7:25",
                "type": ""
              }
            ],
            "src": "568:113:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "747:96:25",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "821:16:25",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "830:1:25",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "833:1:25",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "823:6:25"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "823:12:25"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "823:12:25"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "770:5:25"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "812:5:25"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_contract$_IERC1155_$1841",
                              "nodeType": "YulIdentifier",
                              "src": "777:34:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "777:41:25"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "767:2:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "767:52:25"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "760:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "760:60:25"
                  },
                  "nodeType": "YulIf",
                  "src": "757:80:25"
                }
              ]
            },
            "name": "validator_revert_t_contract$_IERC1155_$1841",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "740:5:25",
                "type": ""
              }
            ],
            "src": "687:156:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "929:97:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "939:22:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "954:6:25"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "948:5:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "948:13:25"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "939:5:25"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1014:5:25"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_contract$_IERC1155_$1841",
                      "nodeType": "YulIdentifier",
                      "src": "970:43:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "970:50:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "970:50:25"
                }
              ]
            },
            "name": "abi_decode_t_contract$_IERC1155_$1841_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "907:6:25",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "915:3:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "923:5:25",
                "type": ""
              }
            ],
            "src": "849:177:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1126:291:25",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1172:83:25",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "1174:77:25"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1174:79:25"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1174:79:25"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1147:7:25"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1156:9:25"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1143:3:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1143:23:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1168:2:25",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1139:3:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1139:32:25"
                  },
                  "nodeType": "YulIf",
                  "src": "1136:119:25"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1265:145:25",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1280:15:25",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1294:1:25",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1284:6:25",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1309:91:25",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1372:9:25"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1383:6:25"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1368:3:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1368:22:25"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1392:7:25"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_contract$_IERC1155_$1841_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "1319:48:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1319:81:25"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1309:6:25"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_contract$_IERC1155_$1841_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1096:9:25",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1107:7:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1119:6:25",
                "type": ""
              }
            ],
            "src": "1032:385:25"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_contract$_IERC1155_$1841(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function validator_revert_t_contract$_IERC1155_$1841(value) {\n        if iszero(eq(value, cleanup_t_contract$_IERC1155_$1841(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_IERC1155_$1841_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_contract$_IERC1155_$1841(value)\n    }\n\n    function abi_decode_tuple_t_contract$_IERC1155_$1841_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_contract$_IERC1155_$1841_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
      "id": 25,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:6349:25",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:25",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:25",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:25"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:25"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "40:6:25",
                "type": ""
              }
            ],
            "src": "7:75:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:25",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:25",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:25"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:25",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:25",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:25"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "379:32:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "389:16:25",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "400:5:25"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "389:7:25"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "361:5:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "371:7:25",
                "type": ""
              }
            ],
            "src": "334:77:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "460:79:25",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "517:16:25",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "526:1:25",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "529:1:25",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "519:6:25"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "519:12:25"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "519:12:25"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "483:5:25"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "508:5:25"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "490:17:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "490:24:25"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "480:2:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "480:35:25"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "473:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "473:43:25"
                  },
                  "nodeType": "YulIf",
                  "src": "470:63:25"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "453:5:25",
                "type": ""
              }
            ],
            "src": "417:122:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "597:87:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "607:29:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "629:6:25"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "616:12:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "616:20:25"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "607:5:25"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "672:5:25"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "645:26:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "645:33:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "645:33:25"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "575:6:25",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "583:3:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "591:5:25",
                "type": ""
              }
            ],
            "src": "545:139:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "756:263:25",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "802:83:25",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "804:77:25"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "804:79:25"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "804:79:25"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "777:7:25"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "786:9:25"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "773:3:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "773:23:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "798:2:25",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "769:3:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "769:32:25"
                  },
                  "nodeType": "YulIf",
                  "src": "766:119:25"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "895:117:25",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "910:15:25",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "924:1:25",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "914:6:25",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "939:63:25",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "974:9:25"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "985:6:25"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "970:3:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "970:22:25"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "994:7:25"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "949:20:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "949:53:25"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "939:6:25"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "726:9:25",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "737:7:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "749:6:25",
                "type": ""
              }
            ],
            "src": "690:329:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1070:81:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1080:65:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1095:5:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1102:42:25",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1091:3:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1091:54:25"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1080:7:25"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1052:5:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1062:7:25",
                "type": ""
              }
            ],
            "src": "1025:126:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1202:51:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1212:35:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1241:5:25"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "1223:17:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1223:24:25"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1212:7:25"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1184:5:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1194:7:25",
                "type": ""
              }
            ],
            "src": "1157:96:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1302:79:25",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1359:16:25",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1368:1:25",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1371:1:25",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1361:6:25"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1361:12:25"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1361:12:25"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1325:5:25"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1350:5:25"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "1332:17:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1332:24:25"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "1322:2:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1322:35:25"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1315:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1315:43:25"
                  },
                  "nodeType": "YulIf",
                  "src": "1312:63:25"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1295:5:25",
                "type": ""
              }
            ],
            "src": "1259:122:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1439:87:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1449:29:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1471:6:25"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1458:12:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1458:20:25"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1449:5:25"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1514:5:25"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "1487:26:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1487:33:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1487:33:25"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "1417:6:25",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1425:3:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1433:5:25",
                "type": ""
              }
            ],
            "src": "1387:139:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1621:28:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1638:1:25",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1641:1:25",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "1631:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1631:12:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1631:12:25"
                }
              ]
            },
            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            "nodeType": "YulFunctionDefinition",
            "src": "1532:117:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1744:28:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1761:1:25",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1764:1:25",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "1754:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1754:12:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1754:12:25"
                }
              ]
            },
            "name": "revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490",
            "nodeType": "YulFunctionDefinition",
            "src": "1655:117:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1867:28:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1884:1:25",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1887:1:25",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "1877:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1877:12:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1877:12:25"
                }
              ]
            },
            "name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
            "nodeType": "YulFunctionDefinition",
            "src": "1778:117:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1988:478:25",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2037:83:25",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulIdentifier",
                            "src": "2039:77:25"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2039:79:25"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2039:79:25"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2016:6:25"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2024:4:25",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2012:3:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2012:17:25"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "2031:3:25"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "2008:3:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2008:27:25"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2001:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2001:35:25"
                  },
                  "nodeType": "YulIf",
                  "src": "1998:122:25"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2129:30:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2152:6:25"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2139:12:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2139:20:25"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "2129:6:25"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2202:83:25",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490",
                            "nodeType": "YulIdentifier",
                            "src": "2204:77:25"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2204:79:25"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2204:79:25"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2174:6:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2182:18:25",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2171:2:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2171:30:25"
                  },
                  "nodeType": "YulIf",
                  "src": "2168:117:25"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2294:29:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2310:6:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2318:4:25",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2306:3:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2306:17:25"
                  },
                  "variableNames": [
                    {
                      "name": "arrayPos",
                      "nodeType": "YulIdentifier",
                      "src": "2294:8:25"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2377:83:25",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef",
                            "nodeType": "YulIdentifier",
                            "src": "2379:77:25"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2379:79:25"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2379:79:25"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "arrayPos",
                            "nodeType": "YulIdentifier",
                            "src": "2342:8:25"
                          },
                          {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "2356:6:25"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2364:4:25",
                                "type": "",
                                "value": "0x01"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "2352:3:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2352:17:25"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2338:3:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2338:32:25"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2372:3:25"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2335:2:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2335:41:25"
                  },
                  "nodeType": "YulIf",
                  "src": "2332:128:25"
                }
              ]
            },
            "name": "abi_decode_t_bytes_calldata_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "1955:6:25",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1963:3:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "arrayPos",
                "nodeType": "YulTypedName",
                "src": "1971:8:25",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1981:6:25",
                "type": ""
              }
            ],
            "src": "1914:552:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2625:956:25",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2672:83:25",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "2674:77:25"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2674:79:25"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2674:79:25"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2646:7:25"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2655:9:25"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2642:3:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2642:23:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2667:3:25",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2638:3:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2638:33:25"
                  },
                  "nodeType": "YulIf",
                  "src": "2635:120:25"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2765:117:25",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2780:15:25",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2794:1:25",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2784:6:25",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2809:63:25",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2844:9:25"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2855:6:25"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2840:3:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2840:22:25"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2864:7:25"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "2819:20:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2819:53:25"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2809:6:25"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2892:118:25",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2907:16:25",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2921:2:25",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2911:6:25",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2937:63:25",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2972:9:25"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2983:6:25"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2968:3:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2968:22:25"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2992:7:25"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "2947:20:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2947:53:25"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "2937:6:25"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3020:118:25",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3035:16:25",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3049:2:25",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3039:6:25",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3065:63:25",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3100:9:25"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3111:6:25"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3096:3:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3096:22:25"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3120:7:25"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "3075:20:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3075:53:25"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "3065:6:25"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3148:118:25",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3163:16:25",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3177:2:25",
                        "type": "",
                        "value": "96"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3167:6:25",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3193:63:25",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3228:9:25"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3239:6:25"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3224:3:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3224:22:25"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3248:7:25"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "3203:20:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3203:53:25"
                      },
                      "variableNames": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "3193:6:25"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3276:298:25",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3291:47:25",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3322:9:25"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3333:3:25",
                                "type": "",
                                "value": "128"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3318:3:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3318:19:25"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "3305:12:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3305:33:25"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3295:6:25",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3385:83:25",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "3387:77:25"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3387:79:25"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3387:79:25"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3357:6:25"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3365:18:25",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3354:2:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3354:30:25"
                      },
                      "nodeType": "YulIf",
                      "src": "3351:117:25"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3482:82:25",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3536:9:25"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3547:6:25"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3532:3:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3532:22:25"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3556:7:25"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes_calldata_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "3500:31:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3500:64:25"
                      },
                      "variableNames": [
                        {
                          "name": "value4",
                          "nodeType": "YulIdentifier",
                          "src": "3482:6:25"
                        },
                        {
                          "name": "value5",
                          "nodeType": "YulIdentifier",
                          "src": "3490:6:25"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_calldata_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2555:9:25",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2566:7:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2578:6:25",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2586:6:25",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2594:6:25",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "2602:6:25",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "2610:6:25",
                "type": ""
              },
              {
                "name": "value5",
                "nodeType": "YulTypedName",
                "src": "2618:6:25",
                "type": ""
              }
            ],
            "src": "2472:1109:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3631:105:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3641:89:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3656:5:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3663:66:25",
                        "type": "",
                        "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "3652:3:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3652:78:25"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "3641:7:25"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3613:5:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "3623:7:25",
                "type": ""
              }
            ],
            "src": "3587:149:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3805:52:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3822:3:25"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3844:5:25"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_bytes4",
                          "nodeType": "YulIdentifier",
                          "src": "3827:16:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3827:23:25"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3815:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3815:36:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3815:36:25"
                }
              ]
            },
            "name": "abi_encode_t_bytes4_to_t_bytes4_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3793:5:25",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3800:3:25",
                "type": ""
              }
            ],
            "src": "3742:115:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3959:122:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3969:26:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3981:9:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3992:2:25",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3977:3:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3977:18:25"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3969:4:25"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4047:6:25"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4060:9:25"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4071:1:25",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4056:3:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4056:17:25"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bytes4_to_t_bytes4_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4005:41:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4005:69:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4005:69:25"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3931:9:25",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3943:6:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3954:4:25",
                "type": ""
              }
            ],
            "src": "3863:218:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4152:53:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4169:3:25"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4192:5:25"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4174:17:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4174:24:25"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4162:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4162:37:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4162:37:25"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4140:5:25",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4147:3:25",
                "type": ""
              }
            ],
            "src": "4087:118:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4276:53:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4293:3:25"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4316:5:25"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4298:17:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4298:24:25"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4286:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4286:37:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4286:37:25"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4264:5:25",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4271:3:25",
                "type": ""
              }
            ],
            "src": "4211:118:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4388:32:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4398:16:25",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "4409:5:25"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "4398:7:25"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_rational_1_by_1",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4370:5:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "4380:7:25",
                "type": ""
              }
            ],
            "src": "4335:85:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4458:28:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4468:12:25",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "4475:5:25"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "4468:3:25"
                    }
                  ]
                }
              ]
            },
            "name": "identity",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4444:5:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "4454:3:25",
                "type": ""
              }
            ],
            "src": "4426:60:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4560:90:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4570:74:25",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4636:5:25"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_rational_1_by_1",
                              "nodeType": "YulIdentifier",
                              "src": "4610:25:25"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4610:32:25"
                          }
                        ],
                        "functionName": {
                          "name": "identity",
                          "nodeType": "YulIdentifier",
                          "src": "4601:8:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4601:42:25"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "4583:17:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4583:61:25"
                  },
                  "variableNames": [
                    {
                      "name": "converted",
                      "nodeType": "YulIdentifier",
                      "src": "4570:9:25"
                    }
                  ]
                }
              ]
            },
            "name": "convert_t_rational_1_by_1_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4540:5:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "converted",
                "nodeType": "YulTypedName",
                "src": "4550:9:25",
                "type": ""
              }
            ],
            "src": "4492:158:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4729:74:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4746:3:25"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4790:5:25"
                          }
                        ],
                        "functionName": {
                          "name": "convert_t_rational_1_by_1_to_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4751:38:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4751:45:25"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4739:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4739:58:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4739:58:25"
                }
              ]
            },
            "name": "abi_encode_t_rational_1_by_1_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4717:5:25",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4724:3:25",
                "type": ""
              }
            ],
            "src": "4656:147:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4904:73:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4921:3:25"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4926:6:25"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4914:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4914:19:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4914:19:25"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4942:29:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4961:3:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4966:4:25",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4957:3:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4957:14:25"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "4942:11:25"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4876:3:25",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "4881:6:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "4892:11:25",
                "type": ""
              }
            ],
            "src": "4809:168:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5089:8:25",
              "statements": []
            },
            "name": "store_literal_in_memory_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "5081:6:25",
                "type": ""
              }
            ],
            "src": "4983:114:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5248:217:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5258:72:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5323:3:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5328:1:25",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5265:57:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5265:65:25"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "5258:3:25"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5428:3:25"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                      "nodeType": "YulIdentifier",
                      "src": "5339:88:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5339:93:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5339:93:25"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5441:18:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5452:3:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5457:1:25",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5448:3:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5448:11:25"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "5441:3:25"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "5236:3:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "5244:3:25",
                "type": ""
              }
            ],
            "src": "5103:362:25"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5761:585:25",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5771:27:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5783:9:25"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5794:3:25",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5779:3:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5779:19:25"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5771:4:25"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5852:6:25"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5865:9:25"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5876:1:25",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5861:3:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5861:17:25"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5808:43:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5808:71:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5808:71:25"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "5933:6:25"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5946:9:25"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5957:2:25",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5942:3:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5942:18:25"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5889:43:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5889:72:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5889:72:25"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "6015:6:25"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6028:9:25"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6039:2:25",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6024:3:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6024:18:25"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5971:43:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5971:72:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5971:72:25"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "6105:6:25"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6118:9:25"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6129:2:25",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6114:3:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6114:18:25"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_rational_1_by_1_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6053:51:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6053:80:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6053:80:25"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6154:9:25"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6165:3:25",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6150:3:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6150:19:25"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "6175:4:25"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6181:9:25"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6171:3:25"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6171:20:25"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6143:6:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6143:49:25"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6143:49:25"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6201:138:25",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6334:4:25"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "6209:123:25"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6209:130:25"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6201:4:25"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_rational_1_by_1_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470__to_t_address_t_address_t_uint256_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5709:9:25",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "5721:6:25",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "5729:6:25",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5737:6:25",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5745:6:25",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5756:4:25",
                "type": ""
              }
            ],
            "src": "5471:875:25"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490() {\n        revert(0, 0)\n    }\n\n    function revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() {\n        revert(0, 0)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_calldata_ptr(offset, end) -> arrayPos, length {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        length := calldataload(offset)\n        if gt(length, 0xffffffffffffffff) { revert_error_15abf5612cd996bc235ba1e55a4a30ac60e6bb601ff7ba4ad3f179b6be8d0490() }\n        arrayPos := add(offset, 0x20)\n        if gt(add(arrayPos, mul(length, 0x01)), end) { revert_error_81385d8c0b31fffe14be1da910c8bd3a80be4cfa248e04f42ec0faea3132a8ef() }\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_calldata_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4, value5 {\n        if slt(sub(dataEnd, headStart), 160) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 96\n\n            value3 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 128))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value4, value5 := abi_decode_t_bytes_calldata_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bytes4(value) -> cleaned {\n        cleaned := and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    }\n\n    function abi_encode_t_bytes4_to_t_bytes4_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bytes4(value))\n    }\n\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bytes4_to_t_bytes4_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function cleanup_t_rational_1_by_1(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_rational_1_by_1_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_rational_1_by_1(value)))\n    }\n\n    function abi_encode_t_rational_1_by_1_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, convert_t_rational_1_by_1_to_t_uint256(value))\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470(memPtr) {\n\n    }\n\n    function abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, 0)\n        store_literal_in_memory_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470(pos)\n        end := add(pos, 0)\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_rational_1_by_1_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470__to_t_address_t_address_t_uint256_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 160)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        abi_encode_t_rational_1_by_1_to_t_uint256_fromStack(value3,  add(headStart, 96))\n\n        mstore(add(headStart, 128), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
      "id": 25,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "95:895:22:-:0;;;194:228;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;275:1;249:28;;257:5;249:28;;;;241:37;;;;;;298:5;289:6;;:14;;;;;;;;;;;;;;;;;;325:15;314:5;:8;320:1;314:8;;;;;;;;;;;:26;;;;362:15;351:5;:8;357:1;351:8;;;;;;;;;;;:26;;;;399:15;388:5;:8;394:1;388:8;;;;;;;;;;;:26;;;;194:228;95:895;;88:117:25;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:113::-;622:7;651:24;669:5;651:24;:::i;:::-;640:35;;568:113;;;:::o;687:156::-;777:41;812:5;777:41;:::i;:::-;770:5;767:52;757:80;;833:1;830;823:12;757:80;687:156;:::o;849:177::-;923:5;954:6;948:13;939:22;;970:50;1014:5;970:50;:::i;:::-;849:177;;;;:::o;1032:385::-;1119:6;1168:2;1156:9;1147:7;1143:23;1139:32;1136:119;;;1174:79;;:::i;:::-;1136:119;1294:1;1319:81;1392:7;1383:6;1372:9;1368:22;1319:81;:::i;:::-;1309:91;;1265:145;1032:385;;;;:::o;95:895:22:-;;;;;;;",
  "deployedSourceMap": "95:895:22:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;468:12;478:1;468:9;:12::i;:::-;95:895;;;;;496:246;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;748:239;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;496:246;554:17;574:9;554:29;;615:5;:14;621:7;615:14;;;;;;;;;;;;602:9;:27;;:50;;;;;651:1;633:5;:14;639:7;633:14;;;;;;;;;;;;:19;;602:50;594:59;;;;;;666:6;;;;;;;;;;:23;;;698:4;705:10;717:7;726:1;666:66;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;543:199;496:246;:::o;748:239::-;877:6;909:69;895:84;;748:239;;;;;;;;:::o;88:117:25:-;197:1;194;187:12;211:117;320:1;317;310:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:126::-;1062:7;1102:42;1095:5;1091:54;1080:65;;1025:126;;;:::o;1157:96::-;1194:7;1223:24;1241:5;1223:24;:::i;:::-;1212:35;;1157:96;;;:::o;1259:122::-;1332:24;1350:5;1332:24;:::i;:::-;1325:5;1322:35;1312:63;;1371:1;1368;1361:12;1312:63;1259:122;:::o;1387:139::-;1433:5;1471:6;1458:20;1449:29;;1487:33;1514:5;1487:33;:::i;:::-;1387:139;;;;:::o;1532:117::-;1641:1;1638;1631:12;1655:117;1764:1;1761;1754:12;1778:117;1887:1;1884;1877:12;1914:552;1971:8;1981:6;2031:3;2024:4;2016:6;2012:17;2008:27;1998:122;;2039:79;;:::i;:::-;1998:122;2152:6;2139:20;2129:30;;2182:18;2174:6;2171:30;2168:117;;;2204:79;;:::i;:::-;2168:117;2318:4;2310:6;2306:17;2294:29;;2372:3;2364:4;2356:6;2352:17;2342:8;2338:32;2335:41;2332:128;;;2379:79;;:::i;:::-;2332:128;1914:552;;;;;:::o;2472:1109::-;2578:6;2586;2594;2602;2610;2618;2667:3;2655:9;2646:7;2642:23;2638:33;2635:120;;;2674:79;;:::i;:::-;2635:120;2794:1;2819:53;2864:7;2855:6;2844:9;2840:22;2819:53;:::i;:::-;2809:63;;2765:117;2921:2;2947:53;2992:7;2983:6;2972:9;2968:22;2947:53;:::i;:::-;2937:63;;2892:118;3049:2;3075:53;3120:7;3111:6;3100:9;3096:22;3075:53;:::i;:::-;3065:63;;3020:118;3177:2;3203:53;3248:7;3239:6;3228:9;3224:22;3203:53;:::i;:::-;3193:63;;3148:118;3333:3;3322:9;3318:19;3305:33;3365:18;3357:6;3354:30;3351:117;;;3387:79;;:::i;:::-;3351:117;3500:64;3556:7;3547:6;3536:9;3532:22;3500:64;:::i;:::-;3482:82;;;;3276:298;2472:1109;;;;;;;;:::o;3587:149::-;3623:7;3663:66;3656:5;3652:78;3641:89;;3587:149;;;:::o;3742:115::-;3827:23;3844:5;3827:23;:::i;:::-;3822:3;3815:36;3742:115;;:::o;3863:218::-;3954:4;3992:2;3981:9;3977:18;3969:26;;4005:69;4071:1;4060:9;4056:17;4047:6;4005:69;:::i;:::-;3863:218;;;;:::o;4087:118::-;4174:24;4192:5;4174:24;:::i;:::-;4169:3;4162:37;4087:118;;:::o;4211:::-;4298:24;4316:5;4298:24;:::i;:::-;4293:3;4286:37;4211:118;;:::o;4335:85::-;4380:7;4409:5;4398:16;;4335:85;;;:::o;4426:60::-;4454:3;4475:5;4468:12;;4426:60;;;:::o;4492:158::-;4550:9;4583:61;4601:42;4610:32;4636:5;4610:32;:::i;:::-;4601:42;:::i;:::-;4583:61;:::i;:::-;4570:74;;4492:158;;;:::o;4656:147::-;4751:45;4790:5;4751:45;:::i;:::-;4746:3;4739:58;4656:147;;:::o;4809:168::-;4892:11;4926:6;4921:3;4914:19;4966:4;4961:3;4957:14;4942:29;;4809:168;;;;:::o;4983:114::-;;:::o;5103:362::-;5244:3;5265:65;5328:1;5323:3;5265:65;:::i;:::-;5258:72;;5339:93;5428:3;5339:93;:::i;:::-;5457:1;5452:3;5448:11;5441:18;;5103:362;;;:::o;5471:875::-;5756:4;5794:3;5783:9;5779:19;5771:27;;5808:71;5876:1;5865:9;5861:17;5852:6;5808:71;:::i;:::-;5889:72;5957:2;5946:9;5942:18;5933:6;5889:72;:::i;:::-;5971;6039:2;6028:9;6024:18;6015:6;5971:72;:::i;:::-;6053:80;6129:2;6118:9;6114:18;6105:6;6053:80;:::i;:::-;6181:9;6175:4;6171:20;6165:3;6154:9;6150:19;6143:49;6209:130;6334:4;6209:130;:::i;:::-;6201:138;;5471:875;;;;;;;:::o",
  "source": "pragma solidity ^0.8.9;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\";\r\n\r\n\r\n\r\ncontract Marketplace {\r\n\r\n    IERC1155 private _token;\r\n\r\n    mapping (uint => uint) price;\r\n\r\n    constructor (IERC1155 token) public {\r\n        require(address(token) != address(0));\r\n        _token = token;\r\n        price[1] = 100000000000000;\r\n        price[2] = 200000000000000;\r\n        price[3] = 300000000000000;\r\n    }\r\n\r\n    receive() external payable {\r\n        buyTokens(0);\r\n    }\r\n\r\n    function buyTokens(uint tokenId) public payable{\r\n        uint256 weiAmount = msg.value;\r\n        require(weiAmount >= price[tokenId] && price[tokenId] != 0);\r\n\r\n        _token.safeTransferFrom(address(this), msg.sender, tokenId, 1, \"\");\r\n\r\n    }\r\n    function onERC1155Received(address _operator, address _from, uint256 _id, uint256 _value, bytes calldata _data) external returns(bytes4){\r\n        return bytes4(keccak256(\"onERC1155Received(address,address,uint256,uint256,bytes)\"));\r\n    }\r\n}",
  "sourcePath": "C:\\Code\\EthereumGameProgramming\\Truffle\\contracts\\Marketplace.sol",
  "ast": {
    "absolutePath": "project:/contracts/Marketplace.sol",
    "exportedSymbols": {
      "IERC1155": [
        1841
      ],
      "IERC165": [
        3419
      ],
      "Marketplace": [
        4167
      ]
    },
    "id": 4168,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4047,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".9"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:22"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC1155/IERC1155.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/IERC1155.sol",
        "id": 4048,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 4168,
        "sourceUnit": 1842,
        "src": "27:60:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Marketplace",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 4167,
        "linearizedBaseContracts": [
          4167
        ],
        "name": "Marketplace",
        "nameLocation": "104:11:22",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4051,
            "mutability": "mutable",
            "name": "_token",
            "nameLocation": "142:6:22",
            "nodeType": "VariableDeclaration",
            "scope": 4167,
            "src": "125:23:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC1155_$1841",
              "typeString": "contract IERC1155"
            },
            "typeName": {
              "id": 4050,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 4049,
                "name": "IERC1155",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1841,
                "src": "125:8:22"
              },
              "referencedDeclaration": 1841,
              "src": "125:8:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC1155_$1841",
                "typeString": "contract IERC1155"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 4055,
            "mutability": "mutable",
            "name": "price",
            "nameLocation": "180:5:22",
            "nodeType": "VariableDeclaration",
            "scope": 4167,
            "src": "157:28:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 4054,
              "keyType": {
                "id": 4052,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "166:4:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "157:22:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 4053,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "174:4:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 4095,
              "nodeType": "Block",
              "src": "230:192:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 4070,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 4064,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4058,
                              "src": "257:5:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC1155_$1841",
                                "typeString": "contract IERC1155"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC1155_$1841",
                                "typeString": "contract IERC1155"
                              }
                            ],
                            "id": 4063,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "249:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 4062,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "249:7:22",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 4065,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "249:14:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 4068,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "275:1:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 4067,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "267:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 4066,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "267:7:22",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 4069,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "267:10:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "249:28:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 4061,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "241:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4071,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "241:37:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4072,
                  "nodeType": "ExpressionStatement",
                  "src": "241:37:22"
                },
                {
                  "expression": {
                    "id": 4075,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4073,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4051,
                      "src": "289:6:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC1155_$1841",
                        "typeString": "contract IERC1155"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 4074,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4058,
                      "src": "298:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC1155_$1841",
                        "typeString": "contract IERC1155"
                      }
                    },
                    "src": "289:14:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC1155_$1841",
                      "typeString": "contract IERC1155"
                    }
                  },
                  "id": 4076,
                  "nodeType": "ExpressionStatement",
                  "src": "289:14:22"
                },
                {
                  "expression": {
                    "id": 4081,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 4077,
                        "name": "price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4055,
                        "src": "314:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 4079,
                      "indexExpression": {
                        "hexValue": "31",
                        "id": 4078,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "320:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "314:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "313030303030303030303030303030",
                      "id": 4080,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "325:15:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100000000000000_by_1",
                        "typeString": "int_const 100000000000000"
                      },
                      "value": "100000000000000"
                    },
                    "src": "314:26:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4082,
                  "nodeType": "ExpressionStatement",
                  "src": "314:26:22"
                },
                {
                  "expression": {
                    "id": 4087,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 4083,
                        "name": "price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4055,
                        "src": "351:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 4085,
                      "indexExpression": {
                        "hexValue": "32",
                        "id": 4084,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "357:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "351:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "323030303030303030303030303030",
                      "id": 4086,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "362:15:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_200000000000000_by_1",
                        "typeString": "int_const 200000000000000"
                      },
                      "value": "200000000000000"
                    },
                    "src": "351:26:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4088,
                  "nodeType": "ExpressionStatement",
                  "src": "351:26:22"
                },
                {
                  "expression": {
                    "id": 4093,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 4089,
                        "name": "price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4055,
                        "src": "388:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 4091,
                      "indexExpression": {
                        "hexValue": "33",
                        "id": 4090,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "394:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "388:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "333030303030303030303030303030",
                      "id": 4092,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "399:15:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_300000000000000_by_1",
                        "typeString": "int_const 300000000000000"
                      },
                      "value": "300000000000000"
                    },
                    "src": "388:26:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4094,
                  "nodeType": "ExpressionStatement",
                  "src": "388:26:22"
                }
              ]
            },
            "id": 4096,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4058,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "216:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4096,
                  "src": "207:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC1155_$1841",
                    "typeString": "contract IERC1155"
                  },
                  "typeName": {
                    "id": 4057,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 4056,
                      "name": "IERC1155",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 1841,
                      "src": "207:8:22"
                    },
                    "referencedDeclaration": 1841,
                    "src": "207:8:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC1155_$1841",
                      "typeString": "contract IERC1155"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "206:16:22"
            },
            "returnParameters": {
              "id": 4060,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "230:0:22"
            },
            "scope": 4167,
            "src": "194:228:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4103,
              "nodeType": "Block",
              "src": "457:31:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "30",
                        "id": 4100,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "478:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 4099,
                      "name": "buyTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4143,
                      "src": "468:9:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 4101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "468:12:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4102,
                  "nodeType": "ExpressionStatement",
                  "src": "468:12:22"
                }
              ]
            },
            "id": 4104,
            "implemented": true,
            "kind": "receive",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4097,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "437:2:22"
            },
            "returnParameters": {
              "id": 4098,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "457:0:22"
            },
            "scope": 4167,
            "src": "430:58:22",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 4142,
              "nodeType": "Block",
              "src": "543:199:22",
              "statements": [
                {
                  "assignments": [
                    4110
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4110,
                      "mutability": "mutable",
                      "name": "weiAmount",
                      "nameLocation": "562:9:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 4142,
                      "src": "554:17:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4109,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "554:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4113,
                  "initialValue": {
                    "expression": {
                      "id": 4111,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "574:3:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 4112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "value",
                    "nodeType": "MemberAccess",
                    "src": "574:9:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "554:29:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 4125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 4119,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 4115,
                            "name": "weiAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4110,
                            "src": "602:9:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "baseExpression": {
                              "id": 4116,
                              "name": "price",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4055,
                              "src": "615:5:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 4118,
                            "indexExpression": {
                              "id": 4117,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4106,
                              "src": "621:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "615:14:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "602:27:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 4124,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "id": 4120,
                              "name": "price",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4055,
                              "src": "633:5:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 4122,
                            "indexExpression": {
                              "id": 4121,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4106,
                              "src": "639:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "633:14:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 4123,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "651:1:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "633:19:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "602:50:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 4114,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "594:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "594:59:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4127,
                  "nodeType": "ExpressionStatement",
                  "src": "594:59:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 4133,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "698:4:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Marketplace_$4167",
                              "typeString": "contract Marketplace"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Marketplace_$4167",
                              "typeString": "contract Marketplace"
                            }
                          ],
                          "id": 4132,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "690:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 4131,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "690:7:22",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 4134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "690:13:22",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 4135,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "705:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 4136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "705:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 4137,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4106,
                        "src": "717:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "31",
                        "id": 4138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "726:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      {
                        "hexValue": "",
                        "id": 4139,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "729:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "id": 4128,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4051,
                        "src": "666:6:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC1155_$1841",
                          "typeString": "contract IERC1155"
                        }
                      },
                      "id": 4130,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1824,
                      "src": "666:23:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256,bytes memory) external"
                      }
                    },
                    "id": 4140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "666:66:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4141,
                  "nodeType": "ExpressionStatement",
                  "src": "666:66:22"
                }
              ]
            },
            "functionSelector": "3610724e",
            "id": 4143,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "buyTokens",
            "nameLocation": "505:9:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4106,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "520:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4143,
                  "src": "515:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "515:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "514:14:22"
            },
            "returnParameters": {
              "id": 4108,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "543:0:22"
            },
            "scope": 4167,
            "src": "496:246:22",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4165,
              "nodeType": "Block",
              "src": "884:103:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "6f6e45524331313535526563656976656428616464726573732c616464726573732c75696e743235362c75696e743235362c627974657329",
                            "id": 4161,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "919:58:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_f23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf97",
                              "typeString": "literal_string \"onERC1155Received(address,address,uint256,uint256,bytes)\""
                            },
                            "value": "onERC1155Received(address,address,uint256,uint256,bytes)"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_f23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf97",
                              "typeString": "literal_string \"onERC1155Received(address,address,uint256,uint256,bytes)\""
                            }
                          ],
                          "id": 4160,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967288,
                          "src": "909:9:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 4162,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "909:69:22",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 4159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "902:6:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": {
                        "id": 4158,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "902:6:22",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 4163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "902:77:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 4157,
                  "id": 4164,
                  "nodeType": "Return",
                  "src": "895:84:22"
                }
              ]
            },
            "functionSelector": "f23a6e61",
            "id": 4166,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155Received",
            "nameLocation": "757:17:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4145,
                  "mutability": "mutable",
                  "name": "_operator",
                  "nameLocation": "783:9:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4166,
                  "src": "775:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4144,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "775:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4147,
                  "mutability": "mutable",
                  "name": "_from",
                  "nameLocation": "802:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4166,
                  "src": "794:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4146,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "794:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4149,
                  "mutability": "mutable",
                  "name": "_id",
                  "nameLocation": "817:3:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4166,
                  "src": "809:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4148,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "809:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4151,
                  "mutability": "mutable",
                  "name": "_value",
                  "nameLocation": "830:6:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4166,
                  "src": "822:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4150,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "822:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4153,
                  "mutability": "mutable",
                  "name": "_data",
                  "nameLocation": "853:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4166,
                  "src": "838:20:22",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4152,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "838:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "774:85:22"
            },
            "returnParameters": {
              "id": 4157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4156,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4166,
                  "src": "877:6:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 4155,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "877:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "876:8:22"
            },
            "scope": 4167,
            "src": "748:239:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 4168,
        "src": "95:895:22",
        "usedErrors": []
      }
    ],
    "src": "0:990:22"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/Marketplace.sol",
    "exportedSymbols": {
      "IERC1155": [
        1841
      ],
      "IERC165": [
        3419
      ],
      "Marketplace": [
        4167
      ]
    },
    "id": 4168,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4047,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".9"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:22"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC1155/IERC1155.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/IERC1155.sol",
        "id": 4048,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 4168,
        "sourceUnit": 1842,
        "src": "27:60:22",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Marketplace",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 4167,
        "linearizedBaseContracts": [
          4167
        ],
        "name": "Marketplace",
        "nameLocation": "104:11:22",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4051,
            "mutability": "mutable",
            "name": "_token",
            "nameLocation": "142:6:22",
            "nodeType": "VariableDeclaration",
            "scope": 4167,
            "src": "125:23:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC1155_$1841",
              "typeString": "contract IERC1155"
            },
            "typeName": {
              "id": 4050,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 4049,
                "name": "IERC1155",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1841,
                "src": "125:8:22"
              },
              "referencedDeclaration": 1841,
              "src": "125:8:22",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC1155_$1841",
                "typeString": "contract IERC1155"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 4055,
            "mutability": "mutable",
            "name": "price",
            "nameLocation": "180:5:22",
            "nodeType": "VariableDeclaration",
            "scope": 4167,
            "src": "157:28:22",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 4054,
              "keyType": {
                "id": 4052,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "166:4:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "157:22:22",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 4053,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "174:4:22",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 4095,
              "nodeType": "Block",
              "src": "230:192:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 4070,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 4064,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4058,
                              "src": "257:5:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IERC1155_$1841",
                                "typeString": "contract IERC1155"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_IERC1155_$1841",
                                "typeString": "contract IERC1155"
                              }
                            ],
                            "id": 4063,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "249:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 4062,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "249:7:22",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 4065,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "249:14:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 4068,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "275:1:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 4067,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "267:7:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 4066,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "267:7:22",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 4069,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "267:10:22",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "249:28:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 4061,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "241:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4071,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "241:37:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4072,
                  "nodeType": "ExpressionStatement",
                  "src": "241:37:22"
                },
                {
                  "expression": {
                    "id": 4075,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 4073,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4051,
                      "src": "289:6:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC1155_$1841",
                        "typeString": "contract IERC1155"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 4074,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4058,
                      "src": "298:5:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC1155_$1841",
                        "typeString": "contract IERC1155"
                      }
                    },
                    "src": "289:14:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC1155_$1841",
                      "typeString": "contract IERC1155"
                    }
                  },
                  "id": 4076,
                  "nodeType": "ExpressionStatement",
                  "src": "289:14:22"
                },
                {
                  "expression": {
                    "id": 4081,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 4077,
                        "name": "price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4055,
                        "src": "314:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 4079,
                      "indexExpression": {
                        "hexValue": "31",
                        "id": 4078,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "320:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "314:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "313030303030303030303030303030",
                      "id": 4080,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "325:15:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100000000000000_by_1",
                        "typeString": "int_const 100000000000000"
                      },
                      "value": "100000000000000"
                    },
                    "src": "314:26:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4082,
                  "nodeType": "ExpressionStatement",
                  "src": "314:26:22"
                },
                {
                  "expression": {
                    "id": 4087,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 4083,
                        "name": "price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4055,
                        "src": "351:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 4085,
                      "indexExpression": {
                        "hexValue": "32",
                        "id": 4084,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "357:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "351:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "323030303030303030303030303030",
                      "id": 4086,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "362:15:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_200000000000000_by_1",
                        "typeString": "int_const 200000000000000"
                      },
                      "value": "200000000000000"
                    },
                    "src": "351:26:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4088,
                  "nodeType": "ExpressionStatement",
                  "src": "351:26:22"
                },
                {
                  "expression": {
                    "id": 4093,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 4089,
                        "name": "price",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4055,
                        "src": "388:5:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 4091,
                      "indexExpression": {
                        "hexValue": "33",
                        "id": 4090,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "394:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "388:8:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "333030303030303030303030303030",
                      "id": 4092,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "399:15:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_300000000000000_by_1",
                        "typeString": "int_const 300000000000000"
                      },
                      "value": "300000000000000"
                    },
                    "src": "388:26:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 4094,
                  "nodeType": "ExpressionStatement",
                  "src": "388:26:22"
                }
              ]
            },
            "id": 4096,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4059,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4058,
                  "mutability": "mutable",
                  "name": "token",
                  "nameLocation": "216:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4096,
                  "src": "207:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC1155_$1841",
                    "typeString": "contract IERC1155"
                  },
                  "typeName": {
                    "id": 4057,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 4056,
                      "name": "IERC1155",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 1841,
                      "src": "207:8:22"
                    },
                    "referencedDeclaration": 1841,
                    "src": "207:8:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC1155_$1841",
                      "typeString": "contract IERC1155"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "206:16:22"
            },
            "returnParameters": {
              "id": 4060,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "230:0:22"
            },
            "scope": 4167,
            "src": "194:228:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4103,
              "nodeType": "Block",
              "src": "457:31:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "30",
                        "id": 4100,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "478:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 4099,
                      "name": "buyTokens",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4143,
                      "src": "468:9:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 4101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "468:12:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4102,
                  "nodeType": "ExpressionStatement",
                  "src": "468:12:22"
                }
              ]
            },
            "id": 4104,
            "implemented": true,
            "kind": "receive",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4097,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "437:2:22"
            },
            "returnParameters": {
              "id": 4098,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "457:0:22"
            },
            "scope": 4167,
            "src": "430:58:22",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 4142,
              "nodeType": "Block",
              "src": "543:199:22",
              "statements": [
                {
                  "assignments": [
                    4110
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4110,
                      "mutability": "mutable",
                      "name": "weiAmount",
                      "nameLocation": "562:9:22",
                      "nodeType": "VariableDeclaration",
                      "scope": 4142,
                      "src": "554:17:22",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 4109,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "554:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 4113,
                  "initialValue": {
                    "expression": {
                      "id": 4111,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "574:3:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 4112,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "value",
                    "nodeType": "MemberAccess",
                    "src": "574:9:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "554:29:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 4125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 4119,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 4115,
                            "name": "weiAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4110,
                            "src": "602:9:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "baseExpression": {
                              "id": 4116,
                              "name": "price",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4055,
                              "src": "615:5:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 4118,
                            "indexExpression": {
                              "id": 4117,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4106,
                              "src": "621:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "615:14:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "602:27:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 4124,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "id": 4120,
                              "name": "price",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4055,
                              "src": "633:5:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 4122,
                            "indexExpression": {
                              "id": 4121,
                              "name": "tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4106,
                              "src": "639:7:22",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "633:14:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 4123,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "651:1:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "633:19:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "602:50:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 4114,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "594:7:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "594:59:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4127,
                  "nodeType": "ExpressionStatement",
                  "src": "594:59:22"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 4133,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "698:4:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Marketplace_$4167",
                              "typeString": "contract Marketplace"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Marketplace_$4167",
                              "typeString": "contract Marketplace"
                            }
                          ],
                          "id": 4132,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "690:7:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 4131,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "690:7:22",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 4134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "690:13:22",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 4135,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "705:3:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 4136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "705:10:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 4137,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4106,
                        "src": "717:7:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "31",
                        "id": 4138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "726:1:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      {
                        "hexValue": "",
                        "id": 4139,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "729:2:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "id": 4128,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4051,
                        "src": "666:6:22",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC1155_$1841",
                          "typeString": "contract IERC1155"
                        }
                      },
                      "id": 4130,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1824,
                      "src": "666:23:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,uint256,bytes memory) external"
                      }
                    },
                    "id": 4140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "666:66:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4141,
                  "nodeType": "ExpressionStatement",
                  "src": "666:66:22"
                }
              ]
            },
            "functionSelector": "3610724e",
            "id": 4143,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "buyTokens",
            "nameLocation": "505:9:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4106,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "520:7:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4143,
                  "src": "515:12:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "515:4:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "514:14:22"
            },
            "returnParameters": {
              "id": 4108,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "543:0:22"
            },
            "scope": 4167,
            "src": "496:246:22",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4165,
              "nodeType": "Block",
              "src": "884:103:22",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "6f6e45524331313535526563656976656428616464726573732c616464726573732c75696e743235362c75696e743235362c627974657329",
                            "id": 4161,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "919:58:22",
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_f23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf97",
                              "typeString": "literal_string \"onERC1155Received(address,address,uint256,uint256,bytes)\""
                            },
                            "value": "onERC1155Received(address,address,uint256,uint256,bytes)"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_f23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf97",
                              "typeString": "literal_string \"onERC1155Received(address,address,uint256,uint256,bytes)\""
                            }
                          ],
                          "id": 4160,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967288,
                          "src": "909:9:22",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 4162,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "909:69:22",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 4159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "902:6:22",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes4_$",
                        "typeString": "type(bytes4)"
                      },
                      "typeName": {
                        "id": 4158,
                        "name": "bytes4",
                        "nodeType": "ElementaryTypeName",
                        "src": "902:6:22",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 4163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "902:77:22",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 4157,
                  "id": 4164,
                  "nodeType": "Return",
                  "src": "895:84:22"
                }
              ]
            },
            "functionSelector": "f23a6e61",
            "id": 4166,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155Received",
            "nameLocation": "757:17:22",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4154,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4145,
                  "mutability": "mutable",
                  "name": "_operator",
                  "nameLocation": "783:9:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4166,
                  "src": "775:17:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4144,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "775:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4147,
                  "mutability": "mutable",
                  "name": "_from",
                  "nameLocation": "802:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4166,
                  "src": "794:13:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4146,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "794:7:22",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4149,
                  "mutability": "mutable",
                  "name": "_id",
                  "nameLocation": "817:3:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4166,
                  "src": "809:11:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4148,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "809:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4151,
                  "mutability": "mutable",
                  "name": "_value",
                  "nameLocation": "830:6:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4166,
                  "src": "822:14:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4150,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "822:7:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4153,
                  "mutability": "mutable",
                  "name": "_data",
                  "nameLocation": "853:5:22",
                  "nodeType": "VariableDeclaration",
                  "scope": 4166,
                  "src": "838:20:22",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4152,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "838:5:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "774:85:22"
            },
            "returnParameters": {
              "id": 4157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4156,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4166,
                  "src": "877:6:22",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 4155,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "877:6:22",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "876:8:22"
            },
            "scope": 4167,
            "src": "748:239:22",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 4168,
        "src": "95:895:22",
        "usedErrors": []
      }
    ],
    "src": "0:990:22"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.9+commit.e5eed63a.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0xe29ff2B2D3E99C4AE04508FAcb4DD1a94B4a1ad7",
      "transactionHash": "0xc1da85fb71af34f00492f964bf58878e0cec212c4e904e99b614457bb0cd5e5b"
    },
    "5777": {
      "events": {},
      "links": {},
      "address": "0x198Efbc07469d938fCe227Cf9d6E035df5463a0A",
      "transactionHash": "0xcaf8c6fcb4bedca61fa64755c257046568db0e2aba982db91e244b0d5d860375"
    }
  },
  "schemaVersion": "3.4.3",
  "updatedAt": "2022-01-10T22:53:46.485Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}