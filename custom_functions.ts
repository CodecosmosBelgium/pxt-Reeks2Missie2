enum WaterLava {
    //% blockIdentity="blocks.custom" enumval=0 block="lava"
    //% jres alias=LAVA_BUCKET
    Lava = 0,
    //% blockIdentity="blocks.custom" enumval=1 block="water"
    //% jres alias=WATER_BUCKET
    Water = 1
}

enum TwoDirectionForwardBack {
    //% block="forward"
    Forward = FourDirection.Forward,
    //% block="back"
    Back = FourDirection.Back
}

enum AgentTurn {
    //% block="left"
    Left = TurnDirection.Left,
    //% block="right"
    Right = TurnDirection.Right
}


//% color="#D83B01" weight=100 icon="\uf20a" block="AgentExtension"
namespace AgentExtension {
    //% block="agent move $direction by $amount"
    //% block.loc.nl="agent beweeg $direction met $amount"
    //% direction.loc.nl="richting"
    //% amount.loc.nl="aantal"
    //% amount.defl=1
    //% amount.min=1
    //% amount.max=3
    export function agentMoveTwoDirectionForwardBack(direction: TwoDirectionForwardBack, amount: number) {
        for (let i = 0; i < amount; i++) {
            player.execute(`execute @p ~ ~ ~ setblock 107 43 -38 air`)
            agent.move(direction === 0 ? FORWARD : BACK, 1)
            loops.pause(50);
            let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
            if (blocks.testForBlock(DEAD_HORN_CORAL_BLOCK, posBelowAgent)) {
                wrongMoves++
                player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
            }
            player.execute(`execute @p ~ ~ ~ setblock 107 43 -38 redstone_block`)
        }
    }

    //% block="agent place $liquid"
    //% block.loc.nl="agent plaats $liquid"
    //% liquid.loc.nl="blok"
    export function agentPlaceBlock(liquid: WaterLava) {
        switch (liquid) {
            case WaterLava.Water:
                player.execute(`function exercises/ex_2/place_water`);
                break;

            case WaterLava.Lava:
                player.execute(`function exercises/ex_2/place_lava`);
                break;
        }
    }

    //% block="agent move $direction by $amount"
    //% block.loc.nl="agent beweeg $direction met $amount"
    //% direction.loc.nl="richting"
    //% amount.loc.nl="aantal"
    //% amount.defl=1
    //% amount.min=1
    //% amount.max=3
    export function agentMoveTwoDirectionForwardBack_ex3(direction: TwoDirectionForwardBack, amount: number) {
        for (let i = 0; i < amount; i++) {
            player.execute(`execute @p ~ ~ ~ setblock 108 43 -38 air`)
            amountOfMoves++
            agent.move(direction === 0 ? FORWARD : BACK, 1)
            loops.pause(50);
            let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
            if (blocks.testForBlock(LIGHT_GRAY_CONCRETE, posBelowAgent)) {
                player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
                wrongMoves++
            }
            player.execute(`execute @p ~ ~ ~ setblock 108 43 -38 redstone_block`)
        }
    }

    //% block="agent move $direction by $amount"
    //% block.loc.nl="agent beweeg $direction met $amount"
    //% direction.loc.nl="richting"
    //% amount.loc.nl="aantal"
    //% amount.defl=1
    //% amount.min=1
    //% amount.max=3
    export function agentMoveFourDirection_ex4(direction: FourDirection, amount: number) {
        for (let i = 0; i < amount; i++) {
            agent.move(direction, 1)
            amountOfMoves++
            player.execute(`execute @p ~ ~ ~ setblock 107 43 -41 air`)
            loops.pause(50);
            let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
            if (blocks.testForBlock(LIGHT_GRAY_CONCRETE, posBelowAgent)) {
                player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
                wrongMoves++
            }
            player.execute(`execute @p ~ ~ ~ setblock 107 43 -41 redstone_block`)

        }
    }

    //% block="agent turn $direction"
    //% block.loc.nl="agent draai $direction"
    //% direction.loc.nl="richting"
    export function agentTurn_ex4(direction: AgentTurn) {
        agent.turn(direction)
        amountOfMoves++
        player.execute(`execute @p ~ ~ ~ setblock 107 43 -41 air`)
        loops.pause(50);
        player.execute(`execute @p ~ ~ ~ setblock 107 43 -41 redstone_block`)
    }

    //% block="agent move $direction by $amount"
    //% block.loc.nl="agent beweeg $direction met $amount"
    //% direction.loc.nl="richting"
    //% amount.loc.nl="aantal"
    //% amount.defl=1
    //% amount.min=1
    export function agentMoveFourDirection_ex5(direction: FourDirection, amount: number) {
        for (let i = 0; i < amount; i++) {
            agent.move(direction, 1)
            player.execute(`function exercises/ex_5/move`)
            player.execute(`execute @p ~ ~ ~ setblock 108 43 -41 air`)
            loops.pause(50);
            player.execute(`execute @p ~ ~ ~ setblock 108 43 -41 redstone_block`)
        }
    }
}

//% color=190 weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmos {
    //% block="open trapdoor"
    //% block.loc.nl="open luik"
    export function openTrapdoor() {
        const posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(WOODEN_TRAPDOOR, posBelowAgent) && wrongMoves == 0) {
            player.execute(`function exercises/end_exercise`);
        } else if (blocks.testForBlock(WOODEN_TRAPDOOR, posBelowAgent) && wrongMoves != 0) {
            player.execute(`tellraw @s {"rawtext":[{"translate":"stepped.wrong.path"}]}`);
            player.execute(`function exercises/ex_1/wrong`);
        }
        else {
            player.execute(`tellraw @s {"rawtext":[{"translate":"not.on.trapdoor"}]}`);
            player.execute(`function exercises/ex_1/wrong`);
        }
        wrongMoves = 0;
    }

    //% block="open door"
    //% block.loc.nl="open deur"
    export function openDoor() {
        if (amountOfMoves == 3 && wrongMoves == 0) {
            player.execute(`function exercises/end_exercise`);
        } else {
            if (wrongMoves!=0){
                player.execute(`tellraw @s {"rawtext":[{"translate":"stepped.wrong.path"}]}`);
            }
            if (amountOfMoves>3){
                player.execute(`tellraw @s {"rawtext":[{"translate":"too.many.blocks.codebuilder"}]}`);
            }            
            player.execute(`function exercises/ex_3/wrong`);
        }
        wrongMoves = 0;
        amountOfMoves = 0;
    }

    //% block="activate elevator"
    //% block.loc.nl="activeer lift"
    export function activateElevator() {
        if (amountOfMoves == 3 && wrongMoves == 0) {
            player.execute(`function exercises/end_exercise`);
        } else {
            if (wrongMoves != 0) {
                player.execute(`tellraw @s {"rawtext":[{"translate":"stepped.wrong.path"}]}`);
            }
            if (amountOfMoves > 3) {
                player.execute(`tellraw @s {"rawtext":[{"translate":"too.many.blocks.codebuilder"}]}`);
            }
            player.execute(`function exercises/ex_4/wrong`);
        }
        wrongMoves = 0;
        amountOfMoves = 0;
    }

    //% block="pickup tool"
    //% block.loc.nl="raap gereedschap op"
    export function pickupTool() {
        loops.pause(50);
        player.execute(`function exercises/ex_5/pickup_tool`)
    }
}