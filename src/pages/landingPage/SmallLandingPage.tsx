import { useState } from 'react';
import { BulletPointCard } from '../../component/BulletPointCard/BulletPointCard';
import { Header } from '../../component/Header/Header';

export const SmallLandingPage = (): JSX.Element => {
  const [footballerBulletPoint, setFootballerBulletPoint] = useState<1 | 2 | 3>(
    1
  );
  // const [playerBulletPoint, setPlayerBulletPoint] = useState<1 | 2 | 3>(1);

  return (
    <div className='flex flex-grow flex-col'>
      <div className='h-300 flex-grow self-center '>
        <Header headerMessage='athlets' />
        {/* pic */}
        <div className='left-[70px] top-[70px] min-w-[200px]'>
          <div className='flex self-center'>
            <div className='absolute h-[179px] w-[197px]'>
              <div className='absolute flex'>
                <img
                  src={require('../../assets/PlusPurplePale.png')}
                  alt='PlusPurplePale'
                />
                <img
                  className='absolute left-3 top-3'
                  src={require('../../assets/PlusPurpleMain.png')}
                  alt='PlusPurpleMain'
                />
              </div>
              <div className='absolute top-50% h-1 w-100% rotate-135 bg-line'></div>
            </div>
            <img
              className='z-10 h-[281px] w-[200px]'
              src={require('../../assets/footballer.png')}
              alt='footballer'
            />
          </div>
        </div>
      </div>
      {/* TODO: make components and add scroll effect */}
      <div className=' flex h-300 flex-grow  flex-col bg-background-pale-purple'>
        <>
          {footballerBulletPoint === 1 && (
            <BulletPointCard
              number='01'
              heading='CONNECTION'
              body='Connect with coaches directly, you can ping coaches to view profile.'
              className={'mt-[72px]'}
            />
          )}
          {footballerBulletPoint === 2 && (
            <BulletPointCard
              // TODO: add translation file ?
              number='02'
              heading='COLLABORATION'
              body='Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.'
              className={'mt-[72px]'}
            />
          )}
          {footballerBulletPoint === 3 && (
            <BulletPointCard
              // TODO: add translation file ?
              number='03'
              heading='growth'
              body='Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc '
              className={'mt-[72px]'}
            />
          )}
        </>
        <div className='mt-auto flex h-[20px] flex-row self-center '>
          {/* <div className='relative'> */}

          {/* TODO: make these component */}
          <div
            className={`${
              footballerBulletPoint === 1 ? '!bg-background-main-purple' : ''
            } mr-[12px] h-[10px] w-[10px] cursor-pointer rounded-md bg-pale-grey`}
            onClick={() => setFootballerBulletPoint(1)}
          ></div>
          <div
            className={`${
              footballerBulletPoint === 2 ? '!bg-background-main-purple' : ''
            } mr-[12px] h-[10px] w-[10px] cursor-pointer rounded-md  bg-pale-grey`}
            onClick={() => setFootballerBulletPoint(2)}
          ></div>
          <div
            className={`${
              footballerBulletPoint === 3 ? '!bg-background-main-purple' : ''
            }  h-[10px]  w-[10px] cursor-pointer rounded-md bg-pale-grey`}
            onClick={() => setFootballerBulletPoint(3)}
          ></div>
        </div>
      </div>
      <div className='h-300 flex-grow'></div>
      <div className='h-300 flex-grow bg-background-pale-purple'></div>
    </div>
  );
};
