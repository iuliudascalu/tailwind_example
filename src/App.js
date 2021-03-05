import React, {useState} from "react";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
      <div className={`${darkMode ? 'dark' : ''}`}>
        <header className='dark:bg-secondary bg-white flex items-center justify-center text-center py-6 shadow sticky top-0 z-10'>
          <label htmlFor='switch' className='dark:text-white text-primary font-bold mr-3 cursor-pointer select-none'>Toggle dark mode</label>
          <input type="checkbox" className='switch' onChange={() => setDarkMode(!darkMode)} id='switch' />
        </header>
        <section className='dark:bg-secondary-dark bg-primary-light py-6'>
          <div className="container">
            <div className="row items-center">
              <div className='md:w-2/4 px-4'>
                <p className='dark:text-gray-300 text-sm mb-3 text-gray-600'>Lorem ipsum dolor sit amet.</p>
                <h1 className='dark:text-white mb-6 md:mb-0 text-5xl md:text-7xl font-bold text-primary-dark'>Tailwind CSS</h1>
              </div>
              <div className='md:w-2/4 px-4'>
                <img src="https://themexriver.com/appilo-theme/app-landing-6/wp-content/uploads/sites/36/2020/11/mob2.png" alt="" className='max-w-full' />
              </div>
            </div>
          </div>
        </section>
        {/*section numbers*/}
        <section className="dark:bg-secondary-dark bg-primary-lighter">
          <div className="container dark:bg-secondary-light bg-white transform md:-translate-y-2/4">
            <div className="row py-10 shadow-lg">
              <div className='font-bold text-primary w-2/4 md:w-1/4 text-center mb-4 md:mb-0 px-4 dark:text-white'>
                <h3 className='text-3xl'>264k+</h3>
                <strong>Active users</strong>
              </div>
              <div className='font-bold text-primary w-2/4 md:w-1/4 text-center mb-4 md:mb-0 px-4 dark:text-white'>
                <h3 className='text-3xl'>264k+</h3>
                <strong>Active users</strong>
              </div>
              <div className='font-bold text-primary w-2/4 md:w-1/4 text-center px-4 dark:text-white'>
                <h3 className='text-3xl'>264k+</h3>
                <strong>Active users</strong>
              </div>
              <div className='font-bold text-primary w-2/4 md:w-1/4 text-center px-4 dark:text-white'>
                <h3 className='text-3xl'>264k+</h3>
                <strong>Active users</strong>
              </div>
            </div>
          </div>
        </section>
        {/*section content*/}
        <section className="dark:bg-secondary-dark bg-primary-lighter py-8">
          <div className="container">
            <div className="row items-center">
              <div className='md:w-2/4 px-4'>
                <h3 className='dark:text-white text-4xl mb-5 font-semibold text-primary-dark'>Lorem ipsum dolor sit amet, consectetur.</h3>
                <p className='dark:text-gray-300 text-gray-600 text-md mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda laboriosam officiis
                  reprehenderit!</p>
                <ul>
                  <li className='flex mb-6 items-center'>
                    <div className='w-14 h-14 flex-shrink-0 bg-white shadow-lg rounded-full flex items-center justify-center mr-5 font-bold text-primary dark:bg-secondary-light dark:text-white'>01</div>
                    <div>
                      <h5 className='text-xl font-bold text-primary-dark dark:text-white'>Load balancers</h5>
                      <p className='dark:text-gray-300 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eos?</p>
                    </div>
                  </li>
                  <li className='flex mb-6'>
                    <div className='w-14 h-14 flex-shrink-0 bg-white shadow-lg rounded-full flex items-center justify-center mr-5 font-bold text-primary dark:bg-secondary-light dark:text-white'>02</div>
                    <div>
                      <h5 className='text-xl font-bold text-primary-dark dark:text-white'>Load balancers</h5>
                      <p className='dark:text-gray-300 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eos?</p>
                    </div>
                  </li>
                  <li className='flex'>
                    <div className='w-14 h-14 flex-shrink-0 bg-white shadow-lg rounded-full flex items-center justify-center mr-5 font-bold text-primary dark:bg-secondary-light dark:text-white'>03</div>
                    <div>
                      <h5 className='text-xl font-bold text-primary-dark dark:text-white'>Load balancers</h5>
                      <p className='dark:text-gray-300 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, eos?</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='md:w-2/4 px-4'>
                <img src="https://themexriver.com/appilo-theme/app-landing-6/wp-content/uploads/sites/36/2020/11/process.png" alt="" className='max-w-full mt-2 md:mt-0' />
              </div>
            </div>
          </div>
        </section>
        {/*pricing plans*/}
        <section className='dark:bg-secondary-dark'>
          <div className='container py-8'>
            <div className="row mb-10">
              <h2 className='dark:text-white text-primary-dark text-center w-full mb-5 font-semibold text-5xl'>Pricing plan</h2>
            </div>
            <div className="row">
              <div className="w-full md:w-1/3 mb-6 md:mb-0 px-4">
                <div className='shadow dark:bg-secondary-light group'>
                  <div className='dark:bg-secondary-light p-6 text-center text-white font-medium bg-primary rounded-tl rounded-tr text-3xl'>
                    Personal
                  </div>
                  <div className='py-10 px-5 text-center'>
                    <div className='mb-10'>
                      <span className='dark:text-gray-300 text-lg mr-1 font-semibold'>$</span>
                      <span className='dark:text-white text-5xl text-primary font-semibold'>140</span>
                    </div>
                    <ul className='text-lg dark:text-gray-300 text-gray-600'>
                      <li className='mb-2'>Ultimate features</li>
                      <li className='mb-2'>Responsive Ready</li>
                      <li className='mb-12'>24/7 Support System</li>
                      <li className='mb-6'>
                        <a
                          href="#"
                          className='transition-all ease-in dark:group-hover:bg-secondary dark:hover:bg-secondary group-hover:bg-primary group-hover:text-white hover:bg-primary hover:text-white inline-block py-3 px-6 font-semibold border dark:border-secondary border-primary'
                        >Buy now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0 px-4">
                <div className='shadow dark:bg-secondary-light group'>
                  <div className='dark:bg-secondary-light p-6 text-center text-white font-medium bg-primary rounded-tl rounded-tr text-3xl'>
                    Personal
                  </div>
                  <div className='py-10 px-5 text-center'>
                    <div className='mb-10'>
                      <span className='dark:text-gray-300 text-lg mr-1 font-semibold'>$</span>
                      <span className='dark:text-white text-5xl text-primary font-semibold'>140</span>
                    </div>
                    <ul className='text-lg dark:text-gray-300 text-gray-600'>
                      <li className='mb-2'>Ultimate features</li>
                      <li className='mb-2'>Responsive Ready</li>
                      <li className='mb-12'>24/7 Support System</li>
                      <li className='mb-6'>
                        <a
                          href="#"
                          className='transition-all ease-in dark:group-hover:bg-secondary dark:hover:bg-secondary group-hover:bg-primary group-hover:text-white hover:bg-primary hover:text-white inline-block py-3 px-6 font-semibold border dark:border-secondary border-primary'
                        >Buy now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4">
                <div className='shadow dark:bg-secondary-light group'>
                  <div className='dark:bg-secondary-light p-6 text-center text-white font-medium bg-primary rounded-tl rounded-tr text-3xl'>
                    Personal
                  </div>
                  <div className='py-10 px-5 text-center'>
                    <div className='mb-10'>
                      <span className='dark:text-gray-300 text-lg mr-1 font-semibold'>$</span>
                      <span className='dark:text-white text-5xl text-primary font-semibold'>140</span>
                    </div>
                    <ul className='text-lg dark:text-gray-300 text-gray-600'>
                      <li className='mb-2'>Ultimate features</li>
                      <li className='mb-2'>Responsive Ready</li>
                      <li className='mb-12'>24/7 Support System</li>
                      <li className='mb-6'>
                        <a
                          href="#"
                          className='transition-all ease-in dark:group-hover:bg-secondary dark:hover:bg-secondary group-hover:bg-primary group-hover:text-white hover:bg-primary hover:text-white inline-block py-3 px-6 font-semibold border dark:border-secondary border-primary'
                        >Buy now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default App;
