import { defineStore } from "pinia";

// Setup Stores
export const useStore = defineStore("counter", () => {
    // state
    const count = ref<number>(10);
    const name = ref<string>("9Diin");
    // Getters
    const doubleCount = computed(() => {
        return count.value * 2;
    });
    const doublePlusOne = computed(() => {
        return count.value * 3;
    });
    // Actions
    function increment() {
        count.value++;
    }
    function randomizeCounter() {
        count.value = Math.round(100 * Math.random());
    }

    return { count, name, doubleCount, doublePlusOne, increment, randomizeCounter };
});

// Option Stores
// export const useStore = defineStore("counter", {
//     state: () => ({
//         count: 10,
//         name: "9Diin",
//     }),
//     getters: {
//         doubleCount: (state) => state.count * 2,
//         doublePlusOne(): number {
//             return this.count * 3;
//         },
//     },
//     actions: {
//         increment() {
//             this.count++;
//         },
//         randomizeCounter() {
//             this.count = Math.round(100 * Math.random());
//         },
//     },
// });
