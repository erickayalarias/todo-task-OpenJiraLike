
interface SeedData {
    entries: seedEntry[];
}

interface seedEntry{
    description: string;
    status: string;
    createdAt: number;
}
export const seedData: SeedData = {
    entries: [
        {
            description: "Pending: Lorem ipsum dolor sit amet, consectetur",
            status: "pending",
            createdAt: Date.now(),
        },
        {
            description:
                "InProgress: lorem10 ipsum dolor sit amet, consectetur",
            status: "in-progress",
            createdAt: Date.now() - 100000,
        },
        {
            description: "Finished:lorem10 ipsum dolor sit amet, consectetur",
            status: "finished",
            createdAt: Date.now() - 1000,
        },
    ]
}