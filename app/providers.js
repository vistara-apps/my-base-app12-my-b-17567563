'use client';

import { MiniKitProvider } from '@coinbase/onchainkit/minikit';
import { base } from 'wagmi/chains';

export function Providers({ children }) {
  return (
    <MiniKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
      chain={base}
      config={{
        appearance: {
          mode: 'auto',
          theme: 'social-theme',
          name: 'Social Media App',
          logo: '/logo.png',
        },
      }}
    >
      {children}
    </MiniKitProvider>
  );
}
