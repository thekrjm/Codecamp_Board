import React, { useState } from 'react';
import { Space, Rate } from 'antd';
import 'antd/dist/antd.css';

const App: React.FC = () => {
  const [value, setValue] = useState(3);

  return (
    <Space>
      <Rate onChange={setValue} value={value} />
    </Space>
  ); 
};

export default App;