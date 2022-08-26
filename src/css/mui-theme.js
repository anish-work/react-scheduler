import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

// Also see /css/px-bootstrap.scss
const PXPrimary = "#4089f7";
const PXSecondary = "#f7ae40";
const PXBodyBG = "#f5f5f5";

const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      asterisk: {
        color: '#f44336',
        '&$error': {
          color: '#f44336'
        },
      }
    },
    MuiSvgIcon: {
      root: {
        "&.large": {
          width: "120px",
          height: "120px"
        },
        "&.x-small": {
          width: "14px",
          height: "14px"
        },
        "&.small2": {
          width: "18px",
          height: "18px"
        },
        "&.small": {
          width: "20px",
          height: "20px"
        },
        "&.med": {
          width: "24px",
          height: "24px"
        },
        "&.empty": {
          color: 'transparent',
        }
      }
    },
    MuiDivider:{
      root:{
        backgroundColor:"#D3D9DB",
        height:"1px",
        '&.dense':{
          height:"2px",
        }
      },
    },
    MuiMenuItem: {
      root:{
        height:48,
        padding:"10px 20px!important",
        fontSize:"16px!important",
        fontWeight: "500!important",
        color:'#0D0D0D',
        '&:hover':{
            backgroundColor:"#E0ECFE4D",
        },
        '&:active':{
            backgroundColor:"#E6E9EB"
        },
      },
      dense:{
        height:40,
      }
    },
    MuiCardHeader: {
      content: {
        "&.top": {
          flex: " 1 1 auto",
          alignSelf: "flex-start"
        },
        "& h4": {
          paddingLeft: "1px"
        }
      }
    },

    MuiPaper: {
      elevation1: {
        borderRadius: "5px",
        boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.04)",
        border: "solid 1px #dddddd"
      }
    },
    MuiCardActions: {
      root: {
        "&.medium": {
          height: "60px"
        }
      }
    },
    MuiInputBase: {
      root: {
        "&.medium": {
          height: "50px"
        },
        "&.small": {
          height: "40px"
        },
        '&.Mui-disabled':{
          backgroundColor:"#F2F4F7",
          color:"#6F8099"
        }
      },
      input:{
        "&::placeholder": {
          color:"#6F8099"
        }
      },
    },
    MuiTextField: {
      root: {
        '&.standard': {
          '& .MuiOutlinedInput-root': { height: 48 },
          '& .MuiOutlinedInput-input': { height: 48, fontSize: 16, fontWeight: 500 },
        },
        "&.w-small": {
          width: "60px"
        },
        '&.small':{
          width:96
        }
      },
    },
    MuiPopover: {
      paper: {
        borderRadius:"10px",
        '&.large':{
          width: "390px",
        },
        "&.medium": {
          width: "335px",
          height: "auto"
        },
        "&.small": {
          width: "240px",
          height: "auto"
        }
      }
    },
    MuiAvatar: {
      root: {
        "&.vlarge": {
          height: "92px",
          width: "92px",
          fontSize: "1.8em"
        },
        "&.large": {
          height: "80px",
          width: "80px",
          fontSize: "1.8em"
        },
        "&.midlarge": {
          height: "70px",
          width: "70px",
          fontSize: "1.8em"
        },
        "&.medium": {
          height: "60px",
          width: "60px",
          fontSize: "1.7em"
        },
        "&.small": {
          height: "50px",
          width: "50px",
          fontSize: "1em"
        },
        "&.thumbnail": {
          height: "30px",
          width: "30px",
          fontSize: "1.3em"
        }
      }
    },
    MuiMenu: {
      paper: {
        "&.small": {
          maxWidth: "270px"
        }
      }
    },
    MuiDialog: {
      paper: {
        borderRadius:"10px",
        "&.width-840": {
          width: "840px",
          maxWidth: 'unset'
        },
        "&.width-800":{
          width: "800px",
          maxWidth: 'unset'
        },
        "&.width-780": {
          width: "780px",
          maxWidth: 'unset'
        },
        "&.width-700": {
          width: "700px",
          maxWidth: 'unset'
        },
        "&.width-600": {
          width: "600px"
        },
        "&.width-500": {
          width: "500px"
        },
        "&.width-400": {
          width: "400px"
        },
        "&.width-330": {
          width: "330px"
        },
        "&.height-70": {
          height: "70vh !important"
        },
        "&.height-60": {
          minHeight: "60vh"
        },
        "&.bg-light-grey": {
          backgroundColor: PXBodyBG
        }
      }
    },
    MuiToolbar: {
      root: {
        "&.height-70": {
          minHeight: "70px"
        },
        "&.height-60": {
          minHeight: "60px"
        }
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#f5f5f5",
        boxShadow: "unset",
        color: "black"
      }
    },
    MuiChip: {
      root: {
        borderRadius: "5px",
        "&.small": {
          height: "30px"
        },
        "&.medium": {
          height: "36px",
          minWidth: "60px"
        }
      },
      label: {
        fontSize: "14px",
        fontWeight: "600"
      }
    },
    MuiSelect: {
      icon: {
        color: "#37404D",
        right: "10px"
      }
    },
    MuiDrawer: {
      paper: {
        maxWidth: '100vw',
        width: 490,
        '&.drawer-420':{
          width: 420,
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        '&.standard-select': {
          height: 50,
          '& .MuiSelect-root': { lineHeight: '48px', fontSize: 16, fontWeight: 500 },
        },
        '& ~ p': {
          marginTop: '0px',
          marginLeft: '0px',
        },
        "&.small": {
          height: "36px"
        },
        "&.height-40": {
          height: "40px"
        },
        "&.medium": {
          height: "48px"
        },
        "&.large": {
          minHeight: "70px"
        },
        "&.x-large": {
          minHeight: "128px"
        },
        "&.width-180": {
          width: "180px"
        },
        "&.disabledBg":{
          backgroundColor: 'rgba(211, 217, 219, 0.3)',
        }
      },
      input: {
        "&.small": {
          height: "36px"
        },
        "&.height-40": {
          height: "40px"
        },
        "&.medium": {
          height: "48px"
        },
        "&.large": {
          height: "70px"
        },
        "&.x-large": {
          minHeight: "98px",
          maxHeight: "190px",
          padding: "15px"
        },
        "&.select-small": {
          lineHeight: "36px"
        },
        "&.select-height-40": {
          lineHeight: "40px"
        },
        "&.select-medium": {
          lineHeight: "48px"
        },
        "&.size_16_500": {
          fontSize: "16px",
          fontWeight: "500"
        },
        "&.size_16_600": {
          fontSize: "16px",
          fontWeight: "600"
        },
        "&.size_15_500": {
          fontSize: "15px",
          fontWeight: "500"
        },
        "&.size_14_600": {
          fontSize: "14px",
          fontWeight: "600"
        },
        "&.size_14_normal": {
          fontSize: "14px",
          fontWeight: "normal"
        },
        "&.size_18_600": {
          fontSize: "18px",
          fontWeight: "600"
        },
        padding: "0 15px",
        lineHeight: "normal"
      },
      notchedOutline:{
        borderColor:"#D3D9DB"
      }
    },
    MuiButton: {
      root: {
        "&.f-height-36": {
          minWidth: "160px",
          height: "36px"
        },
        "&.f-sm-med": {
          minWidth: "80px",
          height: "36px"
        },
        "&.f-small": {
          minWidth: "80px",
          height: "32px"
        },
        "&.f-medium": {
          minWidth: "80px",
          height: "40px"
        },
        "&.f-xmedium": {
          minWidth: "120px",
          height: "40px"
        },
        "&.f-large": {
          minWidth: "180px",
          height: "40px"
        },
        "&.f-xlarge": {
          minWidth: "192px",
          height: "40px"
        },
        "&.f-xxlarge": {
          minWidth: "160px",
          height: "48px"
        },
        "&.f-xxxlarge": {
          minWidth: "100%",
          height: "48px"
        },
        "&.light-primary": {
          color: PXPrimary,
          backgroundColor: '#E0ECFF',
          "&:hover":{
            backgroundColor: '#E0ECFF',
            filter: 'opacity(80%)'
          }
        },
        "&.f-h40w160": {
          minWidth: "160px",
          height: "40px"
        },
      },
      label: {
        fontSize: "14px",
        fontWeight: "bold",
        textTransform: "none",
        lineHeight: "14px",
        "&.default": {
          lineHeight: "unset",
        },
      },
    },
    MuiRadio:{
      root:{
        color:'#D3D9DB'
      }
    },
    MuiCheckbox:{
      root:{
        color:"#D3D9DB"
      }
    },
    MuiIconButton: {
      root: {
        color: '#37404D',
        padding: 8,
        "&.shrink": { margin: -12 },
        '&.black':{
          color: '#000'
        },
      },
      sizeSmall: {
        padding: 6,
        '& .MuiSvgIcon-root': { width: 16, height: 16 }
      },
    },
    MuiTypography: {
      h1: {
        fontSize: "30px",
        fontWeight: "600",
        lineHeight: "normal"
      },
      h2: {
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "normal"
      },
      h3: {
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "normal"
      },
      h4: {
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "normal"
      },
      h5: {
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "normal"
      },
      h6: {
        fontSize: "15px",
        fontWeight: "600",
        lineHeight: "normal"
      },
      body1: {
        fontSize: "15px",
        fontWeight: "500",
        lineHeight: "normal"
      },
      body2: {
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "normal"
      },
      caption: {
        fontSize: "13px",
        fontWeight: "600",
        lineHeight: "normal"
      },
      subtitle1: {
        fontSize: "12px",
        fontWeight: "500",
        lineHeight: "normal"
      },
      subtitle2: {
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "normal"
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920
    }
  },
  palette: {
    primary: {
      main: PXPrimary
      //contrastText: '#fff',
    },
    secondary: {
      main: PXSecondary
      //contrastText: '#fff',
    },
    background: {
      default: PXBodyBG
    },
    text: {
      primary:"#0D0D0D",
      // primary: "#42484b",
      // secondary: "#818181",
      secondary:"#6F8099"
    },
    action: {
      active: "#37404D",
    },
  },
  typography: {
    fontFamily: '  "Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
    lineHeight: "normal"
  }
});

export default props => {
  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {props.children}
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
};
