### @hideIteration true
### @flyoutOnly true
# Mission 2 (v1.0)

```blocks
player.onChat("level4", function () {
    AgentExtension.agentTurn_ex4(AgentTurn.Left)
    AgentExtension.agentTurn_ex4(AgentTurn.Right)
    AgentExtension.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    AgentExtension.agentMoveFourDirection_ex4(FourDirection.Right, 1)
    AgentExtension.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    CodeCosmos.activateElevator()
    
})

```

```template
player.onChat("level4", function () {
    AgentExtension.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    AgentExtension.agentTurn_ex4(AgentTurn.Right)
    AgentExtension.agentMoveFourDirection_ex4(FourDirection.Back, 1)
    AgentExtension.agentTurn_ex4(AgentTurn.Left)
    AgentExtension.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    
})

```

## Use the learning platform
Agent needs to move to the block and activate the elevator.
Use the learning platform to solve the exercise.