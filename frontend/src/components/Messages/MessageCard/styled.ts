import styled from '@emotion/styled';
import arrowCheckbox from '../../../assets/checkBoxArrow.svg';

type TImage = {
  image: 'string;';
  isChecked: boolean;
};

type TName = {
  messageIsRead: boolean;
};

type TDescription = {
  currentItem: boolean;
};

type TTitle = {
  messageIsRead: boolean;
};

type TDotMessageStatus = {
  messageIsRead: boolean;
};

type TImportant = {
  importantMessageImg: string;
};

type TTr = {
  isChecked: boolean;
  messageIsRead: boolean;
};

export const Dot = styled.div<TDotMessageStatus>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.messageIsRead ? 'transparent' : '#005ff9')};
`;

export const ImageWrapp = styled.td`
  width: 32px;
  height: 32px;
  border: none;
  vertical-align: middle;
`;

export const Image = styled.div<TImage>`
  width: ${(props) => (props.isChecked ? '16px' : '32px')};
  height: ${(props) => (props.isChecked ? '16px' : '32px')};
  border-radius: ${(props) => (props.isChecked ? '4px' : '50%')};
  border: ${(props) => (props.isChecked ? '1px solid rgba(0, 16, 61, 0.12)' : 'none')};
  background-image: url(${(props) => props.image});
  background-color: ${(props) => (props.isChecked ? '#005FF9' : '#fff')};
  flex-shrink: 0;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const AvatarSkeleton = styled.td``;

export const FirstLetterNicname = styled.div<TImage>`
  width: ${(props) => (props.isChecked ? '16px' : '32px')};
  height: ${(props) => (props.isChecked ? '16px' : '32px')};
  border-radius: ${(props) => (props.isChecked ? '4px' : '50%')};
  border: ${(props) => (props.isChecked ? '1px solid rgba(0, 16, 61, 0.12)' : 'none')};
  background-image: url(${(props) => props.image});
  background-color: ${(props) => (props.isChecked ? '#005FF9' : '#ffb980')};
  color: ${(props) => (props.isChecked ? 'transparent' : 'blue')};
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const Tr = styled.tr<TTr>`
  transition: all var(--transition-time) ease-in-out;
  background-color: ${(props) => (props.isChecked ? `var(--current-message-background-color)` : 'transparent')};
  &:hover {
    background-color: var(--current-message-background-color);
  }
  &:hover ${Dot} {
    background-color: ${(props) => (props.messageIsRead ? `var(--dot-color)` : '#005ff9')};
  }
  &:hover ${Image} {
    width: 16px;
    height: 16px;
    background-color: ${(props) => (props.isChecked ? '#005FF9' : '#fff')};
    background-image: url(arrowCheckbox);
    border: 1px solid rgba(0, 16, 61, 0.12);
    border-radius: 4px;
  }
  &:hover ${FirstLetterNicname} {
    width: 16px;
    height: 16px;
    background-color: ${(props) => (props.isChecked ? '#005FF9' : '#fff')};
    background-image: url(arrowCheckbox);
    border: 1px solid rgba(0, 16, 61, 0.12);
    border-radius: 4px;
    color: transparent;
  }
`;

export const BorderWrapper = styled.td`
  border-bottom: 1px solid var(--message-border-color);
`;

export const DotMessageStatus = styled.td``;

export const ImportantWrapp = styled.td``;

export const BookmarkWrapp = styled.td``;

export const Name = styled.td<TName>`
  color: var(--text-color);
  font-family: 'Arial';
  font-style: normal;
  font-weight: ${(props) => (props.messageIsRead ? 400 : 700)};
  font-size: 15px;
  line-height: 20px;
  white-space: nowrap;
`;

export const Text = styled.td`
  width: 100%;
`;

export const Title = styled.td<TTitle>`
  color: var(--text-color);
  font-family: 'Arial';
  font-style: normal;
  font-weight: ${(props) => (props.messageIsRead ? 400 : 700)};
  font-size: 15px;
  line-height: 20px;
  white-space: nowrap;
  text-align: left;
  padding-right: 0px !important;
`;

export const Description = styled.td<TDescription>`
  color: var(--message-description-color);
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  width: 100%;
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Category = styled.td``;

export const Attach = styled.td``;

export const MessageDate = styled.td`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: var(--message-date-color);
  white-space: nowrap;
`;
