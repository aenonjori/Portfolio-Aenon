import React from 'react';

const Title = (props) => {
  return (
      <div className='flex flex-col gap-4 font-titleFont mb-14'>
          <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>
              {props.title}
          </h3>
      </div>
  )
}

export default Title;