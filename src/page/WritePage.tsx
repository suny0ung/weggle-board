import { Center, Input, Textarea, CloseButton, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { listState } from '../recoli/listState';

const WritePage = () => {
  //recoil로 받아오는 배열 값
  const [writeList, setWriteList] = useRecoilState(listState);

  const navigate = useNavigate();

  //title 값을 저장
  const [titleValue, setTitleValue] = useState('');

  //date 값을 저장
  const [dateValue, setDateValue] = useState('');

  //content 값을 저장
  const [textareaValue, setTextareaValue] = useState('');

  const goToList = () => {
    navigate('/');
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeTitle = e.target.value;
    setTitleValue(changeTitle);
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeDate = e.target.value;
    setDateValue(changeDate);
  };

  const handleTextarea = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedTextarea = e.target.value;
    setTextareaValue(changedTextarea);
  };

  //모든 값을 recoil로 받아오는 배열에 넣어줌
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

  // 배열이 비어있을 경우 아이디 값을 1로 리턴한다.
  // 객체 배열에서 아이디 값만 가진 배열을 만든다.
  // 아이디 값만 가진 배열에서 가장 높은 숫자를 찾는다.
  // 가장 높은 숫자에 1을 더한 값을 리턴한다.

  //리펙토링 전 코드
  // const getIdNum = () => {
  //   if (writeList.length === 0) {
  //     return '1';
  //   } else {
  //     const idData = writeList.map((num) => +num.id);
  //     return (Math.max(...idData) + 1).toString();
  //   }
  // };

  //reduce로 리펙토링
  const getIdNum = writeList
    .reduce((maxNum, cur) => {
      return Math.max(maxNum, +cur.id) + 1;
    }, 1)
    .toString();
  // console.log('getIdNum', getIdNum);

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
            width="35vw"
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
  height: 35vh;
  font-size: 17px;
`;

const WritePageWrap = styled.div`
  width: 600px;
  padding-top: 10px;
`;

const TitleInput = styled.div`
  width: 100%;
`;
