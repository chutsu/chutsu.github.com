# What is Map-Reduce or How does Map-Reduce work?
- tags: #map-reduce #cs #theory

Map/Reduce is a way to take a big task and divide it into smaller tasks that
can be done in parallel. Think of a hierarchical structure, where the BIG BOSS
performs a big task by telling his sub ordinates to do a little bit of
different things, that is map-reduce.

But what does this mean for a database? well its very simple, say you have the
following data in the database (key-value pair):

    Toronto, 20
    Whitby, 25
    New York, 22
    Rome, 32
    Toronto, 4
    Rome, 33
    New York, 18

Out of all the data we have collected, we want to find the maximum tem­perature
for each city across all of the data files (note that each file might have the
same city represented multiple times). Using map-reduce, we can break this down
into five map tasks, where each mapper works on one of the five files and the
mapper task goes through the data and returns the maximum temperature for each
city. For example, the results produced from one mapper task for the data above
would look like this:

    (Toronto, 20) (Whitby, 25) (New York, 22) (Rome, 33)

Let’s assume the other four mapper tasks (working on the other four files not
shown here) produced the following intermediate results:

    (Toronto, 18) (Whitby, 27) (New York, 32) (Rome, 37)(Toronto, 32) (Whitby, 20)
    (New York, 33) (Rome, 38)(Toronto, 22) (Whitby, 19) (New York, 20) (Rome, 31)
    (Toronto, 31) (Whitby, 22) (New York, 19) (Rome, 30)

All five of these output streams would be fed into the reduce tasks, which
combine the input results and output a single value for each city, producing a
final result set as follows:

    (Toronto, 32) (Whitby, 27) (New York, 33) (Rome, 38)

As an analogy, you can think of map and reduce tasks as the way a cen­sus was
conducted in Roman times, where the census bureau would dis­patch its people to
each city in the empire. Each census taker in each city would be tasked to
count the number of people in that city and then return their results to the
capital city. There, the results from each city would be reduced to a single
count (sum of all cities) to determine the overall popula­tion of the empire.
This mapping of people to cities, in parallel, and then com­bining the results
(reducing) is much more efficient than sending a single per­son to count every
person in the empire in a serial fashion.
