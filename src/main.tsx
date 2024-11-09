import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import GlobalStyle from './styles/globalStyles.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
  </StrictMode>,
)
