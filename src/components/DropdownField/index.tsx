import React, { useState } from "react";
import {
  DropDownContainer, DropDownHeader,
  DropDownListContainer, DropDownList,
  ListItemContainer, ListItem
} from './styled';
import { channelActionSubject } from '../ChannelList/observables';

export const DROPDOWN_LIST = ['Sort by name', 'Sort by number'];

const DropdownField = () => {
  const [nameField, setNameField] = useState<string>(DROPDOWN_LIST[1])
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>{nameField}</DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {DROPDOWN_LIST.map((value) => (
              <ListItemContainer
                key={Math.random()}
                onClick={() => {
                  setNameField(value);
                  channelActionSubject.next({ sortType: value })
                  toggling();
                }}
              >
                <ListItem>{value}</ListItem>
              </ListItemContainer>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default DropdownField;