const msToFull = (ms) => {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
  return `${days} day${days > 1 ? "s" : ""} ${hours} hour${
    hours > 1 ? "s" : ""
  } ${minutes} minute${minutes > 1 ? "s" : ""} ${seconds} second${
    seconds > 1 ? "s" : ""
  }`;
};

export default msToFull;
