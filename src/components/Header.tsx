import {SiteLogo} from './SiteLogo';

function Header() {
  return (
      <header className="border-gray-300 bg-white sticky top-0 z-10 flex h-[--page-header-height] w-full items-center gap-2 border-b border-solid border-0 px-[--page-padding] md:px-[--page-padding-md] xl:px-[--page-padding-xl]">
        <div className="hidden gap-6 md:flex md:flex-1">
          <SiteLogo />
        </div>
      </header>
  )
}

export default Header;