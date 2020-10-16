export function outputFormatter(...args: any): void {
  console.log(JSON.stringify(args, null, 2));
}
