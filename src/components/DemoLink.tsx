import {Link} from '@tanstack/react-router';

const DemoLink = ({ destination, text = 'View demo'}: {destination: string,  text?: string}) => {
  return (
    <div className="pb-2">
      <Link target="_blank" to={destination} search="">
        {text}
      </Link>
    </div>
  );
}

export default DemoLink;