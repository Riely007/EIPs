(window.webpackJsonp=window.webpackJsonp||[]).push([[674],{1097:function(s,t,a){"use strict";a.r(t);var e=a(46),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[s._v("#")]),s._v(" Simple Summary")]),s._v(" "),a("p",[s._v("Adds a transaction type which contains an access list, a list of addresses and storage keys that the transaction plans to access. Accesses outside the list are possible, but become more expensive.")]),s._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[s._v("#")]),s._v(" Abstract")]),s._v(" "),a("p",[s._v("We introduce a new "),a("RouterLink",{attrs:{to:"/zh/eip-2718.html"}},[s._v("EIP-2718")]),s._v(" transaction type, with the format "),a("code",[s._v("0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList, signatureYParity, signatureR, signatureS])")]),s._v(".")],1),s._v(" "),a("p",[s._v("The "),a("code",[s._v("accessList")]),s._v(" specifies a list of addresses and storage keys; these addresses and storage keys are added into the "),a("code",[s._v("accessed_addresses")]),s._v(" and "),a("code",[s._v("accessed_storage_keys")]),s._v(" global sets (introduced in "),a("RouterLink",{attrs:{to:"/zh/eip-2929.html"}},[s._v("EIP-2929")]),s._v("). A gas cost is charged, though at a discount relative to the cost of accessing outside the list.")],1),s._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[s._v("#")]),s._v(" Motivation")]),s._v(" "),a("p",[s._v("This EIP serves two functions:")]),s._v(" "),a("ol",[a("li",[s._v("Mitigates contract breakage risks introduced by "),a("RouterLink",{attrs:{to:"/zh/eip-2929.html"}},[s._v("EIP-2929")]),s._v(', as transactions could pre-specify and pre-pay for the accounts and storage slots that the transaction plans to access; as a result, in the actual execution, the SLOAD and EXT* opcodes would only cost 100 gas: low enough that it would not only prevent breakage due to that EIP but also "unstuck" any contracts that became stuck due to EIP 1884.')],1),s._v(" "),a("li",[s._v("Introduces the access list format and the logic for handling the format. This logic can later be repurposed for many other purposes, including block-wide witnesses, use in ReGenesis, moving toward static state access over time, and more.")])]),s._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[s._v("#")]),s._v(" Specification")]),s._v(" "),a("h3",{attrs:{id:"definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[s._v("#")]),s._v(" Definitions")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("TransactionType")])]),s._v(" "),a("code",[s._v("1")]),s._v(".  See "),a("RouterLink",{attrs:{to:"/zh/eip-2718.html"}},[s._v("EIP-2718")])],1),s._v(" "),a("p",[a("strong",[a("code",[s._v("ChainId")])]),s._v(" The transaction only valid on networks with this "),a("code",[s._v("chainID")]),s._v(".")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("YParity")])]),s._v(" The parity (0 for even, 1 for odd) of the y-value of a secp256k1 signature.")]),s._v(" "),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[s._v("#")]),s._v(" Parameters")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Constant")]),s._v(" "),a("th",[s._v("Value")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("FORK_BLOCK")])]),s._v(" "),a("td",[s._v("TBD")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("ACCESS_LIST_STORAGE_KEY_COST")])]),s._v(" "),a("td",[s._v("1900")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("ACCESS_LIST_ADDRESS_COST")])]),s._v(" "),a("td",[s._v("2400")])])])]),s._v(" "),a("p",[s._v("As of "),a("code",[s._v("FORK_BLOCK_NUMBER")]),s._v(", a new "),a("RouterLink",{attrs:{to:"/zh/eip-2718.html"}},[s._v("EIP-2718")]),s._v(" transaction is introduced with "),a("code",[s._v("TransactionType")]),s._v(" "),a("code",[s._v("1")]),s._v(".")],1),s._v(" "),a("p",[s._v("The "),a("RouterLink",{attrs:{to:"/zh/eip-2718.html"}},[s._v("EIP-2718")]),s._v(" "),a("code",[s._v("TransactionPayload")]),s._v(" for this transaction is "),a("code",[s._v("rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList, signatureYParity, signatureR, signatureS])")]),s._v(".")],1),s._v(" "),a("p",[s._v("The "),a("code",[s._v("signatureYParity, signatureR, signatureS")]),s._v(" elements of this transaction represent a secp256k1 signature over "),a("code",[s._v("keccak256(0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList]))")]),s._v(".")]),s._v(" "),a("p",[s._v("The "),a("RouterLink",{attrs:{to:"/zh/eip-2718.html"}},[s._v("EIP-2718")]),s._v(" "),a("code",[s._v("ReceiptPayload")]),s._v(" for this transaction is "),a("code",[s._v("rlp([status, cumulativeGasUsed, logsBloom, logs])")]),s._v(".")],1),s._v(" "),a("p",[s._v("For the transaction to be valid, "),a("code",[s._v("accessList")]),s._v(" must be of type "),a("code",[s._v("[[{20 bytes}, [{32 bytes}...]]...]")]),s._v(", where "),a("code",[s._v("...")]),s._v(' means "zero or more of the thing to the left". For example, the following is a valid access list (all hex strings would in reality be in byte representation):')]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[\n    [\n        "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae",\n        [\n            "0x0000000000000000000000000000000000000000000000000000000000000003",\n            "0x0000000000000000000000000000000000000000000000000000000000000007"\n        ]\n    ],\n    [\n        "0xbb9bc244d798123fde783fcc1c72d3bb8c189413",\n        []\n    ]\n]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("At the beginning of execution (ie. at the same time as the "),a("code",[s._v("21000 + 4 * zeroes + 12 * nonzeroes")]),s._v(" start gas is charged), we charge additional gas for the access list: "),a("code",[s._v("ACCESS_LIST_ADDRESS_COST")]),s._v(" gas per address and "),a("code",[s._v("ACCESS_LIST_STORAGE_KEY_COST")]),s._v(" gas per storage key. For example, the above example would be charged "),a("code",[s._v("ACCESS_LIST_ADDRESS_COST * 2 + ACCESS_LIST_STORAGE_KEY_COST * 2")]),s._v(" gas.")]),s._v(" "),a("p",[s._v("Note that non-unique addresses and storage keys are not disallowed, though they will be charged for multiple times, and aside from the higher gas cost there is no other difference in execution flow or outcome from multiple-inclusion of a value as opposed to the recommended single-inclusion.")]),s._v(" "),a("p",[s._v("The address and storage keys would be immediately loaded into the "),a("code",[s._v("accessed_addresses")]),s._v(" and "),a("code",[s._v("accessed_storage_keys")]),s._v(" global sets; this can be done using the following logic (which doubles as a specification-in-code of validation of the RLP-decoded access list)")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("process_access_list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("access_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Tuple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Pair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Bytes32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    accessed_addresses "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    accessed_storage_keys "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    gas_cost "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("access_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" access_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Validate and add the address")]),s._v("\n        address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n        accessed_addresses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        gas_cost "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" ACCESS_LIST_ADDRESS_COST\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Validate and add the storage keys")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("\n            accessed_storage_keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            gas_cost "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" ACCESS_LIST_STORAGE_KEY_COST\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        accessed_addresses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        accessed_storage_keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        gas_cost\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("The access list is NOT charged per-byte fees like tx data is; the per-item costs described above are meant to cover the bandwidth costs of the access list data in addition to the costs of accessing those accounts and storage keys when evaluating the transaction.")]),s._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[s._v("#")]),s._v(" Rationale")]),s._v(" "),a("h3",{attrs:{id:"charging-less-for-accesses-in-the-access-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#charging-less-for-accesses-in-the-access-list"}},[s._v("#")]),s._v(" Charging less for accesses in the access list")]),s._v(" "),a("p",[s._v("This is done to encourage transactions to use the access list as much as possible, and because processing transactions is easier when their storage reads are predictable (because clients can pre-load the data from databases and/or ask for witnesses at the time the transaction is received, or at least load the data in parallel).")]),s._v(" "),a("h3",{attrs:{id:"allowing-duplicates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allowing-duplicates"}},[s._v("#")]),s._v(" Allowing duplicates")]),s._v(" "),a("p",[s._v("This is done because it maximizes simplicity, avoiding questions of what to prevent duplication against: just between two addresses/keys in the access list, between the access list and the tx sender/recipient/newly created contract, other restrictions? Because gas is charged per item, there is no gain and only cost in including a value in the access list twice, so this should not lead to extra chain bloat in practice.")]),s._v(" "),a("h3",{attrs:{id:"signature-signs-over-the-transaction-type-as-well-as-the-transaction-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature-signs-over-the-transaction-type-as-well-as-the-transaction-data"}},[s._v("#")]),s._v(" Signature signs over the transaction type as well as the transaction data")]),s._v(" "),a("p",[s._v('This is done to ensure that the transaction cannot be "re-interpreted" as a transaction of a different type.')]),s._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[s._v("#")]),s._v(" Backwards Compatibility")]),s._v(" "),a("p",[s._v('This EIP does make it more gas-expensive to perform "unexpected" SLOADs and account accesses. Because gas is prepaid and so does not affect fixed-gas local calls, it does not break contracts in the way that previous gas cost increases would risk. However, it does make applications that heavily rely on storage access much less economically viable.')]),s._v(" "),a("h2",{attrs:{id:"security-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[s._v("#")]),s._v(" Security Considerations")]),s._v(" "),a("h3",{attrs:{id:"access-list-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-list-generation"}},[s._v("#")]),s._v(" Access list generation")]),s._v(" "),a("p",[s._v("Access lists are difficult to construct in real-time in many situations, and this is exacerbated in environments where there is a high time lag between transaction generation and signing or simplicity of the transaction generator is highly valued (eg. either or both may apply in hardware wallets).")]),s._v(" "),a("p",[s._v("However, this EIP proposes only a 10% initial discount to access lists, so there is almost no cost to not bothering with access list generation and only making a simple transaction. The cost of accessing state outside the access list is expected to be ramped up in future hard forks over time as tools are developed and access list generation becomes more mature.")]),s._v(" "),a("h3",{attrs:{id:"transaction-size-bloating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-size-bloating"}},[s._v("#")]),s._v(" Transaction size bloating")]),s._v(" "),a("p",[s._v("Average block size will increase as a result of access lists being used. However, the per-byte cost of access lists is "),a("code",[s._v("1900 / 32 = 59.375")]),s._v(" for storage keys and "),a("code",[s._v("2400 / 20 = 120")]),s._v(" for addresses, making it much more expensive than calldata; hence, worst-case block size will not increase. Additionally, increases in average block size will be partially compensated for by the ability to pre-fetch storage at time of receiving a transaction and/or load storage in parallel upon receiving a block.")]),s._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[s._v("#")]),s._v(" Copyright")]),s._v(" "),a("p",[s._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CC0"),a("OutboundLink")],1),s._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);