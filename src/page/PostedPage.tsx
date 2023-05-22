import { useNavigate, useParams } from 'react-router-dom';
import { Button, Center, Textarea } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { listState } from '../recoli/listState';
import styled from '@emotion/styled';
import EditButton from '../components/button/EditButton';
import { useState } from 'react';

const PostedPage = () => {
  const [writeList, setWriteList] = useRecoilState(listState);
  const [switchTitle, setSwitchTitle] = useState('');
  const [switchContent, setSwitchContent] = useState('');
  const [isEditOpen, setIsEditOpen] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const postedId = Number(params.id) - 1;
  const id = (postedId + 1).toString();

  //디스트럭쳐링
  const goToList = () => {
    navigate('/');
  };

  const getTargetTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchTitle(e.target.value);
  };

  const getTargetContentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchContent(e.target.value);
  };

  const handleFinishEdit = () => {
    setWriteList((prevArray) =>
      prevArray.map((value) =>
        value.id === id ? { ...value, title: switchTitle, content: switchContent } : value
      )
    );
    goToList();
  };

  return (
    <Center>
      <PostedWrap>
        <ContentsWrap>
          <ContentsTitleWrap>
            <MenuTitle>제목</MenuTitle>
            {isEditOpen ? (
              <EditTitleInput value={switchTitle} onChange={getTargetTitleValue} />
            ) : (
              <TitleDiv>{writeList[postedId].title}</TitleDiv>
            )}
          </ContentsTitleWrap>

          <ContentTopWrap>
            <MenuNum>No.</MenuNum>
            <PageIdDiv>{writeList[postedId].pageId}</PageIdDiv>

            <MenuDate>작성 날짜</MenuDate>
            <DateDiv>{writeList[postedId].date}</DateDiv>
          </ContentTopWrap>
          <ContentBodyWrap>
            {isEditOpen ? (
              <EditContentInput value={switchContent} onChange={getTargetContentValue} />
            ) : (
              <ContentDiv>{writeList[postedId].content}</ContentDiv>
            )}
          </ContentBodyWrap>

          <ButtonWrap>
            <ButtonItems>
              {isEditOpen ? (
                <ButtonItem onClick={handleFinishEdit}>OK</ButtonItem>
              ) : (
                <EditButton setIsEditOpen={setIsEditOpen} />
              )}
              <ButtonItem onClick={goToList} colorScheme="gray" variant="outline">
                목록
              </ButtonItem>
            </ButtonItems>
          </ButtonWrap>
        </ContentsWrap>
      </PostedWrap>
    </Center>
  );
};

export default PostedPage;

const PostedWrap = styled.div`
  width: 1000px;
  margin-top: 40px;
`;

const ContentsWrap = styled.div``;

const ContentsTitleWrap = styled.div`
  padding: 15px 0 10px 0;
  display: flex;
  align-items: center;
`;

const MenuTitle = styled.div`
  width: 5%;
  text-align: center;
  font-weight: 600;
`;

const EditTitleInput = styled.input`
  width: 100%;
  padding: 5px 0 5px 20px;
  border: 1px solid #819eff;
  border-radius: 5px;
  font-size: 16px;
`;

const TitleDiv = styled.div`
  width: 100%;
  padding-left: 20px;
  font-size: 25px;
`;

const ContentTopWrap = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
`;

const MenuNum = styled.div`
  width: 8%;
  padding: 0 7px;
  font-weight: 600;
`;

const PageIdDiv = styled.div`
  width: 8%;
  padding: 0 7px;
`;

const MenuDate = styled.div`
  width: 13%;
  text-align: center;
  font-weight: 600;
`;

const DateDiv = styled.div`
  width: 40%;
  padding: 0 13px;
`;

const ContentBodyWrap = styled.div``;

const EditContentInput = styled(Textarea)`
  vertical-align: top;
  width: 100%;
  height: 40vh;
  padding: 10px 15px;
  border: 1px solid #819eff;
  border-radius: 5px;
  font-size: 16px;
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 40vh;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const ButtonWrap = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: center;
`;

const ButtonItems = styled.div`
  display: flex;
`;

const ButtonItem = styled(Button)`
  width: 15vw;
  margin: 0 20px;
`;
