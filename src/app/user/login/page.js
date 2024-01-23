"use client";
import React, { useState } from 'react';



const Login = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: ""
  }); 

  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value});
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://next-market2-taupe.vercel.app/api/user/login`, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: newUser.email, 
          password: newUser.password 
        }),
        
      })
      const data = await response.json();
      localStorage.setItem("token",data.token);
      alert(data.message);
    } catch (err) {
      alert("ログイン失敗")
    }
  }
  return (
    <div>
      <h1 className='page-title'>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <input value={newUser.email} onChange={handleChange} type="text" name="email" placeholder="メールアドレス" required/>
        <input value={newUser.password} onChange={handleChange} type="password" name="password" placeholder="パスワード" required/>
        <button>ログイン</button>
      </form>
    </div>
  );
}

export default Login;