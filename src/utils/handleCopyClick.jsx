const handleCopyClick = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Copy successfull");
    console.log(text);
  } catch (err) {
    console.error("Unable to copy to clipboard.", err);
  }
};

export default handleCopyClick;
