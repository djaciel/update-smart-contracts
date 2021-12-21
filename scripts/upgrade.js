async function main() {
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  let box = await upgrades.upgradeProxy('0x3c1B4540b95668860472797ec588a91F95C73f11', BoxV2);
  console.log('Your upgraded proxy is done!', box.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
