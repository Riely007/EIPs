(window.webpackJsonp=window.webpackJsonp||[]).push([[648],{1068:function(e,t,r){"use strict";r.r(t);var a=r(46),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"simple-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),r("p",[e._v('The current "first price auction" fee model in Ethereum is inefficient and needlessly costly to users. This EIP proposes a way to replace this with a mechanism that allows dynamically priced transaction fees and efficient transaction price discovery.')]),e._v(" "),r("h2",{attrs:{id:"abstract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),r("p",[e._v("Based on "),r("a",{attrs:{href:"https://agoric.com/papers/incentive-engineering-for-computational-resource-management/full-text/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Agoric Papers"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v('Each transaction would have the option of providing parameters that specify an "escalating" bid, creating a time-based auction for validators to include that transaction.')]),e._v(" "),r("p",[e._v("This creates highly efficient price discovery, where the price will always immediately fall to the highest bid price, which is not necessarily that user's highest price they would pay.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://ethresear.ch/uploads/default/original/2X/0/042795efa4c2680d644bc66386cd2984a70293f8.gif",alt:"escalator algorithm price chart"}})]),e._v(" "),r("h2",{attrs:{id:"motivation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),r("p",[e._v("Ethereum currently prices transaction fees using a simple first-price auction, which leads to well documented inefficiencies (some of which are documented in "),r("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP-1559"),r("OutboundLink")],1),e._v(") when users are trying to estimate what price will get a transaction included in a block, especially during times of price volatility and full blocks.")]),e._v(" "),r("p",[e._v("EIP 1559 is currently being championed as an improvement for the Ethereum protocol, and while I agree that the gas market is very inefficient, since a change like this will affect all client and wallet implementations, the Ethereum community should make sure to make a selection based on solid reasoning and justifications, which I believe 1559 is currently lacking.")]),e._v(" "),r("p",[e._v("To facilitate a more productive and concrete discussion about the gas fee market, I felt it was important to present an alternative that is clearly superior to the status quo, so that any claimed properties of EIP-1559 can be compared to a plausible alternative improvement.")]),e._v(" "),r("p",[e._v("I suggest the three gas payment algorithms be compared under all combinations of these conditions:")]),e._v(" "),r("ul",[r("li",[e._v('Blocks that are regularly half full, Blocks that are regularly less than half full, and blocks that repeatedly full in a surprising ("black swan") series.')]),e._v(" "),r("li",[e._v("Users that are willing to wait for a price that may be below the market rate, vs users who value inclusion urgently and are willing to pay above market rate.")])]),e._v(" "),r("p",[e._v("We should then ask:")]),e._v(" "),r("ul",[r("li",[e._v("Is the user willing to pay the most in a given scenario also likely to have their transaction processed in a time period they find acceptable?")]),e._v(" "),r("li",[e._v("Are users who want a good price likely to get included in a reasonable period of time? (Ideally within one block)")])]),e._v(" "),r("p",[e._v("I believe that under this analysis we will find that the escalator algorithm outperforms EIP-1559 in both normal and volatile conditions, for both high-stakes transactions and more casual users looking for a good price.")]),e._v(" "),r("p",[e._v("While I think a deeper simulation/analysis should be completed, I will share my expected results under these conditions.")]),e._v(" "),r("p",[e._v("Furthermore, by introducing tx fee payment related to the current time, we create an incentive for miners to more honestly report the current time.")]),e._v(" "),r("h3",{attrs:{id:"user-strategies-under-various-conditions-and-algorithms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#user-strategies-under-various-conditions-and-algorithms"}},[e._v("#")]),e._v(" User Strategies Under Various Conditions and Algorithms")]),e._v(" "),r("p",[e._v("First I will suggest a likely optimal strategy for different players under the conditions of the different algorithms being considered.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Gas Strategy")]),e._v(" "),r("th",[e._v("Current Single-Price")]),e._v(" "),r("th",[e._v("EIP 1559")]),e._v(" "),r("th",[e._v("Escalator")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Blocks regularly half full, user wants urgent inclusion.")]),e._v(" "),r("td",[e._v("User bids within the range of prices that have been recently accepted, likely over-pays slightly.")]),e._v(" "),r("td",[e._v("User bids one price tier over the current rate, and is likely included.")]),e._v(" "),r("td",[e._v("User bids a range from the low end of recently included to the high end, and is likely included at the lowest rate possible.")])]),e._v(" "),r("tr",[r("td",[e._v("Blocks regularly half full, user willing to wait for a good price.")]),e._v(" "),r("td",[e._v("User bids below or near the low end of the recently accepted prices, may need to wait for a while. If waiting too long, user may need to re-submit with a higher price.")]),e._v(" "),r("td",[e._v("User bids under or at the current price tier, and may wait for the price to fall. If waiting too long, user may need to re-submit with a higher price.")]),e._v(" "),r("td",[e._v("User bids as low as they'd like, but set an upper bound on how long they're willing to wait before increasing price.")])]),e._v(" "),r("tr",[r("td",[e._v("Blocks regularly full, user wants urgent inclusion.")]),e._v(" "),r("td",[e._v("User bids over the price of all recently accepted transactions, almost definitely over-paying significantly.")]),e._v(" "),r("td",[e._v("User bids over the current price tier, and needs to increase their "),r("code",[e._v("tip")]),e._v(" parameter to be competitive on the next block, recreating the single-price auction price problem.")]),e._v(" "),r("td",[e._v("User bids over a price that has been accepted consistently, with an escalating price in case that price is not high enough.")])]),e._v(" "),r("tr",[r("td",[e._v("Blocks regularly full, user willing to wait for a good price.")]),e._v(" "),r("td",[e._v("User bids below the low end of the recently accepted prices, may need to wait for a while. If waiting too long, user may need to re-submit with a higher price.")]),e._v(" "),r("td",[e._v("User bids under or at the current price tier, and may wait for the price to fall. If waiting too long, user may need to re-submit with a higher price.")]),e._v(" "),r("td",[e._v("User bids as low as they'd like, but set an upper bound on how long they're willing to wait before increasing price.")])]),e._v(" "),r("tr",[r("td",[e._v("Blocks regularly under-full, user wants urgent inclusion.")]),e._v(" "),r("td",[e._v("User bids within or over the range of prices that have been recently accepted, likely over-pays slightly, and is likely included in the next block.")]),e._v(" "),r("td",[e._v("User bids at or over the current price tier, and is likely included in the next block.")]),e._v(" "),r("td",[e._v("User submits bid starting within recently accepted prices, is likely accepted in the next block.")])]),e._v(" "),r("tr",[r("td",[e._v("Blocks regularly under-full, user willing to wait for a good price.")]),e._v(" "),r("td",[e._v("User bids below the low end of the recently accepted prices, may need to wait for a while. If waiting too long, user may need to re-submit with a higher price.")]),e._v(" "),r("td",[e._v("User bids at or under the current price tier, and is likely included in the next block. If bidding under and waiting too long, user may need to re-submit with a higher price.")]),e._v(" "),r("td",[e._v("User bids as low as they'd like, but set an upper bound on how long they're willing to wait before increasing price, is likely included in the next few blocks at the lowest possible price.")])])])]),e._v(" "),r("h3",{attrs:{id:"user-results-under-various-conditions-and-algorithms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#user-results-under-various-conditions-and-algorithms"}},[e._v("#")]),e._v(" User Results Under Various Conditions and Algorithms")]),e._v(" "),r("p",[e._v("Now I will consider the ultimate results of the strategies listed above. Are users happy under these conditions? Did we save users money? Were users who wanted urgent inclusion able to secure it?")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Gas Strategy")]),e._v(" "),r("th",[e._v("Current Single-Price")]),e._v(" "),r("th",[e._v("EIP 1559")]),e._v(" "),r("th",[e._v("Escalator")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Blocks regularly half full, user wants urgent inclusion.")]),e._v(" "),r("td",[e._v("User pays an expected amount, and gets transaction mined reliably.")]),e._v(" "),r("td",[e._v("User pays an expected amount, and gets transaction mined reliably.")]),e._v(" "),r("td",[e._v("User pays an expected amount, and gets transaction mined reliably.")])]),e._v(" "),r("tr",[r("td",[e._v("Blocks regularly half full, user willing to wait for a good price.")]),e._v(" "),r("td",[e._v("User can wait for a better price, but may need to resubmit re-signed transactions.")]),e._v(" "),r("td",[e._v("User can wait for a better price, but may need to resubmit re-signed transactions.")]),e._v(" "),r("td",[e._v("User can discover the lowest price within their time preference with a single signature.")])]),e._v(" "),r("tr",[r("td",[e._v("Blocks regularly full, user wants urgent inclusion.")]),e._v(" "),r("td",[e._v("User over-pays, but reliably gets transaction included.")]),e._v(" "),r("td",[e._v("Due to "),r("code",[e._v("tip")]),e._v(' parameter "breaking tie" within a block, user over-pays for reliable inclusion.')]),e._v(" "),r("td",[e._v("User is able to balance the amount of overpayment they risk with the urgency they require.")])]),e._v(" "),r("tr",[r("td",[e._v("Blocks regularly full, user willing to wait for a good price.")]),e._v(" "),r("td",[e._v("User chooses their price, and waits for it, or manually re-submits.")]),e._v(" "),r("td",[e._v("User chooses their price, and waits for it, or manually re-submits.")]),e._v(" "),r("td",[e._v("User chooses their lowest price, but also their highest price and maximum wait time, so no resubmission is needed.")])]),e._v(" "),r("tr",[r("td",[e._v("Blocks regularly under-full, user wants urgent inclusion.")]),e._v(" "),r("td",[e._v("User over-pays, but reliably gets transaction included.")]),e._v(" "),r("td",[e._v("User bids at or over current price tier, gets transaction mined reliably.")]),e._v(" "),r("td",[e._v("User pays an expected amount, and gets transaction mined reliably.")])]),e._v(" "),r("tr",[r("td",[e._v("Blocks regularly under-full, user willing to wait for a good price.")]),e._v(" "),r("td",[e._v("User bids below the low end of the recently accepted prices, may need to wait for a while. If waiting too long, user may need to re-submit with a higher price.")]),e._v(" "),r("td",[e._v("User chooses their price, and waits for it, or manually re-submits.")]),e._v(" "),r("td",[e._v("User chooses their lowest price, but also their highest price and maximum wait time, so no resubmission is needed.")])])])]),e._v(" "),r("p",[e._v("In all cases, the escalator algorithm as I have described is able to perform optimally.")]),e._v(" "),r("p",[e._v("The current gas auction model works well under half-full and less conditions, but for users with urgent needs, has the downside of overpayment. For users seeking a low price, the current model has the downside of requiring re-submission, but has the benefit of always giving users a path towards reliable block inclusion.")]),e._v(" "),r("p",[e._v("EIP-1559 also performs well under normal conditions, but under conditions where blocks are regularly full, the price discovery mechanism breaks, and miners will fall back to the "),r("code",[e._v("TIP")]),e._v(" parameter to choose the transactions to include, meaning that under network congestion, EIP-1559 forces users to "),r("em",[e._v("either")]),e._v(" choose efficient prices or certainty of next-block inclusion.")]),e._v(" "),r("p",[e._v("EIP-1559 also has all the re-submission issues of the current model in situations where a user would like to pay under the current market rate, but has certain time constraints limiting their patience. The Escalator algorithm is the only strategy listed here that allows users to discover the lowest possible price given the network conditions and their time constraints.")]),e._v(" "),r("h2",{attrs:{id:"specification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),r("p",[r("strong",[e._v("Client-Wide Parameters")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("INITIAL_FORK_BLKNUM")]),e._v(": TBD")])]),e._v(" "),r("p",[r("strong",[e._v("Transaction Parameters")]),e._v(" The transaction "),r("code",[e._v("gasPrice")]),e._v(" parameter is now optional, and if excluded can be replaced by these parameters instead:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("START_PRICE")]),e._v(": The lowest price that the user would like to pay for the transaction.")]),e._v(" "),r("li",[r("code",[e._v("START_TIME")]),e._v(": The first time that this transaction is valid at.")]),e._v(" "),r("li",[r("code",[e._v("MAX_PRICE")]),e._v(": The maximum price the sender would be willing to pay to have this transaction processed.")]),e._v(" "),r("li",[r("code",[e._v("MAX_TIME")]),e._v(": The time at which point the user's "),r("code",[e._v("MAX_PRICE")]),e._v(" is achieved. The transaction remains valid after this time at that price.")])]),e._v(" "),r("p",[r("strong",[e._v("Proposal")])]),e._v(" "),r("p",[e._v("For all blocks where "),r("code",[e._v("block.number >= INITIAL_FORK_BLKNUM")]),e._v(":")]),e._v(" "),r("p",[e._v("When processing a transaction with the new pricing parameters, miners now receive a fee based off of the following linear function, where "),r("code",[e._v("BLOCK")]),e._v(" is the current block number:")]),e._v(" "),r("ul",[r("li",[e._v("IF "),r("code",[e._v("BLOCK > MAX_TIME")]),e._v(" then "),r("code",[e._v("TX_FEE = MAX_PRICE")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("TX_FEE = START_PRICE + ((MAX_PRICE - START_PRICE) / (MAX_TIME - START_TIME) * (BLOCK - START_TIME))")])])]),e._v(" "),r("p",[e._v("As a JavaScript function:")]),e._v(" "),r("div",{staticClass:"language-javascript line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("txFee")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("startTime"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" startPrice"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" maxTime"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" maxPrice"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" currentTime")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("currentTime "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">=")]),e._v(" maxTime"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" maxPrice\n\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" priceRange "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" maxPrice "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" startPrice\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" blockRange "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" maxTime "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" startTime\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" slope "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" priceRange "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" blockRange\n\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" startPrice "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("slope "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("currentTime "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" startTime"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br")])]),r("h2",{attrs:{id:"backwards-compatibility"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),r("p",[e._v("Since a current "),r("code",[e._v("gasPrice")]),e._v(" transaction is effectively a flat-escalated transaction bid, it is entirely compatible with this model, and so there is no concrete requirement to deprecate current transaction processing logic, allowing cold wallets and hardware wallets to continue working for the foreseeable future.")]),e._v(" "),r("h2",{attrs:{id:"test-cases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),r("p",[e._v("TBD")]),e._v(" "),r("h2",{attrs:{id:"implementation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),r("p",[e._v("TBD")]),e._v(" "),r("h2",{attrs:{id:"security-considerations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),r("p",[e._v("The security considerations for this EIP are:")]),e._v(" "),r("ul",[r("li",[e._v("None currently known.")])]),e._v(" "),r("h2",{attrs:{id:"copyright"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),r("p",[e._v("Copyright and related rights waived via "),r("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);