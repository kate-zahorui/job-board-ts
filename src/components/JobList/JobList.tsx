import React from 'react';
import { Link } from 'react-router-dom';

import { JobDate } from '../';
import { IItem } from '../../types/jobs';
import s from './JobList.module.css';
import svg from '../../images/sprite.svg';

interface IProps {
  currentItems: IItem[];
}

const JobList: React.FunctionComponent<IProps> = ({ currentItems }) => {
  if (!currentItems) {
    return null;
  }

  return (
    <ul className={s.list}>
      {currentItems.map((item: IItem) => (
        <li key={item.id} className={s.item}>
          <div className={s.item__photobox}>
            <img
              src={item.pictures[0]}
              alt={`${item.name}`}
              className={s.item__image}
            />
          </div>

          <div className={s.info}>
            <div className={s.actions}>
              <div className={s.actions__rating}></div>

              <div className={s.actions__sidebox}>
                <button className={s.actions__button}>
                  <svg className={s.actions__icon} width="32" height="32">
                    <use href={`${svg}#icon-saveBookmark`}></use>
                  </svg>
                </button>
                <JobDate date={item.createdAt} />
              </div>
            </div>

            <div className={s.text}>
              <h2 className={s.text__title}>
                <Link to={`/${item.id}`} className={s.text__link}>
                  {item.title}
                </Link>
              </h2>
              <p className={s.text__name}>{item.name}</p>
              <p className={s.text__address}>{item.address}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
