let height = undefined;
let result;

function testHeight(height) {
    return height ?? "Height is not defined";
}

result = testHeight(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
