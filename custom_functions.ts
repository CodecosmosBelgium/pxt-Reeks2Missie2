enum Water_Lava {
    //% block="`item.WaterBucket` water"
    WATER,
    //% block="`item.LavaBucket` lava"
    LAVA
}

enum TwoDirectionForwardBack {
    //% block="forward"
    Forward = FourDirection.Forward,
    //% block="back"
    Back = FourDirection.Back
}

//% color="#D83B01" weight=100 icon="\uf20a" block="AgentExtension"
namespace AgentExtension {
    //% block="agent move $direction by $amount"
    //% amount.defl=1
    //% amount.min=1 
    //% amount.max=3
    export function agentMoveTwoDirectionForwardBack(direction: TwoDirectionForwardBack, amount: number) {
        for (let i = 0; i < amount; i++) {
            agent.move(direction === 0 ? FORWARD : BACK, 1)
            let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
            if (blocks.testForBlock(LIGHT_GRAY_CONCRETE, posBelowAgent)) {
                wrongMoves++
                player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
            }
            
            loops.pause(50);
        }
    }

    //% block="agent move $direction by $amount"
    export function agentMoveFourDirection(direction: FourDirection, amount: number) {
        for (let i = 0; i < amount; i++) {
            agent.move(direction, 1)
            let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
            if (blocks.testForBlock(COBBLESTONE, posBelowAgent)) {
                wrongMoves++
                player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
            }
            loops.pause(50);
        }
    }
}

//% color=190 weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmos {
    //% block="check exercise"
    export function checkExercise() {
        const posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(EMERALD_BLOCK, posBelowAgent) && wrongMoves == 0) {
            player.execute(`function exercises/end_exercise`);
        } else if (blocks.testForBlock(EMERALD_BLOCK, posBelowAgent) && wrongMoves != 0) {
            player.execute(`tellraw @s {"rawtext":[{"translate":"stepped.wrong.path"}]}`);
            player.execute(`function exercises/fail`);
        }
        else {
            player.execute(`tellraw @s {"rawtext":[{"translate":"not.on.emerald.block"}]}`);
            player.execute(`function exercises/fail`);
        }
        wrongMoves = 0;
    }

    //% block="agent place $water_lava"
    export function agentPlaceBlock(water_lava: Water_Lava) {
        switch (water_lava) {
            case Water_Lava.WATER:
                player.execute(`execute at @c run setblock ^ ^ ^1 flowing_water`); 
                break;
            
            case Water_Lava.LAVA:
                player.execute(`execute at @c run setblock ^ ^ ^1 flowing_lava`);
                break;
        }        
    }
}