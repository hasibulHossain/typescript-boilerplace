export default function arr() {
  const animals: string[] = ["dog", "cat", "lion"];
  for (let animal of animals) {
    console.log(animal.toUpperCase());
  }
}
