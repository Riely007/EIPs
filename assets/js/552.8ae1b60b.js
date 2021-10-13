(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{966:function(e,t,r){"use strict";r.r(t);var a=r(46),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"simple-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),r("p",[e._v("A proposal to define a limited number of annual time windows in which network upgrades (aka hard forks) should be performed within. Policies for scheduling network upgrades outside these windows are also described.")]),e._v(" "),r("h2",{attrs:{id:"abstract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),r("p",[e._v("Four different weeks, spaced roughly evenly throughout the year, are targeted for network upgrades to be launched. Regular network upgrades should announce their intention to launch in a particular window early in their process and choose a block number four to six weeks prior to that window. If a network upgrade is cancelled then it would be rescheduled for the next window. Not all windows will be used. Priority upgrades outside the roadmap may be scheduled in the third week of any month, but such use is discouraged. Critical upgrades are scheduled as needed.")]),e._v(" "),r("h2",{attrs:{id:"motivation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),r("p",[e._v("The aim of this EIP is to provide some level of regularity and predictability to the Ethereum network upgrade/hard fork process. This will allow service providers such as exchanges and node operators a predictable framework to schedule activities around. This also provides a framework to regularize the delivery of network upgrades.")]),e._v(" "),r("h2",{attrs:{id:"specification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),r("p",[e._v("Scheduling is defined for three categories of network upgrades. First are "),r("code",[e._v("Roadmap")]),e._v(" network upgrades that include deliberate protocol improvements. Next are "),r("code",[e._v("Priority")]),e._v(" network updates, where there are technical reasons that necessitate a prompt protocol change but these reasons do not present a systemic risk to the protocol or the ecosystem. Finally, "),r("code",[e._v("Critical")]),e._v(" network upgrades are to address issues that present a systemic risk to the protocol or the ecosystem.")]),e._v(" "),r("h3",{attrs:{id:"roadmap-network-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#roadmap-network-upgrades"}},[e._v("#")]),e._v(" Roadmap Network Upgrades")]),e._v(" "),r("p",[e._v("Roadmap network upgrades are network upgrades that are deliberate and measured to improve the protocol and ecosystem. Historical examples are Homestead, Byzantium, and Constantinople.")]),e._v(" "),r("p",[e._v("Roadmap network upgrades should be scheduled in one of four windows: the week with the third Wednesday in January, April, July, and October. When initiating a network upgrade or early in the planning process a particular window should be targeted.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note to reviewers:")]),e._v(" The months and week chosen are to provide an initial recommendation and are easily modifiable prior to final call. They thread the needle between many third quarter and fourth quarter holidays.")])]),e._v(" "),r("p",[e._v("Implementors are expected to have software for a Roadmap network upgrade ready two to four weeks prior to the upgrade. Hence a block number for the network upgrade should be chosen four to six weeks prior to the network upgrade window. Scheduling details such as whether this choice is made prior to or after testnet deployment are out of scope of this EIP.")]),e._v(" "),r("p",[e._v("Depending on the release cadence of Roadmap network upgrades some windows will not be used. For example if a six month release cadence is chosen a roadmap upgrade would not occur in adjacent upgrade windows. Hence for a six month cadence if a roadmap upgrade occurred in April then the July window would not be used for network upgrades.")]),e._v(" "),r("p",[e._v("If a planned roadmap upgrade needs to be rescheduled then strong consideration should be given to rescheduling the upgrade for the next window in three months time. For the case of a six month cadence this may cause releases to be in adjacent release windows. For a three month cadence the next network upgrade would be merged with the current upgrade or the next network upgrade would be delayed.")]),e._v(" "),r("p",[e._v("To be compatible with the scheduled release windows the cadence of the Roadmap Network Upgrades should be a multiple of three months. Whether it is three, six, nine, or more month cadence is out of scope of this EIP.")]),e._v(" "),r("h3",{attrs:{id:"priority-network-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#priority-network-upgrades"}},[e._v("#")]),e._v(" Priority Network Upgrades")]),e._v(" "),r("p",[e._v("Priority network upgrades are reserved for upgrades that require more urgency than a roadmap network upgrade yet do not present a systemic risk to the network or the ecosystem. To date there have been no examples of a priority upgrade. Possible examples may include roadmap upgrades that need to occur in multiple upgrades or for security risks that have a existing mitigation in place that would be better served by a network upgrade. Another possible reason may be to defuse the difficulty bomb due to postponed roadmap upgrades.")]),e._v(" "),r("p",[e._v("Priority network upgrades are best launched in unused roadmap launch windows, namely the third week of January, April, July, and October. If necessary they may be launched in the third week of any month, but strong consideration and preference should be given to unused roadmap launch windows.")]),e._v(" "),r("p",[e._v("Priority network upgrades should be announced and a block chosen far enough in advance so major clients implementors can release software with the needed block number in a timely fashion. These releases should occur at least a week before the launch window. Hence priority launch windows should be chosen two to four weeks in advance.")]),e._v(" "),r("h3",{attrs:{id:"critical-network-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#critical-network-upgrades"}},[e._v("#")]),e._v(" Critical Network Upgrades")]),e._v(" "),r("p",[e._v("Critical network upgrades are network upgrades that are designed to address systemic risks to the protocol or to the ecosystem. Historical examples include Dao Fork, Tangerine Whistle, and Spurious Dragon.")]),e._v(" "),r("p",[e._v("This EIP provides neither guidance nor restrictions to the development and deployment of these emergency hard forks. These upgrades are typically launched promptly after a solution to the systemic risk is agreed upon between the client implementors.")]),e._v(" "),r("p",[e._v("It is recommended that such upgrades perform the minimum amount of changes needed to address the issues that caused the need for the Critical network upgrade and that other changes be integrated into subsequent Priority and Roadmap network upgrades.")]),e._v(" "),r("h3",{attrs:{id:"network-upgrade-block-number-choice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#network-upgrade-block-number-choice"}},[e._v("#")]),e._v(" Network Upgrade Block Number Choice")]),e._v(" "),r("p",[e._v("When choosing an activation block the number can be used to communicate the role of a particular network in the Ethereum Ecosystem. Networks that serve as a value store or are otherwise production grade have different stability concerns than networks that serve as technology demonstration or are explicitly designated for testing.")]),e._v(" "),r("p",[e._v("To date all Mainnet activation blocks have ended in three or more zeros, including Critical Network Upgrades. Ropsten and Kovan initially started with three zeros but switched to palindromic numbers. Rinkeby has always had palindromic activation blocks. Goerli has yet to perform a network upgrade.")]),e._v(" "),r("p",[e._v("To continue this pattern network upgrade activation block numbers for mainnet deployments and production grade networks should chose a number whose base 10 representation ends with three or more zeros.")]),e._v(" "),r("p",[e._v("For testnet and testing or development grades network operators are encouraged to choose a block activation number that is a palindrome in base 10.")]),e._v(" "),r("p",[e._v("Block numbers for Roadmap and Priority network upgrades should be chosen so that it is forecast to occur relatively close to Wednesday at 12:00 UTC+0 during the launch window. This should result in an actual block production occurring sometime between Monday and Friday of the chosen week.")]),e._v(" "),r("h2",{attrs:{id:"rationale"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),r("p",[e._v("The rationale for defining launch windows is to give business running Ethereum infrastructure a predictable schedule for when upgrades may or may not occur. Knowing when a upgrade is not going to occur gives the businesses a clear time frame within which to perform internal upgrades free from external changes. It also provides a timetable for developers and IT professionals to schedule time off against.")]),e._v(" "),r("h2",{attrs:{id:"backwards-compatibility"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),r("p",[e._v("Except for the specific launch windows the previous network upgrades would have complied with these policies. Homestead, Byzantium, and Constantinople would have been Roadmap Network Upgrades. There were no Priority Network Upgrades, although Spurious Dragon would have been a good candidate. Dao Fork was a Critical Network Upgrade in response to TheDao. Tangerine Whistle and Spurious Dragon were critical upgrades in response to the Shanghai Spam Attacks. Constantinople Fix (as it is termed in the reference tests) was in response to the EIP-1283 security issues.")]),e._v(" "),r("p",[e._v("If this policy were in place prior to Constantinople then the initial 2018 launch would likely have been bumped to the next window after the Ropsten testnet consensus failures. The EIP-1283 issues likely would have resulted in an out of window upgrade because of the impact of the difficulty bomb.")]),e._v(" "),r("h2",{attrs:{id:"implementation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),r("p",[e._v("The windows in this EIP are expected to start after the Istanbul Network upgrade, which is the next planned Roadmap upgrade. Istanbul is currently slated for mainnet launch on 2019-10-16, which is compatible with the schedule in this EIP.")]),e._v(" "),r("p",[e._v("The Roadmap Upgrade windows starting with Istanbul would be as follows:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Block Target")]),e._v(" "),r("th",[e._v("Launch Week Range")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("2019-10-16")]),e._v(" "),r("td",[e._v("2019-10-14 to 2019-10-18")])]),e._v(" "),r("tr",[r("td",[e._v("2020-01-15")]),e._v(" "),r("td",[e._v("2020-01-13 to 2020-01-17")])]),e._v(" "),r("tr",[r("td",[e._v("2020-04-15")]),e._v(" "),r("td",[e._v("2020-04-13 to 2020-04-17")])]),e._v(" "),r("tr",[r("td",[e._v("2020-07-15")]),e._v(" "),r("td",[e._v("2020-07-13 to 2020-07-17")])]),e._v(" "),r("tr",[r("td",[e._v("2020-10-21")]),e._v(" "),r("td",[e._v("2020-10-19 to 2020-10-23")])]),e._v(" "),r("tr",[r("td",[e._v("2021-01-20")]),e._v(" "),r("td",[e._v("2021-01-18 to 2021-01-22")])]),e._v(" "),r("tr",[r("td",[e._v("2021-04-21")]),e._v(" "),r("td",[e._v("2021-04-19 to 2021-04-23")])]),e._v(" "),r("tr",[r("td",[e._v("2021-07-21")]),e._v(" "),r("td",[e._v("2021-07-19 to 2021-07-23")])]),e._v(" "),r("tr",[r("td",[e._v("2021-10-20")]),e._v(" "),r("td",[e._v("2021-10-18 to 2021-10-22")])]),e._v(" "),r("tr",[r("td",[e._v("2022-01-19")]),e._v(" "),r("td",[e._v("2022-01-17 to 2022-01-21")])]),e._v(" "),r("tr",[r("td",[e._v("2022-04-20")]),e._v(" "),r("td",[e._v("2022-04-18 to 2022-04-22")])]),e._v(" "),r("tr",[r("td",[e._v("2022-07-20")]),e._v(" "),r("td",[e._v("2022-07-18 to 2022-07-22")])]),e._v(" "),r("tr",[r("td",[e._v("2022-10-19")]),e._v(" "),r("td",[e._v("2022-10-17 to 2022-10-21")])])])]),e._v(" "),r("p",[e._v("The Priority windows through next year, excluding Roadmap windows, are as follows:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Block Target")]),e._v(" "),r("th",[e._v("Launch Week Range")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("2019-11-20")]),e._v(" "),r("td",[e._v("2019-11-18 to 2019-11-22")])]),e._v(" "),r("tr",[r("td",[e._v("2019-12-18")]),e._v(" "),r("td",[e._v("2019-12-16 to 2019-12-20")])]),e._v(" "),r("tr",[r("td",[e._v("2020-02-19")]),e._v(" "),r("td",[e._v("2020-02-17 to 2020-02-21")])]),e._v(" "),r("tr",[r("td",[e._v("2020-03-18")]),e._v(" "),r("td",[e._v("2020-03-16 to 2020-03-20")])]),e._v(" "),r("tr",[r("td",[e._v("2020-05-20")]),e._v(" "),r("td",[e._v("2020-05-18 to 2020-05-22")])]),e._v(" "),r("tr",[r("td",[e._v("2020-06-17")]),e._v(" "),r("td",[e._v("2020-06-15 to 2020-06-19")])]),e._v(" "),r("tr",[r("td",[e._v("2020-08-19")]),e._v(" "),r("td",[e._v("2020-08-18 to 2020-08-21")])]),e._v(" "),r("tr",[r("td",[e._v("2020-09-16")]),e._v(" "),r("td",[e._v("2020-09-14 to 2020-09-18")])]),e._v(" "),r("tr",[r("td",[e._v("2020-11-18")]),e._v(" "),r("td",[e._v("2020-11-16 to 2020-11-20")])]),e._v(" "),r("tr",[r("td",[e._v("2020-12-16")]),e._v(" "),r("td",[e._v("2020-12-14 to 2020-12-18")])])])]),e._v(" "),r("h2",{attrs:{id:"copyright"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),r("p",[e._v("Copyright and related rights waived via "),r("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);