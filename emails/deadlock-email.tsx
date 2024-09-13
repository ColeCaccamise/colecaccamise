import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface DeadlockInviteEmailProps {
  friendCode: string;
  email: string;
}

export const DeadlockInviteEmail = ({
  friendCode,
  email,
}: DeadlockInviteEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Deadlock Invite Request</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={company}>Deadlock</Text>
          <Heading style={codeTitle}>New Deadlock Invite Request</Heading>
          <Text style={codeDescription}>
            A new Deadlock invite request has been received with the following
            details:
          </Text>
          <Section style={codeContainer}>
            {email && (
              <Text style={detailText}>
                <strong>Email:</strong> {email}
              </Text>
            )}
            <Text style={detailText}>
              <strong>Friend Code:</strong> {friendCode}
            </Text>
          </Section>
          <Section style={buttonContainer}>
            <Button
              href={
                friendCode.startsWith("https://s.team")
                  ? friendCode
                  : "https://steamcommunity.com/profiles/76561198834582604/friends/add"
              }
              style={button}
            >
              Open Steam
            </Button>
          </Section>
          <Text style={paragraph}>
            This email was intended for{" "}
            <Link href="mailto:cole@colecaccamise.com" style={link}>
              cole@colecaccamise.com
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

DeadlockInviteEmail.PreviewProps = {
  friendCode: "ABC123",
  email: "example@example.com",
} as DeadlockInviteEmailProps;

export default DeadlockInviteEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  textAlign: "center" as const,
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #ddd",
  borderRadius: "5px",
  marginTop: "20px",
  width: "480px",
  maxWidth: "100%",
  margin: "0 auto",
  padding: "12% 6%",
};

const company = {
  fontWeight: "bold",
  fontSize: "18px",
  textAlign: "center" as const,
};

const codeTitle = {
  textAlign: "center" as const,
};

const codeDescription = {
  textAlign: "center" as const,
};

const codeContainer = {
  background: "rgba(0,0,0,.05)",
  borderRadius: "4px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  width: "280px",
  maxWidth: "100%",
  padding: "20px",
};

const detailText = {
  fontSize: "14px",
  lineHeight: "24px",
  color: "#444",
  margin: "0 0 10px",
  textAlign: "left" as const,
};

const buttonContainer = {
  margin: "27px auto",
  width: "auto",
};

const button = {
  backgroundColor: "#5e6ad2",
  borderRadius: "3px",
  fontWeight: "600",
  color: "#fff",
  textAlign: "center" as const,
  padding: "12px 24px",
  margin: "0 auto",
};

const paragraph = {
  color: "#444",
  letterSpacing: "0",
  padding: "0 40px",
  margin: "0",
  textAlign: "center" as const,
};

const link = {
  color: "#444",
  textDecoration: "underline",
};
