(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{1069:function(t,e,n){"use strict";n.r(e);var a=n(46),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("strong",[t._v("Disclaimer: This is for testing basic infrastructure. It will be nuked. It is not for deploying dapps, nor does it define what will go into mainnet. For information on network upgrades, please follow the relevant meta EIPs and ongoing discussion on Ethereum/pm.")])]),t._v(" "),n("h2",{attrs:{id:"abstract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),n("p",[t._v("The specification for Ephemeral Testnet Yolo. Clients who wish to sync need to implement the following features into their client. It is for testing basic infrastructure and will be nuked.")]),t._v(" "),n("h2",{attrs:{id:"specification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),n("p",[t._v("Name: Yolo ID: "),n("code",[t._v("YOLO-v1")])]),t._v(" "),n("ul",[n("li",[t._v("[x] EIP 2537 Commit Hash - "),n("a",{attrs:{href:"https://github.com/ethereum/EIPs/commit/5edff4ae6ff62c7e0bbfad624fc3d0ba7dc84392",target:"_blank",rel:"noopener noreferrer"}},[t._v("5edff4ae6ff62c7e0bbfad624fc3d0ba7dc84392"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("[x] EIP 2315 Commit Hash - "),n("a",{attrs:{href:"https://github.com/ethereum/EIPs/commit/e8accf22cdc5562d6982c560080c6cd6b7f94867",target:"_blank",rel:"noopener noreferrer"}},[t._v("e8accf22cdc5562d6982c560080c6cd6b7f94867"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("em",[t._v("[ ] Proposed - [x] Consensus to include.")])]),t._v(" "),n("h2",{attrs:{id:"timeline"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#timeline"}},[t._v("#")]),t._v(" Timeline")]),t._v(" "),n("ul",[n("li",[t._v("Deployed: June 3rd 2020")])]),t._v(" "),n("h2",{attrs:{id:"client-consensus-implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#client-consensus-implementation"}},[t._v("#")]),t._v(" Client Consensus -> Implementation")]),t._v(" "),n("p",[t._v("YOLO-v1")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[t._v("Client")])]),t._v(" "),n("th",[t._v("Signal")]),t._v(" "),n("th",[t._v("Spec")]),t._v(" "),n("th",[t._v("Merged")]),t._v(" "),n("th",[t._v("Syncing")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Besu")]),t._v(" "),n("td",[t._v("x")]),t._v(" "),n("td",[t._v("x")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("EthereumJS")]),t._v(" "),n("td",[t._v("x")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Geth")]),t._v(" "),n("td",[t._v("x")]),t._v(" "),n("td",[t._v("x")]),t._v(" "),n("td",[t._v("x")]),t._v(" "),n("td",[t._v("x")])]),t._v(" "),n("tr",[n("td",[t._v("Nethermind")]),t._v(" "),n("td",[t._v("x")]),t._v(" "),n("td",[t._v("x")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("OpenEthereum")]),t._v(" "),n("td",[t._v("x")]),t._v(" "),n("td",[t._v("x")]),t._v(" "),n("td"),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("Trinity")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("p",[n("strong",[t._v("Signal")]),t._v(" - Client intends to participate. "),n("em",[t._v("(You are on the bus)")])]),t._v(" "),n("p",[n("strong",[t._v("Spec")]),t._v(" - Client is satisfied with the proposed specification. "),n("em",[t._v("(You agree with the direction)")])]),t._v(" "),n("p",[n("strong",[t._v("Merge")]),t._v(" - Changes are implemented in the client and configurable for YOLO. "),n("em",[t._v("(You are ready to hit the gas and go)")])]),t._v(" "),n("p",[n("strong",[t._v("Syncing")]),t._v(" Client syncs with the network")]),t._v(" "),n("h2",{attrs:{id:"syncing-instructions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syncing-instructions"}},[t._v("#")]),t._v(" Syncing Instructions")]),t._v(" "),n("p",[n("strong",[t._v("Geth")])]),t._v(" "),n("ul",[n("li",[t._v("Yolo V1 testnet is up and running https://yolonet.xyz/")]),t._v(" "),n("li",[t._v("Support is baked into Geth master branch via --yolov1")]),t._v(" "),n("li",[t._v("Genesis config json is at https://yolonet.xyz/yolo.json")]),t._v(" "),n("li",[t._v("EF bootnode at enode://9e1096aa59862a6f164994cb5cb16f5124d6c992cdbf4535ff7dea43ea1512afe5448dca9df1b7ab0726129603f1a3336b631e4d7a1a44c94daddd03241587f9@35.178.210.161:30303")]),t._v(" "),n("li",[t._v("Stats page secret is YOLOv1, with geth you can --ethstats='yournode:YOLOv1@stats.yolonet.xyz'")]),t._v(" "),n("li",[t._v("Faucet is unauthenticated, you can reach it from the dashboard")])]),t._v(" "),n("h2",{attrs:{id:"copyright"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),n("p",[t._v("Copyright and related rights waived via "),n("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),n("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=i.exports}}]);