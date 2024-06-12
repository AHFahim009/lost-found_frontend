// Footer.js
import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333', color: '#fff', padding: '1rem 0',
      marginTop: '2rem'
    }}>
      <Container maxWidth="md">
        <Typography variant="body2" align="center">
          Contact Information: <Link href="mailto:your@email.com">Email address</Link>
        </Typography>
        <Typography variant="body2" align="center">
          Follow us on <Link href="https://twitter.com/your-twitter">Twitter</Link> and <Link href="https://facebook.com/your-facebook">Facebook</Link>
        </Typography>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
        {/* Additional Links (Terms of Use, Privacy Policy, etc.) */}
      </Container>
    </footer>
  );
};

export default Footer;
