import BoardList from '../components/list/BoardList';
import PageWriteButton from '../components/button/PageWriteButton';
import styled from '@emotion/styled';
import { Center, Heading } from '@chakra-ui/react';
import SelectBox from '../components/SelectBox';
import PaginationButton from '../components/button/PaginationButton';

const LandingPage = () => {
  // const [optionNumber, setOptionNumber] = useState(5);

  return (
    <Center>
      <LandingPageWrap>
        <BoardTitle>
          <Heading>게시판</Heading>
        </BoardTitle>
        <SelectBox />
        <BoardList />
        <PaginationButton />
        <PageWriteButton />
      </LandingPageWrap>
    </Center>
  );
};
//컴포넌트를 관심사 별로 분리하기 때문에 코드의 응집도를 분산시킬 수 있음.

export default LandingPage;

const LandingPageWrap = styled.div`
  width: 1000px;
`;

const BoardTitle = styled.div`
  display: flex;
  justify-content: center;
`;
