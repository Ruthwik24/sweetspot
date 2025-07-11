import { useNavigate } from 'react-router-dom';

const TrackOrder = () => {
  const nav = useNavigate();
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  // Status colors
  const statusStyles = {
    pending: {
      background: 'rgba(255, 214, 0, 0.15)',
      color: '#b78a00',
      border: '1px solid rgba(183, 138, 0, 0.3)'
    },
    processing: {
      background: 'rgba(0, 145, 234, 0.15)',
      color: '#0069b4',
      border: '1px solid rgba(0, 105, 180, 0.3)'
    },
    delivered: {
      background: 'rgba(46, 167, 79, 0.15)',
      color: '#1e7e34',
      border: '1px solid rgba(30, 126, 52, 0.3)'
    },
    cancelled: {
      background: 'rgba(220, 53, 69, 0.15)',
      color: '#b21f2d',
      border: '1px solid rgba(178, 31, 45, 0.3)'
    }
  };

  return (
    <div style={{
      padding: '40px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 200px)',
      backgroundColor: '#FFF8E7'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 8px 30px rgba(139, 0, 0, 0.08)',
        border: '1px solid rgba(212, 175, 55, 0.3)'
      }}>
        <h2 style={{
          fontSize: '32px',
          marginBottom: '40px',
          color: '#8B0000',
          textAlign: 'center',
          fontFamily: '"Playfair Display", serif',
          position: 'relative',
          paddingBottom: '15px'
        }}>
          Your Orders
          <span style={{
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '3px',
            background: 'linear-gradient(to right, #8B0000, #D4AF37)'
          }}></span>
        </h2>
        
        {orders.length > 0 ? (
          <div style={{ display: 'grid', gap: '25px' }}>
            {orders.map((order, index) => (
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
                  background: '#D4AF37'
                }}></div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                  paddingBottom: '15px',
                  borderBottom: '1px dashed #E8C874'
                }}>
                  <span style={{
                    fontWeight: '700',
                    color: '#5C0000',
                    fontSize: '18px',
                    letterSpacing: '0.5px'
                  }}>
                    Order #{order.id}
                  </span>
                  <span style={{
                    padding: '6px 15px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    ...statusStyles[order.status.toLowerCase()]
                  }}>
                    {order.status}
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
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238B0000'%3E%3Cpath d='M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z'/%3E%3C/svg%3E\")",
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }}></span>
                    Date: {order.date}
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
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238B0000'%3E%3Cpath d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")",
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }}></span>
                    Items: {order.items.length}
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
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238B0000'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z'/%3E%3C/svg%3E\")",
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }}></span>
                    Total: ₹{order.total}
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
              You haven't placed any orders yet.
            </p>
            <button 
              onClick={() => nav('/')}
              style={{
                background: '#8B0000',
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
                boxShadow: '0 4px 15px rgba(139, 0, 0, 0.2)'
              }}
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;