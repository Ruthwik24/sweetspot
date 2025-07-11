import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log(isLogin ? 'Logging in' : 'Signing up', { email, password, name });
    nav('/');
  };

  const handleProviderLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Handle OAuth login here
    nav('/');
  };

  return (
    <div style={{
      padding: '40px 20px',
      maxWidth: '500px',
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
          marginBottom: '30px',
          color: '#8B0000',
          textAlign: 'center',
          fontFamily: '"Playfair Display", serif',
          position: 'relative',
          paddingBottom: '15px'
        }}>
          {isLogin ? 'Welcome Back' : 'Create Account'}
          <span style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '3px',
            background: 'linear-gradient(to right, #8B0000, #D4AF37)'
          }}></span>
        </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
          gap: '15px'
        }}>
          <button
            onClick={() => setIsLogin(true)}
            style={{
              padding: '10px 20px',
              background: isLogin ? '#8B0000' : 'transparent',
              color: isLogin ? 'white' : '#5D4037',
              border: isLogin ? 'none' : '1px solid #E8C874',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            style={{
              padding: '10px 20px',
              background: !isLogin ? '#8B0000' : 'transparent',
              color: !isLogin ? 'white' : '#5D4037',
              border: !isLogin ? 'none' : '1px solid #E8C874',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
          {!isLogin && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#5D4037',
                fontWeight: '500'
              }}>
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '1px solid #E8C874',
                  borderRadius: '8px',
                  fontSize: '15px',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#5D4037',
              fontWeight: '500'
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                border: '1px solid #E8C874',
                borderRadius: '8px',
                fontSize: '15px',
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#5D4037',
              fontWeight: '500'
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
              style={{
                width: '100%',
                padding: '12px 15px',
                border: '1px solid #E8C874',
                borderRadius: '8px',
                fontSize: '15px',
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {isLogin && (
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '20px'
            }}>
              <button
                type="button"
                onClick={() => console.log('Forgot password')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#8B0000',
                  cursor: 'pointer',
                  fontSize: '14px',
                  textDecoration: 'underline'
                }}
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              background: '#8B0000',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '16px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              marginBottom: '20px'
            }}
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '25px'
        }}>
          <div style={{
            flex: '1',
            height: '1px',
            background: '#E8C874'
          }}></div>
          <span style={{
            padding: '0 15px',
            color: '#5D4037',
            fontSize: '14px'
          }}>OR</span>
          <div style={{
            flex: '1',
            height: '1px',
            background: '#E8C874'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '15px',
          marginBottom: '25px'
        }}>
          <button
            onClick={() => handleProviderLogin('Google')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              background: 'white',
              border: '1px solid #E8C874',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              gap: '8px'
            }}
          >
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              style={{ height: '20px', width: '20px' }}
            />
            <span>Google</span>
          </button>
          <button
            onClick={() => handleProviderLogin('Microsoft')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              background: 'white',
              border: '1px solid #E8C874',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              gap: '8px'
            }}
          >
            <img 
              src="https://www.microsoft.com/favicon.ico" 
              alt="Microsoft" 
              style={{ height: '20px', width: '20px' }}
            />
            <span>Outlook</span>
          </button>
          <button
            onClick={() => handleProviderLogin('Apple')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              background: 'white',
              border: '1px solid #E8C874',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              gap: '8px'
            }}
          >
            <img 
              src="https://www.apple.com/favicon.ico" 
              alt="Apple" 
              style={{ height: '20px', width: '20px' }}
            />
            <span>Apple</span>
          </button>
          <button
            onClick={() => handleProviderLogin('Yahoo')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              background: 'white',
              border: '1px solid #E8C874',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              gap: '8px'
            }}
          >
            <img 
              src="https://www.yahoo.com/favicon.ico" 
              alt="Yahoo" 
              style={{ height: '20px', width: '20px' }}
            />
            <span>Yahoo</span>
          </button>
        </div>

        <p style={{
          textAlign: 'center',
          color: '#5D4037',
          fontSize: '15px'
        }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              background: 'none',
              border: 'none',
              color: '#8B0000',
              cursor: 'pointer',
              fontWeight: '600',
              textDecoration: 'underline'
            }}
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;