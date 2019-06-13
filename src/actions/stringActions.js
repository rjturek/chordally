export function spotClicked(string, fret) {
  return {
    type: "SPOT_CLICKED",
    payload: {
      string: string,
      fret: fret
    }
  }

}