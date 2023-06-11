import { BulletPointCard } from '../../component/BulletPointCard/BulletPointCard';
import { Header } from '../../component/Header/Header';

export const LandingPage = () => {
  return (
    <>
      <div className=''>
        {/* floating player  */}
        <div className='absolute h-[599px] w-[430px]  desktop:h-[950px]  desktop:w-[678px]'>
          <div className='absolute left-0 top-0 h-[233px] w-[209px] desktop:hidden'>
            <div className='absolute top-50% h-0.5 w-100% rotate-135 bg-line'></div>
          </div>
          <img
            className='relative -left-[8rem] top-[0.5rem] z-10 h-100% w-100% desktop:left-[7.5rem] desktop:top-0 desktop:h-60% desktop:w-60%'
            src={require('../../assets/footballer.png')}
            alt='footballer'
          />
        </div>
        <Header
          headerMessage='athlets'
          className='pl-[calc(33%)] desktop:pl-[calc(50%)]'
        />
        <BulletPointCard
          number='01'
          heading='CONNECTION'
          body='Connect with coaches directly, you can ping coaches to view profile.'
          className={'mt-[42px] pl-[calc(33%)] desktop:pl-[calc(50%)]'}
        />
        <BulletPointCard
          number='02'
          heading='COLLABORATION'
          body='Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.'
          className={
            'mt-[30px] bg-background-pale-purple  py-6 pl-[calc(33%)] desktop:pl-[calc(50%)]'
          }
        />
        <BulletPointCard
          number='03'
          heading='growth'
          body='Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc '
          className={
            ' bg-background-main-purple py-6 pl-[calc(33%)] desktop:pl-[calc(50%)] '
          }
          darkColorBackground
        />
      </div>

      <div className=''>
        {/* floating player #2 */}
        <div className='absolute right-0 h-[525px] w-[480px]  desktop:h-[815px] desktop:w-[991px]'>
          <div className='z-100 absolute flex desktop:hidden'>
            <img
              src={require('../../assets/PlusPurplePale.png')}
              alt='PlusPurplePale'
              className='ml-[15rem] mt-[4rem]'
            />
            <img
              className='absolute left-[14rem] top-[3rem]'
              src={require('../../assets/PlusPurpleMain.png')}
              alt='PlusPurpleMain'
            />
          </div>
          <div className='absolute bottom-[96px] left-[200px] h-[178px] w-[207px] desktop:hidden'>
            <div className='absolute top-50% h-0.5 w-100% rotate-135 bg-line'></div>
          </div>
          <img
            className='relative -right-[8rem] top-[0.5rem] z-10 h-100% w-100% desktop:-right-[12rem] desktop:top-[-2.5rem] desktop:h-60% desktop:w-60%'
            src={require('../../assets/player.png')}
            alt='player'
          />
        </div>
        <div className='w-[489px absolute h-[699px]'>
          <img src='' alt='' />
        </div>
        <Header headerMessage='players' className='ml-[31px] mt-[51px]' />
        <BulletPointCard
          number='01'
          heading='CONNECTION'
          body='Connect with talented athlete directly, you can watch their 
              skills through video showreels directly from Surface 1.'
          className={
            'mt-[39px] pb-[51px] pl-[31px] pr-[calc(33%)] desktop:pr-[calc(50%)]'
          }
        />
        <BulletPointCard
          // TODO: add translation file ?
          number='02'
          heading='COLLABORATION'
          body='Work with recruiter to increase your chances of finding
              talented athlete.'
          className={
            'bg-background-pale-purple pb-[65px] pl-[31px] pr-[calc(33%)] desktop:pr-[calc(50%)]'
          }
        />
        <BulletPointCard
          // TODO: add translation file ?
          number='03'
          heading='growth'
          body='Work with recruiter to increase your chances of finding
              talented athlete '
          className={
            'bg-dark-blue py-[44px] pl-[31px] pr-[calc(33%)] desktop:pr-[calc(50%)]'
          }
          darkColorBackground
        />
      </div>
    </>
  );
};
