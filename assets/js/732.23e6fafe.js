(window.webpackJsonp=window.webpackJsonp||[]).push([[732],{1159:function(s,a,f){"use strict";f.r(a);var t=f(46),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,f=s._self._c||a;return f("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[f("h2",{attrs:{id:"simple-summary"}},[f("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[s._v("#")]),s._v(" Simple Summary")]),s._v(" "),f("p",[s._v("Reduce the cost of declaring "),f("code",[s._v("tx.to")]),s._v(" storage keys in access lists.")]),s._v(" "),f("h2",{attrs:{id:"motivation"}},[f("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[s._v("#")]),s._v(" Motivation")]),s._v(" "),f("p",[s._v("Currently, a transaction must read at least 25 distinct storage slots in "),f("code",[s._v("tx.to")]),s._v(" before it's more expensive to forego an access list.")]),s._v(" "),f("div",{staticClass:"language- line-numbers-mode"},[f("pre",{pre:!0,attrs:{class:"language-text"}},[f("code",[s._v("ACCESS_LIST_ADDRESS_COST + (ACCESS_LIST_STORAGE_KEY_COST + WARM_STORAGE_READ_COST) * x = COLD_SLOAD_COST * x\nx = 24\n")])]),s._v(" "),f("div",{staticClass:"line-numbers-wrapper"},[f("span",{staticClass:"line-number"},[s._v("1")]),f("br"),f("span",{staticClass:"line-number"},[s._v("2")]),f("br")])]),f("p",[s._v("EIP-2930 requires the address under which the storage keys reside be declared explicitly, since it must be added to the EIP-2929 "),f("code",[s._v("accessed_addresses")]),s._v(" list. However, "),f("code",[s._v("tx.to")]),s._v(" is a special case that is added by default, so paying "),f("code",[s._v("ACCESS_LIST_ADDRESS_COST")]),s._v(" for "),f("code",[s._v("tx.to")]),s._v(" is essentially paying twice for the same address. Avoiding overpayment here will reduce the differential to just 5 unique reads before using an access list is cheaper -- making them a more attractive option.")]),s._v(" "),f("h2",{attrs:{id:"specification"}},[f("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[s._v("#")]),s._v(" Specification")]),s._v(" "),f("p",[s._v("Treat the first occurrence of "),f("code",[s._v("tx.to")]),s._v(" in an access list as "),f("code",[s._v("calldata")]),s._v(" for gas accounting purposes. Do not charge "),f("code",[s._v("ACCESS_LIST_ADDRESS_COST")]),s._v(" for it. Storage keys underneath the address are unaffected.")]),s._v(" "),f("p",[s._v("If "),f("code",[s._v("tx.to == nil")]),s._v(", "),f("code",[s._v("tx.to")]),s._v(" is defined be the derived contract address created by the transaction.")]),s._v(" "),f("h2",{attrs:{id:"rationale"}},[f("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[s._v("#")]),s._v(" Rationale")]),s._v(" "),f("h3",{attrs:{id:"why-charge-at-all"}},[f("a",{staticClass:"header-anchor",attrs:{href:"#why-charge-at-all"}},[s._v("#")]),s._v(" Why charge at all?")]),s._v(" "),f("p",[s._v("EIP-2930 is specifically written to make access lists simple to reason about and validate. It may be possible to modify the structure of the access list to avoid including "),f("code",[s._v("tx.to")]),s._v(" explicitly, but this would renege on the spirit of EIP-2930.")]),s._v(" "),f("h3",{attrs:{id:"why-charge-as-calldata"}},[f("a",{staticClass:"header-anchor",attrs:{href:"#why-charge-as-calldata"}},[s._v("#")]),s._v(" Why charge as "),f("code",[s._v("calldata")]),s._v("?")]),s._v(" "),f("p",[s._v("The cost of "),f("code",[s._v("calldata")]),s._v(" was  thoroughly analyzed in EIP-2028 to determine a fair value that is not susceptible to denial-of-service attacks. We consider this the lower bound on how much transaction data should cost. Since there is no computation burden imposed for adding "),f("code",[s._v("tx.to")]),s._v(" to the "),f("code",[s._v("accessed_addresses")]),s._v(" map (it's added by default by "),f("RouterLink",{attrs:{to:"/zh/eip-2929.html"}},[s._v("EIP-2929")]),s._v("), there is no reason to charge more than the absolute minimum for the data.")],1),s._v(" "),f("h2",{attrs:{id:"test-cases"}},[f("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[s._v("#")]),s._v(" Test Cases")]),s._v(" "),f("div",{staticClass:"language- line-numbers-mode"},[f("pre",{pre:!0,attrs:{class:"language-text"}},[f("code",[s._v('{\n    "0xffffffffffffffffffffffffffffffffffffffff": []\n}\ncost = 320\n\n{\n    "0x00ffffffffffffffffffffffffffffffffffffff": []\n}\ncost = 308\n\n{\n    "0xffffffffffffffffffffffffffffffffffffffff": []\n    "0xffffffffffffffffffffffffffffffffffffffff": []\n}\ncost = 2720\n\n{\n    "0xffffffffffffffffffffffffffffffffffffffff": [\n        "0x00"\n    ]\n    "0xffffffffffffffffffffffffffffffffffffffff": []\n}\ncost = 4620\n\n{\n    "0xffffffffffffffffffffffffffffffffffffffff": [\n        "0x00"\n    ]\n    "0xffffffffffffffffffffffffffffffffffffffff": [\n        "0x00"\n    ]\n}\ncost = 6520\n')])]),s._v(" "),f("div",{staticClass:"line-numbers-wrapper"},[f("span",{staticClass:"line-number"},[s._v("1")]),f("br"),f("span",{staticClass:"line-number"},[s._v("2")]),f("br"),f("span",{staticClass:"line-number"},[s._v("3")]),f("br"),f("span",{staticClass:"line-number"},[s._v("4")]),f("br"),f("span",{staticClass:"line-number"},[s._v("5")]),f("br"),f("span",{staticClass:"line-number"},[s._v("6")]),f("br"),f("span",{staticClass:"line-number"},[s._v("7")]),f("br"),f("span",{staticClass:"line-number"},[s._v("8")]),f("br"),f("span",{staticClass:"line-number"},[s._v("9")]),f("br"),f("span",{staticClass:"line-number"},[s._v("10")]),f("br"),f("span",{staticClass:"line-number"},[s._v("11")]),f("br"),f("span",{staticClass:"line-number"},[s._v("12")]),f("br"),f("span",{staticClass:"line-number"},[s._v("13")]),f("br"),f("span",{staticClass:"line-number"},[s._v("14")]),f("br"),f("span",{staticClass:"line-number"},[s._v("15")]),f("br"),f("span",{staticClass:"line-number"},[s._v("16")]),f("br"),f("span",{staticClass:"line-number"},[s._v("17")]),f("br"),f("span",{staticClass:"line-number"},[s._v("18")]),f("br"),f("span",{staticClass:"line-number"},[s._v("19")]),f("br"),f("span",{staticClass:"line-number"},[s._v("20")]),f("br"),f("span",{staticClass:"line-number"},[s._v("21")]),f("br"),f("span",{staticClass:"line-number"},[s._v("22")]),f("br"),f("span",{staticClass:"line-number"},[s._v("23")]),f("br"),f("span",{staticClass:"line-number"},[s._v("24")]),f("br"),f("span",{staticClass:"line-number"},[s._v("25")]),f("br"),f("span",{staticClass:"line-number"},[s._v("26")]),f("br"),f("span",{staticClass:"line-number"},[s._v("27")]),f("br"),f("span",{staticClass:"line-number"},[s._v("28")]),f("br"),f("span",{staticClass:"line-number"},[s._v("29")]),f("br"),f("span",{staticClass:"line-number"},[s._v("30")]),f("br"),f("span",{staticClass:"line-number"},[s._v("31")]),f("br"),f("span",{staticClass:"line-number"},[s._v("32")]),f("br"),f("span",{staticClass:"line-number"},[s._v("33")]),f("br")])]),f("h2",{attrs:{id:"backwards-compatibility"}},[f("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[s._v("#")]),s._v(" Backwards Compatibility")]),s._v(" "),f("p",[s._v("No issues.")]),s._v(" "),f("h2",{attrs:{id:"security-considerations"}},[f("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[s._v("#")]),s._v(" Security Considerations")]),s._v(" "),f("p",[s._v("None.")]),s._v(" "),f("h2",{attrs:{id:"copyright"}},[f("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[s._v("#")]),s._v(" Copyright")]),s._v(" "),f("p",[s._v("Copyright and related rights waived via "),f("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CC0"),f("OutboundLink")],1),s._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);