import { Html } from '@react-email/html'
import { Head } from '@react-email/head'
import { Section } from '@react-email/section'
import { Container } from '@react-email/container'
import { Text } from '@react-email/text'
import * as React from 'react'

// To call:   const emailHtml = render(<Email name={this.state.name} email={this.state.email} message={this.state.message} />);

function Email () {
  const name = this.props.name
  const email = this.props.email
  const message = this.props.message
  return (
    <Html>
      <Head />
      <Section style={main}>
        <Container style={container}>
          <Text style={text}>
            Name: {name}
            <br />
            Email: {email}
            <br />
            {message}
          </Text>
        </Container>
      </Section>
    </Html>
  )
}

const main = {
  backgroundColor: '#ffffff',
  margin: '0 auto'
}

const container = {
  border: '1px solid #eaeaea',
  borderRadius: '5px',
  margin: '40px auto',
  padding: '20px',
  width: '465px'
}

const text = {
  color: '#000',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  lineHeight: '24px'
}

export default Email
