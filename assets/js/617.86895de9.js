(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{1034:function(t,a,e){"use strict";e.r(a);var s=e(46),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"simple-summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),e("p",[t._v("A new "),e("code",[t._v("EXTSLOAD <contract> <slot>")]),t._v(" EVM opcode to read external contract storage data and corresponding allowing to build registry and token contracts that use less gas.")]),t._v(" "),e("h2",{attrs:{id:"abstract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),e("p",[t._v("While any off-chain application can read all contract storage data of all contracts, this is not possible for deployed smart contracts themselves. These are bound to use contract calls for any interaction including reading data from other contracts. This EIP adds an EVM opcode to directly read external contract storage.")]),t._v(" "),e("h2",{attrs:{id:"motivation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),e("p",[t._v("The gas cost when reading from registry style contract such as ERC-20s, ENS and other data contracts is very high, because they incur cross contract call cost, cost for ABI encoding,  decoding and dispatching and finally loading the data. In many cases the underlying storage that is being queried is though just a simple mapping. In these cases a new "),e("code",[t._v("EXTSLOAD")]),t._v(" call directly accessing the mapping in storage could not only "),e("strong",[t._v("reduce the gas cost")]),t._v(" of the interaction more than 10x, but also it would make the gas cost "),e("strong",[t._v("predictable")]),t._v(" for the reading contract. Furthermore with the use of the existing "),e("code",[t._v("EXTCODEHASH")]),t._v(" an external contracts implementation can be verified and allows "),e("code",[t._v("EXTSLOAD")]),t._v(" to make deterministic reads even from third-party smart contracts.")]),t._v(" "),e("h2",{attrs:{id:"specification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),e("p",[e("strong",[t._v("Proposal")])]),t._v(" "),e("p",[t._v("A new EVM instruction "),e("code",[t._v("EXTSLOAD (0x5c)")]),t._v(" that works like "),e("code",[t._v("SLOAD (0x54)")]),t._v(" but an additional parameter representing the contract that is to be read from. The gas cost of "),e("code",[t._v("EXTSLOAD")]),t._v(" would be the sum of the "),e("a",{attrs:{href:"https://ethereum.github.io/yellowpaper/paper.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("fee schedule G"),e("OutboundLink")],1),t._v(" for G[EXTCODE](700) + G[SLOAD](800) = 1500 gas")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("EXTSLOAD (0x5c)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("The "),e("code",[t._v("EXTSLOAD")]),t._v(" instruction pops 2 values from the stack, first "),e("code",[t._v("contract")]),t._v(" a contract address and then second "),e("code",[t._v("slot")]),t._v(" a storage address within "),e("code",[t._v("contract")]),t._v(". As result "),e("code",[t._v("EXTSLOAD")]),t._v(" pushes on the stack the value from the contract storage of "),e("code",[t._v("contract")]),t._v(" at the storage "),e("code",[t._v("slot")]),t._v(" address or "),e("code",[t._v("0")]),t._v(" in case the account "),e("code",[t._v("contract")]),t._v(" does not exist.")]),t._v(" "),e("p",[e("strong",[t._v("Example")])]),t._v(" "),e("p",[t._v("An example assuming "),e("a",{attrs:{href:"https://github.com/ethereum/solidity/issues/7593",target:"_blank",rel:"noopener noreferrer"}},[t._v("further Solidity changes"),e("OutboundLink")],1),t._v(" for illustration:")]),t._v(" "),e("div",{staticClass:"language-solidity line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MemberList")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fixed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mapping")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" members"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("And a corresponding contract function that uses this member list. Similarly tokens or other registries could be implemented.")]),t._v(" "),e("div",{staticClass:"language-solidity line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("membersOnly")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" member"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  MemberList ml "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MemberList")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("members"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("revert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Nonmember!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("The call "),e("code",[t._v("ml.members[client]")]),t._v(" here could let the Solidity compiler generate the normal map access logic but using the new "),e("code",[t._v("EXTSLOAD <contract> <slot>")]),t._v(" instructions to read from the "),e("code",[t._v("ml")]),t._v(" contract storage instead of the local contract storage.")]),t._v(" "),e("h2",{attrs:{id:"backwards-compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),e("p",[t._v("This change is fully backwards compatible since it adds a new instruction.")]),t._v(" "),e("h2",{attrs:{id:"test-cases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),e("p",[t._v("Not started yet.")]),t._v(" "),e("h2",{attrs:{id:"implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/ethereum/aleth/pull/5805",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aleth Pull Request"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"copyright"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),e("p",[t._v("Copyright and related rights waived via "),e("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);