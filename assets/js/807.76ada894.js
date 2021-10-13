(window.webpackJsonp=window.webpackJsonp||[]).push([[807],{1236:function(t,e,a){"use strict";a.r(e);var s=a(46),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("This EIP specifies a generic authorisation mechanism, which can be used to implement a variety of authorisation patterns, replacing approvals in ERC20, operators in ERC777, and bespoke authorisation patterns in a variety of other types of contract.")]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("Smart contracts commonly need to provide an interface that allows a third-party caller to perform actions on behalf of a user. The most common example of this is token authorisations/operators, but other similar situations exist throughout the ecosystem, including for instance authorising operations on ENS domains. Typically each standard reinvents this system for themselves, leading to a large number of incompatible implementations of the same basic pattern. Here, we propose a generic method usable by all such contracts.")]),t._v(" "),a("p",[t._v("The pattern implemented here is inspired by "),a("a",{attrs:{href:"https://github.com/dapphub/ds-auth",target:"_blank",rel:"noopener noreferrer"}},[t._v("ds-auth"),a("OutboundLink")],1),t._v(" and by OAuth.")]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("p",[t._v("The generalised authorisation interface is implemented as a metadata provider, as specified in EIP 926. The following mandatory function is implemented:")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("canCall")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" owner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" caller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" callee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes4")]),t._v(" func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Where:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("owner")]),t._v(" is the owner of the resource. If approved the function call is treated as being made by this address.")]),t._v(" "),a("li",[a("code",[t._v("caller")]),t._v(" is the address making the present call.")]),t._v(" "),a("li",[a("code",[t._v("callee")]),t._v(" is the address of the contract being called.")]),t._v(" "),a("li",[a("code",[t._v("func")]),t._v(" is the 4-byte signature of the function being called.")])]),t._v(" "),a("p",[t._v("For example, suppose Alice authorises Bob to transfer tokens on her behalf. When Bob does so, Alice is the "),a("code",[t._v("owner")]),t._v(", Bob is the "),a("code",[t._v("caller")]),t._v(", the token contract is the "),a("code",[t._v("callee")]),t._v(", and the function signature for the transfer function is "),a("code",[t._v("func")]),t._v(".")]),t._v(" "),a("p",[t._v("As this standard uses EIP 926, the authorisation flow is as follows:")]),t._v(" "),a("ol",[a("li",[t._v("The callee contract fetches the provider for the "),a("code",[t._v("owner")]),t._v(" address from the metadata registry contract, which resides at a well-known address.")]),t._v(" "),a("li",[t._v("The callee contract calls "),a("code",[t._v("canCall()")]),t._v(" with the parameters described above. If the function returns false, the callee reverts execution.")])]),t._v(" "),a("p",[t._v("Commonly, providers will wish to supply a standardised interface for users to set and unset their own authorisations. They SHOULD implement the following interface:")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("authoriseCaller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" owner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" caller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" callee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes4")]),t._v(" func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("revokeCaller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" owner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" caller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" callee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes4")]),t._v(" func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("Arguments have the same meaning as in "),a("code",[t._v("canCall")]),t._v(". Implementing contracts MUST ensure that "),a("code",[t._v("msg.sender")]),t._v(" is authorised to call "),a("code",[t._v("authoriseCaller")]),t._v(" or "),a("code",[t._v("revokeCaller")]),t._v(" on behalf of "),a("code",[t._v("owner")]),t._v("; this MUST always be true if "),a("code",[t._v("owner == msg.sender")]),t._v(". Implementing contracts SHOULD use the standard specified here to determine if other callers may provide authorisations as well.")]),t._v(" "),a("p",[t._v("Implementing contracts SHOULD treat a "),a("code",[t._v("func")]),t._v(" of 0 as authorising calls to all functions on "),a("code",[t._v("callee")]),t._v(". If "),a("code",[t._v("authorised")]),t._v(" is "),a("code",[t._v("false")]),t._v(" and "),a("code",[t._v("func")]),t._v(" is 0, contracts need only clear any blanket authorisation; individual authorisations may remain in effect.")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("There are no backwards compatibility concerns.")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("Example implementation TBD.")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);