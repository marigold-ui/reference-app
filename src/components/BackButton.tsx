import {useRouter} from '@tanstack/react-router';

const BackButton = () => {
    const { history } = useRouter();

    return (
        <button onClick={() => history.back()} className="bg-gray-450 mb-10 rounded-xl border-none p-4">
            &laquo; Go Back
        </button>
    );
};

export default BackButton;