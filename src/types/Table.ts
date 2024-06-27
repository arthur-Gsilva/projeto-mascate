export type Table = {
    id: number,
    status: 'available' | 'busy' | 'selected' | 'reserved';
}