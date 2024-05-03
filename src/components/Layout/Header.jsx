import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
// import LoginButton from '../common/login-button';
// import AuthenticationButton from '../common/authentication-button';
import AuthNav from '../../components/common/auth-nav';
// import SignupButton from '../../components/common/signup-button';
import { useAuth0 } from '@auth0/auth0-react';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated } = useAuth0();

  console.log('isAuthenticated:', isAuthenticated);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>
      </div>

      <AuthNav />
      {isAuthenticated && (
        <div style={{ color: '#E2F0F7', paddingLeft: '20px' }}>
          <Link to="/profile">Profile</Link>
        </div>
      )}
    </div>
  );
}

export { HeaderContent };
