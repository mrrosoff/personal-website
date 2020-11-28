import styled from 'styled-components';
import defaultTheme from 'react-terminal-component/src/themes/default';

const PromptSymbol = styled.span`
  margin-right: 0.25em;
  white-space: pre;
  color: ${({theme}) => theme.promptSymbolColor};
`;

PromptSymbol.defaultProps = {
  theme: defaultTheme
};

export default PromptSymbol;
