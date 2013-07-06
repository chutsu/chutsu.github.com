# Problem Querying a Sharded MongoDB Cluster with MongoDB Java Driver

**Note**: The following note concerns Java MongoDB Driver 2.9.* or 2.10.*

Recently I setup a sharded MongoDB cluster, with each shard as single nodes
rather than replica-sets (not recommeded). The problem I was having is that
when I query the mongos instance, reusing some code I know works against a
single node I get:

    Exception in thread "main" com.mongodb.CommandResult$CommandFailure:
    command failed [mapreduce]: { "serverUsed" :
    "localhost/xxx.xxx.xxx.xxx:27017" , "ok" : 0.0 , "errmsg" : "unknown m/r
    field for sharding: $readPreference"}

Note: the host and IP address has been extracted out.

After consulting the google group, mongodb-user. It turns out it was the
official Java Driver that was playing up. Jeff Yemin has kindly fixed the
problem and created a snapshot of the fix here for those who might be
interested.

You can have a look at the question I posted on mongodb-user here.

Kudos to Jeff for helping in such short notice :)
