import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Rishvin Labs Engineering';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1e3a8a 0%, #000000 60%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#3b82f6',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px',
            }}
          >
            Rishvin Labs
          </div>
          <div
            style={{
              fontSize: '80px',
              fontWeight: '900',
              textAlign: 'center',
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            Engineering with Absolute Precision
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
