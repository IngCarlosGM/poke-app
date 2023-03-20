/** @jsxImportSource @emotion/react */

import tw from 'twin.macro';
import { createPortal } from 'react-dom';

function Loading(): JSX.Element {
  return createPortal(
    <div
      css={[
        tw`bg-fourth bg-opacity-40 top-0 fixed h-screen w-screen z-50 grid place-content-center`,
      ]}
    >
      <svg
        width='48'
        height='48'
        viewBox='0 0 48 48'
        xmlns='http://www.w3.org/2000/svg'
        stroke='white'
      >
        <g fill='none' fillRule='evenodd'>
          <g transform='translate(1 1)' strokeWidth='3'>
            <circle strokeOpacity='.5' cx='18' cy='18' r='18' />
            <path d='M36 18c0-9.94-8.06-18-18-18'>
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='0 18 18'
                to='360 18 18'
                dur='1s'
                repeatCount='indefinite'
              />
            </path>
          </g>
        </g>
      </svg>
    </div>,
    document.body
  );
}

export default Loading;
