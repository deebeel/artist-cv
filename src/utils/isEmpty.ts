export function isEmpty(v?: any): v is undefined {
    return v == null || v === '' || (Array.isArray(v) && v.length === 0);
}