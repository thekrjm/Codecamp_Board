export interface IProfile {
    name: string
    age: number
    school: string
    hobby?: string
}

//1. Partial type 옵셔널 체이닝
type aaa = Partial<IProfile>

//2. Required type 전체 입력되야함
type bbb = Required<IProfile>

//3. Pick type
type ccc = Pick<IProfile, "name" | "age">

//4. Omit type 제외
type ddd = Omit<IProfile, "school">

//5. Record type
type eee = "철수" | "영희" | "짱구"
let chiled1: eee = "영희" // 변수 선언 된 것만 사용 가능
let chiled2: string = "엥" // 문자열 다 됨

type fff = Record<eee, IProfile> // eee의 value가 key가 되고 IProfile이 value가 됨

//6. 객체의 key들로 Union type 만들기
type ggg = keyof IProfile
let myprofile: ggg = "age" //IProfile의 key만 사용 가능

//7. type과 interface의 차이
// interface는 선언병합 가능

export interface IProfile {
    gender: string
}

let fff: Partial<IProfile> = {
    gender: "man"
}