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

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
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

const MobileList = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

const MobileItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MobileSubheading = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;

const MobileDetailTable = styled.table`
  border-collapse: collapse;
  font-size: 1rem;
  width: 100%;

  th,
  td {
    border: 1px solid rgba(var(--dark-blue-rgb), 0.35);
    padding: 0.65rem;
    text-align: left;
    vertical-align: top;
  }

  th {
    background: rgba(var(--dark-blue-rgb), 0.12);
    font-weight: 600;
    font-size: 0.8rem;
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

function hasContent(lines?: string | string[]) {
  if (!lines) {
    return false;
  }

  if (Array.isArray(lines)) {
    return lines.some((line) => line.trim().length > 0);
  }

  return lines.trim().length > 0;
}

function MobileDetails({
  status,
  otherInfo,
}: {
  status?: string | string[];
  otherInfo?: string | string[];
}) {
  return (
    <MobileDetailTable>
      <tbody>
        <tr>
          <th>Status</th>
        </tr>
        <tr>
          <td>{renderCellLines(status)}</td>
        </tr>
        {hasContent(otherInfo) ? (
          <>
            <tr>
              <th>Other Info</th>
            </tr>
            <tr>
              <td>{renderCellLines(otherInfo)}</td>
            </tr>
          </>
        ) : null}
      </tbody>
    </MobileDetailTable>
  );
}

function InstrumentHireTable() {
  return (
    <>
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

      <MobileList>
        {instrumentHireUpdates.map((update) => (
          <MobileItem key={update.instrument}>
            <MobileSubheading>{update.instrument}</MobileSubheading>
            <MobileDetails
              status={update.status}
              otherInfo={update.otherInfo}
            />
          </MobileItem>
        ))}
      </MobileList>
    </>
  );
}

function GeneralEnsembleTable() {
  return (
    <>
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

      <MobileList>
        {generalEnsembleUpdates.map((update) => (
          <MobileItem key={update.ensemble}>
            <MobileSubheading>{update.ensemble}</MobileSubheading>
            <MobileDetails
              status={update.statusLines}
              otherInfo={update.otherInfoLines}
            />
          </MobileItem>
        ))}
      </MobileList>
    </>
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
