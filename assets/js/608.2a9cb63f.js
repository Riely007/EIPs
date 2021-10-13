(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{1024:function(t,e,a){"use strict";a.r(e);var s=a(46),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v('An additional, optional transaction field is added for "postdata," data that is posted on-chain but that cannot be read from the EVM.')]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("A paradigm shift in how blockchains are used has been seen recently in Eth 2.0, with the rise of "),a("a",{attrs:{href:"https://notes.ethereum.org/w1Pn2iMmSTqCmVUTGV4T5A?view",target:"_blank",rel:"noopener noreferrer"}},[a("em",[t._v("Execution Environments")]),a("OutboundLink")],1),t._v(" (EEs), and "),a("a",{attrs:{href:"https://ethresear.ch/t/the-stateless-client-concept/172",target:"_blank",rel:"noopener noreferrer"}},[a("em",[t._v("stateless clients")]),a("OutboundLink")],1),t._v(". This shift involves blockchains serving as a secure data availability and arbitration layer, "),a("em",[t._v("i.e.")]),t._v(", they provide a globally-accepted source of available data, and process fraud/validity and data availability proofs. This same paradigm can be applied on Eth 1.x, replacing EEs with "),a("a",{attrs:{href:"https://ethresear.ch/t/building-scalable-decentralized-payment-systems-request-for-feedback/5312",target:"_blank",rel:"noopener noreferrer"}},[t._v("trust-minimized side chains"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("While "),a("RouterLink",{attrs:{to:"/zh/eip-2028.html"}},[t._v("EIP-2028")]),t._v(" provides a reduction in gas cost of calldata, and is a step in the right direction of encouraging use of history rather than state, the EVM does not actually need to see all data that is posted on-chain. Following the principle of \"don't pay for what you don't use,\" a distinct way of posting data on-chain, but without actually being usable within the EVM, is needed.")],1),t._v(" "),a("p",[t._v("For "),a("a",{attrs:{href:"https://ethresear.ch/t/minimal-viable-merged-consensus/5617",target:"_blank",rel:"noopener noreferrer"}},[t._v("trust-minimized side chains with fraud proofs"),a("OutboundLink")],1),t._v(", we simply need to ensure that the side chain block proposer has attested that "),a("em",[t._v("some")]),t._v(" data is available. Authentication can be performed as part of a fraud proof should that data end up invalid. Note that "),a("a",{attrs:{href:"https://ethresear.ch/t/on-chain-scaling-to-potentially-500-tx-sec-through-mass-tx-validation/3477",target:"_blank",rel:"noopener noreferrer"}},[t._v("trust-minimized side chains with validity proofs"),a("OutboundLink")],1),t._v(" can't make use of the changes proposed in this EIP, as they required immediate authentication of the posted data. This will be "),a("a",{attrs:{href:"https://ethresear.ch/t/multi-threaded-data-availability-on-eth-1/5899",target:"_blank",rel:"noopener noreferrer"}},[t._v("the topic of a future EIP"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("p",[t._v("We propose a consensus modification, beginning at "),a("code",[t._v("FORK_BLKNUM")]),t._v(":")]),t._v(" "),a("p",[t._v("An additional optional field, "),a("code",[t._v("postdata")]),t._v(", is added to transactions. Serialized transactions now have the format:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"from": bytes20,\n"to": bytes20,\n"startGas": uint256,\n"gasPrice": uint256,\n"value": uint256,\n"data": bytes,\n"nonce": uint256,\n["postdata": bytes],\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("with witnesses signing over the "),a("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/RLP",target:"_blank",rel:"noopener noreferrer"}},[t._v("RLP encoding"),a("OutboundLink")],1),t._v(" of the above. "),a("code",[t._v("postdata")]),t._v(" is data that is posted on-chain, for later historical retrieval by layer-2 systems.")]),t._v(" "),a("p",[a("code",[t._v("postdata")]),t._v(" is an RLP-encoded twople "),a("code",[t._v("(version: uint64, data: bytes)")]),t._v(".")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("version")]),t._v(" is "),a("code",[t._v("0")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("data")]),t._v(" is an RLP-encoded list of binary data. This EIP does not interpret the data in any way, simply considering it as a binary blob, though future EIPs may introduce different interpretation schemes for different values of "),a("code",[t._v("version")]),t._v(".")])]),t._v(" "),a("p",[t._v("The gas cost of the posted data is "),a("code",[t._v("1 gas per byte")]),t._v(". This cost is deducted from the "),a("code",[t._v("startGas")]),t._v("; if the remaining gas is non-positive the transaction immediately reverts with an out of gas exception.")]),t._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v("The changes proposed are as minimal and non-disruptive to the existing EVM and transaction format as possible while also supporting possible "),a("a",{attrs:{href:"https://ethresear.ch/t/multi-threaded-data-availability-on-eth-1/5899",target:"_blank",rel:"noopener noreferrer"}},[t._v("future extensions"),a("OutboundLink")],1),t._v(" through a version code.")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("The new transaction format is backwards compatible, as the new "),a("code",[t._v("postdata")]),t._v(" field is optionally appended to existing transactions.")]),t._v(" "),a("p",[t._v("The proposed changes are not forwards-compatible, and will require a hard fork.")]),t._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=i.exports}}]);