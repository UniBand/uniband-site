"use client";

import { SpacedTitle } from "@/components/atomic";
import styled from "styled-components";
import { BodyContent } from "@/components/components";
import { ConfigText } from "@/components/ConfigText";
import { UniBandConfig } from "@/config";
import { Question } from "@/config/config";

const ContentContainer = styled(BodyContent)`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

const StyledQuestion = styled.div`
  background-color: rgba(var(--dark-blue-rgb), 0.8);
  border-radius: 1rem;
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  width: 100%;

  > * {
    text-wrap: auto;
  }
`;

function FAQQuestion({ question }: { question: Question }) {
  return (
    <StyledQuestion>
      <ConfigText text={question.question} wrapper={"h2"} />
      <ConfigText text={question.answer} wrapper={"p"} />
    </StyledQuestion>
  );
}

export default function FAQ() {
  const questions = UniBandConfig.faq;

  return (
    <>
      <SpacedTitle>FAQ</SpacedTitle>
      <ContentContainer>
        {questions.map((q, index) => (
          <FAQQuestion key={index} question={q} />
        ))}
      </ContentContainer>
    </>
  );
}
