'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>
          Generated by{' '}
          <a
            className="link hover:text-white"
            href="https://github.com/solana-developers/create-solana-dapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            create-solana-dapp
          </a>
        </p>
      </aside>
    </footer>
  );
}
