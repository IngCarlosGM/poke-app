function _ShowIcon({ isLight }) {
  return (
    <svg
      enableBackground='new 0 0 32 32'
      id='Editable-line'
      version='1.1'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      height={20}
    >
      <path
        d='  M16,7C9.934,7,4.798,10.776,3,16c1.798,5.224,6.934,9,13,9s11.202-3.776,13-9C27.202,10.776,22.066,7,16,7z'
        fill='none'
        id='XMLID_10_'
        stroke={isLight ? '#F3FDFB' : '#080E2C'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='2'
      />
      <circle
        cx='16'
        cy='16'
        fill='none'
        id='XMLID_12_'
        r='5'
        stroke={isLight ? '#F3FDFB' : '#080E2C'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='2'
      />
    </svg>
  );
}

export default _ShowIcon;
