import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  margin-top: 10rem;
  padding: 4rem 0;
  background: var(--box);
`

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
    font-size: 2rem;
    color: var(--white);

    span{
      font-size: 2rem;
      color: #61dafb;
    }
  }

  ul{
    display: flex;
    align-self: center;
    justify-content: center;

    margin-top: 3.5rem;

    li{
      font-size: 3rem;
      margin-left: 3rem;

      a{
        display: inline-block;
        color: var(--white);
        transition: 0.5s;

        &:hover{
          color: var(--buttons);
          transform: translateY(-7px);
        }
      }
    }
  }
`