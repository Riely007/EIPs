(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{905:function(t,s,a){"use strict";a.r(s);var e=a(46),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v('Very often, we will need to use Attestations like "Alice lives in Australia" on the blockchain; that is issued by a valid issuer off chain for privacy reasons and is revokable inside a smart contract.')]),t._v(" "),a("p",[t._v("An issuer can create a smart contract where he revokes multiple attestations in one go by building a bloom filter of all the hashes of the revoked attestations.")]),t._v(" "),a("p",[t._v("An issuer can also put the validation method in their smart contract that can be called by other smart contracts who need to validate attestations issued by them. This allows each attestor to update their attestation format separately.")]),t._v(" "),a("h3",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),a("p",[t._v("This ERC provides an interface for attestation issuers to manage their attestation signing keys and the attestations that are issued off chain for actions such as revocation and validation.")]),t._v(" "),a("p",[t._v("In our draft implementation we include functions to hold cryptographic attestations, change the issuing contracts of attestations, revoke attestations and verify the authenticity of a cryptographic attestation.")]),t._v(" "),a("h3",{attrs:{id:"example-use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-use-cases"}},[t._v("#")]),t._v(" Example use cases")]),t._v(" "),a("p",[t._v("Let's say that our friend, Alice, wants to buy a bottle of wine to consume with her friends. She wants to do the order online and have it delivered to her home address whilst paying for it with Ether.")]),t._v(" "),a("p",[t._v("Alice has a cryptographic attestation from her local road and maritime services who attests to her age, date of birth, country of residence and ability to drive.")]),t._v(" "),a("p",[t._v("Alice is able to split up this attestation (see merkle tree attestations ERC "),a("a",{attrs:{href:"https://github.com/alpha-wallet/blockchain-attestation/blob/master/ethereum/lib/MerkleTreeAttestation.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(") and provides only the leaf that states she is over the age of 21.")]),t._v(" "),a("p",[t._v("Alice goes to buy the wine through the wine vendors smart contract and feeds in the merkle tree attestation proving that she is above 21 and can thus buy the wine, whilst attaching the appropriate amount of ether to complete the purchase.")]),t._v(" "),a("p",[t._v("The issuer smart contract is able to validate her attestation, check that the issuer contract is valid and capable of performing such an attestation to her age. In this case it would have to be from someone like a driver's licence authority, as attestations to age from a school ID are not of a high enough capacity.")]),t._v(" "),a("p",[t._v("The wine vendors smart contract validates the attestation, checks the payment amount is correct and credits Alice with the wine tokens she needs to complete the sale and deliver the wine.")]),t._v(" "),a("p",[t._v("When the wine vendor shows up to her apartment with the wine, there is no need to prove her age again.")]),t._v(" "),a("h3",{attrs:{id:"draft-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#draft-interface"}},[t._v("#")]),t._v(" Draft interface")]),t._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* each attestation issuer should provide their own verify() for the\n * attestations they issued. There are two reasons for this. First, we\n * need to leave room for new attestation methods other than the\n * Merkle Tree format we are recommending. Second, the validity of the\n * attestation may depend on the context that only the attestor\n * knows. For example, a ticket as an attestation issued on a\n * successful redemption of an American Express credit */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Issuer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Attestation")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" merklePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint8")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" attestor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" recipient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" salt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("`\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Verify the authenticity of an attestation */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("verify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Attestation attestation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addattestorKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" newAttestor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" capacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" expiry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* this should call the revoke first */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" attestorToReplace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" capacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint")]),t._v(" expiry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" newAttestor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* this revokes a single key */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" attestor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* if the key exists with such capacity and isn't revoked or expired */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("validateKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" attestor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" capacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* revoke an attestation by replace the bloom filter, this helps preserve privacy */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("revokeAttestations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bloomfilter b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br")])]),a("p",[t._v("Please click "),a("a",{attrs:{href:"https://github.com/alpha-wallet/blockchain-attestation/blob/master/ethereum/example-james-squire/james-squire.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(" to see a draft implementation of this interface")]),t._v(" "),a("h3",{attrs:{id:"related-erc-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-erc-s"}},[t._v("#")]),t._v(" Related ERC's")]),t._v(" "),a("h1",{attrs:{id:"_1388-1387"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1388-1387"}},[t._v("#")]),t._v(" 1388 #1387")])])}),[],!1,null,null,null);s.default=n.exports}}]);