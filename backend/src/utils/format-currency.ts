// Convert to smallest currency unit (e.g. cents) when saving
export function convertToSmallestUnit(amount: number) {
    return Math.round(amount * 100);
}

// Convert from smallest currency unit when retrieving
export function convertToBaseUnit(amount: number) {
    return amount / 100;
}

export function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
    }).format(amount);
}