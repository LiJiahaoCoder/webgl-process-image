import { useState } from 'react';
import Main from '@/components/main';
import Sider from '@/components/sider';
import { ImageType } from '@/types/image';

const App = () => {
  const [type, setType] = useState<ImageType>(ImageType.Origin);

  const onChangeType = (_type: ImageType) => {
    setType(_type);
  };

  return (
    <>
      <Sider onChangeType={onChangeType} />
      <Main type={type} />
    </>
  );
};

export default App;
