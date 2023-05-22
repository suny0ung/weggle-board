// import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { limit, listState, offset } from '../../recoli/listState';

const PaginationButton = () => {
  //늘어나는 아이템 값[]에 따라 버튼의 갯수가 늘어남 -> map함수 사용 -> 한 페이지당 아이템의 갯수를 알아야됨
  //페이지 버튼을 클릭하면, 선택된 나열의 갯수대로 이이템이 출력 -> 드롭다운의 옵션값 사용
  //이전버튼과 다음버튼은 첫번째버튼와 마지막버튼으로 이동 -> 배열의 length값 이용

  //아이템 length 구할 때 쓰일 값
  const [writeList] = useRecoilState(listState);
  const [pageButtonNumber, setPageButtonNumber] = useRecoilState(offset);
  const limitValue = useRecoilValue(limit);

  //총 게시물의 수 ( total )
  const totalWriteItem = writeList.length;
  // console.log('총 게시물의 수 ->', totalWriteItem);

  //한 페이지당 게시글의 수 자르기 ( limit )
  //총 계시물의 갯수 / 한 페이지당 표시할 게시물 수(optionNumber) -> Math.ceil적용
  const totalPageNumber = Math.ceil(totalWriteItem / limitValue);

  //늘어나는 페이지의 값 배열에 담기, map()사용을 위해
  const buttonNumberArray = [];
  for (let i = 1; i <= totalPageNumber; i++) {
    buttonNumberArray.push(i);
  }
  console.log('pagination rerender');
  //현제 페이지 index 번호
  const getButtonNumber = (num: number) => {
    setPageButtonNumber(num - 1);
  };

  const page = pageButtonNumber;

  //이전버튼 값
  const prevButton = page === 1;
  console.log('prevButton->', page, prevButton);

  //다음버튼 값
  // const nextButton = page === totalPageNumber;

  return (
    <ButtonWrap>
      <PrevButton
        onClick={() => {
          setPageButtonNumber((prevPageButtonNumber) => {
            // console.log(123, prevPageButtonNumber, prevPageButtonNumber > 1);
            return prevPageButtonNumber > 0 ? prevPageButtonNumber - 1 : 0;
          });
        }}
        disabled={pageButtonNumber <= 0}
      >
        〈
      </PrevButton>

      {buttonNumberArray.map((num) => (
        <ButtonNum key={num} onClick={() => getButtonNumber(num)}>
          {num}
        </ButtonNum>
      ))}

      <NextButton
        onClick={() =>
          setPageButtonNumber((nextPageButtonNumber) => {
            return nextPageButtonNumber >= totalPageNumber - 1
              ? nextPageButtonNumber
              : nextPageButtonNumber + 1;
          })
        }
      >
        〉
      </NextButton>

      {/* {buttonNumberArray.length < totalPageNumber ? (
        <NextButton>〉</NextButton>
      ) : (
        <NextButton onClick={() => setPageButtonNumber(page + 1)}>〉</NextButton>
      )} */}
    </ButtonWrap>
  );
};

export default PaginationButton;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
`;

const PrevButton = styled.button`
  margin: 0 5px;

  &:disabled {
    cursor: not-allowed;
  }
`;
const NextButton = styled.button`
  margin: 0 5px;

  &:disabled {
    cursor: not-allowed;
  }
`;
const ButtonNum = styled(Button)`
  margin: 0 5px;
`;
