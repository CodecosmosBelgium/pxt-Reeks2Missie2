### @hideIteration true
### @flyoutOnly true
# Mission 2 (v1.0)

```blocks
player.onChat("moveTwoForward", function () {
    AgentExtension.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBack.Forward, 2)
})

```

```template
player.onChat("moveTwoForward", function () {
    AgentExtension.agentMoveTwoDirectionForwardBack(TwoDirectionForwardBack.Back, 3)
    CodeCosmos.checkExercise()
})

```

## Use the learning platform
Use the learning platform to solve the exercise.