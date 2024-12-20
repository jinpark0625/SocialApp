export type UserWithPassword = Omit<User, "password">;
export type UserWithoutPasswordAndEmail = Omit<User, "password" | "email">;
