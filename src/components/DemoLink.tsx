import { Link } from '@tanstack/react-router';
import { ExternalLink } from '@marigold/icons';
import { Button } from '@marigold/components';

const DemoLink = ({
  destination,
  text = 'View demo',
}: {
  destination: string;
  text?: string;
}) => {
  return (
    <div className="w-fit">
      <Link target="_blank" to={destination} search="">
        <Button className="flex-1 cursor-pointer rounded-md bg-white p-4 font-black text-gray-800 hover:bg-gray-300">
          {text}
          <ExternalLink size={20} />
        </Button>
      </Link>
    </div>
  );
};

export default DemoLink;
