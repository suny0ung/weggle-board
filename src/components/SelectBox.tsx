import { Select } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { limit } from '../recoli/listState';

// type props = {
//   setOptionNumber: Dispatch<SetStateAction<number>>;
// };

const SelectBox = () => {
  const setLimitValue = useSetRecoilState(limit);
  // const setLimitValue = useSetRecoilState(listState);

  //Select태그의 onChange이벤트로 option태그를 클락할때마다,
  //해당 value값을 setOptionNumber로 업데이트
  //업데이트 된 optionNumber로 map으로 나열하는 리스트 페이지에서
  //0 ~ optionNumber까지만큼만 보여지게 -> slice함수 사용

  const getOptionNum = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = Number(e.target.value);
    setLimitValue(selectedOption);
  };

  return (
    <div>
      <Select
        onChange={getOptionNum}
        width="20%"
        height="35px"
        placeholder="나열선택"
        fontSize="0.78rem"
        textAlign="center"
      >
        <option value={5}>5개씩 나열하기</option>
        <option value={8}>8개씩 나열하기</option>
        <option value={10}>10개씩 나열하기</option>
      </Select>
    </div>
  );
};

export default SelectBox;
