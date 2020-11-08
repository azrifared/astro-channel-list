import React from 'react';
import * as R from 'ramda';
import { TYPE_HEADER, TAGS, TAG_KEYS } from './constant';
import {
  Container, ListContainer, Header, Button,
  TagsContainer, TagBox, ButtonContainer
} from './styled';
import useFilterHandler from './useFilter';
import { FilterList } from '../../api';

type FilterListProps = {
  onClose: () => void;
  filterList: FilterList | undefined;
};

const FilterList = ({ onClose, filterList }: FilterListProps) => {
  const { values, handleChange, handleSubmit } = useFilterHandler(onClose, filterList);
  const isActive = (keyTag: string, tag: string) => R.pipe(
    R.prop(TYPE_HEADER[keyTag]), R.includes(tag)
  )(values);
  const tagHandler = (keyTag: string, tag: string) => {
    const scope = TYPE_HEADER[keyTag];

    if (isActive(keyTag, tag)) {
      const filteredData: string[] = R.reject(R.equals(tag))(values[scope]) as any;
      handleChange(scope, [...filteredData]);
    } else {
      handleChange(scope, [...values[scope], tag]);
    }
  };
  const clearTagHandler = () => {
    handleChange('', [''], true);
  };

  return (
    <Container>
      {TAG_KEYS.map((keyTag: string) => (
        <ListContainer key={Math.random()}>
          <Header>{TYPE_HEADER[keyTag]}</Header>
          <TagsContainer>
          {TAGS[TYPE_HEADER[keyTag]].map((tag) => (
            <TagBox
              key={Math.random()}
              onClick={() => tagHandler(keyTag, tag)}
              isActive={isActive(keyTag, tag)}
            >
              {tag}
            </TagBox>
            ))}
          </TagsContainer>
        </ListContainer>
      ))}
      <ButtonContainer>
        <Button isReset onClick={clearTagHandler}>RESET</Button>
        <Button onClick={handleSubmit}>APPLY</Button>
      </ButtonContainer>
    </Container>
  );
};

export default FilterList