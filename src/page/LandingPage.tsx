import BoardList from '../components/list/BoardList';
import PageWriteButton from '../components/button/PageWriteButton';
import styled from '@emotion/styled';
import { Center } from '@chakra-ui/react';
import SelectBox from '../components/SelectBox';
import PaginationButton from '../components/button/PaginationButton';

const LandingPage = () => {
  return (
    <Center>
      <LandingPageWrap>
        <BoardTitle>
          <Head>게시판</Head>
        </BoardTitle>
        <SelectBox />
        <BoardList />
        <PaginationButton />
        <PageWriteButton />
      </LandingPageWrap>
    </Center>
  );
};

export default LandingPage;

const LandingPageWrap = styled.div`
  width: 1000px;
`;

const BoardTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 50px 0 20px 0;
`;

const Head = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;
