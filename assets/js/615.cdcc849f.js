(window.webpackJsonp=window.webpackJsonp||[]).push([[615],{1032:function(t,e,a){"use strict";a.r(e);var o=a(46),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("Introduces a new opcode "),a("code",[t._v("BEGINDATA")]),t._v(", which indicates that the remaining bytes of the contract should be regarded as data rather than contract code and cannot be executed.")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("It is common for smart contracts to efficiently store data directly in the contract bytecode. Examples include constructor arguments, constant variables, compiler metadata and the contract runtime during the init phase. Currently, such data is not distinguished from normal bytecode and is still being analysed for "),a("code",[t._v("JUMPDEST")]),t._v("s by EVM interpreters. This EIP introduces a new opcode "),a("code",[t._v("BEGINDATA")]),t._v(" at byte "),a("code",[t._v("0xb6")]),t._v(", which marks the remainding bytecode as data, indicating to EVM interpreters, static analysis tools and chain explorers that the remaining bytes do not represent opcodes.")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("BEGINDATA")]),t._v(" opcode has been suggested before as part of the EIP "),a("code",[t._v("Subroutines and Static Jumps for the EVM")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/eip-615.html"}},[t._v("EIP-615")]),t._v(" as a way to determine the position of jumptables in contract bytecode. It is here introduced in its own right in order to exclude data from the "),a("code",[t._v("JUMPDEST")]),t._v(" analysis of contracts, making it impossible to jump to data. This makes it easier for static analysis tools to analyse contracts, allows disassemblers, chain explorers and debuggers to not display data as a mess of INVALID opcodes and may even provide a marginal improvement in performance. It also helps scalability because it improves on-chain evaluation of transactions from other chains in that the validation that the code conforms to a certain pattern does not need to do a full jumpdest analysis to see that data is not executed and thus does not have to conform to the pattern (used by the optimism project). Additionally, it paves the way for suggestions such as "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/pull/1712",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP-1712"),a("OutboundLink")],1),t._v(" to disallow unused opcodes, jumptables "),a("RouterLink",{attrs:{to:"/zh/eip-615.html"}},[t._v("EIP-615")]),t._v(" and speculative proposals to disallow for deployment of contracts with stack usage violations.")],1),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("p",[t._v("While computing the valid "),a("code",[t._v("JUMPDEST")]),t._v("s of a contract, halt analysis once the first "),a("code",[t._v("BEGINDATA")]),t._v(" is encountered. In other words: A jump to any codelocation equal to or greater than the location of the first "),a("code",[t._v("BEGINDATA")]),t._v(" causes a "),a("code",[t._v("BAD_JUMP_DESTINATION")]),t._v(" error. If "),a("code",[t._v("BEGINDATA")]),t._v(" is encountered during contract execution, it has the same semantics as "),a("code",[t._v("STOP")]),t._v(". It uses 0 gas.")]),t._v(" "),a("p",[t._v("Bytes past "),a("code",[t._v("BEGINDATA")]),t._v(" remain accessible via "),a("code",[t._v("CODECOPY")]),t._v(" and "),a("code",[t._v("EXTCODECOPY")]),t._v(". "),a("code",[t._v("BEGINDATA")]),t._v(" does not influence "),a("code",[t._v("CODESIZE")]),t._v(" or "),a("code",[t._v("EXTCODESIZE")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v("The byte "),a("code",[t._v("0xb6")]),t._v(" was chosen to align with "),a("RouterLink",{attrs:{to:"/zh/eip-615.html"}},[t._v("EIP-615")]),t._v(". The choice to "),a("code",[t._v("STOP")]),t._v(" if "),a("code",[t._v("BEGINDATA")]),t._v(" is encountered is somewhat arbitrary. An alternative would be to be to abort the execution with an out-of-gas error.")],1),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("The proposal will not change any existing contracts unless their current behaviour relies upon the usage of unused opcodes.")]),t._v(" "),a("p",[t._v("Since contracts have been using data from the very start, in a sense all of them use unused opcodes, but they would have to use data in a way that it is skipped during execution and jumped over. The Solidity compiler never generated such code. It has to be evaluated whether contracts created by other means could have such a code structure.")]),t._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),a("p",[t._v("Test cases should include: 1) A contract which jumps to a destination "),a("code",[t._v("X")]),t._v(", where "),a("code",[t._v("X")]),t._v(" has a pc value higher than the "),a("code",[t._v("BEGINDATA")]),t._v(" opcode, and the byte at "),a("code",[t._v("X")]),t._v(" is "),a("code",[t._v("0x5b")]),t._v(". This should fail with a "),a("code",[t._v("BAD_JUMP_DESTINATION")]),t._v(" error. 2) A contract which encounters the "),a("code",[t._v("BEGINDATA")]),t._v(" opcode (should stop executing the current call frame)")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("Not yet.")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);