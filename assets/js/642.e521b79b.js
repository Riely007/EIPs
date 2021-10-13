(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{1061:function(e,t,a){"use strict";a.r(t);var s=a(46),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("A mechanism to allow smart contracts to access information on gas limits for the current transaction and execution frame.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("Currently, there is an existing opcode "),a("code",[e._v("0x45 GASLIMIT")]),e._v(" that provides access to the block gas limit. While this information may be useful in some cases, it is probably not a value that smart contract developers may be concerned about. The opcode "),a("code",[e._v("0x5a GAS")]),e._v(" provides the remaining gas, not the initial one. Also, it is worth noting how existing "),a("code",[e._v("0x32 ORIGIN")]),e._v(", "),a("code",[e._v("0x33 CALLER")]),e._v(", "),a("code",[e._v("0x34 CALLVALUE")]),e._v(" and "),a("code",[e._v("0x3a GASPRICE")]),e._v(" opcodes set a pattern of having access to both the transaction and current execution frame state. TBD: as 0x30 opcode range is exhausted, the proposed opcodes can be added to 0x50 range, or a new range can be added.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("As concepts of relaying, meta-transactions, gas fees, and account abstraction gain popularity, it becomes critical for some contracts to be able to track gas expenditure with absolute precision. Without access to this data on an EVM level, such contracts resort to approximation, mimicking EVM logic on-chain, and some use-cases even become infeasible.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("If block.number >= TBD, add three new opcodes:")]),e._v(" "),a("p",[e._v("TXGASLIMIT: 0x5c")]),e._v(" "),a("p",[e._v("Pushes the gas limit of the entire transaction onto the stack. This is a value of the 'startgas' parameter signed by the externally owned account."),a("br"),e._v("\nGas costs: 2 (same as "),a("code",[e._v("GASLIMIT")]),e._v(")")]),e._v(" "),a("p",[e._v("CALLGASLIMIT: 0x5d")]),e._v(" "),a("p",[e._v("Pushes the gas limit of the current execution frame onto the stack. This is the 'callGas' value that was obtained after the application of the EIP-150 “all but one 64th” rule."),a("br"),e._v("\nGas costs: 2 (same as "),a("code",[e._v("GASLIMIT")]),e._v(")")]),e._v(" "),a("p",[e._v("Also, consider renaming "),a("code",[e._v("0x45 GASLIMIT")]),e._v(" to "),a("code",[e._v("BLOCKGASLIMIT")]),e._v(" to avoid confusion.")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("Consider a solidity smart contract that wants to know how much gas the entire transaction or a part of it had consumed. It is not entirely possible with the current EVM. With proposed changes, using a pseudo-Solidity syntax, this information would be easily available:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function keepTrackOfGas(string memory message, uint256 number) public {\n    ...\n    uint gasUsed = msg.gasLimit - gasleft();\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("This is an extremely common use case, and multiple implementations suffer from not taking the non-accessible expenses into consideration. The state-of-the-art solution for the "),a("code",[e._v("gasUsed")]),e._v(" problem is to access 'gasleft()' as the first line of your smart contract."),a("br"),e._v("\nNote how variable transaction input size means the gas used by the transaction depends on the number of zero and non-zero bytes of input, as well "),a("code",[e._v("GTXDATANONZERO")]),e._v(". Another issue is that Solidity handles "),a("code",[e._v("public")]),e._v(" methods by loading the entire input from "),a("code",[e._v("calldata")]),e._v(" to "),a("code",[e._v("memory")]),e._v(", spending an unpredictable amount of gas.")]),e._v(" "),a("p",[e._v("Another application is for a method to have a requirement for a gas limit given to it. This situation arises quite commonly in the context of meta-transactions, where the msg.sender's account holder may not be too interested in the inner transaction's success. Exaggerated pseudocode:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('function verifyGasLimit(uint256 desiredGasLimit, bytes memory signature, address signer, bytes memory someOtherData) public {\n    require(ecrecover(abi.encodePacked(desiredGasLimit, someOtherData), signature) == signer, "Signature does not match");\n    require(tx.gasLimit == desiredGasLimit, "Transaction limit does not match the signed value. The signer did not authorize that.");\n    ...\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("In this situation it is not possible to rely on 'gasleft()' value, because it is dynamic, depends on opcode and calldata pricing, and cannot be signed.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This proposal introduces two new opcodes and renames an existing one, but stays fully backwards compatible apart from that.")]),e._v(" "),a("h2",{attrs:{id:"forwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forwards-compatibility"}},[e._v("#")]),e._v(" Forwards Compatibility")]),e._v(" "),a("p",[e._v("A major consideration for this proposal is its alignment with one or many possible future modifications to the EVM:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("EIP-2489 Deprecate the GAS opcode (a.k.a. 39-UNGAS proposal)"),a("br"),e._v('\nThere is a sentiment that the ability of smart contracts to perform "gas introspection" leads to the contracts being dependent on current opcode pricing.'),a("br"),e._v("\nWhile criticizing said misconception is beyond the scope of this EIP, in case there is a need to make a breaking change to the behavior of the existing "),a("code",[e._v("0x5a GAS")]),e._v(" opcode, the same considerations will apply to the proposed opcodes. This means this EIP does not add any new restraints on EMV evolution.")])]),e._v(" "),a("li",[a("p",[e._v("Stateless Ethereum"),a("br"),e._v("\nThe UNGAS proposal is said to be related to the ongoing project of Stateless Ethereum. It’s not strictly necessary for stateless Ethereum, but it is an idea for how to make future breaking changes to gas schedules easier."),a("br"),e._v("\nAs long as the concept of 'gas limit' is part of the EVM, the author sees no reason proposed opcodes would conflict with Stateless Ethereum. Gas schedules are not exposed by this proposal.")])]),e._v(" "),a("li",[a("p",[e._v("Comparison with other controversial opcodes"),a("br"),e._v("\nThere are opcodes that are not proposed for deprecation but face criticism. Examples include "),a("code",[e._v("0x32 ORIGIN")]),e._v(" being misused by smart contract developers, or "),a("code",[e._v("0x46 CHAINID")]),e._v(" making some smart-contracts 'unforkable'."),a("br"),e._v("\nThis EIP neither encourages nor enables any bad security practices, and does not introduce any concepts that are new for EVM either.")])])]),e._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security considerations")]),e._v(" "),a("p",[e._v("Existing smart contracts are not affected by this change."),a("br"),e._v("\nSmart contracts that will use proposed opcodes must not use them for the core of any security features, but only as a source of information about their execution environment.")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v('The implementations must be completed before any EIP is given status "Final", but it need not be completed before the EIP is accepted. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.')]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);