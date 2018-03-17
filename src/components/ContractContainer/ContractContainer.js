import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContractViewer.css';
import ContractViewer from './ContractViewer';

class ContractContainer extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      featuredStockAddress: {
        'CRYP2 KITTIES':
          'https://etherscan.io/address/0xa6230691b2b1cff2f9737ccfa3ff95d580e482a0',
        'PLATINUM':
          'https://etherscan.io/address/0xf39729a98d936199c8260af86018ebf21ed8f846',
        'WAMPUM':
          'https://etherscan.io/address/0xa9e20fdd18c792f302e273b09aa142984f25ea64',
        BOTS:
          'https://etherscan.io/address/0xc908a34165d2720d12ffcfb6b99b47161b1c9946',
        TUPLIPS:
          'https://etherscan.io/address/0x2309ec057db80fbacfd57cf7e275b096f65d1e75',
        ALPACAS:
          'https://etherscan.io/address/0x98fd6adfbf79b83f675e7214f70c98a1b7101b85',
      },
      nonFeaturedStockAddress: {
      'KARMA':
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
      PUPPIES:
          'https://etherscan.io/address/0x5037c9fbfccbbb8409157d72cb9579ac3d05661e',
      DRAGONS:
          'https://etherscan.io/address/0x47a03f5bf46bbc95cadd4a5311bcead23597d4e8',
      'CORN':
          'https://etherscan.io/address/0xda9018d28bc96f4509645fbc28e872c7d678931d',
      'DRAGONS':
          'https://etherscan.io/address/0x47a03f5bf46bbc95cadd4a5311bcead23597d4e8',
      'COFFEE':    
          'https://etherscan.io/address/0xc6b5756b2ac3c4c3176ca4b768ae2689ff8b9cee',
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
      'FORREST':
          'https://etherscan.io/address/0x1ab8c9fc5f3b9ec59216777cc4514ab2a0a96d55',
      'SILVER':
          'https://etherscan.io/address/0x029d0650c81817afb1810ae10270823318321878',
      'EGYPT GOLD':
        'https://etherscan.io/address/0x2Fa0ac498D01632f959D3C18E38f4390B005e200',
      },
    };
  }

  render() {
    var outerWrapper = {
     clear: 'left',
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
    let nonFeaturedstockView = [];
    
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
    return( 
      <div>
        {FeaturedstockView}
        <div style={outerWrapper}>
          <br />
          <h1 style={{ marginLeft: '40%' }}>Current Stocks</h1>
          <hr style={{ marginLeft: '4%', width: '90%' }}></hr>
          {nonFeaturedstockView}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ContractContainer);
