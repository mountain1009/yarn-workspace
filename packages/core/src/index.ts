export interface User {
    name: string
    age: number
}

export const createUser = (name: string, age: number): User => ({name, age})

export const showUser = (user: User): void => console.log(`${user.name}は${user.age}歳です。`)
