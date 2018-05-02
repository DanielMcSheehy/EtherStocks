import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContractViewer.css';
import ContractViewer from './ContractViewer';
import DayTraderContainer from '../../components/DayTraderContainer';
import NightTrader from '../../components/NightTrader';

class ContractContainer extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      stockDataArr: {},
      shareCount: 0,
      netWorth: 0,
      ETH_CONVERSION_RATE: 400,
      featuredStockAddress: {
        'CRYP2 KITTIES':
          'https://etherscan.io/address/0xa6230691b2b1cff2f9737ccfa3ff95d580e482a0',
        'Chibi Fighters':
          'https://etherscan.io/address/0xf39729a98d936199c8260af86018ebf21ed8f846',
        'WAMPUM':
          'https://etherscan.io/address/0xa9e20fdd18c792f302e273b09aa142984f25ea64',
        'BOTS':
          'https://etherscan.io/address/0xc908a34165d2720d12ffcfb6b99b47161b1c9946',
        'TULIPS':
          'https://etherscan.io/address/0x2309ec057db80fbacfd57cf7e275b096f65d1e75',
        'EtherGoo':
          'https://etherscan.io/address/0xc6b5756b2ac3c4c3176ca4b768ae2689ff8b9cee',
      },
      nonFeaturedStockAddress: {
        KARMA:
          'https://etherscan.io/address/0x344b603d852143dd9b7d6d95a92df77061486765',
        'COMMODOR 64':
          'https://etherscan.io/address/0xea788fc8313c3c84810489cd7724f3251da624a3',
        'REISHI':
          'https://etherscan.io/address/0xfc8decea972435b89be675996b6bf825aad06f9d',
        'FISH':
          'https://etherscan.io/address/0x237d43f6218c4e5680119c0be95aaa6e19f50528',
        'MICRO DOSE':
          'https://etherscan.io/address/0xc9179478a6605f78365f3c8c4c216b995a245008',
        'OIL':
          'https://etherscan.io/address/0xc83caf102846bcce72c81a1d22d981756efadd31',
        'AYAHUASCA':
          'https://etherscan.io/address/0x5ac108d7b48979f261cf57ed7f9df95f8cb56865',
        'COCOA':
          'https://etherscan.io/address/0xfdfcfa5dce03a67fde31d674784312bed25f0b90',
        'PUPPIES':
          'https://etherscan.io/address/0x5037c9fbfccbbb8409157d72cb9579ac3d05661e',
        'DRAGONS':
          'https://etherscan.io/address/0x47a03f5bf46bbc95cadd4a5311bcead23597d4e8',
        'CORN':
          'https://etherscan.io/address/0xda9018d28bc96f4509645fbc28e872c7d678931d',
        'DRAGONS':
          'https://etherscan.io/address/0x47a03f5bf46bbc95cadd4a5311bcead23597d4e8',
        'COTTON':
          'https://etherscan.io/address/0x8c9ae207ee452c1a94e0653e5db1c7b4de7d76c2',
        'ALPACAS':
          'https://etherscan.io/address/0x98fd6adfbf79b83f675e7214f70c98a1b7101b85',
        'TEARS':
          'https://etherscan.io/address/0x443013c1557b329d97c2983461a441d33791a31e',
        'SHILLS':
          'https://etherscan.io/address/0x9058b302c785e4b136f13c35ddb3e9a2f9bfe4aa',
        'MEMES':
          'https://etherscan.io/address/0x2914101a152f4d65177949adb99794dee14f308e',
        'SNAKE DNA':
          'https://etherscan.io/address/0xe1a1ee035cff3a830bc236ff01cbee0c65ce4c25',
        'DIAMOND':
          'https://etherscan.io/address/0xfd7107eec2f21f69d75d0d7479a7ff9de477e5c9',
        'COBALT':
          'https://etherscan.io/address/0xe0af40d534685f46718d07cdee8f2d78af9916dd',
        'SALT':
          'https://etherscan.io/address/0xd086d846758613f3640b9396e759cdb92f5e7592',
        'APPLE 2e':
          'https://etherscan.io/address/0x4a3a469f39360f48a92e829e61757ab39bdf0d8f',
        'COPPER':
          'https://etherscan.io/address/0x3854962ad8861f44fc617171ddb91eb5c3f1782a',
        '420 IND.':
          'https://etherscan.io/address/0xce3632ecb106ec5f2cbfb49c89a118058737b5a5',
        'FOREST':
          'https://etherscan.io/address/0x1ab8c9fc5f3b9ec59216777cc4514ab2a0a96d55',
        'SILVER':
          'https://etherscan.io/address/0x029d0650c81817afb1810ae10270823318321878',
        'EGYPT GOLD':
          'https://etherscan.io/address/0x2Fa0ac498D01632f959D3C18E38f4390B005e200',
      },
    };
    this.scrollToFAQ = this.scrollToFAQ.bind(this);
  }

  componentDidMount() {
    fetch(`https://api.coinmarketcap.com/v1/ticker/ethereum/`)
      .then(response => response.json())
      .catch(error => console.error('Error with eth api', error))
      .then(response => {
        this.setState({ ETH_CONVERSION_RATE: response[0].price_usd });
      });

    setTimeout(() => {
      const containerObj = [];
      const nameArr = document.querySelectorAll('.stockContainer .stockName');
      const sharesArr = document.querySelectorAll('.stockContainer .shares');
      const stockArr = document.querySelectorAll('.stockContainer .stockPrice');
      const divArr = document.querySelectorAll(
        '.stockContainer .stockDividends',
      );

      for (let i = 0; i <= nameArr.length - 1; i++) {
        const obj = {
          stockName: nameArr[i].innerText,
          shares: parseFloat(sharesArr[i].innerText.match(/[-.0-9]+/)[0]),
          price: stockArr[i].innerText.match(/[-.0-9]+/)[0],
          dividends: parseFloat(divArr[i].innerText.match(/[-.0-9]+/)[0]),
        };

        fetch(`http://18.188.127.109:4000/stock/${obj.stockName}/${obj.price}`)
          .then(response => response.json())
          .catch(error => console.error('Error with server fetch:', error))
          .then(myJson => {
            // console.log(myJson);
          });

        containerObj.push(obj);
        this.setState({ shareCount: this.state.shareCount + obj.shares });
        this.setState({
          netWorth:
            this.state.netWorth +
            obj.shares * (obj.price * 0.79) +
            obj.dividends,
        });
      }
    }, 1000);
  }

  scrollToFAQ() {
    const element = document.getElementById('test');
    element.scrollIntoView();
  }

  render() {
    const left = {
      width: '45%',
      float: 'right',
    };

    const FeaturedstockView = [];
    Object.keys(this.state.featuredStockAddress).map((key, index) => {
      FeaturedstockView.push(
        <ContractViewer
          stockName={key}
          contractAddress={
            this.state.featuredStockAddress[key].split(
              'https://etherscan.io/address/',
            )[1]
          }
        />,
      );
    });
    const nonFeaturedstockView = [];

    Object.keys(this.state.nonFeaturedStockAddress).map((key, index) => {
      nonFeaturedstockView.push(
        <ContractViewer
          stockName={key}
          contractAddress={
            this.state.nonFeaturedStockAddress[key].split(
              'https://etherscan.io/address/',
            )[1]
          }
        />,
      );
    });

    const featuredStyle = {
      marginLeft: '0%',
    };

    const netWorth = parseFloat(this.state.netWorth).toFixed(3);
    const shareCount = parseFloat(this.state.shareCount).toFixed(1);
    const dollarNetWorth = parseFloat(
      netWorth * this.state.ETH_CONVERSION_RATE,
    ).toFixed(2);
    return (
      <div>
        <div className={s.bar}>
          <div className={s.innerText}>
            Portfolio value: <span className={s.greenText}>{netWorth} ETH</span>
            <span className={s.spacer}>
              Total Shares: <span className={s.greenText}>{shareCount}</span>
            </span>
            <span className={s.spacer}>
              USD: <span className={s.greenText}>${dollarNetWorth}</span>
            </span>
            <span onClick={this.scrollToFAQ} className={s.howToPlay}>
              How to Play
            </span>
          </div>
        </div>
        <h1 style={{ marginLeft: '44%' }}>Featured</h1>
        <hr style={{ marginLeft: '6%', width: '85%' }} />

        <div className={s.featuredStocks}>{FeaturedstockView}</div>
        <div className={s.wrapper}>
          <div className={s.traderWrap} id="left">
            <div className={s.traderTitle}>Night Trader</div>
            <p className={s.NightTraderInfo}>
              Like the day trader except a percentage of every purchase goes
              into a jackpot, and with every buy the timer resets to 6 hours.
              The last one to buy when clock runs out wins 70% of jackpot, the
              rest will be used to start a new jackpot, and the devs will put
              their share into pumping the stock associated with the winning bid
              (usually in about 24hrs, so get in before them and make some
              dividends!)
            </p>
            <hr style={{ marginLeft: '30%', width: '40%' }} />
            <NightTrader />
          </div>
          <div className={s.traderWrap} id="right">
            <div className={s.traderTitle}>Day Trader</div>
            <p className={s.DayTraderInfo}>
              Price Resets after 24 hours of no purchases. This is a high risk,
              high reward game of hot potato, buy a meaningless asset and hope
              someone else buys it from you for 1.5, or 2x the price. With every
              purchase the clock resets to 24hrs, but when the clock runs out
              the fairy tale ends, and the price goes back to 0.005. Not for the
              faint of heart! (fees will be used to promote and pump the real,
              fake stocks){' '}
            </p>
            <hr style={{ marginLeft: '30%', width: '40%' }} />
            <DayTraderContainer />
          </div>
        </div>

        <div style={{ marginTop: '0%', clear: 'left', clear: 'right' }}>
          <h1
            style={{
              marginTop: '0%',
              marginLeft: '40%',
              paddingTop: '4%',
              clear: 'left',
              clear: 'right',
            }}
          >
            Current Stocks
          </h1>
          <hr style={{ marginLeft: '4%', width: '90%' }} />
          <div style={featuredStyle}>{nonFeaturedstockView}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ContractContainer);
