

function choice(items) {
    const randIdx = Math.floor(Math.random() * items.length)
    return items[randIdx];
}

function remove(items, item) {
    const idx = items.indexOf(item);
    if (idx) {
        items.splice(idx, 1);
        return items;
    }
    return undefined;
}

export { choice, remove };