import React from 'react';
import sadImage from './sad.jpg';

const MemeCoinPage = () => {
  const contractAddress = 'EDhkfwGRg6TvHEdMb3iy2TxAf1TG3HmWd9DJJAH9pump';

  return (
    <div style={styles.container}>
      <img src={sadImage} alt="Meme Coin" style={styles.image} />
      <div style={styles.infoContainer}>

        <p style={styles.contract}>{contractAddress}</p>
        <a
          href="https://pump.fun/coin/EDhkfwGRg6TvHEdMb3iy2TxAf1TG3HmWd9DJJAH9pump"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Sorry to ask but can you please help me for 10$ brother 🙏
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  infoContainer: {
    marginTop: '30px',
  },
  contract: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    wordBreak: 'break-all',
  },
  link: {
    display: 'inline-block',
    marginTop: '20px',
    textDecoration: 'none',
    color: '#007BFF',
    fontSize: '1em',
  },
};

export default MemeCoinPage;
