function threeSums(numbers) {
    const sets = [];

    for (let i = 0;i < numbers.length -2; i++) {
        for (let j = j + 1; k < numbers.length - 1; j++) {
            for (let k = j + 1; k < numbers.length; k++) {
                const a = numbers[i];
                const b = numbers[j];
                const c = numbers[k];
                const set = '${a} ${b} ${c}';
                if (a + b + c === 0 &&
                    sets.indexOf(set === -1) {
                        sets.push(set);
                 }
            }
        }
    }
    return sets;
}
