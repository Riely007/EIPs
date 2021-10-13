(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{1008:function(t,s,a){"use strict";a.r(s);var e=a(46),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("According to recent benchmarks, EVM opcodes for computation ("),a("code",[t._v("ADD")]),t._v(", "),a("code",[t._v("SUB")]),t._v(", "),a("code",[t._v("MUL")]),t._v(", etc.) are generally overpriced relative to opcodes for storage I/O ("),a("code",[t._v("SLOAD")]),t._v(", "),a("code",[t._v("SSTORE")]),t._v(', etc.). Currently the minimum gas cost is 1 (i.e. one unit of gas), and most computational opcodes have a cost near to 1 (e.g. 3, 5, or 8), so the range in possible cost reduction is limited. A new minimum unit of gas, called a "particle", which is a fraction of 1 gas, would expand the range of gas costs and thus enable reductions below the current minimum.')]),t._v(" "),a("h2",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[t._v("#")]),t._v(" Motivation")]),t._v(" "),a("p",[t._v("The transaction capacity of an Ethereum block is determined by the gas cost of transactions relative to the block gas limit. One way to boost the transaction capacity is to raise the block gas limit. Unfortunately, raising the block gas limit would also increase the rate of state growth, unless the costs of state-expanding storage opcodes ("),a("code",[t._v("SSTORE")]),t._v(", "),a("code",[t._v("CREATE")]),t._v(", etc.) are simultaneously increased to the same proportion. Increasing the cost of storage opcodes may have adverse side effects, such as shifting the economic assumptions around gas fees of deployed contracts, or possibly breaking invariants in current contract executions (as mentioned in "),a("RouterLink",{attrs:{to:"/zh/eip-2035.html"}},[t._v("EIP-2035")]),a("sup",[a("a",{attrs:{href:"#eip2035"}},[t._v("1")])]),t._v(", more research is needed on the potential effects of increasing the cost of storage opcodes).")],1),t._v(" "),a("p",[t._v("Another way to boost the transaction capacity of a block is to reduce the gas cost of transactions. Reducing the gas costs of computational opcodes while keeping the cost of storage opcodes the same, is effectively equivalent to raising the block gas limit and simultaneously increasing the cost of storage opcodes. However, reducing the cost of computational opcodes might avoid the adverse side effects of an increase in cost of storage opcodes (again, more research is needed on this topic).")]),t._v(" "),a("p",[t._v("Currently, computational opcode costs are already too close to the minimum unit of 1 gas to achieve the large degree of cost reductions that recent benchmarks"),a("sup",[a("a",{attrs:{href:"#evmbenchmarks"}},[t._v("2")])]),t._v(' indicate would be needed to tune opcode gas costs to the performance of optimized EVM implementations. A smaller minimum unit called a "particle", which is a fraction (or subdivision) of 1 gas, would enable large cost reductions.')]),t._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("p",[t._v("A new gas counter "),a("code",[t._v("particlesUsed")]),t._v(" is added to the EVM, in addition to the existing gas counter "),a("code",[t._v("gasUsed")]),t._v(". The unit 1 gas is equal to 10000 particles ("),a("code",[t._v("PARTICLES_PER_GAS")]),t._v("). The "),a("code",[t._v("particlesUsed")]),t._v(" counter is only increased for opcodes priced in particles (i.e. opcodes that cost less than 1 gas). If increasing "),a("code",[t._v("particlesUsed")]),t._v(" results in an excess of 1 gas, then 1 gas is added to "),a("code",[t._v("gasUsed")]),t._v(" (and deducted from "),a("code",[t._v("particlesUsed")]),t._v(").")]),t._v(" "),a("p",[t._v("Where the current gas logic looks like this:")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vm_execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Initialize stack, memory, program counter, etc")]),t._v("\n    compustate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gas"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    codelen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" codelen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        opcode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n        compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gasUsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" opcode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gas_fee\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# out of gas error")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gasUsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gasLimit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vm_exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OUT OF GAS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" op "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'STOP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" peaceful_exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" op "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ADD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" op "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SUB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" op "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MUL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])]),a("p",[t._v("The new gas logic using particles might look like this:")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("PARTICLES_PER_GAS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vm_execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Initialize stack, memory, program counter, etc")]),t._v("\n    compustate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gas"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    codelen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" codelen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        opcode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" opcode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gas_fee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gasUsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" opcode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gas_fee\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" opcode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("particle_fee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("particlesUsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" opcode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("particle_fee\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("particlesUsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" PARTICLES_PER_GAS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# particlesUsed will be between 1 and 2 gas (over 10000 but under 20000)")]),t._v("\n                compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gasUsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# remainder stays in particle counter")]),t._v("\n                compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("particlesUsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("particlesUsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" PARTICLES_PER_GAS\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# out of gas error")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gasUsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" compustate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gasLimit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vm_exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OUT OF GAS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" op "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'STOP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" peaceful_exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" op "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ADD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" op "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SUB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" op "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MUL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" stk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br")])]),a("p",[t._v("The above pseudocode is written for clarity. A more performant implementation might instead keep a single "),a("code",[t._v("particlesUsed")]),t._v(" counter by multiplying opcode gas costs by 10000 and the "),a("code",[t._v("gasLimit")]),t._v(" by 10000, and convert particles back to gas with "),a("code",[t._v("ceil(particlesUsed / PARTICLES_PER_GAS)")]),t._v(" at the end of execution. It may also be more performant to use a "),a("code",[t._v("PARTICLES_PER_GAS")]),t._v(" ratio that is a power of 2 (such as 8192 or 16384) instead of 10000; the spec above is a draft and updates in response to feedback are expected.")]),t._v(" "),a("h4",{attrs:{id:"opcode-cost-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opcode-cost-changes"}},[t._v("#")]),t._v(" Opcode cost changes")]),t._v(" "),a("p",[t._v("Many computational opcodes will undergo a cost reduction, with new costs suggested by benchmark analyses. For example, the cost of "),a("code",[t._v("DUP")]),t._v(" and "),a("code",[t._v("SWAP")]),t._v(" are reduced from 3 gas to 3000 particles (i.e. 0.3 gas). The cost of "),a("code",[t._v("ADD")]),t._v(" and "),a("code",[t._v("SUB")]),t._v(" are reduced from 3 gas to 6000 particles. The cost of "),a("code",[t._v("MUL")]),t._v(" is reduced from 5 gas to 5000 particles (i.e. 0.5 gas).")]),t._v(" "),a("h2",{attrs:{id:"rationale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),a("p",[t._v("Adoption of fractional gas costs should only be an implementation detail inside the EVM, and not alter the current user experience around transaction gas limits and block gas limits. The concept of "),a("code",[t._v("particles")]),t._v(" need not be exposed to Ethereum users nor most contract authors, but only to EVM implementers and contract developers concerned with optimized gas usage. Furthermore, only the EVM logic for charging gas per opcode executed should be affected by this change. All other contexts dealing with gas and gas limits, such as block headers and transaction formats, should be unaffected.")]),t._v(" "),a("h3",{attrs:{id:"ewasm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ewasm"}},[t._v("#")]),t._v(" Ewasm")]),t._v(" "),a("p",[t._v('The term "particles" was first introduced for Ewasm'),a("sup",[a("a",{attrs:{href:"#particle"}},[t._v("3")])]),t._v(" to enable gas accounting for low cost wasm instructions, while remaining compatible with EVM gas costs. This EIP proposes introducing particles as a new minimum gas unit for EVM opcodes, and is not related to Ewasm.")]),t._v(" "),a("h2",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[t._v("#")]),t._v(" Backwards Compatibility")]),t._v(" "),a("p",[t._v("This change is not backwards compatible and requires a hard fork to be activated.")]),t._v(" "),a("h2",{attrs:{id:"test-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[t._v("#")]),t._v(" Test Cases")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("p",[a("a",{attrs:{name:"eip2035"}},[t._v("1")]),t._v(". "),a("RouterLink",{attrs:{to:"/zh/eip-2035.html"}},[t._v("EIP-2035")]),t._v(": Stateless Clients - Repricing SLOAD and SSTORE to pay for block proofs")],1),t._v(" "),a("p",[a("a",{attrs:{name:"evmbenchmarks"}},[t._v("2")]),t._v(". https://github.com/ewasm/benchmarking")]),t._v(" "),a("p",[a("a",{attrs:{name:"particle"}},[t._v("3")]),t._v('. The term "particle" was inspired by a proposal for '),a("a",{attrs:{href:"https://github.com/ewasm/design/blob/e77d8e3de42784f40a803a23f58ef06881142d9f/determining_wasm_gas_costs.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ewasm gas costs"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"copyright"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyright"}},[t._v("#")]),t._v(" Copyright")]),t._v(" "),a("p",[t._v("Copyright and related rights waived via "),a("a",{attrs:{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC0"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);