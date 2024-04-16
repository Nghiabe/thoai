import React, { memo } from 'react';
const ChatPage = () => {
    // Hàm này sẽ chỉ được gọi lại nếu props thay đổi
    return <div>Chat</div>;
  };
  
  export default memo(ChatPage);