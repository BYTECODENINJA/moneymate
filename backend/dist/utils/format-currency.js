// Convert dollars to cents when saving
export function convertToCents(amount) {
    return Math.round(amount * 100);
}
// Convert cents to dollars when retrieving
//convertFromCents
export function convertToDollarUnit(amount) {
    return amount / 100;
}
export function formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "Ksh",
    }).format(amount);
}
//# sourceMappingURL=format-currency.js.map