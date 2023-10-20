### @hideIteration true
### @flyoutOnly true
# Mission 2 (v1.0)

```blocks
player.onChat("activateElevator", function () {
    AgentExtension.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    AgentExtension.agentMoveFourDirection_ex4(FourDirection.Right, 1)
    AgentExtension.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    CodeCosmos.activateElevator()
    
})

```

```template
player.onChat("activateElevator", function () {
    AgentExtension.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    agent.turn(RIGHT_TURN)
    AgentExtension.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    agent.turn(LEFT_TURN)
    AgentExtension.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    
})

```

## Use the learning platform
Use the learning platform to solve the exercise.