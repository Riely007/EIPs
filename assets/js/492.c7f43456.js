(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{906:function(t,e,a){"use strict";a.r(e);var o=a(46),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("Reduce the gas cost for call instructions, when the goal is to run a new instance of the currently loaded contract.")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("The current gas cost of 700 for all call types ("),a("code",[t._v("CALL")]),t._v(", "),a("code",[t._v("DELEGATECALL")]),t._v(", "),a("code",[t._v("CALLCODE")]),t._v(" and "),a("code",[t._v("STATICCALL")]),t._v(") does not take into account that a call to a contract itself does not need to perform additional I/O operations, because the current contract code has already been loaded into memory.")]),t._v(" "),a("p",[t._v("Reducing the call-to-self gas cost would greatly benefit smart contract languages, such as Solidity and Vyper, who would then be able to utilise "),a("code",[t._v("CALL")]),t._v(" instead of "),a("code",[t._v("JUMP")]),t._v(" opcodes for internal function calls. While languages can already utilise "),a("code",[t._v("CALL")]),t._v(" for internal function calls, they are discouraged to do so due to the gas costs associated with it.")]),t._v(" "),a("p",[t._v("Using "),a("code",[t._v("JUMP")]),t._v(" comes at a considerable cost in complexity to the implementation of a smart contract language and/or compiler. The context (including stack and memory) must be swapped in and out of the calling functions context. A desired feature is having "),a("em",[t._v("pure")]),t._v(" functions, which do not modify the state of memory, and realising them through "),a("code",[t._v("JUMP")]),t._v(" requires a bigger effort from the compiler as opposed to being able to use "),a("code",[t._v("CALL")]),t._v("s.")]),t._v(" "),a("p",[t._v("Using call-to-self provides the guarantee that when making an internal call the function can rely on a clear reset state of memory or context, benefiting both contract writers and contract consumers against potentially undetetected edge cases were memory could poison the context of the internal function.")]),t._v(" "),a("p",[t._v("Because of the "),a("code",[t._v("JUMP")]),t._v(" usage for internal functions a smart contract languages are also at risk of reaching the stack depth limit considerbly faster, if nested function calls with many in and/or outputs are required.")]),t._v(" "),a("p",[t._v("Reducing the gas cost, and thereby incentivising of using call-to-self instead of "),a("code",[t._v("JUMP")]),t._v("s for the internal function implementation will also benefit static analyzers and tracers.")]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("block.number >= FORK_BLKNUM")]),t._v(", then decrease the cost of "),a("code",[t._v("CALL")]),t._v(", "),a("code",[t._v("DELEGATECALL")]),t._v(", "),a("code",[t._v("CALLCODE")]),t._v(" and "),a("code",[t._v("STATICCALL")]),t._v(" from 700 to 40, if and only if, the destination address of the call equals to the address of the caller.")]),t._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v("EIP150 has increased the cost of these instructions from 40 to 700 to more fairly charge for loading new contracts from disk, e.g. to reflect the I/O charge more closely. By assuming that 660 is the cost of loading a contract from disk, one can assume that the original 40 gas is a fair cost of creating a new VM instance of an already loaded contract code.")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("This should pose no risk to backwards compatibility. Currently existing contracts should not notice the difference, just see cheaper execution. With EIP150 contract (and language) developers had a lesson that relying on strict gas costs is not feasible as costs may change. The impact of this EIP is even less that of EIP150 because the costs are changing downwards and not upwards.")]),t._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),a("p",[t._v("TBA")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("TBA")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);