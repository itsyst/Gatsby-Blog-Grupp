import React from "react"
import { CardWrapper, ButtonWrapper, P, H2 } from "../elements"

export const ContentCard = ({ date, title, excerpt, slug }) => {
    return (
        <CardWrapper>
            <H2 color="main1">{title}</H2>
            <P>{date}</P>
            <P textAlign="left">{excerpt}</P>
            <ButtonWrapper href={slug}>Read more..</ButtonWrapper>
        </CardWrapper>
    )
}
