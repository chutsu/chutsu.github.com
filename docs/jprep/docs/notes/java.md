# Difference between HashMap and HashTable
There are several differences between `HashMap` and `HashTable` in Java:

- `HashTable` is synchronized, whereas `HashMap` is not. This makes `HashMap`
better for non-threaded applications, as unsynchronized Objects typically
perform better than synchronized ones.

- `HashTable` does not allow null keys or values. `HashMap` allows one null key
and any number of null values.

- One of `HashMap`'s subclasses is Linked`HashMap`, so in the event that you'd
want predictable iteration order (which is insertion order by default), you
could easily swap out the `HashMap` for a Linked`HashMap`. This wouldn't be as
easy if you were using `HashTable`.


# How does Java's HashMap resolve conflicts?
