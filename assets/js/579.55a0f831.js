(window.webpackJsonp=window.webpackJsonp||[]).push([[579],{996:function(t,e,a){"use strict";a.r(e);var s=a(46),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("Introduce a new system contract with an extensible interface following the "),a("a",{attrs:{href:"https://solidity.readthedocs.io/en/latest/abi-spec.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Contract ABI Encoding"),a("OutboundLink")],1),t._v(" to access extended data sets, such as chain identifiers, block hashes, etc.")]),t._v(" "),a("p",[t._v("This allows Ethereum contract languages to interact with this contract as if it were a regular contract and not needing any language support.")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("Over the past couple of years several proposals were made to extend the EVM with more data. Some examples include extended access to block hashes ("),a("RouterLink",{attrs:{to:"/zh/eip-210.html"}},[t._v("EIP-210")]),t._v(") and chain identifiers ("),a("RouterLink",{attrs:{to:"/zh/eip-1344.html"}},[t._v("EIP-1344")]),t._v(").")],1),t._v(" "),a("p",[t._v("Adding them as EVM opcodes seems to be using the scarce opcode space for relatively less frequently used features, while adding them as precompiles is perceived as more complicated due to an interface needs to be defined and agreed on for every case.")]),t._v(" "),a("p",[t._v("This proposal tries to solve both issues with defining an extensible standard interface.")]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("p",[t._v('A new system contract ("precompile") is introduced at address '),a("code",[t._v("0x0000000000000000000000000000000000000009")]),t._v(" called ESO (Extended State Oracle).")]),t._v(" "),a("p",[t._v("It can be queried using "),a("code",[t._v("CALL")]),t._v(" or "),a("code",[t._v("STATICCALL")]),t._v(" and follows the "),a("a",{attrs:{href:"https://solidity.readthedocs.io/en/latest/abi-spec.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Contract ABI Encoding"),a("OutboundLink")],1),t._v(" for the inputs and outputs. Using elementary types in the ABI encoding is encouraged to keep complexity low.")]),t._v(" "),a("p",[t._v("In the future it could be possible to extend ESO to have a state and accept transactions from a system address to store the passed data -- similarly to what "),a("RouterLink",{attrs:{to:"/zh/eip-210.html"}},[t._v("EIP-210")]),t._v(" proposed.")],1),t._v(" "),a("p",[t._v("Proposals wanting to introduce more data to the state, which is not part of blocks or transactions, should aim to extend the ESO.")]),t._v(" "),a("p",[t._v("At this time it is not proposed to make the ESO into a contract existing in the state, but to include it as a precompile and leave the implementation details to the client. In the future if it is sufficiently extended and a need arises to have a state, it would make sense to move it from being a precompile and have actual code.")]),t._v(" "),a("h3",{attrs:{id:"chain-identifier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain-identifier"}},[t._v("#")]),t._v(" Chain identifier")]),t._v(" "),a("p",[t._v("Initially, a feature to read the current chain identifier is introduced: "),a("code",[t._v("getCurrentChainId()")]),t._v(" returns the current chain identifier as a "),a("code",[t._v("uint64")]),t._v(" encoded value. It should be a non-payable function, which means sending any value would revert the transaction as described in "),a("RouterLink",{attrs:{to:"/zh/eip-140.html"}},[t._v("EIP-140")]),t._v(". This has been proposed as "),a("RouterLink",{attrs:{to:"/zh/eip-1344.html"}},[t._v("EIP-1344")]),t._v(".")],1),t._v(" "),a("p",[t._v("The contract ABI JSON is the following:")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"constant"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inputs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getCurrentChainId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outputs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uint64"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"payable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stateMutability"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pure"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("This will be translated into sending the bytes "),a("code",[t._v("5cf0e8a4")]),t._v(" to the ESO and returning the bytes "),a("code",[t._v("0000000000000000000000000000000000000000000000000000000000000001")]),t._v(" for Ethereum mainnet.")]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" It should be possible to introduce another interface checking the validity of a chain identifier in the chain history or for a given block (see "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/pull/1959",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP-1959"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/pull/1965",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP-1965"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v("TBA")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("TBA")]),t._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),a("p",[t._v("TBA")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("TBA")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);