# General Notes and To-Do List

# General Notes

I have included a To Do list here, which cover any extras I would have liked/should look into more, to hopefully help with what I mentioned above.

This test suite so far only covers the "vanilla" Happy Path and really should be extended to cover overall functionality.

## Site Tidbits

Thought i'd mention any thoughts picked up through the creation of this project and exploring the test site.

# To-Do (What I would do for future iterations)

_Not in priority order_

- Add docker compose so that the project runs in a container and users won't have to worry about needing particular versions of anything on their local machines.
- Get wdio expect to work. Couldn't seem to get it to behave correctly before; created my own assertion helper instead, in order to add an abstraction layer for easier implementation later.
- Update wdio config to implement other browsers so that the tests can run against them, rather than just run against chrome. Could add something like Browserstack.
- Add fail and edgecases, plus any extras which would be nice to have in order to help with confidence in the suite and expected behaviours.

# Known Issues

## Suite doesn't display pending step snippets (Minor)

Not sure exactly why not, probably a config issue and i'm overlooking something(s).
