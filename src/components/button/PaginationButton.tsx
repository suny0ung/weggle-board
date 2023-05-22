import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { limit, listState, offset } from '../../recoli/listState';

const PaginationButton = () => {
  const [writeList] = useRecoilState(listState);
  const [pageButtonNumber, setPageButtonNumber] = useRecoilState(offset);
  const limitValue = useRecoilValue(limit);

  const buttonNumberLimit = 5;

  const totalWriteItem = writeList.length;

  const totalPageNumber = Math.ceil(totalWriteItem / limitValue);

  const buttonNumberArray = [];
  for (let i = 1; i <= totalPageNumber; i++) {
    buttonNumberArray.push(i);
  }

  const getButtonNumber = (num: number) => {
    setPageButtonNumber(num - 1);
  };

  const page = pageButtonNumber;

  const startSlice = Math.floor(pageButtonNumber / buttonNumberLimit) * 5;

  const endSlice = startSlice + buttonNumberLimit;

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
        variant="outline"
      >
        〈
      </PrevButton>
      {buttonNumberArray.slice(startSlice, endSlice).map((num, index) => (
        <ButtonNum
          key={num}
          color={index === page % buttonNumberLimit}
          onClick={() => getButtonNumber(num)}
          variant="outline"
        >
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
        variant="outline"
      >
        〉
      </NextButton>
    </ButtonWrap>
  );
};

export default PaginationButton;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
`;

const PrevButton = styled(Button)`
  min-width: 30px;
  height: 30px;
  margin: 0 3px;
  padding: 0px;
  background-color: white;

  &:disabled {
    cursor: not-allowed;
    color: white;
    /* color: #f4f4f4; */
  }

  &:hover {
    background-color: #f4f4f4;
  }
`;
const NextButton = styled(Button)`
  min-width: 30px;
  height: 30px;
  margin: 0 3px;
  padding: 0px;
  background-color: white;

  &:disabled {
    cursor: not-allowed;
    color: white;
  }

  &:hover {
    background-color: #f4f4f4;
  }
`;

const ButtonNum = styled(Button)<{ color: boolean }>`
  min-width: 30px;
  height: 30px;
  margin: 0 3px;
  padding: 0px;
  font-size: 15px;
  font-weight: 400;
  background-color: white;
  color: ${(props) => (props.color ? '#353535' : '#d4d4d4')};

  &:hover {
    background-color: #f4f4f4;
  }
`;
