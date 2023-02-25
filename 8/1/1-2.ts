function houdunren<T extends { id: number; render(v: number): number }>(
    arr: T[],
) {
    return arr.map(a => a.render(a.id));
}

// <T extends >

houdunren([
    {
        id: 1,
        render(n) {
            return n;
        },
    },
]);
