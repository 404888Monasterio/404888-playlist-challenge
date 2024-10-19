export interface Song {
    id: string,
    createdAt: Date,
    albumId: string,
    name: string,
    duration: number,
    orderIndex: number,
    user: string
}