import * as React from 'react';

export const Sun = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 19"
      {...props}
    >
      <path
        d="M10 15.635c.33 0 .612.295.612.639v1.89c0 .344-.282.638-.612.638s-.612-.294-.612-.638v-1.89c0-.344.282-.639.612-.639zm-4.488-1.783c.27.262.27.68 0 .941L4.03 16.231a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.7-.261.97 0zm9.946 0l1.483 1.438c.27.261.27.68 0 .941a.698.698 0 01-.97 0l-1.483-1.438a.649.649 0 010-.94c.242-.262.674-.262.97 0zM10 4.552c1.396 0 2.685.525 3.598 1.4.913.85 1.504 2.05 1.504 3.35 0 1.3-.59 2.5-1.504 3.35a5.314 5.314 0 01-3.598 1.4c-1.396 0-2.685-.525-3.598-1.4-.913-.85-1.504-2.05-1.504-3.35 0-1.3.564-2.5 1.504-3.35A5.314 5.314 0 0110 4.552zM2.607 8.906c.355 0 .658.274.658.594 0 .32-.303.594-.658.594H.658C.304 10.094 0 9.82 0 9.5c0-.32.304-.594.658-.594h1.95zm16.735 0c.354 0 .658.274.658.594 0 .32-.304.594-.658.594h-1.95c-.354 0-.657-.274-.657-.594 0-.32.303-.594.658-.594h1.949zM4.03 2.77l1.482 1.438c.27.261.27.68 0 .94-.242.262-.674.262-.97 0L3.059 3.71a.649.649 0 010-.941c.27-.261.701-.261.97 0zm12.91 0c.27.261.27.68 0 .941l-1.482 1.438a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.701-.261.97 0zM10 .198c.33 0 .612.294.612.638v1.89c0 .344-.282.639-.612.639s-.612-.295-.612-.639V.836c0-.344.282-.638.612-.638z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
);

export const Moon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        {...props}
    >
       <path 
            d="M19.502 11.342a.703.703 0 00-.588.128 7.499 7.499 0 01-2.275 1.33 7.123 7.123 0 01-2.581.46A7.516 7.516 0 018.74 11.06a7.516 7.516 0 01-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 00-.102-.92.703.703 0 00-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 000 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 007.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 003.579-5.597.62.62 0 00-.46-.793z" 
            fill="#7E88C3" 
            fillRule="nonzero"
       /> 
    </svg>
);

export const ArrowDown = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 11 7"
        {...props}
    >
       <path 
            d="M1 1l4.228 4.228L9.456 1" 
            stroke="#7C5DFA" 
            strokeWidth="2" 
            fill="none" 
            fillRule="evenodd"
       /> 
    </svg>
);

export const ArrowLeft = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7 10"
        {...props}
    >
       <path 
            d="M6.342.886L2.114 5.114l4.228 4.228" 
            stroke="#9277FF" 
            strokeWidth="2" 
            fill="none" 
            fillRule="evenodd"
       />
    </svg>
);
  
export const ArrowRight = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7 10"
        {...props}
    >
       <path 
            d="M1 1l4 4-4 4" 
            stroke="#7C5DFA" 
            strokeWidth="2" 
            fill="none" 
            fillRule="evenodd"
       />
    </svg>
);

export const Calendar = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        {...props}
    >
       <path 
            d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z" 
            fill="#7E88C3" 
            fillRule="nonzero" 
            opacity=".5"
       />
    </svg>
);

export const Check = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 8"
        {...props}
    >
       <path 
            d="M1.5 4.5l2.124 2.124L8.97 1.28" 
            stroke="#FFF" 
            strokeWidth="2" 
            fill="none" 
            fillRule="evenodd"
       />
    </svg>
);

export const Delete = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13 16"
        {...props}
    >
       <path 
            d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" 
            fill="#888EB0" 
            fillRule="nonzero"
       />
    </svg>
);

export const Plus = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 11 11"
        {...props}
    >
       <path 
            d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" 
            fill="#7C5DFA" 
            fillRule="nonzero"
       />
    </svg>
);

export const Logo = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 26"
        {...props}
    >
       <path 
            fill="#FFF" 
            fillRule="evenodd" 
            d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
       />
    </svg>
);
