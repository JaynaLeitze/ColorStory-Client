export const theme = {
  name: "ColorStory",
  rounding: 0,
  spacing: 28,
  defaultMode: "light",
  global: {
    colors: {
      brand: {
        dark: "#7700cc",
        light: "#6600cc",
      },
      background: {
        dark: "#111111",
        light: "#FFFFFF",
      },
      "background-back": {
        dark: "#111111",
        light: "#EEEEEE",
      },
      "background-front": {
        dark: "#222222",
        light: "#FFFFFF",
      },
      "background-contrast": {
        dark: "#FFFFFF11",
        light: "#11111111",
      },
      text: {
        dark: "#EEEEEE",
        light: "#333333",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "indigo!",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "red!",
      },
      "text-xweak": {
        dark: "#999999",
        light: "#999999",
      },
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "#008037",
      "selected-text": "text-strong",
      "status-critical": "active-background",
      "status-warning": "#FFAA15",
      "status-ok": "yellow!",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      focus: "#38B6FF",
      red: {
        dark: "",
        light: "",
      },
      "red!": "#FF1616",
      orange: {
        dark: "",
        light: "",
      },
      "orange!": "#ff914d",
      yellow: {
        dark: "",
        light: "",
      },
      "yellow!": "#ffde59",
      blue: {
        dark: "",
        light: "",
      },
      "blue!": "#38B6FF",
      indigo: {
        dark: "",
        light: "",
      },
      "indigo!": "#004aad",
      violet: {
        dark: "",
        light: "",
      },
      "violet!": "#5e17eb",
      green: {
        dark: "",
        light: "",
      },
      "green!": "#008037",
      control: "blue!",
      border: "indigo!",
    },
    font: {
      family: '"Roboto"',
      size: "21px",
      height: "28px",
      maxWidth: "588px",
      face:
        "/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYmRlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISma2RlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmY2RlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmbGRlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYGRlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYWRlV9Su1caiTVo.woff) format('woff');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto Slab';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/robotoslab/v13/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmb2RlV9Su1cai.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
    },
    active: {
      background: "active-background",
      color: "indigo!",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "indigo!",
    },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "5px",
      large: "14px",
      xlarge: "28px",
    },
    breakpoints: {
      small: {
        value: 896,
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: "5px",
          large: "7px",
          xlarge: "14px",
        },
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "2px",
          xsmall: "4px",
          small: "7px",
          medium: "14px",
          large: "28px",
          xlarge: "56px",
        },
        size: {
          xxsmall: "28px",
          xsmall: "56px",
          small: "112px",
          medium: "224px",
          large: "448px",
          xlarge: "896px",
          full: "100%",
        },
      },
      medium: {
        value: 1792,
      },
      large: {},
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "4px",
      xsmall: "7px",
      small: "14px",
      medium: "28px",
      large: "56px",
      xlarge: "112px",
      responsiveBreakpoint: "small",
    },
    input: {
      padding: "14px",
      weight: 600,
    },
    spacing: "28px",
    size: {
      xxsmall: "56px",
      xsmall: "112px",
      small: "224px",
      medium: "448px",
      large: "896px",
      xlarge: "1344px",
      xxlarge: "1792px",
      full: "100%",
    },
    control: {
      border: {
        radius: "0px",
      },
    },
    drop: {
      border: {
        radius: "0px",
      },
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  layer: {
    background: {
      dark: "#111111",
      light: "#FFFFFF",
    },
  },
  scale: 0.4,
  button: {
    border: {
      width: "2px",
      radius: "5px",
    },
    padding: {
      vertical: "2px",
      horizontal: "10px",
    },
  },
  calendar: {
    small: {
      fontSize: "19.133333333333333px",
      lineHeight: 1.375,
      daySize: "32.00px",
    },
    medium: {
      fontSize: "21px",
      lineHeight: 1.45,
      daySize: "64.00px",
    },
    large: {
      fontSize: "26.6px",
      lineHeight: 1.11,
      daySize: "128.00px",
    },
  },
  checkBox: {
    size: "28px",
    toggle: {
      radius: "28px",
      size: "56px",
    },
    check: {
      radius: "0px",
    },
  },
  clock: {
    analog: {
      hour: {
        width: "9px",
        size: "28px",
      },
      minute: {
        width: "5px",
        size: "14px",
      },
      second: {
        width: "4px",
        size: "11px",
      },
      size: {
        small: "84px",
        medium: "112px",
        large: "168px",
        xlarge: "252px",
        huge: "336px",
      },
    },
    digital: {
      text: {
        xsmall: {
          size: "17.266666666666666px",
          height: 1.5,
        },
        small: {
          size: "19.133333333333333px",
          height: 1.43,
        },
        medium: {
          size: "21px",
          height: 1.375,
        },
        large: {
          size: "22.866666666666667px",
          height: 1.167,
        },
        xlarge: {
          size: "24.733333333333334px",
          height: 1.1875,
        },
        xxlarge: {
          size: "28.46666666666667px",
          height: 1.125,
        },
      },
    },
  },
  heading: {
    level: {
      1: {
        small: {
          size: "28px",
          height: "35px",
          maxWidth: "797px",
        },
        medium: {
          size: "36px",
          height: "43px",
          maxWidth: "1006px",
        },
        large: {
          size: "51px",
          height: "58px",
          maxWidth: "1424px",
        },
        xlarge: {
          size: "66px",
          height: "73px",
          maxWidth: "1842px",
        },
      },
      2: {
        small: {
          size: "27px",
          height: "34px",
          maxWidth: "745px",
        },
        medium: {
          size: "32px",
          height: "39px",
          maxWidth: "902px",
        },
        large: {
          size: "38px",
          height: "45px",
          maxWidth: "1058px",
        },
        xlarge: {
          size: "43px",
          height: "50px",
          maxWidth: "1215px",
        },
      },
      3: {
        small: {
          size: "25px",
          height: "32px",
          maxWidth: "693px",
        },
        medium: {
          size: "28px",
          height: "35px",
          maxWidth: "797px",
        },
        large: {
          size: "32px",
          height: "39px",
          maxWidth: "902px",
        },
        xlarge: {
          size: "36px",
          height: "43px",
          maxWidth: "1006px",
        },
      },
      4: {
        small: {
          size: "23px",
          height: "30px",
          maxWidth: "640px",
        },
        medium: {
          size: "25px",
          height: "32px",
          maxWidth: "693px",
        },
        large: {
          size: "27px",
          height: "34px",
          maxWidth: "745px",
        },
        xlarge: {
          size: "28px",
          height: "35px",
          maxWidth: "797px",
        },
      },
      5: {
        small: {
          size: "20px",
          height: "27px",
          maxWidth: "562px",
        },
        medium: {
          size: "20px",
          height: "27px",
          maxWidth: "562px",
        },
        large: {
          size: "20px",
          height: "27px",
          maxWidth: "562px",
        },
        xlarge: {
          size: "20px",
          height: "27px",
          maxWidth: "562px",
        },
      },
      6: {
        small: {
          size: "19px",
          height: "26px",
          maxWidth: "536px",
        },
        medium: {
          size: "19px",
          height: "26px",
          maxWidth: "536px",
        },
        large: {
          size: "19px",
          height: "26px",
          maxWidth: "536px",
        },
        xlarge: {
          size: "19px",
          height: "26px",
          maxWidth: "536px",
        },
      },
    },
  },
  paragraph: {
    small: {
      size: "20px",
      height: "27px",
      maxWidth: "562px",
    },
    medium: {
      size: "21px",
      height: "28px",
      maxWidth: "588px",
    },
    large: {
      size: "23px",
      height: "30px",
      maxWidth: "640px",
    },
    xlarge: {
      size: "25px",
      height: "32px",
      maxWidth: "693px",
    },
    xxlarge: {
      size: "28px",
      height: "35px",
      maxWidth: "797px",
    },
  },
  radioButton: {
    size: "28px",
  },
  text: {
    xsmall: {
      size: "19px",
      height: "26px",
      maxWidth: "536px",
    },
    small: {
      size: "20px",
      height: "27px",
      maxWidth: "562px",
    },
    medium: {
      size: "21px",
      height: "28px",
      maxWidth: "588px",
    },
    large: {
      size: "23px",
      height: "30px",
      maxWidth: "640px",
    },
    xlarge: {
      size: "25px",
      height: "32px",
      maxWidth: "693px",
    },
    xxlarge: {
      size: "28px",
      height: "35px",
      maxWidth: "797px",
    },
  },
  formField: {
    border: {
      color: "indigo!",
      error: {
        color: {
          dark: "white",
          light: "status-critical",
        },
      },
      position: "inner",
      side: "bottom",
      size: "small",
      style: "solid",
    },
    content: {
      pad: "medium",
    },
    disabled: {
      background: {
        color: "status-disabled",
        opacity: "medium",
      },
    },
    error: {
      color: "status-critical",
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    help: {
      color: "text-xweak",
      margin: {
        start: "small",
      },
      size: "small",
      weight: "normal",
    },
    info: {
      color: "text-xweak",
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    label: {
      margin: {
        vertical: "xsmall",
        horizontal: "xsmall",
      },
      size: "large",
    },
    margin: {
      bottom: "small",
    },
    round: "0px",
  },
  email: "jayna.leitze@gmail.com",
  date: "2021-03-16T14:59:29.123Z",
};
