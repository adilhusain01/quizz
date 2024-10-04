import { useContext } from 'react'
import { WalletContext } from '../context/WalletContext';

import Logo from '../assets/logo.png'

const Header = () => {
const { walletAddress, connectWallet } = useContext(WalletContext);

const truncateAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 4)}...${address.slice(-4)}`;  // Show first 6 and last 4 characters
};

  return (
    <nav className='px-[2.5rem] h-[5rem] flex flex-row items-center justify-between text-white bg-indigo'>
        <span className='flex flex-row items-center justify-center gap-[0.25rem]'>
          <img src={Logo} alt="" className='h-auto w-full max-w-[5rem] object-cover'/>
          <h1 className='text-[2.25rem]'>Quizzz</h1>
        </span>
        <button
        onClick={connectWallet}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {walletAddress ? `Connected: ${truncateAddress(walletAddress)}` : 'Connect Wallet'}
      </button>
    </nav>
  )
}

export default Header
