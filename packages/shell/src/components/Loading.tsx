
export function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontSize: '1rem',
        color: '#555',
      }}
    >
      <svg
        style={{
          marginRight: '0.5rem',
          width: '1.25rem',
          height: '1.25rem',
          animation: 'spin 1s linear infinite',
        }}
        viewBox="0 0 24 24"
      >
        <title>Loading spinner</title>
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeDasharray="60"
          strokeDashoffset="20"
        />
      </svg>
      Loading...
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
