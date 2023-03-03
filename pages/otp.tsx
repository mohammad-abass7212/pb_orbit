import { Box, Image, Input } from '@chakra-ui/react';
import React from 'react';
interface Props {
  name: string;
  age: number;
}

const Otp: React.FC<Props> = ({ name, age }) => {

const otpInput=(e:number)=>{

}
  return (
    <div>
      <Box
          display={"flex"}
          border={"1px solid white"}
          borderRadius="5px"
          w={["60%", "50%", "45%", "22%"]}
          pl="10px"
        >
          {" "}
          <Image src="/utils/common/attherate.svg" alt="pborbit_logo" />
          <Input variant='unstyled' p="10px" color="white" border={"none"} placeholder="Username" onChange={(e) => otpInput(e.target.value)} value={otpValue} />
        </Box>
    </div>
  ); 
};

export default Otp;