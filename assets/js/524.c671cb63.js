(window.webpackJsonp=window.webpackJsonp||[]).push([[524],{937:function(t,e,s){"use strict";s.r(e);var a=s(46),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"simple-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),s("p",[t._v("We propose a standard and an interface to define transfer rules, in the context of ERC20 tokens and possibly beyond.")]),t._v(" "),s("p",[t._v("A rule can act based on sender, destination and amount, and is triggered (and rejects the transfer) according to any required business logic.")]),t._v(" "),s("p",[t._v("To ease rule reusability and composition, we also propose an interface and base implementation for a rule engine.")]),t._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("p",[t._v("This standard proposal should answer the following challenges:")]),t._v(" "),s("ul",[s("li",[t._v("Enable integration of rules with interacting platforms such as exchanges, decentralized wallets and DApps.")]),t._v(" "),s("li",[t._v("Externale code and storage, improve altogether reusability, gas costs and contracts' memory footprint.")]),t._v(" "),s("li",[t._v("Highlight contract behavior and its evolution, in order to ease user interaction with such contract.")])]),t._v(" "),s("p",[t._v("If these challenges are answered, this proposal will provide a unified basis for transfer rules and hopefully address the transfer restriction needs of other EIPs as well, e.g. "),s("RouterLink",{attrs:{to:"/zh/eip-902.html"}},[t._v("EIP-902")]),t._v(", "),s("RouterLink",{attrs:{to:"/zh/eip-1066.html"}},[t._v("EIP-1066")]),t._v(" and "),s("RouterLink",{attrs:{to:"/zh/eip-1175.html"}},[t._v("EIP-1175")]),t._v(".")],1),t._v(" "),s("p",[t._v("This document proposes specifications for a standard of "),s("strong",[t._v("transfer rules")]),t._v(" and interfaces to both the rules and the rule engine, which was made to be inherited by a token, but may have a much broader scope in the authors' opinion.")]),t._v(" "),s("p",[t._v("The last section of this document illustrates the proposal with a rule template and links to rule implementations.")]),t._v(" "),s("h2",{attrs:{id:"motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),s("p",[t._v("ERC20 was designed as a standard interface allowing any token on Ethereum to be handled by other applications: from wallets to decentralized exchanges. This has been extremely powerful, but future developments in the industry of tokenization are bringing new challenges. For example it is already hard to know exactly why an ERC20 transfer failed, and it will become even harder when many tokens add their own transfer rules to the mix; we propose that it should be trivial to determine before a tx is sent, whether the transfer should turn out valid or invalid, and why (unless conditions change in the meantime obviously). On the other hand, if the rules were changed, it should also be easily detected, so that the interacting party knows it must adjust its expectations or model.")]),t._v(" "),s("h2",{attrs:{id:"specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),s("p",[t._v("We define below an interface for a rule. Rules are meant to be as simple as possible, to limit gas expenditure, since that logic will be executed on every transfer. Another reason for keeping rules simple and short, and strive for atomicity, is to facilitate both composition and interpretation of rejected transfers. By knowing which rule was triggered, we obtain a clear picture of the reason for rejection.")]),t._v(" "),s("p",[t._v("The engine we propose executes all the rules defined by its owner, on every transfer and it is easy to add and remove rules individually, although we have chosen to use quite a raw rule update method, to save on deployment costs, which are often tight when it comes to token smart contracts.")]),t._v(" "),s("p",[t._v("Rules are deployed on the blockchain as individual smart contracts, and called upon by the rule engine they were attached to. But any third party, for example an exchange preparing a cashout for a customer, can very cheaply query the rule engine of the token, or a single rule directly, to verify the validity of a transfer before execution, so as to never get a rejected transaction.")]),t._v(" "),s("h2",{attrs:{id:"rule-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-interface"}},[t._v("#")]),t._v(" Rule interface")]),t._v(" "),s("p",[s("code",[t._v("IRule")]),t._v(" interface should provide a way to validate if an address or a transfer is valid.")]),t._v(" "),s("p",[t._v("If one of these two methods is not applicable, it can simply be made to return true systematically. If any parameter of "),s("code",[t._v("isTransferValid")]),t._v(" is not needed, its name should be commented out with "),s("code",[t._v("/* */")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("pragma solidity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IRule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAddressValid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("address _address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" external view "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTransferValid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("address _from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address _to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uint256 _amount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    external view "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"withrules-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#withrules-interface"}},[t._v("#")]),t._v(" WithRules interface")]),t._v(" "),s("p",[s("code",[t._v("WithRules")]),t._v(" interface describes the integration of rules to a rule engine. Developers may choose to not implement this interface if their code will only deal with one rule, or if it is not desirable to update the rules.")]),t._v(" "),s("p",[t._v("The rules ordering must be thought through carefully. Rules which are cheaper to validate or have a higher chance to break should be put first to reduce global gas expenditure, then business logic should guide the ordering of rules. That is why rules for a given context should be defined as a whole and not individually.")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("pragma solidity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./IRule.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IWithRules")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ruleLength")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" view "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uint256"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("uint256 _ruleId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" view "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IRule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validateAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("address _address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" view "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("validateTransfer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("address _from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address _to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uint256 _amount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" view "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineRules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("IRule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" _rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  event "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RulesDefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uint256 count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h2",{attrs:{id:"withrules-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#withrules-implementation"}},[t._v("#")]),t._v(" WithRules implementation")]),t._v(" "),s("p",[t._v("We also propose a simple implementation of the rule engine, available "),s("a",{attrs:{href:"https://github.com/MtPelerin/MtPelerin-protocol/blob/master/contracts/rule/WithRules.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(". It has been kept minimal both to save on gas costs on each transfer, and to reduce the deployment cost overhead for the derived smart contract.")]),t._v(" "),s("p",[t._v("On top of implementing the interface above, this engine also defines two modifiers ("),s("code",[t._v("whenAddressRulesAreValid")]),t._v("and  "),s("code",[t._v("whenTransferRulesAreValid")]),t._v("), which can be used throughout the token contract to restrict "),s("code",[t._v("transfer()")]),t._v(", "),s("code",[t._v("transferFrom")]),t._v(" and any other function that needs to respect either a simple whitelist or complex transfer rules.")]),t._v(" "),s("h2",{attrs:{id:"integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integration"}},[t._v("#")]),t._v(" Integration")]),t._v(" "),s("p",[t._v("To use rules within a token is as easy as having the token inherit from WithRules, then writing rules according to the IRule interface and deploying each rule individually. The token owner can then use "),s("code",[t._v("defineRules()")]),t._v(" to attach all rules in the chosen order, within a single transaction.")]),t._v(" "),s("p",[t._v("Below is a template for a rule.")]),t._v(" "),s("div",{staticClass:"language-solidity line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../interface/IRule.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TemplateRule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" IRule "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// state vars for business logic")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* arguments for init */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initializations")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAddressValid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    boolean isValid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// business logic ")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" isValid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTransferValid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _from"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" _amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    boolean isValid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// business logic ")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" isValid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br")])]),s("p",[t._v("*** Notes *** The MPS (Mt Pelerin's Share) token is the current live implementation of this standard. Other implementations may be written with different trade-offs: from gas savings to improved security.")]),t._v(" "),s("h4",{attrs:{id:"example-of-rules-implementations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-of-rules-implementations"}},[t._v("#")]),t._v(" Example of rules implementations")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://github.com/MtPelerin/MtPelerin-protocol/tree/master/contracts/rule/YesNoRule.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("YesNo rule"),s("OutboundLink")],1),t._v(": Trivial rule used to demonstrate both a rule and the rule engine.")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/MtPelerin/MtPelerin-protocol/tree/master/contracts/rule/FreezeRule.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("Freeze rule"),s("OutboundLink")],1),t._v(": This rule allows to prevent any transfer of tokens to or from chosen addresses. A smart blacklist.")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/MtPelerin/MtPelerin-protocol/tree/master/contracts/rule/LockRule.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lock rule"),s("OutboundLink")],1),t._v(": Define a global transfer policy preventing either sending or receiving tokens within a period of time. Exceptions may be granted to some addresses by the token admin. A smart whitelist.")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/MtPelerin/MtPelerin-protocol/tree/master/contracts/rule/UserKycRule.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("User Kyc Rule"),s("OutboundLink")],1),t._v(": Rule example relying on an existing whitelist to assert transfer and addresses validity. It is a good example of a rule that completely externalizes it's tasks.")])])]),t._v(" "),s("h4",{attrs:{id:"example-implementations-are-available-at"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-implementations-are-available-at"}},[t._v("#")]),t._v(" Example implementations are available at")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/MtPelerin/MtPelerin-protocol/tree/master/contracts/rule",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mt Pelerin Bridge protocol rules implementation"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/MtPelerin/MtPelerin-protocol/blob/master/contracts/token/component/TokenWithRules.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mt Pelerin Token with rules"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"history"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[t._v("#")]),t._v(" History")]),t._v(" "),s("p",[t._v("Historical links related to this standard:")]),t._v(" "),s("ul",[s("li",[t._v("The first regulated tokenized share issued by Mt Pelerin (MPS token) is using an early version of this proposal: https://www.mtpelerin.com/blog/world-first-tokenized-shares The rule engine was updated several times, after the token issuance and during the tokensale, to match changing business and legal requirements, showcasing the solidity and flexibility of the rule engine.")])]),t._v(" "),s("h2",{attrs:{id:"copyright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),s("p",[t._v("Copyright and related rights waived via "),s("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),s("OutboundLink")],1),t._v(". External references outside this repository will have their own specific copyrights.")])])}),[],!1,null,null,null);e.default=n.exports}}]);