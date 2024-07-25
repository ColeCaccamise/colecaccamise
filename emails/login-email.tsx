import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Hr,
	Img,
	Link,
	Preview,
	Section,
	Text,
} from '@react-email/components';
import { Html } from '@react-email/components';
import * as React from 'react';
import '@/app/globals.css';
import colors from '@/emails/colors';

const text = {
	color: colors.lowContrast,
	fontWeight: '400',
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: '14px',
	margin: '8px 0',
};

interface LoginEmailProps {
	email: string;
	url?: string;
	validationCode?: string;
}

export const LoginEmail = ({ email, url, validationCode }: LoginEmailProps) => (
	<Html>
		<Head />
		<Preview>Your login code for your admin dashboard</Preview>
		<Body style={main}>
			<Container style={container}>
				<Heading style={heading}>Your login code</Heading>

				<Section style={buttonContainer}>
					<Button
						style={button}
						href={url}
					>
						Login to your admin dashboard
					</Button>
				</Section>

				<Text style={{ ...text, marginBottom: '14px' }}>
					Or, copy and paste this temporary login code into your browser:
				</Text>

				<code style={code}>{validationCode}</code>

				<Hr style={hr} />
				<Link
					href={process.env.APP_URL}
					style={reportLink}
				>
					Cole Caccamise
				</Link>
				<Text style={noteText}>
					This email was intended for{' '}
					<a
						style={link}
						href={`mailto:${email}`}
					>
						{email}
					</a>
					. If you didn&apos;t try to login, you can safely ignore this email.
				</Text>
			</Container>
		</Body>
	</Html>
);

LoginEmail.PreviewProps = {
	validationCode: '071836',
	name: 'Cole',
	email: 'cole@colecaccamise.com',
} as LoginEmailProps;

export default LoginEmail;

const logo = {
	borderRadius: 21,
	width: 42,
	height: 42,
};

const main = {
	backgroundColor: colors.background,
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: '0 auto',
	padding: '20px 0 48px',
	maxWidth: '560px',
};

const heading = {
	fontSize: '30px',
	letterSpacing: '-0.5px',
	lineHeight: '1.3',
	fontWeight: '400',
	color: colors.highContrast,
};

const paragraph = {
	fontWeight: '400',
	margin: '0 0 14px',
	fontSize: '14px',
	lineHeight: '1.4',
	color: colors.lowContrast,
};

const noteText = {
	fontSize: '12px',
	fontWeight: '400',
	color: colors.lowContrast,
};

const buttonContainer = {
	padding: '8px 0 8px',
};

const button = {
	backgroundColor: colors.highContrast,
	color: colors.background,
	borderRadius: '6px',
	fontWeight: '500',
	fontSize: '15px',
	textDecoration: 'none',
	textAlign: 'center' as const,
	display: 'block',
	padding: '11px 23px',
};

const reportLink = {
	fontSize: '12px',
	color: colors.lowContrast,
	fontWeight: '400',
};

const hr = {
	borderColor: '#dfe1e4',
	margin: '42px 0 26px',
};

const code = {
	display: 'inline-block',
	padding: '16px 4.5%',
	width: '90.5%',
	backgroundColor: colors.component,
	borderRadius: '5px',
	border: '1px solid',
	borderColor: colors.border,
	color: colors.highContrast,
};

const link = {
	color: colors.highContrast,
};
