const colors = {
  sienna: "#CD874B",
  calico: "#E3BC9B",
  parchment: "#FCEBDC",
  floralWhite: "#FFFDF6",
  whiteLinen: "#FDF1E7",
  charcoal: "#353535",
  dolphin: "#6E6D7A",
  white: "#fff",
}

const fontFamilies = {
  heading: "'Libre Baskerville', georgia, times, serif",
  links: "'Libre Baskerville', georgia, times, serif",
  body: "'Open Sans', Helvetica, Arial, sans-serif",
}

export default {
  textStyles: {
    canon: {
      color: colors.charcoal,
      fontSize: "38px",
      fontWeight: 400,
      lineHeight: "48px",
      fontFamily: fontFamilies.heading,
    },
    trafalger: {
      color: colors.charcoal,
      fontSize: "26px",
      fontWeight: 400,
      fontFamily: fontFamilies.heading,
      lineHeight: "40px",
    },
    testimonial: {
      color: colors.charcoal,
      fontFamily: fontFamilies.heading,
      fontSize: "16px",
      lineHeight: "30px",
      fontWeight: 400,
    },
    subHeader: {
      color: colors.charcoal,
      fontFamily: fontFamilies.heading,
      fontSize: "15px",
      lineHeight: "22px",
    },
    servicesCopy: {
      color: colors.charcoal,
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: fontFamilies.body,
      lineHeight: "160%",
      marginBottom: "16px",
    },
    bodyCopy: {
      color: colors.charcoal,
      fontSize: "16px",
      fontWeight: 400,
      fontFamily: fontFamilies.body,
      lineHeight: "170%",
      marginBottom: "18px",
    },
    copyright: {
      color: colors.charcoal,
      fontSize: "12px",
      fontWeight: 400,
      fontFamily: fontFamilies.body,
      lineHeight: "170%",
      marginBottom: "18px",
    },
    navlink: {
      color: colors.charcoal,
      fontSize: "14px",
      fontFamily: fontFamilies.body,
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
