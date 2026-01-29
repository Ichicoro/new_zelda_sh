"use client";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const GuestbookContent = dynamic(
  async () => {
    const { configureGuestbook } = await import('cutebook/register');
    configureGuestbook({
      oauth: {
        clientId: 'https://zelda.sh/client-metadata.json',
        redirectUri: 'https://zelda.sh/guestbook',
        scope: 'atproto transition:generic',
      },
    });
    const Component = () => (
      <div className='bg-[#F9FAFB] p-4 rounded-lg flex flex-col gap-6'>
        {/* @ts-expect-error TS2339 */}
        <guestbook-sign did="did:plc:e5em3ur67q5eh3rdx7dinnrf"></guestbook-sign>
        {/* @ts-expect-error TS2339 */}
        <guestbook-display did="did:plc:e5em3ur67q5eh3rdx7dinnrf" limit="50"></guestbook-display>
      </div>
    );
    return Component;
  },
  { ssr: false }
);

const Guestbook = () => {
  return (
    <Suspense fallback={<div className='bg-[#F9FAFB] p-4 rounded-lg'>Loading guestbook...</div>}>
      <GuestbookContent />
    </Suspense>
  );
}

export default Guestbook