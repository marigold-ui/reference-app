import {Logo} from './Logo';
import {Link} from '@tanstack/react-router';


export const SiteLogo = () => (
    <Link
        className="flex items-center gap-1.5 xl:w-[--page-sub-nav-absolute-width]"
        to='/'
    >
        <Logo className="size-6" />
        <div className="hidden text-lg font-bold uppercase text-[#46505a] lg:block pl-2">
            Reference App
        </div>
    </Link>
);