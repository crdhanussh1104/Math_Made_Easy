import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    try {
      localStorage.removeItem('mme_currentPage');
      localStorage.removeItem('mme_selectedChapterId');
    } catch (e) {}
    window.location.hash = 'home';
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          padding: '40px 20px',
          textAlign: 'center',
          gap: '16px',
          color: 'var(--text-main, #1e293b)',
          fontFamily: 'var(--font-sans, system-ui, sans-serif)'
        }}>
          <div style={{ fontSize: '3rem' }}>⚠️</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>
            Something went wrong while loading this page
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted, #64748b)', maxWidth: '460px', margin: 0 }}>
            Don't worry! Click below to reset your navigation state and return to the home screen.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <button
              onClick={this.handleReset}
              style={{
                padding: '12px 24px',
                borderRadius: '999px',
                border: 'none',
                backgroundColor: 'var(--primary, #58cc02)',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(88, 204, 2, 0.3)'
              }}
            >
              🔄 Refresh & Return to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
