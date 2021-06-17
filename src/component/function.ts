export default function func() {
  //when return value void in typescript
  function testVoid(): void {
    console.log("A void function");
  }
  testVoid();
  console.log("from function file");
  function testUndefined(): undefined {
    console.log("an example of undefined func!");
    return;
  }
  console.log("hallow world");
  testUndefined();

  //function type
  let func: (a: number, b: number) => number;

  func = (age, bb) => {
    return age + bb;
  };
}
