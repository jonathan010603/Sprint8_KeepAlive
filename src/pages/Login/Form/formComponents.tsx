import styled from "styled-components";

const variables = {
    text: "#E0E0E0",
    error: "#E9B425"
}

type booleanProps = {
    bool: boolean
}

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const FormTitle = styled.span`
    font-size: 30px;
    font-weight: 300;
    line-height: 38px;
    text-align: left;
    margin-bottom: 2.9vh;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        margin-bottom: 2vh;
        font-size: 15px !important;
    }

    @media screen and (max-width: 500px) {
        font-size: 7vw;
    }
`

export const FieldContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 3vh;
    width: 100%;

`

export const Field = styled.input<booleanProps>`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    color: ${variables.text};
    box-sizing: border-box;
    height: 5.5vh;
    padding-left: 1.8vw;
    width: 19.7vw;
    margin-right: 1vw;
    border-radius: 50px;
    padding: 0 3.04vw 0 1.04vw;
    border: 1px solid ${p => p.bool ? '#E9B425' : '#FFFFFF'};
    background: linear-gradient(0deg, #26292C, #26292C), linear-gradient(0deg, #FFFFFF, #FFFFFF);
    outline: none;
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    text-align: left;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        font-size: 10px;
    }

    @media screen and (max-width: 500px) {
        padding: 0 13vw 0 3.04vw;
        width: 80vw;
    }
`

export const Icon = styled.img<booleanProps>`
    position: absolute;
    transition: all 0.1s ease-out;
    left: ${p => p.bool ? '17.5vw' : '20.67vw'};
    width: 10px;

    @media screen and (max-width: 500px) {
        left: ${p => p.bool ? '70vw' : '81.5vw'};
    }
`

export const ErrorMsg = styled.span<booleanProps>`
    color: ${variables.error};
    font-size: 0.8vw;
    font-weight: 700;
    line-height: 1.8vh;
    text-align: center;
    margin-left: 3.8vw;
    visibility: ${p => p.bool ? 'visible' : 'hidden'};

    @media screen and (max-width: 500px) {
        margin-left: 7.5vw;
        font-size: 4.5vw;
    }
`

export const Btn = styled.button`
    cursor: pointer;
    color: #FFFFFF;
    padding: 0;
    margin-top: 3.8vh;
    font-size: 18px;
    font-weight: 300;
    line-height: 23px;
    text-align: center;
    height: 6.2vh;
    width: 19.7vw;
    border-radius: 50px;
    box-shadow: 5px 5px 15px 0px #00000026 inset;
    border: 2px solid;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%), 
    linear-gradient(132.34deg, #FF2D04 22.57%, #C13216 72.04%);
    border-image-source: linear-gradient(132.34deg, #FF2D04 22.57%, #C13216 72.04%);

    @media screen and (max-width: 768px) and (max-height: 500px) {
        display:flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
    }

    @media screen and (max-width: 500px) {
        width: 80vw;
    }
`