### @hideIteration true
### @flyoutOnly true
# Mission 2 (v1.0)

```blocks
player.onChat("level1", function () {
    AgentExtension.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBack.Forward, 2)
    CodeCosmos.openTrapdoor()
})

```

```template
player.onChat("level1", function () {
    AgentExtension.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBack.Back, 3)
    CodeCosmos.openTrapdoor()
})

```

## Use the learning platform
Agent needs to take 2 steps forward and open the trapdoor to escape.
Use the learning platform to solve the exercise.