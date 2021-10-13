(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{858:function(e,t,a){"use strict";a.r(t);var c=a(46),o=Object(c.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This EIP specifies a new opcode, which returns the keccak256 hash of a contract's code.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("Many contracts need to perform checks on a contract's bytecode, but do not necessarily need the bytecode itself. For instance, a contract may want to check if another contract's bytecode is one of a set of permitted implementations, or it may perform analyses on code and whitelist any contract with matching bytecode if the analysis passes.")]),e._v(" "),a("p",[e._v("Contracts can presently do this using the "),a("code",[e._v("EXTCODECOPY")]),e._v(" ("),a("code",[e._v("0x3c")]),e._v(") opcode, but this is expensive, especially for large contracts, in cases where only the hash is required. As a result, we propose a new opcode, "),a("code",[e._v("EXTCODEHASH")]),e._v(", which returns the keccak256 hash of a contract's bytecode.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("A new opcode, "),a("code",[e._v("EXTCODEHASH")]),e._v(", is introduced, with number "),a("code",[e._v("0x3f")]),e._v(". The "),a("code",[e._v("EXTCODEHASH")]),e._v(" takes one argument from the stack, zeros the first 96 bits and pushes to the stack the keccak256 hash of the code of the account at the address being the remaining 160 bits.")]),e._v(" "),a("p",[e._v("In case the account does not exist or is empty (as defined by "),a("RouterLink",{attrs:{to:"/zh/eip-161.html"}},[e._v("EIP-161")]),e._v(") "),a("code",[e._v("0")]),e._v(" is pushed to the stack.")],1),e._v(" "),a("p",[e._v("In case the account does not have code the keccak256 hash of empty data (i.e. "),a("code",[e._v("c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470")]),e._v(") is pushed to the stack.")]),e._v(" "),a("p",[e._v("The gas cost of the "),a("code",[e._v("EXTCODEHASH")]),e._v(" is 400.")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("As described in the motivation section, this opcode is widely useful, and saves on wasted gas in many cases.")]),e._v(" "),a("p",[e._v("The gas cost is the same as the gas cost for the "),a("code",[e._v("BALANCE")]),e._v(" opcode because the execution of the "),a("code",[e._v("EXTCODEHASH")]),e._v(" requires the same account lookup as in "),a("code",[e._v("BALANCE")]),e._v(".")]),e._v(" "),a("p",[e._v("Only the 20 last bytes of the argument are significant (the first 12 bytes are ignored) similarly to the semantics of the "),a("code",[e._v("BALANCE")]),e._v(" ("),a("code",[e._v("0x31")]),e._v("), "),a("code",[e._v("EXTCODESIZE")]),e._v(" ("),a("code",[e._v("0x3b")]),e._v(") and "),a("code",[e._v("EXTCODECOPY")]),e._v(" ("),a("code",[e._v("0x3c")]),e._v(").")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("EXTCODEHASH")]),e._v(" distincts accounts without code and non-existing accounts. This is consistent with the way accounts are represented in the state trie. This also allows smart contracts to check whenever an account exists.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("There are no backwards compatibility concerns.")]),e._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),a("ol",[a("li",[e._v("The "),a("code",[e._v("EXTCODEHASH")]),e._v(" of the account without code is "),a("code",[e._v("c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470")]),e._v(" what is the keccack256 hash of empty data.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("EXTCODEHASH")]),e._v(" of non-existent account is "),a("code",[e._v("0")]),e._v(".")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("EXTCODEHASH")]),e._v(" of an precompiled contract is either "),a("code",[e._v("c5d246...")]),e._v(" or "),a("code",[e._v("0")]),e._v(".")]),e._v(" "),a("li",[e._v("If "),a("code",[e._v("EXTCODEHASH")]),e._v(" of "),a("code",[e._v("A")]),e._v(" is "),a("code",[e._v("X")]),e._v(", then "),a("code",[e._v("EXTCODEHASH")]),e._v(" of "),a("code",[e._v("A + 2**160")]),e._v(" is "),a("code",[e._v("X")]),e._v(".")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("EXTCODEHASH")]),e._v(" of an account that selfdestructed in the current transaction.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("EXTCODEHASH")]),e._v(" of an account that selfdestructed and later the selfdestruct has been reverted.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("EXTCODEHASH")]),e._v(" of an account created in the current transaction.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("EXTCODEHASH")]),e._v(" of an account that has been newly create and later the creation has been reverted.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("EXTCODEHASH")]),e._v(" of an account that firstly does not exist and later is empty.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("EXTCODEHASH")]),e._v(" of an empty account that is going to be cleared by the state clearing rule.")])]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("TBD")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);