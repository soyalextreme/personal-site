import styled from "@emotion/styled"
import { Fonts } from "../constants/Fonts"




export const Body = (color: string) => {
    const BodyPage = styled.body`
            /* background-color: ${color}; */
            width: 100%;
            height: 100%;
            padding: 2rem;
            color: tomato;
    `
    return BodyPage;
}



export const Link = styled.a`
    color: red;
    text-align: center;
    font-family: ${Fonts.primary};

`;