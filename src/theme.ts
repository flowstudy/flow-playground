export default {
  isMobile: window.matchMedia('(max-width: 768px)')?.matches,
  colors: {
    white: '#ffffff',
    black: '#000000',
    primary: '#000000',
    primaryText: '#FFFFFF',
    secondaryText: '#000000',
    darkPrimary: '#2bb169',
    background: '#F6F7F9',
    text: '#2F353F',
    menuText: '#2F353F',
    menuBg: '#3031d11a',
    muted: '#6a6a6a',
    grey: '#DDDDDD',
    darkGrey: '#909090',
    greyBorder: '#D8D8D8',
    purple: '#f694ff',
    border: 'rgb(240, 240, 240)',
    errors: '#FC4723',
    errorBackground: '#FFEAE9',
    borderDark: 'rgb(222, 222, 222)',
    shadowColor: 'rgb(222, 222, 222)',
    warning: '#ffcc00',
    error: '#f44336',
    errorToast: '#fc4723',
    blue: '#0000ff',
    heading: '#919191',
    badgeResource: '#0093AF',
    badgeCapability: '#3DDC84',
    badgeNull: '#8C92AC',
    // TODO: Consolidate color names after we import more v2 colors
    actionBlue: '#1E1FB9',
    leftSidebarBackground: '#DEE2E9',
    leftSidebarHeaderText: '#69717E',
    alternateButtonBorder: '#DEE2E9',
    alternateButtonBackground: '#DEE2E9',
    blueBorder: '#3B3CFF',
    disabledButtonText: '#F6F7F9',
    secondaryButtonBorder: '#000000',
    disabledButtonBackground: '#BDBDBD',
    avatarSelectedColor: '#3031D1',
    avatarNotSelectedColor: '#DEE2E9',
    avatarTextColor: '#69717E',
    borderColor: '#ABB3BF',
    buttonBorder: '#000000',
    primaryBtnBg: '#000000',
    primaryBtnBorder: '#000000',
    secondaryBtnBg: '#FFFFFF',
    secondaryBtnBorder: '#000000',
    primaryBtnPressed: '#1E1FB9',
    secondaryBtnPressed: '#1E1FB9',
    primaryBtnHover: '#1E1FB9',
    secondaryBtnHover: '#1E1FB9',
    primaryBtnDisabled: '#59595966',
    secondaryBtnDisabled: '#59595966',
    modes: {
      dark: {
        leftSidebarHeaderText: '#ABB3BF',
        alternateButtonBorder: '#2F353F',
        disabledButtonText: '#2F353F',
        secondaryButtonBorder: '#B795FF',
      },
    },
  },
  fonts: {
    body: 'Interstate, system-ui, sans-serif',
    heading: 'Interstate, system-ui, sans-serif',
    monospace: "Menlo, Monaco, 'Courier New', monospace",
  },
  forms: {
    subtle: {
      padding: 0,
      border: 'none',
      color: 'purple',
      marginRight: '0.5rem',
      textOverflow: 'ellipsis',
    },
  },
  buttons: {
    primary: {
      border: 'none',
      borderRadius: '8px',
      backgroundColor: 'primaryBtnBg',
      fontFamily: 'body',
      fontWeight: 500,
      color: 'primaryText',
      margin: 0,
      fontSize: 1,
      maxWidth: '350px',
      height: '54px',
      '&:active': {
        backgroundColor: 'primaryBtnPressed',
      },
      '&:hover': {
        backgroundColor: 'primaryBtnHover',
      },
      '&:disabled': {
        backgroundColor: 'alternateButtonBorder',
      },
    },
    secondary: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'secondaryBtnBorder',
      borderRadius: '8px',
      backgroundColor: 'secondaryBtnBg',
      fontFamily: 'body',
      fontWeight: 500,
      color: 'secondaryText',
      margin: 0,
      maxWidth: '350px',
      '&:hover': {
        color: 'secondaryText',
        borderColor: 'secondaryBtnHover',
        backgroundColor: 'secondaryBtnHover',
      },
      '&:active': {
        color: 'primaryText',
        borderColor: 'secondaryBtnHover',
        backgroundColor: 'secondaryBtnHover',
      },
      '&:disabled': {
        color: 'primaryText',
        backgroundColor: 'secondaryBtnDisabled',
      },
    },
    disabled: {
      border: 'none',
      borderRadius: '8px',
      borderWidth: 3,
      fontFamily: 'body',
      fontWeight: 500,
      color: 'disabledButtonText',
      backgroundColor: 'disabledButtonBackground',
      margin: 0,
    },
    secondaryLegacy: {
      border: 'none',
      background: 'none',
      fontFamily: 'body',
      color: 'text',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      margin: 0,
      fontWeight: 500,
      paddingX: '0.65rem',
      paddingY: '0.5rem',
      borderRadius: '5px',
      fontSize: 4,
      '&:hover': {
        background: 'rgb(245, 245, 245)',
      },
    },
    explorer: {
      border: 'none',
      background: 'none',
      fontFamily: 'body',
      color: 'menuText',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      margin: 0,
      fontWeight: 500,
      borderRadius: '4px',
      fontSize: 4,
      backgroundColor: 'unset',
      padding: '8px 12px',
      '&:hover': {
        backgroundColor: 'unset',
        color: 'menuText',
      },
      '&:active': {
        backgroundColor: 'unset',
      },
    },
    alternate: {
      fontSize: 4,
      color: 'text',
      border: '1px solid #DEE2E9',
      background: 'alternateButtonBackground',
      '&:hover': {
        opacity: '0.75',
      },
      borderRadius: '4px',
      '&:disabled': {
        backgroundColor: 'primaryBtnDisabled',
      },
      '&:active': {
        backgroundColor: 'secondaryBtnPressed',
      },
    },
    unstyled: {
      color: 'text',
      padding: '0',
      borderStyle: 'none',
      outline: 0,
      background: 'transparent',
    },
  },
  links: {
    buttonSecondary: {
      border: 'none',
      background: 'none',
      fontFamily: 'body',
      color: 'text',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      margin: 0,
      fontWeight: 500,
      paddingX: '0.65rem',
      paddingY: '0.5rem',
      borderRadius: '5px',
      '&:hover': {
        background: 'rgb(245, 245, 245)',
      },
    },
  },
  fontWeights: {
    thin: 200,
    body: 400,
    medium: 500,
    heading: 700,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem',
    '3.75rem',
    '4.5rem',
    '6rem',
    '8rem',
    '12px',
    '14px',
  ],
  space: [
    '0',
    '0.125rem',
    '0.25rem',
    '0.375rem',
    '0.5rem',
    '0.625rem',
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.25rem',
    '2.5rem',
    '2.75rem',
    '3rem',
    '3.5rem',
    '4rem',
    '5rem',
    '6rem',
    '7rem',
    '8rem',
    '9rem',
    '10rem',
    '11rem',
    '12rem',
    '13rem',
    '14rem',
    '15rem',
    '16rem',
    '18rem',
    '20rem',
    '24rem',
  ],
  radii: [4, 8, '1rem', '2rem', '4rem'],
  borderWidths: [1, 4],
  shadows: [
    '9px 9px 10px #d9c5d6, -9px -9px 10px whitesmoke',
    '5px 5px 10px #d6e3e6, -5px -5px 10px #ffffff',
    '2px 2px 5px #d6e3e6, -2px -2px 5px #ffffff',
  ],
  borders: ['2px solid rgb(240, 240, 240)'],
  boxes: {
    borderBox: {
      position: 'relative',
      background: 'white',
      overflow: 'hidden',
      borderRadius: 2,
      boxShadow: 2,
      border: 0,
      transition: 'box-shadow 0.2s',
      '&:hover': {
        boxShadow: 1,
      },
    },
  },
  text: {
    icon: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 3,
      ':hover': {
        cursor: 'pointer',
      },
      svg: {
        marginRight: '0.2rem',
      },
    },
  },
};
