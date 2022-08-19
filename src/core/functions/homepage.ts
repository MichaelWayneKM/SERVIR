export const handleMapChanges = (array: string []) => {
    return [...array.filter(x => x.startsWith("geo-piont"))]
}