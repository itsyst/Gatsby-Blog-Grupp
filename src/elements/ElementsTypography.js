import styled from "styled-components"

export const H1 = styled.h1`
    color: ${props => {
        switch (props.color) {
            case "test":
                return props.theme.colors.test;
            default:
                return props.theme.colors.test;
            }
        }
    };

    text-align: ${props => props.textAlign ? props.textAlign.center : 0};
    margin: ${props => props.margin ? props.theme.spacings.small : 0};
`;

export const H2 = styled.h2`
        color: ${props => {
        switch (props.color) {
            case "main2":
                return props.theme.colors.main2
            default:
                return
            }
        }
    };

    text-align: ${props => props.textAlign ? props.textAlign.center : 0};
    margin: ${props => props.margin ? props.theme.spacings.large : 0};
`