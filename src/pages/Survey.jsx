import { SurveyWrapper, BarBackground, BarContent, SurveyText, Content, Text,InputWrapper, CheckBtn, InputBox}  from '../styles/Survey';
import { useState } from 'react';
// import QuestionList from '../components/QuestionList';
const num = 10


const Survey = () => {
    const [count, setCount] = useState(0);
    function add_count(){
      if(count == num){
        setCount(0);
      }
      else{
        setCount(count + 1);
      }
    }
  

  return (
    <SurveyWrapper>
      <SurveyText>
        Survey
      </SurveyText>
      <Content>
        <BarBackground >
          <BarContent width={(count/num)*100 + "%"}>
          </BarContent>
        </BarBackground>
        <Text>
        </Text>
        <InputWrapper>
          <InputBox onClick={()=>{add_count()}}>
            <CheckBtn>프론트엔드</CheckBtn>
          </InputBox>
          <InputBox onClick={()=>{add_count()}}>
            <CheckBtn>백엔드</CheckBtn>
          </InputBox>
          <InputBox onClick={()=>{add_count()}}>
            <CheckBtn>IOS</CheckBtn>
          </InputBox>
        </InputWrapper>
      </Content>
    </SurveyWrapper>
  );
}

export default Survey;