import { DefaultService } from "./generated";

async function main() {
const res = await DefaultService.getUsers("1");
console.log(res);
}

main()