import React from 'react';

const ButtonSm = ({text}) => {
      return (
            <>
                  <button className="btn btn-sm border-none bg-gradient-to-l text-slate-50 from-teal-500 via-indigo-600 to-purple-600">{text}</button>
            </>
      );
};

export default ButtonSm;