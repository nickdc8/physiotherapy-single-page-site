const colors = {
  calico: "#E3BC9B",
  floralWhite: "#FFFDF6",
  whiteLinen: "#FAF3ED",
  charcoal: "#353535",
  white: "#fff",
}

const fontFamilies = {
  heading: "'Libre Baskerville', georgia, times, serif",
  links: "'Libre Baskerville', georgia, times, serif",
  body: "Helvetica, Arial, sans-serif",
}

export default {
  textStyles: {
    canon: {
      color: colors.charcoal,
      fontSize: "24px",
      fontWeight: 700,
      fontFamily: fontFamilies.heading,
      marginTop: "20px",
    },
    navlink: {
      color: colors.charcoal,
      fontSize: "14px",
      fontFamily: fontFamilies.links,
    },
  },
  colors: {
    ...colors,
  },
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 80, 96],
  fonts: {
    serif: "'Libre Baskerville', georgia, times, serif",
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
  },
}
