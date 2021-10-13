(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{987:function(f,e,t){"use strict";t.r(e);var a=t(46),n=Object(a.a)({},(function(){var f=this,e=f.$createElement,t=f._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":f.$parent.slotKey}},[t("h1",{attrs:{id:"parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[f._v("#")]),f._v(" Parameters")]),f._v(" "),t("ul",[t("li",[t("code",[f._v("GQUADDIVISOR: 20")])])]),f._v(" "),t("h1",{attrs:{id:"specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[f._v("#")]),f._v(" Specification")]),f._v(" "),t("p",[f._v("At address 0x00......05, add a precompile that expects input in the following format:")]),f._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[f._v("<length_of_BASE> <length_of_EXPONENT> <length_of_MODULUS> <BASE> <EXPONENT> <MODULUS>\n")])])]),t("p",[f._v("Where every length is a 32-byte left-padded integer representing the number of bytes to be taken up by the next value. Call data is assumed to be infinitely right-padded with zero bytes, and excess data is ignored. Consumes "),t("code",[f._v("floor(mult_complexity(max(length_of_MODULUS, length_of_BASE)) * max(ADJUSTED_EXPONENT_LENGTH, 1) / GQUADDIVISOR)")]),f._v(" gas, and if there is enough gas, returns an output "),t("code",[f._v("(BASE**EXPONENT) % MODULUS")]),f._v(" as a byte array with the same length as the modulus.")]),f._v(" "),t("p",[t("code",[f._v("ADJUSTED_EXPONENT_LENGTH")]),f._v(" is defined as follows.")]),f._v(" "),t("ul",[t("li",[f._v("If "),t("code",[f._v("length_of_EXPONENT <= 32")]),f._v(", and all bits in "),t("code",[f._v("EXPONENT")]),f._v(" are 0, return 0")]),f._v(" "),t("li",[f._v("If "),t("code",[f._v("length_of_EXPONENT <= 32")]),f._v(", then return the index of the highest bit in "),t("code",[f._v("EXPONENT")]),f._v(" (eg. 1 -> 0, 2 -> 1, 3 -> 1, 255 -> 7, 256 -> 8).")]),f._v(" "),t("li",[f._v("If "),t("code",[f._v("length_of_EXPONENT > 32")]),f._v(", then return "),t("code",[f._v("8 * (length_of_EXPONENT - 32)")]),f._v(" plus the index of the highest bit in the first 32 bytes of "),t("code",[f._v("EXPONENT")]),f._v(" (eg. if "),t("code",[f._v("EXPONENT = \\x00\\x00\\x01\\x00.....\\x00")]),f._v(", with one hundred bytes, then the result is 8 * (100 - 32) + 253 = 797). If all of the first 32 bytes of "),t("code",[f._v("EXPONENT")]),f._v(" are zero, return exactly "),t("code",[f._v("8 * (length_of_EXPONENT - 32)")]),f._v(".")])]),f._v(" "),t("p",[t("code",[f._v("mult_complexity")]),f._v(" is a function intended to approximate the difficulty of Karatsuba multiplication (used in all major bigint libraries) and is defined as follows.")]),f._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[f._v("def mult_complexity(x):\n    if x <= 64: return x ** 2\n    elif x <= 1024: return x ** 2 // 4 + 96 * x - 3072\n    else: return x ** 2 // 16 + 480 * x - 199680\n")])]),f._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[f._v("1")]),t("br"),t("span",{staticClass:"line-number"},[f._v("2")]),t("br"),t("span",{staticClass:"line-number"},[f._v("3")]),t("br"),t("span",{staticClass:"line-number"},[f._v("4")]),t("br")])]),t("p",[f._v("For example, the input data:")]),f._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[f._v("0000000000000000000000000000000000000000000000000000000000000001\n0000000000000000000000000000000000000000000000000000000000000020\n0000000000000000000000000000000000000000000000000000000000000020\n03\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2e\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f\n")])])]),t("p",[f._v("Represents the exponent "),t("code",[f._v("3**(2**256 - 2**32 - 978) % (2**256 - 2**32 - 977)")]),f._v(". By Fermat's little theorem, this equals 1, so the result is:")]),f._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[f._v("0000000000000000000000000000000000000000000000000000000000000001\n")])])]),t("p",[f._v("Returned as 32 bytes because the modulus length was 32 bytes. The "),t("code",[f._v("ADJUSTED_EXPONENT_LENGTH")]),f._v(" would be 255, and the gas cost would be "),t("code",[f._v("mult_complexity(32) * 255 / 20 = 13056")]),f._v(" gas (note that this is ~8 times the cost of using the EXP opcode to compute a 32-byte exponent). A 4096-bit RSA exponentiation would cost "),t("code",[f._v("mult_complexity(512) * 4095 / 100 = 22853376")]),f._v(" gas in the worst case, though RSA verification in practice usually uses an exponent of 3 or 65537, which would reduce the gas consumption to 5580 or 89292, respectively.")]),f._v(" "),t("p",[f._v("This input data:")]),f._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[f._v("0000000000000000000000000000000000000000000000000000000000000000\n0000000000000000000000000000000000000000000000000000000000000020\n0000000000000000000000000000000000000000000000000000000000000020\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2e\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f\n")])])]),t("p",[f._v("Would be parsed as a base of 0, exponent of "),t("code",[f._v("2**256 - 2**32 - 978")]),f._v(" and modulus of "),t("code",[f._v("2**256 - 2**32 - 977")]),f._v(", and so would return 0. Notice how if the length_of_BASE is 0, then it does not interpret "),t("em",[f._v("any")]),f._v(" data as the base, instead immediately interpreting the next 32 bytes as EXPONENT.")]),f._v(" "),t("p",[f._v("This input data:")]),f._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[f._v("0000000000000000000000000000000000000000000000000000000000000000\n0000000000000000000000000000000000000000000000000000000000000020\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe\nfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd\n")])])]),t("p",[f._v("Would parse a base length of 0, an exponent length of 32, and a modulus length of "),t("code",[f._v("2**256 - 1")]),f._v(", where the base is empty, the exponent is "),t("code",[f._v("2**256 - 2")]),f._v(" and the modulus is "),t("code",[f._v("(2**256 - 3) * 256**(2**256 - 33)")]),f._v(" (yes, that's a really big number). It would then immediately fail, as it's not possible to provide enough gas to make that computation.")]),f._v(" "),t("p",[f._v("This input data:")]),f._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[f._v("0000000000000000000000000000000000000000000000000000000000000001\n0000000000000000000000000000000000000000000000000000000000000002\n0000000000000000000000000000000000000000000000000000000000000020\n03\nffff\n8000000000000000000000000000000000000000000000000000000000000000\n07\n")])])]),t("p",[f._v("Would parse as a base of 3, an exponent of 65535, and a modulus of "),t("code",[f._v("2**255")]),f._v(", and it would ignore the remaining 0x07 byte.")]),f._v(" "),t("p",[f._v("This input data:")]),f._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[f._v("0000000000000000000000000000000000000000000000000000000000000001\n0000000000000000000000000000000000000000000000000000000000000002\n0000000000000000000000000000000000000000000000000000000000000020\n03\nffff\n80\n")])])]),t("p",[f._v("Would also parse as a base of 3, an exponent of 65535 and a modulus of "),t("code",[f._v("2**255")]),f._v(", as it attempts to grab 32 bytes for the modulus starting from 0x80 - but there is no further data, so it right-pads it with 31 zero bytes.")]),f._v(" "),t("h1",{attrs:{id:"rationale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[f._v("#")]),f._v(" Rationale")]),f._v(" "),t("p",[f._v("This allows for efficient RSA verification inside of the EVM, as well as other forms of number theory-based cryptography. Note that adding precompiles for addition and subtraction is not required, as the in-EVM algorithm is efficient enough, and multiplication can be done through this precompile via "),t("code",[f._v("a * b = ((a + b)**2 - (a - b)**2) / 4")]),f._v(".")]),f._v(" "),t("p",[f._v("The bit-based exponent calculation is done specifically to fairly charge for the often-used exponents of 2 (for multiplication) and 3 and 65537 (for RSA verification).")]),f._v(" "),t("h1",{attrs:{id:"copyright"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[f._v("#")]),f._v(" Copyright")]),f._v(" "),t("p",[f._v("Copyright and related rights waived via "),t("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[f._v("CC0"),t("OutboundLink")],1),f._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);