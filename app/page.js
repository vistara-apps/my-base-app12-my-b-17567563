'use client';

import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { Identity, Avatar, Name, Address } from '@coinbase/onchainkit/identity';
import { ConnectWallet, Wallet, WalletDropdown, WalletDropdownDisconnect } from '@coinbase/onchainkit/wallet';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import TrendingPanel from './components/TrendingPanel';

export default function Home() {
  const { setFrameReady, isFrameReady } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto flex">
        {/* Sidebar */}
        <div className="w-64 fixed h-full border-r border-gray-200">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          <div className="flex">
            {/* Feed */}
            <div className="flex-1 max-w-2xl border-r border-gray-200">
              <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">Home</h1>
                  <Wallet>
                    <ConnectWallet>
                      <Avatar className="h-8 w-8" />
                    </ConnectWallet>
                    <WalletDropdown>
                      <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                        <Avatar />
                        <Name />
                        <Address />
                      </Identity>
                      <WalletDropdownDisconnect />
                    </WalletDropdown>
                  </Wallet>
                </div>
              </header>
              <Feed />
            </div>

            {/* Right Panel */}
            <div className="w-80 p-4">
              <TrendingPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
