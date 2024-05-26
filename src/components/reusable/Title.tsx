import * as React from 'react';

interface ITitleProps {
    firstTitle?:string;
    secondTitle?:string;
}

const Title: React.FunctionComponent<ITitleProps> = ({firstTitle,secondTitle}) => {
  return <>
      <div className="mb-12 text-center">
          <h3 className="text-coral-400 font-semibold">{firstTitle}</h3>
          <h2 className="text-4xl font-bold text-gray-900">{secondTitle}</h2>
      </div>
  </>;
};

export default Title;
