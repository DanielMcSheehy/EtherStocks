import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContractViewer.css';
import ContractViewer from './ContractViewer';

class ContractContainer extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      stockAddress: {
        'CRYP2 KITTIES':
          'https://etherscan.io/address/0xa6230691b2b1cff2f9737ccfa3ff95d580e482a0',
        BOTS:
          'https://etherscan.io/address/0xc908a34165d2720d12ffcfb6b99b47161b1c9946',
        PUPPIES:
          'https://etherscan.io/address/0x5037c9fbfccbbb8409157d72cb9579ac3d05661e',
        DRAGONS:
          'https://etherscan.io/address/0x47a03f5bf46bbc95cadd4a5311bcead23597d4e8',
        TUPLIPS:
          'https://etherscan.io/address/0x2309ec057db80fbacfd57cf7e275b096f65d1e75',
        ALPACAS:
          'https://etherscan.io/address/0x98fd6adfbf79b83f675e7214f70c98a1b7101b85',
      },
    };
  }

  render() {
    let stockView = [];
    Object.keys(this.state.stockAddress).map(function(key, index) {
      stockView.push(<ContractViewer
        stockName={key}
        contractAddress={this.state.stockAddress[key].split('https://etherscan.io/address/')[1]}
        />);
   }.bind(this));

    return (
      <div>
        {stockView}
      </div>
    );
  }
}

export default withStyles(s)(ContractContainer);
