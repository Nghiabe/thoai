import React, { memo } from 'react';
import Header from '../header';
import Footer from '../footer';
const MasterLayout = ({children, ...props}) => {
    // Hàm này sẽ chỉ được gọi lại nếu props thay đổi
    return (
<div{...props}>
<Header/>
{children}
<Footer/>
</div>
    );
  };
  
  export default memo(MasterLayout);