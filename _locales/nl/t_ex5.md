### @hideIteration true
### @flyoutOnly true
# Missie 2 (v1.0)

```blocks
player.onChat("level5", function () {
    agent.turn(LEFT_TURN)
    agent.turn(RIGHT_TURN)
    AgentExtension_NL.agentMoveFourDirection_ex5(FourDirection.Forward, 3)
    AgentExtension_NL.agentMoveFourDirection_ex5(FourDirection.Left, 4)
    CodeCosmos_NL.pickupTool()
    AgentExtension_NL.agentMoveFourDirection_ex5(FourDirection.Forward, 1)
})

```

```template
player.onChat("level5", function () {
    AgentExtension_NL.agentMoveFourDirection_ex5(FourDirection.Forward, 3)
    AgentExtension_NL.agentMoveFourDirection_ex5(FourDirection.Left, 4)
    CodeCosmos_NL.pickupTool()
    AgentExtension_NL.agentMoveFourDirection_ex5(FourDirection.Forward, 1)
})
```

## Gebruik het leerplatform
De Agent moet het gereedschap oprapen wanneer hij er op staat.
Gebruik het leerplatform om de oefening op te lossen.