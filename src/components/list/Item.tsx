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

  //(id->자유변수, 부모함수의 생명주기가 다했음ㄴ에도 값이 자식영역에서 참조하기 땜누에
  //사라지지 않음(가비지컬렉터(->메모리 관리해줌)가 제거를 안함) 이게 있으면 클로저임
  // function outer (id: string) {
  //   return function inner () {
  //     navigate(`/posted/${id}`);
  //   }
  // }

  //한페이지당 보여줄 개시글의 수 -> 드롭박스의 option 값

  //offset의 값 (가져올 데이터의 시작위치)
  //클릭된 페이지네이션 버튼의 index 값 * 한페이지당 표시할 게시글의 수 -> offset의 값
  const offsetNumber = pageButtonNumber * limitValue;
  console.log('실제 리스트', writeList);
  console.log('limit(옵션 선택 값)', limitValue);
  console.log('페이지 값', pageButtonNumber);
  console.log('offset(클릭된 페이지네이션 버튼의 값*limit)', offsetNumber);
  console.log('Item rerender');

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
  width: 20%;
  padding: 5px 0;
`;
