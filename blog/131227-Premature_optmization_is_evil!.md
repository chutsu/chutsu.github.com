# Premature Optimization is EVIL!

![Premature Optimization](./images/premature_optimization.png)

The famous saying, a golden rule of programming is that premature optimization
is evil! And I had to learn it the hard way, I was attempting to develop a
genetic programming framework in C because C is a *FAST* language (see
[evolve](http://github.com/chutsu/evolve)), and the development time took
horrendously long time because I had to deal with, well, pointers. It wasn't
until 2 months into implementing that I had enough, and converted everything to
Python. I literally only took 5 days to rewrite everything I had from C to
Python (see [playground](http://github.com/chutsu/playground)).

On the other hand one cannot ignore the possibility of improving, as Donald
Knuth said:

> We should forget about small efficiencies, say about 97% of the time:
premature optimization is the root of all evil. Yet we should not pass up our
opportunities in that critical 3%.



## Example:
Lets consider a programming puzzle I came across lately:

    Sum all numbers within the range i = 1 ...  1000 inclusive. If that number
    is a multiple of 3 or 5, double it and add it to the sum.


Naturally one would write something similar to the following:

    def straight_forward_method(max):
        sum = 0
        for i in xrange(1, max + 1):
            if (i % 3) == 0:
                sum += i * 2
            elif (i % 5) == 0:
                sum += i * 2
            else:
                sum += i
        return sum

Which is fine if `max` is small. However if `max` becomes bigger it can become
a problem in systems that depend on this function. A cleverer function would be
the following.

    def clever_method(max):
        # get mutliples of 3 and 5
        multiples_3 = range(3, max + 1, 3)
        multiples_5 = range(5, max + 1, 5)

        # remove overlaps (e.g, 15, 30, 35)
        multiples = [multiples_3, multiples_5]
        multiples = set().union(*multiples)

        # sum the multiples of 3 and 5
        multiples_sum = sum(multiples)

        # sum of series from 1 to max
        series_sum = ((max * (max + 1)) / 2)

        # total is sum of series plus sum of multiples
        return series_sum + multiples_sum

The difference between the two are quite massive, running the following
benchmark:

    i = 100000000

    # benchmark - straight forward method
    start_time = time.time()
    straight_forward_method(i)
    end_time = time.time()
    exe_time = end_time - start_time
    print "Straight forward method took: {0} secs".format(round(exe_time, 2))

    # benchmark - clever method
    start_time = time.time()
    clever_method(i)
    end_time = time.time()
    exe_time = end_time - start_time
    print "Clever method took: {0} secs".format(round(exe_time, 2))

Yields output on a Macbook Pro:

    Straight forward method took: 15.24 secs
    Clever method took: 6.26 secs

But then again `max` in this case does have to be really really large.
