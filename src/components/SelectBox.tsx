import { Select } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { limit } from '../recoli/listState';

const SelectBox = () => {
  const setLimitValue = useSetRecoilState(limit);

  const getOptionNum = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = Number(e.target.value);
    setLimitValue(selectedOption);
  };

  return (
    <div>
      <Select
        onChange={getOptionNum}
        placeholder="나열선택"
        width="20%"
        height=" 35px"
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
