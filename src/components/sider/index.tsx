import classnames from 'classnames';
import { ImageType } from '@/types/image';

import styles from './index.less';

const LIST_ITEM_CLASS = classnames(
  'list-group-item bg-transparent',
  styles.listItem
);

interface Props {
  onChangeType: (type: ImageType) => void;
}

const Sider = ({ onChangeType }: Props) => {
  return (
    <section
      className={classnames(
        'h-100 position-fixed start-0 top-0 bg-secondary pt-5',
        styles.width
      )}
    >
      <ul className="list-group list-group-flush">
        <li
          className={LIST_ITEM_CLASS}
          onClick={() => {
            onChangeType(ImageType.Origin);
          }}
        >
          原图
        </li>
        <li
          className={LIST_ITEM_CLASS}
          onClick={() => {
            onChangeType(ImageType.Gray);
          }}
        >
          灰白
        </li>
        <li
          className={LIST_ITEM_CLASS}
          onClick={() => {
            onChangeType(ImageType.RevertBlueAndRed);
          }}
        >
          交换红蓝通道
        </li>
        <li
          className={LIST_ITEM_CLASS}
          onClick={() => {
            onChangeType(ImageType.Blur);
          }}
        >
          高斯模糊
        </li>
        <li
          className={LIST_ITEM_CLASS}
          onClick={() => {
            onChangeType(ImageType.Random);
          }}
        >
          马赛克
        </li>
      </ul>
    </section>
  );
};

export default Sider;
