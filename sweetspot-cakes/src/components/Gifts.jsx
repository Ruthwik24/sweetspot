import { useNavigate } from 'react-router-dom';

const Gifts = () => {
  const nav = useNavigate();
  const gifts = JSON.parse(localStorage.getItem('gifts')) || [];

  // Updated status colors to match new color scheme
  const statusStyles = {
    pending: {
      background: 'rgba(255, 214, 0, 0.15)',
      color: '#b78a00',
      border: '1px solid rgba(183, 138, 0, 0.3)'
    },
    processing: {
      background: 'rgba(255, 105, 180, 0.15)', // Pink
      color: '#D94D8C', // Dark pink
      border: '1px solid rgba(217, 112, 147, 0.3)' // Pink border
    },
    delivered: {
      background: 'rgba(199, 21, 133, 0.15)', // Magenta
      color: '#8B0A50', // Dark magenta
      border: '1px solid rgba(139, 10, 80, 0.3)' // Dark magenta border
    },
    cancelled: {
      background: 'rgba(255, 127, 80, 0.15)', // Coral
      color: '#E64C2D', // Dark coral
      border: '1px solid rgba(230, 76, 45, 0.3)' // Coral border
    }
  };

  return (
    <div style={{
      padding: '40px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 200px)',
      backgroundColor: '#FFF0EB' // Coral background
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 8px 30px rgba(199, 21, 133, 0.08)', // Magenta shadow
        border: '1px solid rgba(212, 175, 55, 0.3)'
      }}>
        <h2 style={{
          fontSize: '32px',
          marginBottom: '40px',
          color: '#C71585', // Magenta
          textAlign: 'center',
          fontFamily: '"Playfair Display", serif',
          position: 'relative',
          paddingBottom: '15px'
        }}>
          Your Gift Orders
          <span style={{
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '3px',
            background: 'linear-gradient(to right, #C71585, #D4AF37)' // Magenta to gold
          }}></span>
        </h2>
        
        {gifts.length > 0 ? (
          <div style={{ display: 'grid', gap: '25px' }}>
            {gifts.map((gift, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #E8C874',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '5px',
                  height: '100%',
                  background: '#D4AF37' // Gold
                }}></div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                  paddingBottom: '15px',
                  borderBottom: '1px dashed #E8C874' // Gold
                }}>
                  <span style={{
                    fontWeight: '700',
                    color: '#8B0A50', // Dark magenta
                    fontSize: '18px',
                    letterSpacing: '0.5px'
                  }}>
                    Gift #{gift.id}
                  </span>
                  <span style={{
                    padding: '6px 15px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    ...statusStyles[gift.status.toLowerCase()]
                  }}>
                    {gift.status}
                  </span>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '15px'
                }}>
                  <p style={{
                    margin: '0',
                    color: '#5D4037',
                    fontSize: '15px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '18px',
                      height: '18px',
                      marginRight: '8px',
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23C71585'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E\")", // Magenta icon
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }}></span>
                    Recipient: {gift.recipient}
                  </p>
                  
                  <p style={{
                    margin: '0',
                    color: '#5D4037',
                    fontSize: '15px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '18px',
                      height: '18px',
                      marginRight: '8px',
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23C71585'%3E%3Cpath d='M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z'/%3E%3C/svg%3E\")", // Magenta icon
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }}></span>
                    Delivery Date: {gift.deliveryDate}
                  </p>
                  
                  <p style={{
                    margin: '0',
                    color: '#5D4037',
                    fontSize: '15px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '18px',
                      height: '18px',
                      marginRight: '8px',
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23C71585'%3E%3Cpath d='M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z'/%3E%3C/svg%3E\")", // Magenta icon
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }}></span>
                    Message: "{gift.message}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <p style={{
              fontSize: '20px',
              marginBottom: '30px',
              color: '#5D4037',
              lineHeight: '1.6'
            }}>
              You haven't sent any gifts yet.
            </p>
            <button 
              onClick={() => nav('/')}
              style={{
                background: '#C71585', // Magenta
                color: 'white',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                fontSize: '16px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                boxShadow: '0 4px 15px rgba(199, 21, 133, 0.2)' // Magenta shadow
              }}
              onMouseEnter={(e) => e.target.style.background = '#8B0A50'} // Darker magenta on hover
              onMouseLeave={(e) => e.target.style.background = '#C71585'}
            >
              Browse Gifts
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gifts;