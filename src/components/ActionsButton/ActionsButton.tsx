import React from 'react';

import s from './ActionsButton.module.css';

interface IProps {
  action: string;
}

const ActionsButton: React.FunctionComponent<IProps> = ({ action }) => {
  return (
    <>
      {action === 'save' && (
        <button className={s[action]}>Save to my list</button>
      )}

      {action === 'share' && <button className={s[action]}>Share</button>}
    </>
  );
};

export default ActionsButton;
