import { Header } from './component/Header/Header';

function App() {
  return (
    <div className='flex'>
      <div className='flex h-300 flex-grow flex-col'>
        <Header headerMessage='athlets' />

        <div className='absolute left-[70px] top-[70px]'>
          <div className='flex self-center'>
            <div className='absolute h-[179px] w-[197px]'>
              <div className='absolute flex'>
                <img
                  src={require('./assets/PlusPurplePale.png')}
                  alt='PlusPurplePale'
                />
                <img
                  className='absolute left-3 top-3'
                  src={require('./assets/PlusPurpleMain.png')}
                  alt='PlusPurpleMain'
                />
              </div>
              <div className='absolute top-50% h-1 w-100% rotate-135 bg-line'></div>
            </div>
            <img
              className='z-10 h-[281px] w-[200px]'
              src={require('./assets/footballer.png')}
              alt='footballer'
            />
          </div>
        </div>
      </div>
      <div className=''></div>
      <div className=''></div>
      <div className=''></div>
    </div>
  );
}

export default App;
