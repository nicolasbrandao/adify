function makeServiceColor(color: string) {
  switch (color) {
    case "yellow":
      return "from-yellow-300";
    case "orange":
      return "from-orange-500";
    case "blue":
      return "from-blue-500";
    case "green":
      return "from-green-500";
    default:
      return "from-cyan-500";
  }
}

export default makeServiceColor;
