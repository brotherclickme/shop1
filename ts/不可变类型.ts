type MapType<T> = {
    [Key in keyof T]: [T[Key], T[Key], T[Key]]
}

type res = MapType<{a: 1, b: 2}>;
let res: res = {
    a: [1,1,1],
    b: [2,2,2]
}
console.log(res)

type Dog = {name: string, age: number};
type D = keyof Dog
type animals = {
    [key in D]: string
}
let b: animals = {
    name: 'nihao',
    age: "999"
}