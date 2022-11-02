# TypeScript is JavaScript with type annotations.

# Transpiling

TypeScript is compiled to UJS code by removing type annotations

# Algebraic Data Types

Product types multiplicative - &
Sum Types additive - |

1 bool & 1-4 bit int = 32 possible values
2 \* (0-15) = 32 possible

1 bool | 1-4 bit int = 18 values
2 + (0-15) = 18 possible values

# Product Declarations

type Observation = {
amount: number,
recorded: boolean
}

same as

type Amount = {amount: number}
type Recording = {recorded: boolean}
type Observation Amount & Recording

lots of products

type Observation =
& Amount
& Recording
& MoreStuff

# Sum Declarations

type Identification = ID | Passport

# Type Narrowing

### Fails:

const name: string | null = getName()
const message = "My name is " + name.toUpperString()

### Narrowed:

const name : string | null = getName()
let message: string = ''
if (name = null) {
message = 'Name is missing!'
} else {
const message = "My name is " + name.toUpperString()
}
