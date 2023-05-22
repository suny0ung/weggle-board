import styled from '@emotion/styled';
import Item from './Item';

const BoardList = () => {
  return (
    <BoardWrap>
      <ListMenuWrap>
        <MenuNum>번호</MenuNum>
        <MenuTitle>제목</MenuTitle>
        <MenuDate>작성일</MenuDate>
      </ListMenuWrap>
      <ListWrap>
        <Item />
      </ListWrap>
    </BoardWrap>
  );
};

export default BoardList;

const BoardWrap = styled.div`
  margin: 30px 0 50px;
`;

const ListMenuWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  border-bottom: 2px solid #000;
`;

const ListWrap = styled.div`
  max-height: 70vh;
  min-height: 200px;

  overflow: hidden;
  border-bottom: 1px solid #999;
  @media screen and (max-height: 600px) {
    overflow-y: scroll;
  }
`;

const MenuNum = styled.div`
  width: 15%;
  text-align: center;
  padding: 5px 0;
`;

const MenuTitle = styled.div`
  width: 65%;
  padding: 5px 0;
`;

const MenuDate = styled(MenuNum)`
  width: 25%;
  padding: 5px 0;
`;
