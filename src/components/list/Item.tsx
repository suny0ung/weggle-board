import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { limit, listState, offset } from '../../recoli/listState';

const Item = () => {
  const [writeList] = useRecoilState(listState);
  const pageButtonNumber = useRecoilValue(offset);
  const limitValue = useRecoilValue(limit);

  const navigate = useNavigate();

  const handleClickItem = (id: string) => () => {
    navigate(`/posted/${id}`);
  };

  const offsetNumber = pageButtonNumber * limitValue;

  return (
    <div>
      {writeList.slice(offsetNumber, offsetNumber + limitValue).map(({ id, title, date }) => (
        <ListWrap key={id} id={id} onClick={handleClickItem(id)}>
          <Num>{id}</Num>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </ListWrap>
      ))}
    </div>
  );
};

export default Item;

const ListWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;

const Num = styled.div`
  width: 15%;
  text-align: center;
  padding: 5px 0;
`;

const Title = styled.div`
  width: 65%;
  padding: 5px 0;
`;

const Date = styled(Num)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 5px 0;
  font-size: 15px;
`;
