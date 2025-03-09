import { useState } from "react";
import styled from "@emotion/styled";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nMessage: ${message}`);
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextArea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  padding: 50px;
  background: #C4A484;
  color: white;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  width: 80%;
  max-width: 400px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  width: 80%;
  max-width: 400px;
  height: 100px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #8B5E3B;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
`;
