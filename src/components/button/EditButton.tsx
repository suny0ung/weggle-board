import styled from '@emotion/styled';
import { Button } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

type props = {
  setIsEditOpen: Dispatch<SetStateAction<boolean>>;
};

const EditButton = ({ setIsEditOpen }: props) => {
  const handleToShowEdit = () => {
    setIsEditOpen((prev) => !prev);
  };

  return (
    <div>
      <ButtonItem onClick={handleToShowEdit} colorScheme="gray" variant="outline">
        수정
      </ButtonItem>
    </div>
  );
};

export default EditButton;

const ButtonItem = styled(Button)`
  width: 15vw;
  margin: 0 20px;
`;
