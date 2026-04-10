"use client";

import { SpacedTitle } from "@/components/atomic";
import { BodyContent } from "@/components/components";
import { ConfigText } from "@/components/ConfigText";
import { UniBandConfig } from "@/config";
import styled from "styled-components";

const UpdatesContent = styled(BodyContent)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 2rem;
  width: 75%;
  margin-inline: auto;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

const TableWrap = styled.div`
  overflow-x: auto;
  width: 100%;
`;

const UpdateTable = styled.table`
  border-collapse: collapse;
  font-size: 1.15rem;
  width: 100%;
  min-width: 100%;

  th,
  td {
    border: 1px solid rgba(var(--dark-blue-rgb), 0.35);
    padding: 0.8rem;
    text-align: left;
    vertical-align: top;
  }

  th {
    background: rgba(var(--dark-blue-rgb), 0.12);
    font-weight: 700;
  }

  tbody td:first-child {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    th,
    td {
      padding: 0.65rem;
    }
  }
`;

const { instrumentHireUpdates, generalEnsembleUpdates } = UniBandConfig.updates;

function renderLineWithEmail(text: string) {
  return <ConfigText text={text} wrapper="span" />;
}

function renderCellLines(lines?: string | string[]) {
  if (!lines || (Array.isArray(lines) && lines.length === 0)) {
    return null;
  }

  const normalizedLines = Array.isArray(lines) ? lines : [lines];

  if (normalizedLines.length === 0) {
    return null;
  }

  return normalizedLines.map((line, index) => (
    <span key={`${line}-${index}`}>
      {renderLineWithEmail(line)}
      {index < normalizedLines.length - 1 && <br />}
    </span>
  ));
}

function InstrumentHireTable() {
  return (
    <TableWrap>
      <UpdateTable>
        <thead>
          <tr>
            <th>Instrument available for hire</th>
            <th>Status</th>
            <th>Other Info</th>
          </tr>
        </thead>
        <tbody>
          {instrumentHireUpdates.map((update) => (
            <tr key={update.instrument}>
              <td>{update.instrument}</td>
              <td>{renderCellLines(update.status)}</td>
              <td>{renderCellLines(update.otherInfo)}</td>
            </tr>
          ))}
        </tbody>
      </UpdateTable>
    </TableWrap>
  );
}

function GeneralEnsembleTable() {
  return (
    <TableWrap>
      <UpdateTable>
        <thead>
          <tr>
            <th>Ensemble</th>
            <th>Status</th>
            <th>Other Info</th>
          </tr>
        </thead>
        <tbody>
          {generalEnsembleUpdates.map((update) => (
            <tr key={update.ensemble}>
              <td>{update.ensemble}</td>
              <td>{renderCellLines(update.statusLines)}</td>
              <td>{renderCellLines(update.otherInfoLines)}</td>
            </tr>
          ))}
        </tbody>
      </UpdateTable>
    </TableWrap>
  );
}

export default function UpdatesPage() {
  return (
    <>
      <SpacedTitle>Updates</SpacedTitle>
      <UpdatesContent>
        <Section>
          <SectionTitle>Instrument Hire Updates</SectionTitle>
          <InstrumentHireTable />
        </Section>

        <Section>
          <SectionTitle>General Ensemble Updates</SectionTitle>
          <GeneralEnsembleTable />
        </Section>
      </UpdatesContent>
    </>
  );
}
