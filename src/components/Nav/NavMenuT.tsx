import brandLogo from '../../assets/brand.png';

export function NavMenuT() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#0471A6] p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* <img src={brandLogo} alt="Foto da Logo" className="fill-current h-8 w-8 mr-2" width="54" height="54" /> */}
        <span className="font-semibold text-xl tracking-tight">Knowledge</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Docs
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Examples
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Blog
          </a>
        </div>

        <div className="group flex items-center">
          <img className="shrink-0 h-12 w-12 rounded-full" src="https://www.github.com/pedrojorge148.png" alt="" />
          <div className="ltr:ml-3 rtl:mr-3 px-2">
            <p className="text-sm font-medium text-slate-100 group-hover:text-white">Pedro Jorge</p>
            <p className="text-sm font-medium text-slate-300 group-hover:text-slate-300">Administrador</p>
          </div>
        </div>

        {/* <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
        </div> */}
      </div>
    </nav>
  );
}