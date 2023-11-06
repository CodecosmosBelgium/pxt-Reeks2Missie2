### @hideIteration true
### @flyoutOnly true
# Missie 2 (v1.0)

```blocks
player.onChat("level4", function () {
    AgentExtension_NL.agentTurn_ex4(AgentTurn.Left)
    AgentExtension_NL.agentTurn_ex4(AgentTurn.Right)
    AgentExtension_NL.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    AgentExtension_NL.agentMoveFourDirection_ex4(FourDirection.Right, 1)
    AgentExtension_NL.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    CodeCosmos.activateElevator()
    
})

```

```template
player.onChat("level4", function () {
    AgentExtension_NL.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    AgentExtension_NL.agentTurn_ex4(AgentTurn.Right)
    AgentExtension_NL.agentMoveFourDirection_ex4(FourDirection.Back, 1)
    AgentExtension_NL.agentTurn_ex4(AgentTurn.Left)
    AgentExtension_NL.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    
})

```

## Gebruik het leerplatform
De Agent moet naar de blok bewegen en de lift activeren.
Gebruik het leerplatform om de oefening op te lossen.