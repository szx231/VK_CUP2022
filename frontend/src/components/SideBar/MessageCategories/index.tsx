import { useEffect, useState } from 'react';
import { ReactComponent as Icon } from '../../../assets/MessageCategories/icon.svg';
import { ReactComponent as Icon1 } from '../../../assets/MessageCategories/icon1.svg';
import { ReactComponent as Icon2 } from '../../../assets/MessageCategories/icon2.svg';
import { ReactComponent as Icon3 } from '../../../assets/MessageCategories/icon3.svg';
import { ReactComponent as Icon4 } from '../../../assets/MessageCategories/icon4.svg';
import { ReactComponent as Icon5 } from '../../../assets/MessageCategories/icon5.svg';
import { ReactComponent as Icon6 } from '../../../assets/MessageCategories/icon6.svg';
import { Items, Item, Image, Text } from './styled';

import { Link } from 'react-router-dom';

import {
  $currentCategory,
  $currentCategoryIndex,
  currentCategoryChange,
  currentCategoryIndexChange,
} from '../../../store/CurrentCategory';
import { useStore } from 'effector-react';

export const MessageCategories = () => {
  const currentCategory = useStore($currentCategory);
  const currentCategoryIndex = useStore($currentCategoryIndex);

  const color = 'var(--text-color)';

  useEffect(() => {
    console.log(currentCategory);
  });

  const Categories = [
    { category: 'Входящие', image: <Icon fill={color} /> },
    { category: 'Важное', image: <Icon1 fill={color} /> },
    { category: 'Отправленные', image: <Icon2 fill={color} /> },
    { category: 'Черновики', image: <Icon3 fill={color} /> },
    { category: 'Архив', image: <Icon4 fill={color} /> },
    { category: 'Спам', image: <Icon5 fill={color} /> },
    { category: 'Корзина', image: <Icon6 fill={color} /> },
  ];

  return (
    <Items>
      {Categories.map((el, index) => {
        return (
          <Link to={`/Mail`}>
            <Item
              onClick={() => {
                currentCategoryIndexChange(index);
                currentCategoryChange(el.category);
              }}
              currentItem={currentCategoryIndex === index}
            >
              {el.image}
              <Text>{el.category}</Text>
            </Item>
          </Link>
        );
      })}
    </Items>
  );
};
