# redux-echo

Redux echo allows you to watch user sessions of Redux applications live, with the help of websockets.

Right now this has just been built out as a prototype/proof-of-concept. Use at your own risk.

## TODO

- Properly handle authentication of monitor agents
- Handle connection interruption
- Make instrumentation in real apps simpler
- Prevent more than one broadcaster for a particular ID
- Disallow users to broadcast if there is no one monitoring at that ID
- Make sure initial state is the same when booting app
- Proactively synchronize state?
