enum Water_Lava {
    //% block="Water"
    WATER,
    //% block="Lava"
    LAVA
}

//% weight=100 color=#0fbc11 icon=""
namespace custom {
    //% block
    export function foo(n: number, s: string, e: Water_Lava): void {
        // Add code here
    }

    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
