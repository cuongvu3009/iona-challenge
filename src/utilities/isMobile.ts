export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}


export default function isMobile() {
  return getWindowDimensions().width < 450;
}