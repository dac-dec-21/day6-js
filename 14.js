async function addition(n1, n2) {
  return n1 + n2;
}

async function main() {
  const value = await addition(1, 1);
  console.log(value);
}

main();
