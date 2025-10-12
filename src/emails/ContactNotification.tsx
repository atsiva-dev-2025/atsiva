import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Row,
  Column,
} from '@react-email/components';

interface ContactNotificationProps {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest: string;
  message: string;
  submittedAt: string;
}

export default function ContactNotification({
  fullName,
  email,
  phone,
  company,
  serviceInterest,
  message,
  submittedAt,
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New inquiry from {fullName} - ATSIVA</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🔔 New Contact Inquiry</Heading>
          <Text style={text}>
            You have received a new inquiry through the ATSIVA contact form.
          </Text>

          <Hr style={hr} />

          <Section>
            <Row>
              <Column style={labelColumn}>
                <Text style={label}>Name:</Text>
              </Column>
              <Column>
                <Text style={value}>{fullName}</Text>
              </Column>
            </Row>

            <Row>
              <Column style={labelColumn}>
                <Text style={label}>Email:</Text>
              </Column>
              <Column>
                <Text style={value}>
                  <a href={`mailto:${email}`} style={link}>{email}</a>
                </Text>
              </Column>
            </Row>

            {phone && (
              <Row>
                <Column style={labelColumn}>
                  <Text style={label}>Phone:</Text>
                </Column>
                <Column>
                  <Text style={value}>
                    <a href={`tel:${phone}`} style={link}>{phone}</a>
                  </Text>
                </Column>
              </Row>
            )}

            {company && (
              <Row>
                <Column style={labelColumn}>
                  <Text style={label}>Company:</Text>
                </Column>
                <Column>
                  <Text style={value}>{company}</Text>
                </Column>
              </Row>
            )}

            <Row>
              <Column style={labelColumn}>
                <Text style={label}>Service Interest:</Text>
              </Column>
              <Column>
                <Text style={value}>
                  <span style={badge}>{serviceInterest}</span>
                </Text>
              </Column>
            </Row>

            <Row>
              <Column style={labelColumn}>
                <Text style={label}>Submitted:</Text>
              </Column>
              <Column>
                <Text style={value}>{submittedAt}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={label}>Message:</Text>
            <Container style={messageBox}>
              <Text style={messageText}>{message}</Text>
            </Container>
          </Section>

          <Hr style={hr} />

          <Section style={ctaSection}>
            <Text style={text}>
              <a href={`${process.env.NEXT_PUBLIC_SITE_URL}/admin/inquiries`} style={button}>
                View in Dashboard →
              </a>
            </Text>
          </Section>

          <Text style={footer}>
            This is an automated notification from ATSIVA Contact Form
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  borderRadius: '8px',
  maxWidth: '600px',
};

const h1 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 20px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
};

const labelColumn = {
  width: '140px',
  verticalAlign: 'top',
};

const label = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  margin: '8px 0',
};

const value = {
  color: '#1f2937',
  fontSize: '14px',
  margin: '8px 0',
};

const link = {
  color: '#2563eb',
  textDecoration: 'underline',
};

const badge = {
  backgroundColor: '#dbeafe',
  color: '#1e40af',
  padding: '4px 12px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
};

const messageBox = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  padding: '16px',
  marginTop: '8px',
};

const messageText = {
  color: '#1f2937',
  fontSize: '14px',
  lineHeight: '20px',
  margin: 0,
  whiteSpace: 'pre-wrap' as const,
};

const ctaSection = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#2563eb',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: '600',
  display: 'inline-block',
};

const footer = {
  color: '#9ca3af',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '32px',
};


