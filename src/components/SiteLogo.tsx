import {Logo} from './Logo';
import {Link} from '@tanstack/react-router';


export const SiteLogo = () => (
    <Link
        className="flex items-center gap-1.5 xl:w-[--page-sub-nav-absolute-width]"
        to='/'
    >
        <Logo className="size-6" />
        <div className="hidden pl-2 text-lg font-bold uppercase text-[#46505a] lg:block">
            Reference App
        </div>
    </Link>
);