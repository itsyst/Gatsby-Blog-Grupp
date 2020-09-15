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
`;

export const P = styled.p`
    margin: ${props => props.margin ? props.theme.spacings.small : 0};
    font-size: ${props => {
        switch (props.fontSize) {
            case "main":
                return props.theme.fonts.main;
            case "code":
                return props.theme.fonts.code;
            default:
                return props.theme.fonts.code;
            }
        }
    };
    line-height: ${props => {
        switch (props.lineHeight) {
            case "small":
                return props.theme.heights.small;
            case "medium":
                return props.theme.heights.medium;
            case "large":
                return props.theme.heights.large;
            default:
                return props.theme.heights.medium;
            }
        }
    };
    font-weight: ${props => {
        switch (props.fontWeight) {
            case "light":
                return props.theme.weights.light;
            case "bold":
                return props.theme.weights.bold;
            default:
                return props.theme.weights.bold;
            }
        }
    };
    color: ${props => {
        switch (props.color) {
            case "main1":
                return props.theme.colors.main1;
            case "dark1":
                return props.theme.colors.dark1;
            default:
                return props.theme.colors.dark1;
            }
        }
    };
    text-decoration: ${props => props.textDecoration ? props.textAlign.none : 0};
    text-align: ${props => props.textAlign ? props.textAlign.center : 0};
`;