### @hideIteration true
### @flyoutOnly true
# Missie 2 (v1.0)

```blocks
player.onChat("level4", function () {
    AgentExtension_NL.agentTurn_ex4(AgentTurn_NL.Left)
    AgentExtension_NL.agentTurn_ex4(AgentTurn_NL.Right)
    AgentExtension_NL.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    AgentExtension_NL.agentMoveFourDirection_ex4(FourDirection.Right, 1)
    AgentExtension_NL.agentMoveFourDirection_ex4(FourDirection.Forward, 1)
    CodeCosmos_NL.activateElevator()
    
})

```

```template
player.onChat("level4", function () {
    
})

```

## Gebruik het leerplatform
De Agent moet naar de blok bewegen en de lift activeren.
Gebruik het leerplatform om de oefening op te lossen.