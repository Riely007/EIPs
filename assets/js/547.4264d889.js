(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{963:function(e,r,n){"use strict";n.r(r);var t=n(46),s=Object(t.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"abstract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),n("p",[e._v("This EIP specifies a TLD, registrar, and resolver interface for reverse resolution of Ethereum addresses using ENS. This permits associating a human-readable name with any Ethereum blockchain address. Resolvers can be certain that the reverse record was published by the owner of the Ethereum address in question.")]),e._v(" "),n("h1",{attrs:{id:"motivation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),n("p",[e._v("While name services are mostly used for forward resolution - going from human-readable identifiers to machine-readable ones - there are many use-cases in which reverse resolution is useful as well:")]),e._v(" "),n("ul",[n("li",[e._v("Applications that allow users to monitor accounts benefit from showing the name of an account instead of its address, even if it was originally added by address.")]),e._v(" "),n("li",[e._v("Attaching metadata such as descriptive information to an address allows retrieving this information regardless of how the address was originally discovered.")]),e._v(" "),n("li",[e._v("Anyone can configure a name to resolve to an address, regardless of ownership of that address. Reverse records allow the owner of an address to claim a name as authoritative for that address.")])]),e._v(" "),n("h1",{attrs:{id:"specification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),n("p",[e._v("Reverse ENS records are stored in the ENS hierarchy in the same fashion as regular records, under a reserved domain, "),n("code",[e._v("addr.reverse")]),e._v(". To generate the ENS name for a given account's reverse records, convert the account to hexadecimal representation in lower-case, and append "),n("code",[e._v("addr.reverse")]),e._v(". For instance, the ENS registry's address at "),n("code",[e._v("0x112234455c3a32fd11230c42e7bccd4a84e02010")]),e._v(" has any reverse records stored at "),n("code",[e._v("112234455c3a32fd11230c42e7bccd4a84e02010.addr.reverse")]),e._v(".")]),e._v(" "),n("p",[e._v("Note that this means that contracts wanting to do dynamic reverse resolution of addresses will need to perform hex encoding in the contract.")]),e._v(" "),n("h2",{attrs:{id:"registrar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#registrar"}},[e._v("#")]),e._v(" Registrar")]),e._v(" "),n("p",[e._v("The owner of the "),n("code",[e._v("addr.reverse")]),e._v(" domain will be a registrar that permits the caller to take ownership of the reverse record for their own address. It provides the following methods:")]),e._v(" "),n("h3",{attrs:{id:"function-claim-address-owner-returns-bytes32-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-claim-address-owner-returns-bytes32-node"}},[e._v("#")]),e._v(" function claim(address owner) returns (bytes32 node)")]),e._v(" "),n("p",[e._v("When called by account "),n("code",[e._v("x")]),e._v(", instructs the ENS registry to transfer ownership of the name "),n("code",[e._v("hex(x) + '.addr.reverse'")]),e._v(" to the provided address, and return the namehash of the ENS record thus transferred.")]),e._v(" "),n("p",[e._v("Allowing the caller to specify an owner other than themselves for the relevant node facilitates contracts that need accurate reverse ENS entries delegating this to their creators with a minimum of code inside their constructor:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("reverseRegistrar.claim(msg.sender)\n")])])]),n("h3",{attrs:{id:"function-claimwithresolver-address-owner-address-resolver-returns-bytes32-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-claimwithresolver-address-owner-address-resolver-returns-bytes32-node"}},[e._v("#")]),e._v(" function claimWithResolver(address owner, address resolver) returns (bytes32 node)")]),e._v(" "),n("p",[e._v("When called by account "),n("code",[e._v("x")]),e._v(", instructs the ENS registry to set the resolver of the name "),n("code",[e._v("hex(x) + '.addr.reverse'")]),e._v(" to the specified resolver, then transfer ownership of the name to the provided address, and return the namehash of the ENS record thus transferred. This method facilitates setting up a custom resolver and owner in fewer transactions than would be required if calling "),n("code",[e._v("claim")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"function-setname-string-name-returns-bytes32-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#function-setname-string-name-returns-bytes32-node"}},[e._v("#")]),e._v(" function setName(string name) returns (bytes32 node)")]),e._v(" "),n("p",[e._v("When called by account "),n("code",[e._v("x")]),e._v(", sets the resolver for the name "),n("code",[e._v("hex(x) + '.addr.reverse'")]),e._v(" to a default resolver, and sets the name record on that name to the specified name. This method facilitates setting up simple reverse records for users in a single transaction.")]),e._v(" "),n("h2",{attrs:{id:"resolver-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resolver-interface"}},[e._v("#")]),e._v(" Resolver interface")]),e._v(" "),n("p",[e._v("A new resolver interface is defined, consisting of the following method:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("function name(bytes32 node) constant returns (string);\n")])])]),n("p",[e._v("Resolvers that implement this interface must return a valid ENS name for the requested node, or the empty string if no name is defined for the requested node.")]),e._v(" "),n("p",[e._v("The interface ID of this interface is 0x691f3431.")]),e._v(" "),n("p",[e._v("Future EIPs may specify more record types appropriate to reverse ENS records.")]),e._v(" "),n("h1",{attrs:{id:"appendix-1-registrar-implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#appendix-1-registrar-implementation"}},[e._v("#")]),e._v(" Appendix 1: Registrar implementation")]),e._v(" "),n("p",[e._v("This registrar, written in Solidity, implements the specifications outlined above.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("pragma solidity ^0.4.10;\n\nimport \"./AbstractENS.sol\";\n\ncontract Resolver {\n    function setName(bytes32 node, string name) public;\n}\n\n/**\n * @dev Provides a default implementation of a resolver for reverse records,\n * which permits only the owner to update it.\n */\ncontract DefaultReverseResolver is Resolver {\n    AbstractENS public ens;\n    mapping(bytes32=>string) public name;\n\n    /**\n     * @dev Constructor\n     * @param ensAddr The address of the ENS registry.\n     */\n    function DefaultReverseResolver(AbstractENS ensAddr) {\n        ens = ensAddr;\n    }\n\n    /**\n     * @dev Only permits calls by the reverse registrar.\n     * @param node The node permission is required for.\n     */\n    modifier owner_only(bytes32 node) {\n        require(msg.sender == ens.owner(node));\n        _;\n    }\n\n    /**\n     * @dev Sets the name for a node.\n     * @param node The node to update.\n     * @param _name The name to set.\n     */\n    function setName(bytes32 node, string _name) public owner_only(node) {\n        name[node] = _name;\n    }\n}\n\ncontract ReverseRegistrar {\n    // namehash('addr.reverse')\n    bytes32 constant ADDR_REVERSE_NODE = 0x91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e2;\n\n    AbstractENS public ens;\n    Resolver public defaultResolver;\n\n    /**\n     * @dev Constructor\n     * @param ensAddr The address of the ENS registry.\n     * @param resolverAddr The address of the default reverse resolver.\n     */\n    function ReverseRegistrar(AbstractENS ensAddr, Resolver resolverAddr) {\n        ens = ensAddr;\n        defaultResolver = resolverAddr;\n    }\n\n    /**\n     * @dev Transfers ownership of the reverse ENS record associated with the\n     *      calling account.\n     * @param owner The address to set as the owner of the reverse record in ENS.\n     * @return The ENS node hash of the reverse record.\n     */\n    function claim(address owner) returns (bytes32 node) {\n        return claimWithResolver(owner, 0);\n    }\n\n    /**\n     * @dev Transfers ownership of the reverse ENS record associated with the\n     *      calling account.\n     * @param owner The address to set as the owner of the reverse record in ENS.\n     * @param resolver The address of the resolver to set; 0 to leave unchanged.\n     * @return The ENS node hash of the reverse record.\n     */\n    function claimWithResolver(address owner, address resolver) returns (bytes32 node) {\n        var label = sha3HexAddress(msg.sender);\n        node = sha3(ADDR_REVERSE_NODE, label);\n        var currentOwner = ens.owner(node);\n\n        // Update the resolver if required\n        if(resolver != 0 && resolver != ens.resolver(node)) {\n            // Transfer the name to us first if it's not already\n            if(currentOwner != address(this)) {\n                ens.setSubnodeOwner(ADDR_REVERSE_NODE, label, this);\n                currentOwner = address(this);\n            }\n            ens.setResolver(node, resolver);\n        }\n\n        // Update the owner if required\n        if(currentOwner != owner) {\n            ens.setSubnodeOwner(ADDR_REVERSE_NODE, label, owner);\n        }\n\n        return node;\n    }\n\n    /**\n     * @dev Sets the `name()` record for the reverse ENS record associated with\n     * the calling account. First updates the resolver to the default reverse\n     * resolver if necessary.\n     * @param name The name to set for this address.\n     * @return The ENS node hash of the reverse record.\n     */\n    function setName(string name) returns (bytes32 node) {\n        node = claimWithResolver(this, defaultResolver);\n        defaultResolver.setName(node, name);\n        return node;\n    }\n\n    /**\n     * @dev Returns the node hash for a given account's reverse records.\n     * @param addr The address to hash\n     * @return The ENS node hash.\n     */\n    function node(address addr) constant returns (bytes32 ret) {\n        return sha3(ADDR_REVERSE_NODE, sha3HexAddress(addr));\n    }\n\n    /**\n     * @dev An optimised function to compute the sha3 of the lower-case\n     *      hexadecimal representation of an Ethereum address.\n     * @param addr The address to hash\n     * @return The SHA3 hash of the lower-case hexadecimal encoding of the\n     *         input address.\n     */\n    function sha3HexAddress(address addr) private returns (bytes32 ret) {\n        addr; ret; // Stop warning us about unused variables\n        assembly {\n            let lookup := 0x3031323334353637383961626364656600000000000000000000000000000000\n            let i := 40\n        loop:\n            i := sub(i, 1)\n            mstore8(i, byte(and(addr, 0xf), lookup))\n            addr := div(addr, 0x10)\n            i := sub(i, 1)\n            mstore8(i, byte(and(addr, 0xf), lookup))\n            addr := div(addr, 0x10)\n            jumpi(loop, i)\n            ret := sha3(0, 40)\n        }\n    }\n}\n")])])]),n("h2",{attrs:{id:"copyright"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),n("p",[e._v("Copyright and related rights waived via "),n("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),n("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);r.default=s.exports}}]);