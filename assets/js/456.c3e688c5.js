(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{867:function(e,t,s){"use strict";s.r(t);var n=s(46),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"simple-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),s("p",[e._v("A standard contract and interface for issuing bounties on Ethereum, usable for any type of task, paying in any ERC20 token or in ETH.")]),e._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),s("p",[e._v("In order to encourage cross-platform interoperability of bounties on Ethereum, and for easier reputational tracking, StandardBounties can facilitate the administration of funds in exchange for deliverables corresponding to a completed task, in a publicly auditable and immutable fashion.")]),e._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),s("p",[e._v("In the absence of a standard for bounties on Ethereum, it would be difficult for platforms to collaborate and share the bounties which users create (thereby recreating the walled gardens which currently exist on Web2.0 task outsourcing platforms). A standardization of these interactions across task types also makes it far easier to track various reputational metrics (such as how frequently you pay for completed submissions, or how frequently your work gets accepted).")]),e._v(" "),s("h2",{attrs:{id:"specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),s("p",[e._v("After studying bounties as they've existed for thousands of years (and after implementing and processing over 300 of them on main-net in beta), we've discovered that there are 3 core steps to every bounty:")]),e._v(" "),s("ul",[s("li",[e._v("a bounty is "),s("strong",[e._v("issued")]),e._v(": an "),s("code",[e._v("issuer")]),e._v(" specifies the requirements for the task, describing the desired outcome, and how much they would be willing to pay for the completion of that task (denoted in one or several tokens).")]),e._v(" "),s("li",[e._v("a bounty is "),s("strong",[e._v("fulfilled")]),e._v(": a bounty "),s("code",[e._v("fulfiller")]),e._v(" may see the bounty, complete the task, and produce a deliverable which is itself the desired outcome of the task, or simply a record that it was completed. Hashes of these deliverables should be stored immutably on-chain, to serve as proof after the fact.")]),e._v(" "),s("li",[e._v("a fulfillment is "),s("strong",[e._v("accepted")]),e._v(": a bounty "),s("code",[e._v("issuer")]),e._v(" or "),s("code",[e._v("arbiter")]),e._v(" may select one or more submissions to be accepted, thereby releasing payment to the bounty fulfiller(s), and transferring ownership over the given deliverable to the "),s("code",[e._v("issuer")]),e._v(".")])]),e._v(" "),s("p",[e._v("To implement these steps, a number of functions are needed:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("initializeBounty(address _issuer, address _arbiter, string _data, uint _deadline)")]),e._v(": This is used when deploying a new StandardBounty contract, and is particularly useful when applying the proxy design pattern, whereby bounties cannot be initialized in their constructors. Here, the data string should represent an IPFS hash, corresponding to a JSON object which conforms to the schema (described below).")]),e._v(" "),s("li",[s("code",[e._v("fulfillBounty(address[] _fulfillers, uint[] _numerators, uint _denomenator, string _data)")]),e._v(": This is called to submit a fulfillment, submitting a string representing an IPFS hash which contains the deliverable for the bounty. Initially fulfillments could only be submitted by one individual at a time, however users consistently told us they desired to be able to collaborate on fulfillments, thereby allowing the credit for submissions to be shared by several parties. The lines along which eventual payouts are split are determined by the fractions of the submission credited to each fulfiller (using the array of numerators and single denominator). Here, a bounty platform may also include themselves as a collaborator to collect a small fee for matching the bounty with fulfillers.")]),e._v(" "),s("li",[s("code",[e._v("acceptFulfillment(uint _fulfillmentId, StandardToken[] _payoutTokens, uint[] _tokenAmounts)")]),e._v(": This is called by the "),s("code",[e._v("issuer")]),e._v(" or the "),s("code",[e._v("arbiter")]),e._v(" to pay out a given fulfillment, using an array of tokens, and an array of amounts of each token to be split among the contributors. This allows for the bounty payout amount to move as it needs to based on incoming contributions (which may be transferred directly to the contract address). It also allows for the easy splitting of a given bounty's balance among several fulfillments, if the need should arise.\n"),s("ul",[s("li",[s("code",[e._v("drainBounty(StandardToken[] _payoutTokens)")]),e._v(": This may be called by the "),s("code",[e._v("issuer")]),e._v(" to drain a bounty of it's funds, if the need should arise.")])])]),e._v(" "),s("li",[s("code",[e._v("changeBounty(address _issuer, address _arbiter, string _data, uint _deadline)")]),e._v(": This may be called by the "),s("code",[e._v("issuer")]),e._v(" to change the "),s("code",[e._v("issuer")]),e._v(", "),s("code",[e._v("arbiter")]),e._v(", "),s("code",[e._v("data")]),e._v(", and "),s("code",[e._v("deadline")]),e._v(" fields of their bounty.")]),e._v(" "),s("li",[s("code",[e._v("changeIssuer(address _issuer)")]),e._v(": This may be called by the "),s("code",[e._v("issuer")]),e._v(" to change to a new "),s("code",[e._v("issuer")]),e._v(" if need be")]),e._v(" "),s("li",[s("code",[e._v("changeArbiter(address _arbiter)")]),e._v(": This may be called by the "),s("code",[e._v("issuer")]),e._v(" to change to a new "),s("code",[e._v("arbiter")]),e._v(" if need be")]),e._v(" "),s("li",[s("code",[e._v("changeData(string _data)")]),e._v(": This may be called by the "),s("code",[e._v("issuer")]),e._v(" to change just the "),s("code",[e._v("data")])]),e._v(" "),s("li",[s("code",[e._v("changeDeadline(uint _deadline)")]),e._v(": This may be called by the "),s("code",[e._v("issuer")]),e._v(" to change just the "),s("code",[e._v("deadline")])])]),e._v(" "),s("p",[e._v("Optional Functions:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("acceptAndFulfill(address[] _fulfillers, uint[] _numerators, uint _denomenator, string _data, StandardToken[] _payoutTokens, uint[] _tokenAmounts)")]),e._v(": During the course of the development of this standard, we discovered the desire for fulfillers to avoid paying gas fees on their own, entrusting the bounty's "),s("code",[e._v("issuer")]),e._v(" to make the submission for them, and at the same time accept it. This is useful since it still immutably stores the exchange of tokens for completed work, but avoids the need for new bounty fulfillers to have any ETH to pay for gas costs in advance of their earnings.")]),e._v(" "),s("li",[s("code",[e._v("changeMasterCopy(StandardBounty _masterCopy)")]),e._v(": For "),s("code",[e._v("issuer")]),e._v("s to be able to change the masterCopy which their proxy contract relies on, if the proxy design pattern is being employed.")]),e._v(" "),s("li",[s("code",[e._v("refundableContribute(uint[] _amounts, StandardToken[] _tokens)")]),e._v(": While non-refundable contributions may be sent to a bounty simply by transferring those tokens to the address where it resides, one may also desire to contribute to a bounty with the option to refund their contribution, should the bounty never receive a correct submission which is paid out. "),s("code",[e._v("refundContribution(uint _contributionId)")]),e._v(": If a bounty hasn't yet paid out to any correct submissions and is past it's deadline, those individuals who employed the "),s("code",[e._v("refundableContribute")]),e._v(" function may retrieve their funds from the contract.")])]),e._v(" "),s("p",[s("strong",[e._v("Schemas")]),e._v(" Persona Schema:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{\n   name: // optional - A string representing the name of the persona\n   email: // optional - A string representing the preferred contact email of the persona\n   githubUsername: // optional - A string representing the github username of the persona\n   address: // required - A string web3 address of the persona\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("Bounty issuance "),s("code",[e._v("data")]),e._v(" Schema:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{\n  payload: {\n    title: // A string representing the title of the bounty\n    description: // A string representing the description of the bounty, including all requirements\n    issuer: {\n       // persona for the issuer of the bounty\n    },\n    funders:[\n       // array of personas of those who funded the issue.\n    ],\n    categories: // an array of strings, representing the categories of tasks which are being requested\n    tags: // an array of tags, representing various attributes of the bounty\n    created: // the timestamp in seconds when the bounty was created\n    tokenSymbol: // the symbol for the token which the bounty pays out\n    tokenAddress: // the address for the token which the bounty pays out (0x0 if ETH)\n\n    // ------- add optional fields here -------\n    sourceFileName: // A string representing the name of the file\n    sourceFileHash: // The IPFS hash of the file associated with the bounty\n    sourceDirectoryHash: // The IPFS hash of the directory which can be used to access the file\n    webReferenceURL: // The link to a relevant web reference (ie github issue)\n  },\n  meta: {\n    platform: // a string representing the original posting platform (ie 'gitcoin')\n    schemaVersion: // a string representing the version number (ie '0.1')\n    schemaName: // a string representing the name of the schema (ie 'standardSchema' or 'gitcoinSchema')\n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br")])]),s("p",[e._v("Bounty "),s("code",[e._v("fulfillment")]),e._v(" data Schema:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{\n  payload: {\n    description: // A string representing the description of the fulfillment, and any necessary links to works\n    sourceFileName: // A string representing the name of the file being submitted\n    sourceFileHash: // A string representing the IPFS hash of the file being submitted\n    sourceDirectoryHash: // A string representing the IPFS hash of the directory which holds the file being submitted\n    fulfillers: {\n      // personas for the individuals whose work is being submitted\n    }\n\n    // ------- add optional fields here -------\n  },\n  meta: {\n    platform: // a string representing the original posting platform (ie 'gitcoin')\n    schemaVersion: // a string representing the version number (ie '0.1')\n    schemaName: // a string representing the name of the schema (ie 'standardSchema' or 'gitcoinSchema')\n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br")])]),s("h2",{attrs:{id:"rationale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),s("p",[e._v("The development of this standard began a year ago, with the goal of encouraging interoperability among bounty implementations on Ethereum. The initial version had significantly more restrictions: a bounty's "),s("code",[e._v("data")]),e._v(" could not be changed after issuance (it seemed unfair for bounty "),s("code",[e._v("issuer")]),e._v("s to change the requirements after work is underway), and the bounty payout could not be changed (all funds needed to be deposited in the bounty contract before it could accept submissions).")]),e._v(" "),s("p",[e._v("The initial version was also far less extensible, and only allowed for fixed payments to a given set of fulfillments. This new version makes it possible for funds to be split among several correct submissions, for submissions to be shared among several contributors, and for payouts to not only be in a single token as before, but in as many tokens as the "),s("code",[e._v("issuer")]),e._v(" of the bounty desires. These design decisions were made after the 8+ months which Gitcoin, the Bounties Network, and Status Open Bounty have been live and meaningfully facilitating bounties for repositories in the Web3.0 ecosystem.")]),e._v(" "),s("h2",{attrs:{id:"test-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),s("p",[e._v("Tests for our implementation can be found here: https://github.com/Bounties-Network/StandardBounties/tree/develop/test")]),e._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),s("p",[e._v("A reference implementation can be found here: https://github.com/Bounties-Network/StandardBounties/blob/develop/contracts/StandardBounty.sol "),s("strong",[e._v("Although this code has been tested, it has not yet been audited or bug-bountied, so we cannot make any assertions about it's correctness, nor can we presently encourage it's use to hold funds on the Ethereum mainnet.")])]),e._v(" "),s("h2",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),s("p",[e._v("Copyright and related rights waived via "),s("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);