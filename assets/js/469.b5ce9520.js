(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{880:function(t,s,a){"use strict";a.r(s);var e=a(46),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("A standard interface for multi-class fungible tokens.")]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v('This standard allows for the implementation of a standard API for multi-class fungible tokens (henceforth referred to as "MCFTs") within smart contracts. This standard provides basic functionality to track and transfer ownership of MCFTs.')]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("Currently, there is no standard to support tokens that have multiple classes. In the real world, there are many situations in which defining distinct classes of the same token would be fitting (e.g. distinguishing between preferred/common/restricted shares of a company). Yet, such nuance cannot be supported in today's token standards. An ERC-20 token contract defines tokens that are all of one class while an ERC-721 token contract creates a class (defined by token_id) for each individual token. The ERC-1178 token standard proposes a new standard for creating multiple classes of tokens within one token contract.")]),t._v(" "),a("blockquote",[a("p",[t._v("Aside: In theory, while it is possible to implement tokens with classes using the properties of token structs in ERC-721 tokens, gas costs of implementing this in practice are prohibitive for any non-trivial application.")])]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("h3",{attrs:{id:"erc-20-compatibility-partial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#erc-20-compatibility-partial"}},[t._v("#")]),t._v(" ERC-20 Compatibility (partial)")]),t._v(" "),a("p",[a("strong",[t._v("name")])]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("em",[t._v("OPTIONAL - It is recommended that this method is implemented for enhanced usability with wallets and exchanges, but interfaces and other contracts MUST NOT depend on the existence of this method.")])]),t._v(" "),a("p",[t._v("Returns the name of the aggregate collection of MCFTs managed by this contract. - e.g. "),a("code",[t._v('"My Company Tokens"')]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("class name")])]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" classId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("em",[t._v("OPTIONAL - It is recommended that this method is implemented for enhanced usability with wallets and exchanges, but interfaces and other contracts MUST NOT depend on the existence of this method.")])]),t._v(" "),a("p",[t._v("Returns the name of the class of MCFT managed by this contract. - e.g. "),a("code",[t._v('"My Company Preferred Shares Token"')]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("symbol")])]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("em",[t._v("OPTIONAL - It is recommend that this method is implemented for enhanced usability with wallets and exchanges, but interfaces and other contracts MUST NOT depend on the existence of this method.")])]),t._v(" "),a("p",[t._v('Returns a short string symbol referencing the entire collection of MCFT managed in this contract. e.g. "MUL". This symbol SHOULD be short (3-8 characters is recommended), with no whitespace characters or new-lines and SHOULD be limited to the uppercase latin alphabet (i.e. the 26 letters used in English).')]),t._v(" "),a("p",[a("strong",[t._v("totalSupply")])]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("totalSupply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" totalSupply"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Returns the total number of all MCFTs currently tracked by this contract.")]),t._v(" "),a("p",[a("strong",[t._v("individualSupply")])]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("individualSupply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _classId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" individualSupply"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Returns the total number of MCFTs of class "),a("code",[t._v("_classId")]),t._v(" currently tracked by this contract.")]),t._v(" "),a("p",[a("strong",[t._v("balanceOf")])]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("balanceOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _owner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _classId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" balance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Returns the number of MCFTs of token class "),a("code",[t._v("_classId")]),t._v(" assigned to address "),a("code",[t._v("_owner")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("classesOwned")])]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("classesOwned")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _owner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" classes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Returns an array of "),a("code",[t._v("_classId")]),t._v("'s of MCFTs that address "),a("code",[t._v("_owner")]),t._v(" owns in the contract.")]),t._v(" "),a("blockquote",[a("p",[t._v("NOTE: returning an array is supported by "),a("code",[t._v("pragma experimental ABIEncoderV2")])])]),t._v(" "),a("h2",{attrs:{id:"basic-ownership"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-ownership"}},[t._v("#")]),t._v(" Basic Ownership")]),t._v(" "),a("p",[a("strong",[t._v("approve")])]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("approve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _classId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" quantity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Grants approval for address "),a("code",[t._v("_to")]),t._v(" to take possession "),a("code",[t._v("quantity")]),t._v(" amount of the MCFT with ID "),a("code",[t._v("_classId")]),t._v(". This method MUST "),a("code",[t._v("throw")]),t._v(" if "),a("code",[t._v("balanceOf(msg.sender, _classId) < quantity")]),t._v(", or if "),a("code",[t._v("_classId")]),t._v(" does not represent an MCFT class currently tracked by this contract, or if "),a("code",[t._v("msg.sender == _to")]),t._v(".")]),t._v(" "),a("p",[t._v('Only one address can "have approval" at any given time for a given address and '),a("code",[t._v("_classId")]),t._v(". Calling "),a("code",[t._v("approve")]),t._v(" with a new address and "),a("code",[t._v("_classId")]),t._v(" revokes approval for the previous address and "),a("code",[t._v("_classId")]),t._v(". Calling this method with 0 as the "),a("code",[t._v("_to")]),t._v(" argument clears approval for any address and the specified "),a("code",[t._v("_classId")]),t._v(".")]),t._v(" "),a("p",[t._v("Successful completion of this method MUST emit an "),a("code",[t._v("Approval")]),t._v(" event (defined below) unless the caller is attempting to clear approval when there is no pending approval. In particular, an Approval event MUST be fired if the "),a("code",[t._v("_to")]),t._v(" address is zero and there is some outstanding approval. Additionally, an Approval event MUST be fired if "),a("code",[t._v("_to")]),t._v(" is already the currently approved address and this call otherwise has no effect. (i.e. An "),a("code",[t._v("approve()")]),t._v(' call that "reaffirms" an existing approval MUST fire an event.)')]),t._v(" "),a("p",[a("strong",[t._v("transfer")])]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transfer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _classId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" quantity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Assigns the ownership of "),a("code",[t._v("quantity")]),t._v(" MCFT's with ID "),a("code",[t._v("_classId")]),t._v(" to "),a("code",[t._v("_to")]),t._v(" if and only if "),a("code",[t._v("quantity == balanceOf(msg.sender, _classId)")]),t._v(". A successful transfer MUST fire the "),a("code",[t._v("Transfer")]),t._v(" event (defined below).")]),t._v(" "),a("p",[t._v("This method MUST transfer ownership to "),a("code",[t._v("_to")]),t._v(" or "),a("code",[t._v("throw")]),t._v(", no other outcomes can be possible. Reasons for failure include (but are not limited to):")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("msg.sender")]),t._v(" is not the owner of "),a("code",[t._v("quantity")]),t._v(" amount of tokens of "),a("code",[t._v("_classId")]),t._v("'s.")]),t._v(" "),a("li",[a("code",[t._v("_classId")]),t._v(" does not represent an MCFT class currently tracked by this contract")])]),t._v(" "),a("p",[t._v('A conforming contract MUST allow the current owner to "transfer" a token to themselves, as a way of affirming ownership in the event stream. (i.e. it is valid for '),a("code",[t._v("_to == msg.sender")]),t._v(" if "),a("code",[t._v("balanceOf(msg.sender, _classId) >= balance")]),t._v('.) This "no-op transfer" MUST be considered a successful transfer, and therefore MUST fire a '),a("code",[t._v("Transfer")]),t._v(" event (with the same address for "),a("code",[t._v("_from")]),t._v(" and "),a("code",[t._v("_to")]),t._v(").")]),t._v(" "),a("h2",{attrs:{id:"advanced-ownership-and-exchange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-ownership-and-exchange"}},[t._v("#")]),t._v(" Advanced Ownership and Exchange")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("approveForToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" classIdHeld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" quantityHeld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" classIdWanted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" quantityWanted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Allows holder of one token to allow another individual (or the smart contract itself) to approve the exchange of their tokens of one class for tokens of another class at their specified exchange rate (see sample implementation for more details). This is equivalent to posting a bid in a marketplace.")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exchange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" classIdPosted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" quantityPosted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" classIdWanted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" quantityWanted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Allows an individual to fill an existing bid (see above function) and complete the exchange of their tokens of one class for another. In the sample implementation, this function call should fail unless the callee has already approved the contract to transfer their tokens. Of course, it is possible to create an implementation where calling this function implicitly assumes approval and the transfer is completed in one step.")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferFrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" classId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Allows a third party to initiate a transfer of tokens from "),a("code",[t._v("from")]),t._v(" to "),a("code",[t._v("to")]),t._v(" assuming the approvals have been granted.")]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("p",[a("strong",[t._v("Transfer")])]),t._v(" "),a("p",[t._v("This event MUST trigger when MCFT ownership is transferred via any mechanism.")]),t._v(" "),a("p",[t._v("Additionally, the creation of new MCFTs MUST trigger a Transfer event for each newly created MCFTs, with a "),a("code",[t._v("_from")]),t._v(" address of 0 and a "),a("code",[t._v("_to")]),t._v(" address matching the owner of the new MCFT (possibly the smart contract itself). The deletion (or burn) of any MCFT MUST trigger a Transfer event with a "),a("code",[t._v("_to")]),t._v(" address of 0 and a "),a("code",[t._v("_from")]),t._v(" address of the owner of the MCFT (now former owner!).")]),t._v(" "),a("p",[t._v("NOTE: A Transfer event with "),a("code",[t._v("_from == _to")]),t._v(" is valid. See the "),a("code",[t._v("transfer()")]),t._v(" documentation for details.")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Transfer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" _from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" _to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _classId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("Approval")]),t._v(" This event MUST trigger on any successful call to "),a("code",[t._v("approve(_to, _classId, quantity)")]),t._v(" (unless the caller is attempting to clear approval when there is no pending approval).")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("event")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Approval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" _owner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("indexed")]),t._v(" _approved"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _classId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("h3",{attrs:{id:"current-limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-limitations"}},[t._v("#")]),t._v(" Current Limitations")]),t._v(" "),a("p",[t._v("The design of this project was motivated when I tried to create different classes of fungible ERC-721 tokens (an oxymoron) but ran into gas limits from having to create each tokens individually and maintain them in an efficient data structure for access. Using the maximum gas amount one can send with a transaction on Metamask (a popular web wallet), I was only able to create around 46 ERC-721 tokens before exhausting all gas. This experience motivated the creation of the multi-class fungible token standard.")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("Adoption of the MCFT standard proposal would not pose backwards compatibility issues as it defines a new standard for token creation. This standard follows the semantics of ERC-721 as closely as possible, but can't be entirely compatible with it due to the fundamental differences between multi-class fungible and non-fungible tokens. For example, the "),a("code",[t._v("ownerOf")]),t._v(", "),a("code",[t._v("takeOwnership")]),t._v(", and "),a("code",[t._v("tokenOfOwnerByIndex")]),t._v(" methods in the ERC-721 token standard cannot be implemented in this standard. Furthermore, the function arguments to "),a("code",[t._v("balanceOf")]),t._v(", "),a("code",[t._v("approve")]),t._v(", and "),a("code",[t._v("transfer")]),t._v(" differ as well.")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("A sample implementation can be found "),a("a",{attrs:{href:"https://github.com/achon22/ERC-1178/blob/master/erc1178-sample.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);