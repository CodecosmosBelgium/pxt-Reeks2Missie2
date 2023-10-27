### @hideIteration true
### @flyoutOnly true
# Mission 2 (v1.0)

```blocks
player.onChat("level5", function () {
    agent.turn(LEFT_TURN)
    agent.turn(RIGHT_TURN)
    AgentExtension.agentMoveFourDirection_ex5(FourDirection.Forward, 3)
    AgentExtension.agentMoveFourDirection_ex5(FourDirection.Left, 4)
    CodeCosmos.pickupTool()
    AgentExtension.agentMoveFourDirection_ex5(FourDirection.Forward, 1)
})

```

```template
player.onChat("level5", function () {
    AgentExtension.agentMoveFourDirection_ex5(FourDirection.Forward, 3)
    AgentExtension.agentMoveFourDirection_ex5(FourDirection.Left, 4)
    CodeCosmos.pickupTool()
    AgentExtension.agentMoveFourDirection_ex5(FourDirection.Forward, 1)
})
```

## Use the learning platform
Agent needs to pick up the tools while standing on them.
Use the learning platform to solve the exercise.