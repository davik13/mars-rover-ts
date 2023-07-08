export function* generateCombinations(elements, numberElements) {
    if (numberElements == 0)
        yield "";
    else {
        for (const elementIndex in elements) {
            const element = elements[elementIndex];
            const combinationsLowerRank = generateCombinations(elements.slice(1), numberElements - 1);
            for (const combinationLowerRank of combinationsLowerRank) {
                yield combinationLowerRank + element;
            }
        }
    }
}
//# sourceMappingURL=generateCombinations.js.map