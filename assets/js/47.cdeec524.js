(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1155:function(e,t,i){"use strict";i.r(t);var n=i(46),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"simple-summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary"}},[e._v("#")]),e._v(" Simple Summary")]),e._v(" "),n("p",[e._v("A standardized algorithm for applying Shamir's Secret Sharing Scheme to BIP-39 mnemonics.")]),e._v(" "),n("h2",{attrs:{id:"abstract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),n("p",[e._v("A standardized approach to splitting a BIP-39 mnemonic into "),n("em",[e._v("N")]),e._v(" BIP-39 mnemonics, called shares, so that "),n("em",[e._v("T")]),e._v(" shares are required to recover the original mnemonic and no information about the original mnemonic, other than its size, is leaked with less than "),n("em",[e._v("T")]),e._v(" shares.")]),e._v(" "),n("h2",{attrs:{id:"motivation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),n("p",[e._v("We'd like to make it easier for less-technical users to store keys securely.")]),e._v(" "),n("p",[e._v("Currently, many users use BIP-39 mnemonics to store entropy values underlying their keys. These mnemonics are a single point of failure. If lost, the user may never regain access to the assets locked by the keys. If stolen, a malicious actor can steal the assets.")]),e._v(" "),n("p",[e._v('Shamir\'s Secret Sharing Scheme addresses this concern directly. It creates "shares" of the secret, such that a subset can be used to recover the secret, but only if a minimum threshold of shares is reached. Without the minimum, no information about the original secret is leaked.')]),e._v(" "),n("p",[e._v("One concern with Shamir's Secret Sharing Scheme is there is no canonical, standard implementation. This puts recovery at risk, as tooling may change over time.")]),e._v(" "),n("p",[e._v("Here, we propose a standardized implementation of Shamir's Secret Sharing Scheme applied specifically to BIP-39 mnemonics, so users can easily create shares of their mnemonic, destroy the original, store the shares appropriately, and confidently recover the original mnemonic at a later date.")]),e._v(" "),n("h2",{attrs:{id:"specification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),n("h3",{attrs:{id:"shamir-s-secret-sharing-scheme"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shamir-s-secret-sharing-scheme"}},[e._v("#")]),e._v(" Shamir's Secret Sharing Scheme")]),e._v(" "),n("p",[e._v("Shamir's Secret Sharing Scheme is a cryptographic method to split a secret into "),n("em",[e._v("N")]),e._v(" unique parts, where any "),n("em",[e._v("T")]),e._v(" of them are required to reconstruct the secret.")]),e._v(" "),n("p",[e._v("First, a polynomial "),n("em",[e._v("f")]),e._v(" of degree "),n("em",[e._v("T")]),e._v(" − 1 is constructed. Then, each share is a point on the polynomial's curve: an integer "),n("em",[e._v("x")]),e._v(", and its corresponding "),n("em",[e._v("y")]),e._v(" point "),n("em",[e._v("f")]),e._v("("),n("em",[e._v("x")]),e._v(").")]),e._v(" "),n("p",[e._v("With any set of "),n("em",[e._v("T")]),e._v(" shares (or points), the initial polynomial can be recovered using polynomial interpolation.")]),e._v(" "),n("p",[e._v("When constructing the initial polynomial, the secret is stored as the coefficient of x"),n("sup",[e._v("0")]),e._v(" and the rest of the coefficients are randomly generated.")]),e._v(" "),n("h3",{attrs:{id:"bip-39-mnemonics"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bip-39-mnemonics"}},[e._v("#")]),e._v(" BIP-39 Mnemonics")]),e._v(" "),n("p",[e._v("BIP-39 is a common standard for storing entropy as a list of words. It is easier to work with for human interactions than raw binary or hexadecimal representations of entropy.")]),e._v(" "),n("p",[e._v("BIP-39 mnemonics encode two pieces of data: the original entropy and a checksum of that entropy. The checksum allows the mnemonic to be validated, ensuring that the user entered it correctly.")]),e._v(" "),n("h4",{attrs:{id:"generating-the-mnemonic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generating-the-mnemonic"}},[e._v("#")]),e._v(" Generating the Mnemonic")]),e._v(" "),n("p",[e._v("The mnemonic must encode entropy in a multiple of 32 bits. With more entropy security is improved but the sentence length increases. We refer to the initial entropy length as ENT. The allowed size of ENT is 128-256 bits.")]),e._v(" "),n("p",[e._v("First, an initial entropy of ENT bits is generated. A checksum is generated by taking the first "),n("code",[e._v("ENT / 32")]),e._v(" bits of its SHA256 hash. This checksum is appended to the end of the initial entropy. Next, these concatenated bits are split into groups of 11 bits, each encoding a number from 0-2047, serving as an index into a word list. Finally, we convert these numbers into words and use the joined words as a mnemonic sentence.")]),e._v(" "),n("p",[e._v("The following table describes the relation between the initial entropy length (ENT), the checksum length (CS), and the length of the generated mnemonic sentence (MS) in words.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("CS = ENT / 32\nMS = (ENT + CS) / 11\n\n|  ENT  | CS | ENT+CS |  MS  |\n+-------+----+--------+------+\n|  128  |  4 |   132  |  12  |\n|  160  |  5 |   165  |  15  |\n|  192  |  6 |   198  |  18  |\n|  224  |  7 |   231  |  21  |\n|  256  |  8 |   264  |  24  |\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("h4",{attrs:{id:"recovering-the-entropy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#recovering-the-entropy"}},[e._v("#")]),e._v(" Recovering the Entropy")]),e._v(" "),n("p",[e._v("The initial entropy can be recovered by reversing the process above. The mnemonic is converted to bits, where each word is converted to 11 bits representing its index in the word list. The entropy portion is defined in the table above, based on the size of the mnemonic.")]),e._v(" "),n("h4",{attrs:{id:"word-list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#word-list"}},[e._v("#")]),e._v(" Word List")]),e._v(" "),n("p",[e._v("This specification only supports the BIP-39 English word list, but this may be expanded in the future.")]),e._v(" "),n("p",[e._v("See "),n("a",{attrs:{href:"../../assets/eip-3450/wordlist.txt"}},[e._v("word list")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"applying-shamir-s-scheme-to-bip-39-mnemonics"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#applying-shamir-s-scheme-to-bip-39-mnemonics"}},[e._v("#")]),e._v(" Applying Shamir's Scheme to BIP-39 Mnemonics")]),e._v(" "),n("p",[e._v("To ensure that the shares are valid BIP-39 mnemonics, we:")]),e._v(" "),n("ol",[n("li",[e._v("Convert the target BIP-39 mnemonic to its underlying entropy")]),e._v(" "),n("li",[e._v("Apply Shamir's Scheme to the entropy")]),e._v(" "),n("li",[e._v("Convert each resulting share's "),n("em",[e._v("y")]),e._v(" value to a BIP-39 mnemonic")])]),e._v(" "),n("p",[e._v("By converting to entropy before applying Shamir's Scheme, we omit the checksum from the initial secret, allowing us to calculate a new checksum for each share when converting the share "),n("em",[e._v("y")]),e._v(" values to mnemonics, ensuring that they are valid according to BIP-39.")]),e._v(" "),n("p",[e._v("When applying Shamir's Scheme to the entropy, we apply it separately to each byte of the entropy and GF(256) is used as the underlying finite field. Bytes are interpreted as elements of GF(256) using polynomial representation with operations modulo the Rijndael irreducible polynomial "),n("em",[e._v("x")]),n("sup",[e._v("8")]),e._v(" + "),n("em",[e._v("x")]),n("sup",[e._v("4")]),e._v(" + "),n("em",[e._v("x")]),n("sup",[e._v("3")]),e._v(" + "),n("em",[e._v("x")]),e._v(" + 1, following AES.")]),e._v(" "),n("h3",{attrs:{id:"share-format"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#share-format"}},[e._v("#")]),e._v(" Share Format")]),e._v(" "),n("p",[e._v("A share represents a point on the curve described by the underlying polynomial used to split the secret. It includes two pieces of data:")]),e._v(" "),n("ul",[n("li",[e._v("An ID: the "),n("em",[e._v("x")]),e._v(" value of the share")]),e._v(" "),n("li",[e._v("A BIP-39 mnemonic: the "),n("em",[e._v("y")]),e._v(" value of the share represented by a mnemonic")])]),e._v(" "),n("h3",{attrs:{id:"creating-shares"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-shares"}},[e._v("#")]),e._v(" Creating Shares")]),e._v(" "),n("p",[e._v("Inputs: BIP-39 mnemonic, number of shares ("),n("em",[e._v("N")]),e._v("), threshold ("),n("em",[e._v("T")]),e._v(")")]),e._v(" "),n("p",[e._v("Output: N Shares, each share including an ID, { "),n("em",[e._v("x")]),e._v(" | 0 < "),n("em",[e._v("x")]),e._v(" < 256 }, and a BIP-39 mnemonic of the same length as the input one")]),e._v(" "),n("ol",[n("li",[e._v("Check the following conditions:\n"),n("ul",[n("li",[e._v("1 < T <= N < 256")]),e._v(" "),n("li",[e._v("The mnemonic is valid according to "),n("a",{attrs:{href:"#generating-the-mnemonic"}},[e._v("BIP-39")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#recovering-the-entropy"}},[e._v("Recover the underlying entropy of the mnemonic")]),e._v(" as a vector of bytes")]),e._v(" "),n("li",[e._v("Define values:\n"),n("ul",[n("li",[e._v("Let "),n("em",[e._v("E")]),e._v(" be the byte-vector representation of the mnemonic's entropy")]),e._v(" "),n("li",[e._v("Let "),n("em",[e._v("n")]),e._v(" be the length of "),n("em",[e._v("E")])]),e._v(" "),n("li",[e._v("Let "),n("em",[e._v("coeff"),n("sub",[e._v("1")])]),e._v(", ... , "),n("em",[e._v("coeff"),n("sub",[e._v("T - 1")])]),e._v(" be byte-vectors belonging to GF(256)"),n("em",[n("sup",[e._v("n")])]),e._v(" generated randomly, independently with uniform distribution from a source suitable for generating cryptographic keys")])])]),e._v(" "),n("li",[e._v("Evaluate the polynomial for each share\n"),n("ul",[n("li",[e._v("For each "),n("em",[e._v("x")]),e._v(" from 1 to "),n("em",[e._v("N")]),e._v(", evaluate the polynomial "),n("em",[e._v("f(x)")]),e._v(" = "),n("em",[e._v("E")]),e._v(" + "),n("em",[e._v("coeff"),n("sub",[e._v("1")]),e._v("x"),n("sup",[e._v("1")])]),e._v(" + ... + "),n("em",[e._v("coeff"),n("sub",[e._v("T - 1")]),e._v("x"),n("sup",[e._v("T - 1")])]),e._v(", where "),n("em",[e._v("x")]),e._v(" is the share ID and "),n("em",[e._v("f(x)")]),e._v(" is the share value (as a vector of bytes)")])])]),e._v(" "),n("li",[e._v("Using "),n("em",[e._v("f(x)")]),e._v(" as the underlying entropy, "),n("a",{attrs:{href:"#generating-the-mnemonic"}},[e._v("generate a mnemonic")]),e._v(" for each share")]),e._v(" "),n("li",[e._v("Return the ID and mnemonic for each share")])]),e._v(" "),n("h3",{attrs:{id:"recovering-the-mnemonic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#recovering-the-mnemonic"}},[e._v("#")]),e._v(" Recovering the Mnemonic")]),e._v(" "),n("p",[e._v("To recover the original mnemonic, we interpolate a polynomial "),n("em",[e._v("f")]),e._v(" from the given set of shares (or points on the polynomial) and evaluate "),n("em",[e._v("f(0)")]),e._v(".")]),e._v(" "),n("h4",{attrs:{id:"polynomial-interpolation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#polynomial-interpolation"}},[e._v("#")]),e._v(" Polynomial Interpolation")]),e._v(" "),n("p",[e._v("Given a set of "),n("em",[e._v("m")]),e._v(" points ("),n("em",[e._v("x"),n("sub",[e._v("i")])]),e._v(", "),n("em",[e._v("y"),n("sub",[e._v("i")])]),e._v("), 1 ≤ "),n("em",[e._v("i")]),e._v(" ≤ "),n("em",[e._v("m")]),e._v(", such that no two "),n("em",[e._v("x"),n("sub",[e._v("i")])]),e._v(" values equal, there exists a polynomial that assumes the value "),n("em",[e._v("y"),n("sub",[e._v("i")])]),e._v(" at each point "),n("em",[e._v("x"),n("sub",[e._v("i")])]),e._v(". The polynomial of lowest degree that satisfies these conditions is uniquely determined and can be obtained using the Lagrange interpolation formula given below.")]),e._v(" "),n("p",[e._v("Since Shamir's Secret Sharing Scheme is applied separately to each of the "),n("em",[e._v("n")]),e._v(" bytes of the shared mnemonic's entropy, we work with "),n("em",[e._v("y"),n("sub",[e._v("i")])]),e._v(" as a vector of "),n("em",[e._v("n")]),e._v(" values, where "),n("em",[e._v("y"),n("sub",[e._v("i")])]),e._v("["),n("em",[e._v("k")]),e._v("] = "),n("em",[e._v("f"),n("sub",[e._v("k")])]),e._v("("),n("em",[e._v("x"),n("sub",[e._v("i")])]),e._v("), 1 ≤ "),n("em",[e._v("k")]),e._v(" ≤ "),n("em",[e._v("n")]),e._v(", and "),n("em",[e._v("f"),n("sub",[e._v("k")])]),e._v(" is the polynomial in the "),n("em",[e._v("k")]),e._v("-th instance of the scheme.")]),e._v(" "),n("h4",{attrs:{id:"interpolate-x-xi-yi-1-≤-i-≤-m"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#interpolate-x-xi-yi-1-≤-i-≤-m"}},[e._v("#")]),e._v(" Interpolate("),n("em",[e._v("x")]),e._v(", {("),n("em",[e._v("x"),n("sub",[e._v("i")])]),e._v(", "),n("em",[e._v("y"),n("sub",[e._v("i")])]),e._v("), 1 ≤ "),n("em",[e._v("i")]),e._v(" ≤ "),n("em",[e._v("m")]),e._v("})")]),e._v(" "),n("p",[e._v("Input: the desired index "),n("em",[e._v("x")]),e._v(", a set of index/value-vector pairs {("),n("em",[e._v("x"),n("sub",[e._v("i")])]),e._v(", "),n("em",[e._v("y")]),n("sub",[n("em",[e._v("i")])]),e._v("), 1 ≤ "),n("em",[e._v("i")]),e._v(" ≤ "),n("em",[e._v("m")]),e._v("} ⊆ GF(256) × GF(256)"),n("sup",[n("em",[e._v("n")])])]),e._v(" "),n("p",[e._v("Output: the value-vector ("),n("em",[e._v("f")]),n("sub",[e._v("1")]),e._v("("),n("em",[e._v("x")]),e._v("), ... , "),n("em",[e._v("f"),n("sub",[e._v("n")])]),e._v("("),n("em",[e._v("x")]),e._v("))")]),e._v(" "),n("p",[n("img",{attrs:{src:i(362),alt:"f_k(x) = \\sum_{i=1}^m y_i[k] \\prod_{\\underset{j \\neq i}{j=1}}^m \\frac{x - x_j}{x_i - x_j}"}})]),e._v(" "),n("h4",{attrs:{id:"recover-the-mnemonic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#recover-the-mnemonic"}},[e._v("#")]),e._v(" Recover the Mnemonic")]),e._v(" "),n("p",[e._v("Input: A set of "),n("em",[e._v("m")]),e._v(" Shares")]),e._v(" "),n("p",[e._v("Output: The original mnemonic")]),e._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#recovering-the-entropy"}},[e._v("Recover the underlying entropy of each share's mnemonic")]),e._v(" as a vector of bytes")]),e._v(" "),n("li",[e._v("Calculate "),n("em",[e._v("E")]),e._v(" = Interpolate(0, [("),n("em",[e._v("x"),n("sub",[e._v("1")])]),e._v(", "),n("em",[e._v("y"),n("sub",[e._v("1")])]),e._v("),...,("),n("em",[e._v("x"),n("sub",[e._v("m")])]),e._v(", "),n("em",[e._v("y"),n("sub",[e._v("m")])]),e._v(")]), where "),n("em",[e._v("x")]),e._v(" is the share ID and "),n("em",[e._v("y")]),e._v(" is the byte-vector of the share's mnemonic's entropy")]),e._v(" "),n("li",[e._v("Using "),n("em",[e._v("E")]),e._v(" as the underlying entropy, "),n("a",{attrs:{href:"#generating-the-mnemonic"}},[e._v("generate a mnemonic")]),e._v(" and return it")])]),e._v(" "),n("h2",{attrs:{id:"rationale"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[e._v("#")]),e._v(" Rationale")]),e._v(" "),n("h3",{attrs:{id:"choice-of-field"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#choice-of-field"}},[e._v("#")]),e._v(" Choice of Field")]),e._v(" "),n("p",[e._v("The field GF(256) was chosen, because the field arithmetic is easy to implement in any programming language and many implementations are already available since it is used in the AES cipher. Although using GF(256) requires that we convert the mnemonic to its underlying entropy as a byte-vector, this is also easy to implement and many implementations of it exist in a variety of programming languages.")]),e._v(" "),n("p",[e._v("GF(2048) was also considered. Using GF(2048), we could have applied Shamir's Scheme directly to the mnemonic, using the word indexes as the values. This would have allowed us to avoid converting the mnemonic to its underlying entropy. But, the resulting shares would not have been valid BIP-39 mnemonics - the checksum portion would not be a valid checksum of the entropy. And, working around this would add considerable complexity.")]),e._v(" "),n("p",[e._v("Another option was GF(2"),n("sup",[n("em",[e._v("n")])]),e._v(") where "),n("em",[e._v("n")]),e._v(" is the size of the entropy in bits. We'd still convert the mnemonic to entropy, but then apply Shamir's Scheme over the entire entropy rather than on a vector of values. The downside of this approach is we'd need a different field for each mnemonic strength along with an associated irreducible polynomial. Additionally, this would require working with very large numbers that can be cumbersome to work with in some languages.")]),e._v(" "),n("h3",{attrs:{id:"valid-share-mnemonics-and-share-ids"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#valid-share-mnemonics-and-share-ids"}},[e._v("#")]),e._v(" Valid Share Mnemonics and Share IDs")]),e._v(" "),n("p",[e._v("The shares produced by the specification include an ID, in addition to the BIP-39 mnemonic.")]),e._v(" "),n("p",[e._v("Other options could have encoded the share ID into the mnemonic, simplifying storage - only the mnemonic would need to be stored.")]),e._v(" "),n("p",[e._v("One possibility would be to store the ID instead of the checksum in the mnemonic. The downside of this approach is that the shares would not be "),n("em",[e._v("valid")]),e._v(' BIP-39 mnemonics because the "checksum" section of the mnemonic would not match the "entropy" section. Shares with valid BIP-39 mnemonics are useful because they are indistinguishable from any other. And users could store the ID in a variety of ways that obscure it.')]),e._v(" "),n("h3",{attrs:{id:"validation-on-recovery"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#validation-on-recovery"}},[e._v("#")]),e._v(" Validation on Recovery")]),e._v(" "),n("p",[e._v("We decided "),n("em",[e._v("not")]),e._v(" to include a validation mechanism on recovering the original mnemonic. This leaks less information to a potential attacker. There is no indication they've gotten the requisite number of shares until they've obtained "),n("em",[e._v("T")]),e._v(" + 1 shares.")]),e._v(" "),n("p",[e._v("We could provide recovery validation by replacing one of the random coefficients with a checksum of the original mnemonic. Then, when recovering the original mnemonic and the polynomial, we could validate that the checksum coefficient is the valid checksum of recovered mnemonic.")]),e._v(" "),n("h2",{attrs:{id:"test-cases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test Cases")]),e._v(" "),n("p",[e._v("Coming soon.")]),e._v(" "),n("p",[e._v("All implementations must be able to:")]),e._v(" "),n("ul",[n("li",[e._v("Split and recover each "),n("code",[e._v("mnemonic")]),e._v(" with the given "),n("code",[e._v("numShares")]),e._v(" and "),n("code",[e._v("threshold")]),e._v(".")]),e._v(" "),n("li",[e._v("Recover the "),n("code",[e._v("mnemonic")]),e._v(" from the given "),n("code",[e._v("knownShares")]),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"security-considerations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security Considerations")]),e._v(" "),n("p",[e._v("The shares produced by the specification include an ID in addition to the BIP-39 mnemonic. This raises two security concerns:")]),e._v(" "),n("p",[e._v("Users "),n("strong",[e._v("must")]),e._v(" keep this ID in order to recover the original mnemonic. If the ID is lost, or separated from the share mnemonic, it may not be possible to recover the original. (Brute force recovery may or may not be possible depending on how much is known about the number of shares and threshold)")]),e._v(" "),n("p",[e._v("The additional data may hint to an attacker of the existence of other keys and the scheme under which they are stored. Therefore, the ID should be stored in a way that obscures its use.")]),e._v(" "),n("h2",{attrs:{id:"copyright"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[e._v("#")]),e._v(" Copyright")]),e._v(" "),n("p",[e._v("Copyright and related rights waived via "),n("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC0"),n("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports},362:function(e,t){e.exports="data:image/gif;base64,R0lGODlh1gA/AMQAAP///wAAAIiIiJiYmKqqqiIiIszMzNzc3Lq6ujIyMu7u7nZ2dkRERBAQEFRUVGZmZn9/f0hISGNjYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAAALAAAAADWAD8AAAX+ICCOZGmeaKqupiIsCPEcA7GweK4DLizTtp1wSCwaj6YBIGAACBiiAnKKUjKdUICUyu16vyRD1oHgbcFTsYhsRrvfcJVAEFUAZHHjvH5/5P+AXw5NCltkSoE6g20Ah4mPkDtZBjdOAk2RK5OVc5iZn6ChoqOkpaanqKmqq6ytoDEzCAMPdkiwB7K0rrumBgQAYkoFZUe+wAzCxCJZvM2PdMABdohH0AbSANTOKg0BAQ3g4eLg3uXeyonm6uvr6CgCDikIDPT19tol8Ns6A97MKjQc+MskxluCFAu8Dau1IsGvLw6TLPC0bwQDb/hUKHgQ4EAmBQYRYmRR5gA2J1P+Sp6ENkBBECouWED7oqBbxx14iDxwkJHEAAeVToREkTCAuyRSBhSY5vGI0mxLszW18+ChnBor4rHYiAaBQiELGO7QKqKg2DUphp4oerTEgQUEcMGlWORtXARzSyRommKAAAJnTghoe4JAzylF/eQhKwJBgxOMS6g1wVbV4xUFDOBScVBHZzAJvFl9E3lBZLQoJpeojEoNwAAsDO+Ai6amN75uIifoeXqEahKsT+1RQeBzCga4SfamQuC3IMl0UQsNYHz1OeEA9qZQsKBAAhjcTNzKJfYyGo4Bgu7wpbgPZBJey/odsXwJdZFGTzH4ywIZi8DA/BKMFujAdsJODiT+qKCC6qlQwHU7uARAA5js994IC0BhwIbm1eecCMFtQ+EIClhIwgHVWYMNPg2c5YVJ37ioQhnXjDDiHdQw9p0BZUgonQkfAhBiMyCVwEYY1Y2gzwlRvdFPAPUhpFWNF4oQAANteXgfURACyc6XYIYpJpjwAWgeiQCOENEJZ+YWwGg5DCPCEyiQ5RUl//wo2ZZrdenMkiIUAoAsnrSpUi0zidDmCAguuGCDDUG61Ukm/kQCWRlGQSN9afFJmZ/NOJCoDAgcwJ8ICTD0lFJMnZgnGAkWYaBJTQjDEFm7RdGEVVomiSGovNwowgMJHHUqAHbJRQBdAxzGhQC+5jDAAtP+GoiscWQ1ScCxjXQarZDAulIkCZkxAOcBUZrAgIxcAMbuDgK0R+2lOfSKH2GqIOASY4L+QNG6OaD7hgENJLdDsYrytVSO9Xp7rzNGPUARJTw8kCiy7a2gCxoHNIAvDlo9oI3IfKXLaWqeWpdfM806i0IMLAwQXRcFuLxWCc1yW2VWDnO5ckU7GGyC0FwwIKkKsxSxk8s/Zbznt0MCzcoDr2rE0cdxBBk1fD+QB8Z4s7y7DbRb4TLARd98AlLaKKAHZxgC+icnjlQYM+DcywDt1ZhfHp1HQd7MUIICTwawkGBlrQiGitNInc8DkEcu+eSUi/3Gl58J8CW+gJJkz+f+/r1jsuOkG7HmCJZ6cTrqE5XuuhCHzpmNFpbnEDtK2bjk9+u8o55UVAM0hSIVqwI/FQBVlS6bRgRUHYnzJLhUdbJ4LYuhzQHDpSxd2vWOAgHFNQP+tyks/Mei3p9IPirDC0Hy39CzPHr7oEw789DrgzKc1LZyt8D/AAyLCOiXiZYEwX8B/F8tCFgKOnTPcQxEQQQfQZW3nWCCotiPBfcxLxZg8BEPBEj+0veIhSEwgQtMUyQuc8IAppCEpnjfjBbQgOCBwjUrwEsNiQbDHlJhfz4MIiQcyEMhGtENGjyiEpfIxCY68Yl6cJF6LgbFKuogLlbMIgvYM6c5QCACg+E3QdK0SMayACBP6jnAAZxWRitSzBISkMAciDGRIrZxiWHEkAlEVrs7GvEfAuijH5vIE6sQrnQhAAA7"}}]);