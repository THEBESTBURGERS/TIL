import { Bar_background, Bar_content, Survey_text, Content, Checkbox, Text}  from '../styles/Survey'
import { useState ,useEffect } from 'react'

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
    <>
      <Survey_text>
        Survey
      </Survey_text>
      <Content>
        <Bar_background onClick={()=>{add_count()}}>
          <Bar_content width={(count/num)*100 + "%"}>
          </Bar_content>
        </Bar_background>
        <Text>
          원하는 개발 분야를 선택해주세요
        </Text>
        <Checkbox>
          테스트
        </Checkbox>
      </Content>
    </>
  );
}

export default Survey;