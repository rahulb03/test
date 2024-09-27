import React from 'react'
import Wrapper from '@/src/layout/wrapper'
import Project from '@/src/components/projects'
import SEO from '@/src/common/seo'

const index = () => {
  return (
    <>

<Wrapper>
            <SEO pageTitle={"Projects"} />
            {/* <About /> */}
                 <Project /> 

        </Wrapper>
     {/* <Project />  */}
    </>
  )
}

export default index
