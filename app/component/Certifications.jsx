import React from 'react'

const Certifications = ({data}) => {
    const {cert,certinfo} = data;
    return (
      <section>
          <h2 className='mb-6'>{cert}</h2>
          <div className='flex flex-col gap-6'>
              {certinfo.map(({place,description,current})=>(
              <div key={place} className='flex flex-col rounded-lg'>
                  <span className={`h-2 ${current ? "bg-BabyBlue" : "bg-grey"}` }/>
                  <div className='bg-grey-light p-6 drop-shadow-md'>
                      <h4>{place}</h4>
                      <p className="mt-2">{description}</p>
                      
                  
                  
                  </div>
              </div>
              ))}
          </div>
      </section>
    )
}

export default Certifications
