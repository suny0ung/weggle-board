import { Center, Input, Textarea, CloseButton, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { listState } from '../recoli/listState';

const WritePage = () => {
  const [writeList, setWriteList] = useRecoilState(listState);
  const [titleValue, setTitleValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const navigate = useNavigate();

  const goToList = () => {
    navigate('/');
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeTitle = e.target.value;
    setTitleValue(changeTitle);
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeDate = e.target.value;
    setDateValue(changeDate.replace('T', ' '));
  };

  const handleTextarea = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedTextarea = e.target.value;
    setTextareaValue(changedTextarea);
  };

  const handleAddList = () => {
    setWriteList((value) => [
      ...value,
      {
        id: getIdNum,
        pageId: value.length + 1,
        title: titleValue,
        content: textareaValue,
        date: dateValue,
        clickItemId: 0,
        limit: 0,
      },
    ]);
    navigate('/');
  };

  const getIdNum = writeList
    .reduce((maxNum, cur) => {
      return Math.max(maxNum, +cur.id) + 1;
    }, 1)
    .toString();

  return (
    <Center>
      <WritePageWrap>
        <div>
          <Top>
            <CloseButton size="md" onClick={goToList} />
          </Top>

          <TitleInput>
            <Input
              value={titleValue}
              onChange={handleTitle}
              variant="flushed"
              placeholder="제목을 작성해주세요."
              _placeholder={{ opacity: 1, color: 'gray.500' }}
              paddingLeft="21px"
              fontSize="17px"
            />
          </TitleInput>

          <Input
            value={dateValue}
            onChange={handleDate}
            type="datetime-local"
            width="41%"
            height="38px"
            margin="20px 0"
            size="md"
            fontSize="15px"
          />
        </div>
        <div>
          <Content
            value={textareaValue}
            onChange={handleTextarea}
            placeholder="게시글을 작성해주세요."
          ></Content>
        </div>
        <BtnWrap>
          <Button
            onClick={() => {
              handleAddList(), getIdNum;
            }}
            colorScheme="facebook"
            variant="solid"
            width="20vw"
          >
            OK
          </Button>
        </BtnWrap>
      </WritePageWrap>
    </Center>
  );
};

export default WritePage;

const Top = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

const Content = styled(Textarea)`
  height: 45vh;
  font-size: 17px;
`;

const WritePageWrap = styled.div`
  width: 600px;
  padding-top: 10px;
`;

const TitleInput = styled.div`
  width: 100%;
`;
