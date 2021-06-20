import {mult, splitToWords, sum} from "./01";


test("sum should be correct", () => {
    //тестируемые данные
    let a = 1
    let b = 2
    let c = 3

    //выполнение тестируемого кода
    const result1 = sum(a, b)
    const result2 = sum(b, c)

    //проверка ожидаемого результата
    expect(result1).toBe(3)
    expect(result2).toBe(5)

})

test ("should be mult", () =>{
    const a=2;
    const b=3;
    const c=4;

    const result3=mult(a,b)
    const result4=mult(a,c)

    expect(result3).toBe(6)
    expect(result4).toBe(8)
})


test("spliting into words should be correct", () => {
    const sentenses1 ="Hello my friend"
    const sentenses2 ="i love you"

    const result6= splitToWords(sentenses1)
    const result7 = splitToWords(sentenses2)
    expect(result6.length).toBe(3)
    expect(result6[0]).toBe("Hello")
    expect(result6[1]).toBe("my")
    expect(result6[2]).toBe("friend")

    expect(result7.length).toBe(3)
    expect(result7[0]).toBe("i")
    expect(result7[1]).toBe("love")
    expect(result7[2]).toBe("you")
})










