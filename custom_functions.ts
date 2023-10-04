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
            player.execute(`execute @p ~ ~ ~ setblock 107 43 -38 air`)
            agent.move(direction === 0 ? FORWARD : BACK, 1)
            let posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
            if (blocks.testForBlock(DEAD_HORN_CORAL_BLOCK, posBelowAgent)) {
                wrongMoves++
                player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
            }
            loops.pause(50);
            player.execute(`execute @p ~ ~ ~ setblock 107 43 -38 redstone_block`)
        }
    }

    //% block="agent move $direction by $amount"
    //% amount.defl=1
    //% amount.min=1 
    export function agentMoveFourDirection(direction: FourDirection, amount: number) {
        for (let i = 0; i < amount; i++) {
            agent.move(direction, 1)
        }
    }
}

//% color=190 weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmos {
    //% block="open trapdoor"
    export function checkExercise() {
        const posBelowAgent = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
        if (blocks.testForBlock(WOODEN_TRAPDOOR, posBelowAgent) && wrongMoves == 0) {
            player.execute(`function exercises/end_exercise`);
        } else if (blocks.testForBlock(WOODEN_TRAPDOOR, posBelowAgent) && wrongMoves != 0) {
            player.execute(`tellraw @s {"rawtext":[{"translate":"stepped.wrong.path"}]}`);
            player.execute(`function exercises/fail`);
        }
        else {
            player.execute(`tellraw @s {"rawtext":[{"translate":"not.on.trapdoor"}]}`);
            player.execute(`function exercises/fail`);
        }
        wrongMoves = 0;
    }

    
}