
// 'use client'; // Add this line
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Updated import for App Router
// import styled from 'styled-components';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       // Replace with your actual authentication logic
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Login failed');
//       }

//       // On successful login
//       router.push('/dashboard'); // Redirect to dashboard
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <LoginContainer>
//       <LoginCard>
//         <Logo>Your Logo</Logo>
//         <Title>Login to Your Account</Title>
        
//         {error && <ErrorMessage>{error}</ErrorMessage>}

//         <Form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label htmlFor="email">Email Address</Label>
//             <Input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               placeholder="Enter your email"
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label htmlFor="password">Password</Label>
//             <Input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               placeholder="Enter your password"
//             />
//           </FormGroup>

//           <ForgotPasswordLink href="/forgot-password">
//             Forgot Password?
//           </ForgotPasswordLink>

//           <LoginButton type="submit" disabled={loading}>
//             {loading ? 'Logging in...' : 'Login'}
//           </LoginButton>

//           <SignupText>
//             Don't have an account? <SignupLink href="/signup">Sign up</SignupLink>
//           </SignupText>
//         </Form>

//         <SocialLogin>
//           <SocialButton type="button">
//             <SocialIcon src="/google-icon.png" alt="Google" />
//             Continue with Google
//           </SocialButton>
//           <SocialButton type="button">
//             <SocialIcon src="/facebook-icon.png" alt="Facebook" />
//             Continue with Facebook
//           </SocialButton>
//         </SocialLogin>
//       </LoginCard>
//     </LoginContainer>
//   );
// };

// // Styled Components
// const LoginContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background-color: #f5f5f5;
//   padding: 20px;
// `;

// const LoginCard = styled.div`
//   background: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   padding: 40px;
//   width: 100%;
//   max-width: 400px;
// `;

// const Logo = styled.div`
//   text-align: center;
//   font-size: 24px;
//   font-weight: bold;
//   color: #333;
//   margin-bottom: 20px;
// `;

// const Title = styled.h1`
//   font-size: 20px;
//   text-align: center;
//   color: #333;
//   margin-bottom: 24px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// `;

// const Label = styled.label`
//   font-size: 14px;
//   color: #555;
// `;

// const Input = styled.input`
//   padding: 12px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 16px;
//   &:focus {
//     outline: none;
//     border-color: #646cff;
//   }
// `;

// const ForgotPasswordLink = styled.a`
//   text-align: right;
//   font-size: 14px;
//   color: #646cff;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const LoginButton = styled.button`
//   background-color: #646cff;
//   color: white;
//   border: none;
//   padding: 12px;
//   border-radius: 4px;
//   font-size: 16px;
//   font-weight: 500;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   &:hover {
//     background-color: #535bf2;
//   }
//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;

// const ErrorMessage = styled.div`
//   color: #ff3333;
//   background-color: #ffeeee;
//   padding: 10px;
//   border-radius: 4px;
//   margin-bottom: 16px;
//   font-size: 14px;
// `;

// const SignupText = styled.p`
//   text-align: center;
//   font-size: 14px;
//   color: #555;
// `;

// const SignupLink = styled.a`
//   color: #646cff;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const SocialLogin = styled.div`
//   margin-top: 24px;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// `;

// const SocialButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   background-color: white;
//   border: 1px solid #ddd;
//   padding: 10px;
//   border-radius: 4px;
//   font-size: 14px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   &:hover {
//     background-color: #f5f5f5;
//   }
// `;

// const SocialIcon = styled.img`
//   width: 20px;
//   height: 20px;
// `;

// export default Login;

import styles from "../ui/login/loginform/loginform.module.css";
import LoginForm from "../ui/login/loginform/loginform";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;

