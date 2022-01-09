# note
![size](https://img.shields.io/bundlephobia/min/@obscuredc/note/1.0.0)
![downloads](https://img.shields.io/github/downloads/obscuredc/note/total)

Generates loading tips for you. We're hoping to hit at least 1k, so fork and add as many messages as you'd like ^^. We have no dependencies, please keep it that way.
### api
`note.getTips(Amount) =>` returns a randomly generated tip. If no amount is given, it defaults to 1. Any values lower than 1 are treated as 1. It returns an array for multiple, but just the tip if it is only a single one.
