import { useState } from 'react';
import Main from '@/components/main';
import Sider from '@/components/sider';
import { ImageType } from '@/types/image';

const App = () => {
  const [type, setType] = useState<ImageType>(ImageType.Origin);

  const onChangeType = (t: ImageType) => {
    setType(t);
  };

  return (
    <>
      <Sider onChangeType={onChangeType} />
      <Main type={type} />
    </>
  );
};

export default App;
