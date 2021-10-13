(window.webpackJsonp=window.webpackJsonp||[]).push([[773],{1201:function(e,t,a){"use strict";a.r(t);var s=a(46),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This EIP defines a resolver profile for ENS that permits the lookup of arbitrary key-value text data. This allows ENS name holders to associate e-mail addresses, URLs and other informational data with a ENS name.")]),e._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("There is often a desire for human-readable metadata to be associated with otherwise machine-driven data; used for debugging, maintenance, reporting and general information.")]),e._v(" "),a("p",[e._v("In this EIP we define a simple resolver profile for ENS that permits ENS names to associate arbitrary key-value text.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("h3",{attrs:{id:"resolver-profile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolver-profile"}},[e._v("#")]),e._v(" Resolver Profile")]),e._v(" "),a("p",[e._v("A new resolver interface is defined, consisting of the following method:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("function text(bytes32 node, string key) constant returns (string text);\n")])])]),a("p",[e._v("The interface ID of this interface is 0x59d1d43c.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("text")]),e._v(" data may be any arbitrary UTF-8 string. If the key is not present, the empty string must be returned.")]),e._v(" "),a("h3",{attrs:{id:"global-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-keys"}},[e._v("#")]),e._v(" Global Keys")]),e._v(" "),a("p",[e._v("Global Keys must be made up of lowercase letters, numbers and the hyphen (-).")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("avatar")]),e._v(" - a URL to an image used as an avatar or logo")]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(" - A description of the name")]),e._v(" "),a("li",[a("strong",[e._v("display")]),e._v(" - a canonical display name for the ENS name; this MUST match the ENS name when its case is folded, and clients should ignore this value if it does not (e.g. "),a("code",[e._v('"ricmoo.eth"')]),e._v(" could set this to "),a("code",[e._v('"RicMoo.eth"')]),e._v(")")]),e._v(" "),a("li",[a("strong",[e._v("email")]),e._v(" - an e-mail address")]),e._v(" "),a("li",[a("strong",[e._v("keywords")]),e._v(" - A list of comma-separated keywords, ordered by most significant first; clients that interpresent this field may choose a threshold beyond which to ignore")]),e._v(" "),a("li",[a("strong",[e._v("mail")]),e._v(" - A physical mailing address")]),e._v(" "),a("li",[a("strong",[e._v("notice")]),e._v(" - A notice regarding this name")]),e._v(" "),a("li",[a("strong",[e._v("location")]),e._v(" - A generic location (e.g. "),a("code",[e._v('"Toronto, Canada"')]),e._v(")")]),e._v(" "),a("li",[a("strong",[e._v("phone")]),e._v(" - A phone number as an "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/E.164",target:"_blank",rel:"noopener noreferrer"}},[e._v("E.164"),a("OutboundLink")],1),e._v(" string")]),e._v(" "),a("li",[a("strong",[e._v("url")]),e._v(" - a website URL")])]),e._v(" "),a("h3",{attrs:{id:"service-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-keys"}},[e._v("#")]),e._v(" Service Keys")]),e._v(" "),a("p",[e._v("Service Keys must be made up of a "),a("em",[e._v("reverse dot notation")]),e._v(" for a namespace which the service owns, for example, DNS names (e.g. "),a("code",[e._v(".com")]),e._v(", "),a("code",[e._v(".io")]),e._v(", etc) or ENS name (i.e. "),a("code",[e._v(".eth")]),e._v("). Service Keys must contain at least one dot.")]),e._v(" "),a("p",[e._v("This allows new services to start using their own keys without worrying about colliding with existing services and also means new services do not need to update this document.")]),e._v(" "),a("p",[e._v("The following services are common, which is why recommendations are provided here, but ideally a service would declare its own key.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("com.github")]),e._v(" - a GitHub username")]),e._v(" "),a("li",[a("strong",[e._v("com.peepeth")]),e._v(" - a Peepeth username")]),e._v(" "),a("li",[a("strong",[e._v("com.linkedin")]),e._v(" - a LinkedIn username")]),e._v(" "),a("li",[a("strong",[e._v("com.twitter")]),e._v(" - a Twitter username")]),e._v(" "),a("li",[a("strong",[e._v("io.keybase")]),e._v(" - a Keybase username")]),e._v(" "),a("li",[a("strong",[e._v("org.telegram")]),e._v(" - a Telegram username")])]),e._v(" "),a("p",[e._v("This technique also allows for a service owner to specify a hierarchy for their keys, such as:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("com.example.users")])]),e._v(" "),a("li",[a("strong",[e._v("com.example.groups")])]),e._v(" "),a("li",[a("strong",[e._v("com.example.groups.public")])]),e._v(" "),a("li",[a("strong",[e._v("com.example.groups.private")])])]),e._v(" "),a("h3",{attrs:{id:"legacy-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#legacy-keys"}},[e._v("#")]),e._v(" Legacy Keys")]),e._v(" "),a("p",[e._v("The following keys were specified in earlier versions of this EIP, which is still in draft.")]),e._v(" "),a("p",[e._v("Their use is not likely very wide, but applications attempting maximal compatibility may wish to query these keys as a fallback if the above replacement keys fail.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("vnd.github")]),e._v(" - a GitHub username (renamed to "),a("code",[e._v("com.github")]),e._v(")")]),e._v(" "),a("li",[a("strong",[e._v("vnd.peepeth")]),e._v(" - a peepeth username (renamced to "),a("code",[e._v("com.peepeth")]),e._v(")")]),e._v(" "),a("li",[a("strong",[e._v("vnd.twitter")]),e._v(" - a twitter username (renamed to "),a("code",[e._v("com.twitter")]),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),a("h3",{attrs:{id:"application-specific-vs-general-purpose-record-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-specific-vs-general-purpose-record-types"}},[e._v("#")]),e._v(" Application-specific vs general-purpose record types")]),e._v(" "),a("p",[e._v("Rather than define a large number of specific record types (each for generally human-readable data) such as "),a("code",[e._v("url")]),e._v(" and "),a("code",[e._v("email")]),e._v(", we follow an adapted model of DNS's "),a("code",[e._v("TXT")]),e._v(" records, which allow for a general keys and values, allowing future extension without adjusting the resolver, while allowing applications to use custom keys for their own purposes.")]),e._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("Not applicable.")]),e._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),a("p",[e._v("TBD")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("None yet.")]),e._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),a("p",[e._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);