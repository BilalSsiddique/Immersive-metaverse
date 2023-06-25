
const Header = () => {
  return (
    <div className="px-8 py-8 mx-auto  md:max-w-[112rem]   xl:px-8">
      <div className="relative border border-gray-50 border-opacity-20 px-2  gap-2 flex justify-between">
          {/* Logo */}
          <div className="flex ">
              <img src="/logo.svg" alt="" width={74} height={74} />
              <img className="sm:w-[100px] lg:w-[120px] xl:w-[70px] 2xl:w-[120px]" src="/bar1.png" alt="" width={40} height={0} />
              <img className="sm:w-[300px] lg:w-[600px] xl:w-[250px] 2xl:w-[350px]" src="/bar2.png" alt="" width={150} height={800} />
          </div>
          <ul className=" hidden gap-2 xl:flex">

          <div className="relative flex items-center border-r border-gray-50 border-opacity-20 justify-center">
              <p className="absolute bottom-0 left-0 opacity-50">001</p>
              <a className="text-center px-24 text-sm" href={'#'}>ABOUT</a>
          </div>
                <div className="relative flex items-center border-r  border-gray-50 border-opacity-20   justify-center ">
                  <p className="absolute bottom-0 left-0 opacity-50">002</p>
                  <a  className='text-center px-12' href={'#'}>
                    <span>
                      <img src="/discord.svg" alt=""  width={40} height={33}/>
                    </span>
                  </a>
                </div>

                <div className="relative flex items-center border-r  border-gray-50 border-opacity-20   justify-center ">
                  <p className="absolute bottom-0 left-0 opacity-50">003</p>
                  <a  className='text-center px-12' href={'#'}>
                    <span>
                      <img src="/twitter.svg" alt=""  width={40} height={33}/>
                    </span>
                  </a>
                </div>

                <div className="relative flex items-center border-r  border-gray-50 border-opacity-20   justify-center ">
                  <p className="absolute bottom-0 left-0 opacity-50">004</p>
                  <a  className='text-center px-12 text-sm' href={'#'}>LAUNCH ULTIVERSE</a>
                </div>     
          </ul>
                {/* Icon */}
                <img src="/menu.svg" alt="" width={50} height={50} />
                
                
      </div>
    </div>
  )
}

export default Header