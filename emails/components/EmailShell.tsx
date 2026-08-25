import * as React from 'react';
import { Html, Head, Tailwind, Body, Container, Font, Preview } from '@react-email/components';

interface EmailShellProps {
  children: React.ReactNode;
  previewText?: string;
}

export const EmailShell = ({ children, previewText }: EmailShellProps) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf',
            format: 'truetype',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <style>{`
          * { font-family: 'Inter', Helvetica, Arial, sans-serif !important; }
        `}</style>
      </Head>
      {previewText && <Preview>{previewText}</Preview>}
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#ffffff',
                brandDark: '#09090b',
                gray: '#27272a',
              }
            }
          }
        }}
      >
        <Body className="bg-[#000000] text-[#f4f4f5] p-4 m-0" style={{ fontFamily: "'Inter', Helvetica, sans-serif" }}>
          <Container className="bg-[#09090b] border border-[#27272a] rounded-[18px] mx-auto overflow-hidden max-w-[700px]">
            {children}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailShell;
