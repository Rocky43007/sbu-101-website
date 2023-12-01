import VercelLogo from './VercelLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container px-4 mx-auto flex flex-wrap items-center lg:justify-between justify-center">
        <div className='text-md'>
          &copy; <a className="hover:text-blue-500" href='https://rocky43007.vercel.app' target='_blank' rel='noopener noreferer'>
            Arnab Chakraborty
          </a> & Dilsad Mahzabin 2023
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/your-github-repo" target="_blank" rel="noopener noreferrer" className="text-md text-blue-400 hover:text-blue-500">
            Check out the source on Github
          </a>
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="flex text-md lg:flex-row flex-col hover:text-blue-500">
            Powered by
            <div className="flex items-center justify-center px-1">
              <VercelLogo width={15} height={15} />
              <span className="ml-1">Vercel</span>
            </div>
          </a>
        </div>
      </div >
    </footer >
  );
};

export default Footer;