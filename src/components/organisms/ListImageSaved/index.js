import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useImages } from '../../../context/ImagesContext';
import {
  SUl,
  SLi,
  SImg,
  Smain,
} from './styles';

export default function ListImagesSaved() {
  const navigate = useNavigate();
  const { savedList } = useImages();
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(savedList);
  }, [savedList]);

  const handleChangeFeed = (image) => {
    navigate(`/showImage/${savedList.indexOf(image)}`);
  };

  return (
    <Smain>
      <SUl>
        {list.map((image) => (
          <SLi key={image} onClick={() => handleChangeFeed(image)}>
            <SImg src={image} alt="ft-salva" />
          </SLi>
        ))}
      </SUl>
    </Smain>
  );
}
