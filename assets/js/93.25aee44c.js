(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1253:function(e,t,a){"use strict";a.r(t);var o=a(46),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),a("p",[e._v("Increase the "),a("code",[e._v("Gcallstipend")]),e._v(" fee parameter in the "),a("code",[e._v("CALL")]),e._v(" opcode from "),a("code",[e._v("2,300")]),e._v(" to "),a("code",[e._v("3,500")]),e._v(" gas units.")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("Currently, the "),a("code",[e._v("CALL")]),e._v(" opcode forwards a stipend of "),a("code",[e._v("2,300")]),e._v(" gas units for a non zero value "),a("code",[e._v("CALL")]),e._v(" operations where a contract is called. This stipend is given to the contract to allow execution of its "),a("code",[e._v("fallback")]),e._v(" function. The stipend given is intentionally small in order to prevent the called contract from spending the call gas or performing an attack (like re-entrancy).\nWhile the stipend is small it should still give the sufficient gas required for some cheap opcodes like "),a("code",[e._v("LOG")]),e._v(", but it's not enough for some more complex and modern logics to be implemented.\nThis EIP proposes to increase the given stipend from "),a("code",[e._v("2,300")]),e._v(" to "),a("code",[e._v("3,500")]),e._v(" to increase the usability of  the "),a("code",[e._v("fallback")]),e._v(" function.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("The main motivation behind this EIP is to allow simple fallback functions to be implemented for contracts following the "),a("code",[e._v('"Proxy"')]),e._v(" pattern. Simply explained, a "),a("code",[e._v('"Proxy Contract"')]),e._v(" is a contract which use "),a("code",[e._v("DELEGATECALL")]),e._v(" in its "),a("code",[e._v("fallback")]),e._v(" function to behave according to the logic of another contract and serve as an independent instance for the logic of the contract it points to.\nThis pattern is very useful for saving gas per deployment (as Proxy contracts are very lean) and it opens the ability to experiment with upgradability of contracts.\nOn average, the "),a("code",[e._v("DELEGATECALL")]),e._v(" functionality of a proxy contract costs about "),a("code",[e._v("1,000")]),e._v(" gas units.\nWhen a contract transfers ETH to a proxy contract, the proxy logic will consume about "),a("code",[e._v("1,000")]),e._v(" gas units before the "),a("code",[e._v("fallback")]),e._v(" function of the logic contract will be executed. This leaves merely about 1,300 gas units for the execution of the logic. This is a severe limitation as it is not enough for an average "),a("code",[e._v("LOG")]),e._v(" operation (it might be enough for a "),a("code",[e._v("LOG")]),e._v(" with one parameter).\nBy slightly increasing the gas units given in the stipend we allow proxy contracts have proper "),a("code",[e._v("fallback")]),e._v(" logic without increasing the attack surface of the calling contract.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("p",[e._v("Increase the "),a("code",[e._v("Gcallstipend")]),e._v(" fee parameter in the "),a("code",[e._v("CALL")]),e._v(" opcode from "),a("code",[e._v("2,300")]),e._v(" to "),a("code",[e._v("3,500")]),e._v(" gas unit.\nThe actual change to the Ethereum clients would be to change the "),a("code",[e._v("CallStipend")]),e._v(" they store as a constant.\nFor an implementation example you can find a Geth client implementation linked "),a("a",{attrs:{href:"https://github.com/ben-kaufman/go-ethereum/tree/eip-1285",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". The actual change to the code can be found "),a("a",{attrs:{href:"https://github.com/ben-kaufman/go-ethereum/blob/eip-1285/params/protocol_params.go#L41",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("p",[e._v("The rational for increasing the "),a("code",[e._v("Gcallstipend")]),e._v(" gas parameter by "),a("code",[e._v("1,200")]),e._v(" gas units comes from the cost of performing "),a("code",[e._v("DELEGATECALL")]),e._v(" and "),a("code",[e._v("SLOAD")]),e._v(" with a small margin for some small additional operations. All while still keeping the stipend relatively small and insufficient for accessing the storage or changing the state.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This EIP requires a backwards incompatible change for the "),a("code",[e._v("Gcallstipend")]),e._v(" gas parameter in the "),a("code",[e._v("CALL")]),e._v(" opcode.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);