import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { QuestionData } from '@/types/form';
import Answer from './Answer';

export default function Question({
  id,
  text,
  options,
  correct,
}: QuestionData) {
  const [checked, setChecked] = useState('');

  const onSubmit = () => {
    console.log(options[correct], checked)
    console.log(options[correct] === checked)
  };


  return (
    <View>
      <Text>{ id }.- { text }</Text>
      {
        options.map( ( option, index ) => (
          <Answer
            key={index}
            value={index}
            checked={checked}
            setChecked={setChecked}
            option={option}
          />
        ))
      }
    </View>
  );
}
