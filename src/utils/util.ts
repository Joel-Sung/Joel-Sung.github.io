export function timeout(delay: number) {
  // delay is in milliseconds
  return new Promise( res => setTimeout(res, delay) );
}
