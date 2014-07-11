# Godelization
For most people, the notion of what is computable is closely related to what
types of programs exist. A typical computer has an OS that acts as an interface
between computer hardware and the software. Everything you do on the computer
can be recorded in a file as a list of actions such as:

    keystroke "k"
    mouse-down (113, 156)
    mouse-up (115,234)
    etc...

As we know scientists like to boil things down to the simplest terms possible,
the crazy thing is that it is **possible** to convert the above into a single
natural number.

**Godelization** is a method for mapping many natural numbers into a single
natural number, devised by Kurt Godel. We will skip how the mapping is
performed because it is not within our scope, but what is interesting is the
fact _it can be done_ is extremely important. While we can use a one to one
mapping to distinguish two separate events, a more interesting question is:
_How many numbers can be encoded into one?_

The key to the whole process is the fact that every number has a unique prime
factorization. If you pick any natural number, x, then there is exactly one
sequence of prime numbers, $p_{x1}$, $p_{x2}$, ..., $p_{xn}$, such that the
product of the $n$ prime numbers is equal to $x$.

$$
    \prod_{i = 1}^{n} p_{i}^{x_i}
    =
    p_{1}^{x_1} p_{2}^{x_2} p_{3}^{x_3} \dots p_{n}^{x_n}
$$

Granted the number will tend to be huge in size but who cares? Given a Godel
number, we can reconstruct the original string by taking the prime
factorization of the Godel number. It is also worthy to mention Godelization
adds another simplification to studying the nature of computation. Instead of
worrying about programs with multliple input and output sequences we can now
ignore most of the details and just concentrate on the functions that take a
single number as input and produce a single number as output. Even with this
restriction a computer program that operates in this manner is still doing all
of the hard part of computing.
