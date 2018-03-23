# baconian-cipher
[javascript, quick, warmup]


From: [http://practicalcryptography.com/ciphers/classical-era/baconian/](http://practicalcryptography.com/ciphers/classical-era/baconian/)

## Baconian Cipher
#### Introduction 
The Baconian cipher is named after its inventor, Sir Francis Bacon. The Baconian cipher is a substitution cipher in which each letter is replaced by a sequence of 5 characters. In the original cipher, these were sequences of 'A's and 'B's e.g. the letter 'D' was replaced by 'aaabb', the letter 'O' was replaced by 'abbab' etc.

#### The Algorithm 
Each letter is assigned to a string of five binary digits. These could be the letters 'A' and 'B', the numbers 0 and 1 or whatever else you may desire. An example Baconian Cipher Encoding might be:

```
A = aaaaa  I/J = abaaa    R = baaaa
B = aaaab    K = abaab    S = baaab
C = aaaba    L = ababa    T = baaba
D = aaabb    M = ababb  U/V = baabb
E = aabaa    N = abbaa    W = babaa
F = aabab    O = abbab    X = babab
G = aabba    P = abbba    Y = babba
H = aabbb    Q = abbbb    Z = babbb
```

To encipher a message, e.g. 'STRIKE NOW', we replace each letter:

```
S     T     R     I     K     E     N     O     W 
baaab baaba baaaa abaaa abaab aabaa abbaa abbab babaa
```

Use the above to create a command line program that encodes a baconian cipher.

# Bonus
Dynamically generate the letter subsitutions

# Bonus
Take an argument to change the number of letters in the generated subsitution

# Bonus
Take an argument for the letters that are in the subsitution and how many of them are used
