### @hideIteration true
### @flyoutOnly true
# Missie 2 (v1.0)

```blocks
player.onChat("extra", function () {
    agent.turn(LEFT_TURN)
    agent.turn(RIGHT_TURN)
    AgentExtension_NL.agentMoveFourDirection_extra(FourDirection.Forward, 3)
    AgentExtension_NL.agentMoveFourDirection_extra(FourDirection.Left, 4)
    CodeCosmos_NL.pickupTool_extra()
    AgentExtension_NL.agentMoveFourDirection_extra(FourDirection.Forward, 1)
})

```

```template
player.onChat("extraLevel", function () {
    AgentExtension_NL.agentMoveFourDirection_extra(FourDirection.Forward, 3)
    AgentExtension_NL.agentMoveFourDirection_extra(FourDirection.Left, 4)
    CodeCosmos_NL.pickupTool_extra()
    AgentExtension_NL.agentMoveFourDirection_extra(FourDirection.Forward, 1)
})
```

## Gebruik het leerplatform
De Agent moet het gereedschap oprapen wanneer hij er op staat.
Gebruik het leerplatform om de oefening op te lossen.