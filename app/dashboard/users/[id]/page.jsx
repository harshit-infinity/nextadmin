'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 20px;
`;

const InfoContainer = styled.div`
  flex: 1;
  background-color: var(--bgSoft);
  padding: 20px;
  border-radius: 10px;
  font-weight: bold;
  color: var(--textSoft);
  height: max-content;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  flex: 3;
  background-color: var(--bgSoft);
  padding: 20px;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 20px;
  border: 2px solid #2e374a;
  border-radius: 5px;
  background-color: var(--bg);
  color: var(--text);
  margin: 10px 0;
`;

const Textarea = styled.textarea`
  padding: 20px;
  border: 2px solid #2e374a;
  border-radius: 5px;
  background-color: var(--bg);
  color: var(--text);
  margin: 10px 0;
`;

const Select = styled.select`
  padding: 20px;
  border: 2px solid #2e374a;
  border-radius: 5px;
  background-color: var(--bg);
  color: var(--text);
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 18px;
`;

const Button = styled.button`
  width: 100%;
  padding: 20px;
  background-color: teal;
  color: var(--text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

const SingleUserPage = async ({ params }) => {
  return (
    <Container>
      <InfoContainer>
        <ImgContainer>
          <Image src="/noavatar.png" alt="User Avatar" fill />
        </ImgContainer>
        John Doe
      </InfoContainer>

      <FormContainer>
        <Form>
          <Label>Username</Label>
          <Input type="text" name="username" placeholder="John Doe" />
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="john789@gmail.com" />
          <Label>Password</Label>
          <Input type="password" name="password" placeholder="********" />
          <Label>Phone</Label>
          <Input type="text" name="phone" placeholder="+933627932" />
          <Label>Address</Label>
          <Textarea name="address" placeholder="Alpha-1 Block E Islamabad" />
          <Label>Is Admin?</Label>
          <Select name="isAdmin" id="isAdmin">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <Label>Is Active?</Label>
          <Select name="isActive" id="isActive">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <Button>Update</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SingleUserPage;
