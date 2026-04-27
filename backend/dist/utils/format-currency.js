// Convert to smallest currency unit (e.g. cents) when saving
export function convertToSmallestUnit(amount) {
    return Math.round(amount * 100);
}
// Convert from smallest currency unit when retrieving
export function convertToBaseUnit(amount) {
    return amount / 100;
}
export function formatCurrency(amount) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
    }).format(amount);
}
//# sourceMappingURL=format-currency.js.map