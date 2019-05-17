import styled from 'styled-components';


export const StyledApp = styled.div`
    padding: 24px;
    margin: auto 24px;
    height: 100%;
  `

export const StyledRichEditor = styled.div`
  .DraftEditor-root{
    padding: 24px;
    margin: 24px auto;
    border: 1px solid black;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    overflow-y: scroll;
  }
  `
export const RichToolbar = styled.div`
    background-color: lightgray;
    border: 1px solid grey;
    color: gray;
    box-shadow: 0, 3, 5, -1, fade(black, 0.2);
  `

export const PreviewEditor = styled.div`
    padding: 24px;
    margin: 24px auto;
    height: 100%;
  `