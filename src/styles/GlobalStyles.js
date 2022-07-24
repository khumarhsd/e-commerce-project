import { createGlobalStyle } from 'styled-components'
import { reset } from './base/reset'
import { typography, colors } from './base/typography'

export const GlobalStyle = createGlobalStyle`
    /* Reset */
    ${reset}

    /* Body */
  body {
    font-weight: var(--fw-regular);
    font-size: var(--fs-md);
    color: var(--gray-100);
    transition: all 1s ease;
  }
  
  /* Variables */
  :root {
    ${typography}
    ${colors}
    /* Box-Shadow */ 
    --shadow-xs: 0px 1px 2px rgba(16, 24, 40, 0.05);
    --shadow-sm: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
    --shadow-md: 0px 4px 8px -1px rgba(16, 24, 40, 0.1), 0px 2px 6px 0px rgba(16, 24, 40, 0.06); 
    --shadow-lg: 0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05); 
    --shadow-xl: 0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04); 
    --shadow-2xl: 0px 24px 48px -12px rgba(16, 24, 40, 0.25); 
    --shadow-3xl: 0px 32px 64px -12px rgba(16, 24, 40, 0.2);
  }
`
