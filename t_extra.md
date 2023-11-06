### @hideIteration true
### @flyoutOnly true
# Mission 2 (v1.0)

```blocks
player.onChat("extra", function () {
    agent.turn(LEFT_TURN)
    agent.turn(RIGHT_TURN)
    AgentExtension.agentMoveFourDirection_extra(FourDirection.Forward, 3)
    AgentExtension.agentMoveFourDirection_extra(FourDirection.Left, 4)
    CodeCosmos.pickupTool_extra()
    AgentExtension.agentMoveFourDirection_extra(FourDirection.Forward, 1)
})

```

```template
player.onChat("extraLevel", function () {
    AgentExtension.agentMoveFourDirection_extra(FourDirection.Forward, 3)
    AgentExtension.agentMoveFourDirection_extra(FourDirection.Left, 4)
    CodeCosmos.pickupTool_extra()
    AgentExtension.agentMoveFourDirection_extra(FourDirection.Forward, 1)
})
```

## Use the learning platform
Agent needs to pick up the tools while standing on them.
Use the learning platform to solve the exercise.