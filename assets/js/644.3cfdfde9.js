(window.webpackJsonp=window.webpackJsonp||[]).push([[644],{1064:function(e,t,a){"use strict";a.r(t);var n=a(46),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("New Ethereum RPC method "),a("code",[e._v("eth_sendTransactionToContractFunction")]),e._v(" that parallels "),a("code",[e._v("eth_sendTransaction")]),e._v(" but allows for human-readable contract function execution data to be displayed to users.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("When a dapp prompts a user to execute a smart contract function via a ProviderWallet, confirmation screens displayed in the ProviderWallet layer cannot display the human readable details of the function to be called and the arguments to be passed. This is because the Ethereum RPC method used for contract function execution ("),a("code",[e._v("eth_sendTransaction")]),e._v(") accepts information about what function to call in a non-human readable (and non-recoverable) format. As such, when a ProviderWallet receives this non-human readable information from a dapp, they are unable to display a human readable version since they never received one and cannot recover one from the data.")]),e._v(" "),a("p",[e._v("This creates a poor and potentially dangerous user experience. For example, a malicious dapp could swap out the "),a("code",[e._v("address")]),e._v(" argument in a token contract's "),a("code",[e._v("transfer(address,uint256)")]),e._v(" function and reroute the tokens intended for someone else to themselves. This sleight-of-hand would be quiet and unlikely to be picked up by a casual user glancing over the non-human readable data. By adding a new Ethereum RPC method ("),a("code",[e._v("eth_sendTransactionToContractFunction")]),e._v(") that accepts the function ABI, ProviderWallets can recreate and display the human readable details of contract function execution to users.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("h3",{attrs:{id:"providerwallet-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#providerwallet-definition"}},[e._v("#")]),e._v(" ProviderWallet Definition")]),e._v(" "),a("p",[e._v("ProviderWallets like Metamask and Geth are hybrid software that combine an Ethereum API provider with an Ethereum wallet. This allows them to sign transactions on behalf of their users and also broadcast those signed transactions to the Ethereum network. ProviderWallets are used for both convenience and for the protection they give users through human readable confirmation prompts.")]),e._v(" "),a("h3",{attrs:{id:"existing-solutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#existing-solutions"}},[e._v("#")]),e._v(" Existing Solutions")]),e._v(" "),a("p",[e._v("Much discussion has been made in the past few years on the topic of human readable Ethereum transaction data. Aragon's "),a("a",{attrs:{href:"https://github.com/aragon/radspec",target:"_blank",rel:"noopener noreferrer"}},[e._v("Radspec"),a("OutboundLink")],1),e._v(" addresses this issue by requiring contract developers to amend their contract functions with human readable comments. ProviderWallets can then use Aragon's Radspec software to parse these comments from the contract code and display them to the end user - substituting in argument values where necessary. Unfortunately, this approach cannot work with contracts that do not have Radspec comments (and may require integration with IPFS).")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ethereum/EIPs/issues/1138",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 1138"),a("OutboundLink")],1),e._v(" also addresses this issue directly but contains serious security issues - allowing untrusted dapps to generate the human readable message displayed to users. In a similar train of thought, "),a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/pull/2940",target:"_blank",rel:"noopener noreferrer"}},[e._v("Geth's #2940 PR"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-191.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIPs 191"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("712"),a("OutboundLink")],1),e._v(" all highlight the Ethereum community's desire for ProviderWallets to better inform users about what data they are actually acting upon.")]),e._v(" "),a("p",[e._v("Finally, the ProviderWallet Metamask already includes some built-in magic for interactions with ERC20 contracts that allows confirmation prompts to display the intended "),a("em",[e._v("token")]),e._v(" recipient and "),a("em",[e._v("token")]),e._v(" value. Although this is accomplished in an ad hoc fashion for ERC20-like contracts only, the motivation is the same: users deserve better information about the execution of contract functions they are relying on ProviderWallets to perform.")]),e._v(" "),a("h3",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("At one point or another, a dapp will ask a user to interact with a contract. The interaction between dapps and contracts is a large part of the Ethereum ecosystem and is most commonly brokered by a ProviderWallet. When a dapp asks a user to interact with a contract, it will do so by sending the "),a("code",[e._v("eth_sendTransaction")]),e._v(" method name to the Ethereum API exposed by a ProviderWallet along with the relevant transaction data. The "),a("code",[e._v("data")]),e._v(" field of the transaction data contains the information necessary for the Ethereum virtual machine to identify and execute the contract's function. This field has a specific formatting that is both non-human readable and non-recoverable to its human readable state.")]),e._v(" "),a("p",[e._v("The accepted format for "),a("code",[e._v("eth_sendTransaction")]),e._v("'s "),a("code",[e._v("data")]),e._v(" field is the hexadecimal encoding of the first four bytes of the keccak256 digest of the function signature. This abbreviated hash is then concatenated with the ABI encoded arguments to the function. Since the keccak256 digest of the function signature cannot be converted back into the function signature, the "),a("code",[e._v("data")]),e._v(" field is not only non-human readable, its non-recoverable as well. On top of this, additional insight into the concatenated argument values is further obfuscated as information about their data types are held in the function signature preimage.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("This EIP proposes increasing the set of Ethereum RPC methods to include a new method - "),a("code",[e._v("eth_sendTransactionToContractFunction")]),e._v(". This method parallels "),a("code",[e._v("eth_sendTransaction")]),e._v(" with the only difference being the inclusion of the contract function's "),a("code",[e._v("abi")]),e._v(" field.")]),e._v(" "),a("p",[e._v("Parameters")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("Object")]),e._v(" - The transaction object")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("from")]),e._v(": "),a("code",[e._v("DATA")]),e._v(", 20 Bytes - The address the transaction is sent from.")]),e._v(" "),a("li",[a("code",[e._v("to")]),e._v(": "),a("code",[e._v("DATA")]),e._v(", 20 Bytes - (optional when creating new contract) The address the transaction is directed to.")]),e._v(" "),a("li",[a("code",[e._v("gas")]),e._v(": "),a("code",[e._v("QUANTITY")]),e._v(" - (optional, default: 90000) Integer of the gas provided for the transaction execution. It will return unused gas.")]),e._v(" "),a("li",[a("code",[e._v("gasPrice")]),e._v(": "),a("code",[e._v("QUANTITY")]),e._v(" - (optional, default: To-Be-Determined) Integer of the gasPrice used for each paid gas")]),e._v(" "),a("li",[a("code",[e._v("value")]),e._v(": "),a("code",[e._v("QUANTITY")]),e._v(" - (optional) Integer of the value sent with this transaction")]),e._v(" "),a("li",[a("code",[e._v("data")]),e._v(": "),a("code",[e._v("DATA")]),e._v(" - The hash of the invoked method signature and encoded parameters")]),e._v(" "),a("li",[a("code",[e._v("abi")]),e._v(": "),a("code",[e._v("DATA")]),e._v(" - The function ABI")]),e._v(" "),a("li",[a("code",[e._v("nonce")]),e._v(": "),a("code",[e._v("QUANTITY")]),e._v(" - (optional) Integer of a nonce. This allows to overwrite your own pending transactions that use the same nonce.")])]),e._v(" "),a("p",[e._v("Example Parameters")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  params: [{\n    "from": "0x69e6F1b01f34A702Ce63bA6EF83c64fAEC37a227",\n    "to": "0xe44127f6fA8A00ee0228730a630fc1F3162C4d52",\n    "gas": "0x76c0", // 30400\n    "gasPrice": "0x9184e72a000", // 10000000000000\n    "value": "0x9184e72a", // 2441406250\n    "abi": "{\n      "inputs": [{\n        "name": "_address",\n        "type": "address"\n      }, {\n        "name": "_value",\n        "type": "uint256"\n      }],\n      "name": "transferTokens",\n      "outputs": [{\n        "name": "success",\n        "type": "bool"\n      }],\n      "stateMutability": "nonpayable",\n      "type": "function"\n    }",\n   "data": "0xbec3fa170000000000000000000000006Aa89e52c9a826496A8f311c1a9db62fd477E256000000000000000000000000000000000000000000000000000000174876E800"               \n  }]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br")])]),a("p",[e._v("Returns DATA, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.")]),e._v(" "),a("p",[e._v('Example // Request curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_sendTransactionToContractFunction","params":[{see above}],"id":1}\'')]),e._v(" "),a("p",[e._v('// Result\n{ "id":1, "jsonrpc": "2.0", "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331" }')]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("This EIP's proposed "),a("code",[e._v("eth_sendTransactionToContractFunction")]),e._v(" method is intended to parallel "),a("code",[e._v("eth_sendTransaction")]),e._v(" as much as possible since both methods result in the same behaviour when executing a contract function. The newly introduced "),a("code",[e._v("abi")]),e._v(" field is an element of the contract's ABI that corresponds to the intended function. The "),a("code",[e._v("data")]),e._v(" field is the same "),a("code",[e._v("data")]),e._v(" field from "),a("code",[e._v("eth_sendTransaction")]),e._v(". The "),a("code",[e._v("abi")]),e._v(" field can be combined with values parsed from the "),a("code",[e._v("data")]),e._v(" field to recreate human readable contract function execution information.")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("data")]),e._v(" field in "),a("code",[e._v("eth_sendTransactionToContractFunction")]),e._v(" is the same as that required for "),a("code",[e._v("eth_sendTransaction")]),e._v(" allowing the transaction to be completed via the existing mechanisms used for "),a("code",[e._v("eth_sendTransaction")]),e._v(". The input argument values can be parsed from the "),a("code",[e._v("data")]),e._v(" field and since we know their types from the "),a("code",[e._v("abi")]),e._v(" field, the provider wallet can use this info to encode and display the values in an appropriate human readable format. Furthermore, the hashed and truncated function signature in the "),a("code",[e._v("data")]),e._v(" field can be reconstructed using the information provided in the "),a("code",[e._v("abi")]),e._v(" field providing an additional check to ensure that the supplied ABI matches the "),a("code",[e._v("data")]),e._v(" field.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("With backwards compatibility in mind, this EIP proposes augmenting the set of Ethereum RPC methods with an additional method instead of mutating the existing method. Precedent for adding a new RPC method comes from "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 712"),a("OutboundLink")],1),e._v(" in which adding the method "),a("code",[e._v("eth_signTypedData")]),e._v(" is proposed for confirmation prompt security. As an alternate approach, the "),a("code",[e._v("eth_sendTransaction")]),e._v(" method could be changed to accept an additional "),a("code",[e._v("abi")]),e._v(" argument, but this would break all existing code attempting to execute a contract function.")]),e._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),a("p",[e._v("Displaying the contract address, function name, and argument values can provide additional security to users, but it is not a guarantee that a function will execute as the user expects. A poorly implemented contract can still name its function "),a("code",[e._v("transfer")]),e._v(" and accept "),a("code",[e._v("address")]),e._v(" and "),a("code",[e._v("uint256")]),e._v(" arguments - but there is nothing short of contract examination that will let a user know that this contract is indeed a valid ERC20 contract. This EIP does not intend to solve the larger problem around trust in a contract's code, but instead intends to give users better tools to understand exactly what is contained within the data they are broadcasting to the Ethereum network.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);