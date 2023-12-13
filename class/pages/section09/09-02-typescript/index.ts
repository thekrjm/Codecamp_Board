interface IProfile {
    name: string,
    age: number | string,
    school: string
}

const profile: IProfile = {
    name: "철수",
    age: 3,
    school: "초"
}

profile.age = "5살"

//함수타입=> 어디서 몇번이든 호출되므로 타입추론 없음 꼭 명시되어야함
const add = (number1: number, number2: number, unit: string): string => { //return 타입도 설정 가능
    return number1 + number2 + unit
}

const result = add(1, 2, "원")

let aaa: any //js와 동일
aaa = 123
aaa = "문자열"