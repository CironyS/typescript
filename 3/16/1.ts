//interface结合enum与array
enum sexType {
  BOY, GRIL
}

interface UserInterface { name: string, age: number, sex: sexType }

const xj: UserInterface = {
  name: "向军", age: 19, sex: sexType.BOY

}

const hd: UserInterface = {
  name: "后盾人", age: 18, sex: sexType.GRIL

}

const newArray: UserInterface[] = [xj, hd]

console.log(newArray);