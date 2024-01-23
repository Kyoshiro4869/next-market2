"use client";
import React, { useState } from 'react';

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/register`, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
        
      })
      const data = await response.json();
      alert(data.message);
    } catch (err) {
      alert(`ユーザー登録失敗: ${err.message}`);
    }
  }
  return (
    <div>
      <h1 className='page-title'>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <input value={newUser.name} onChange={handleChange} type="text" name="name" placeholder="名前" required/>
        <input value={newUser.email} onChange={handleChange} type="text" name="email" placeholder="メールアドレス" required/>
        <input value={newUser.password} onChange={handleChange} type="password" name="password" placeholder="パスワード" required/>
        <button>登録</button>
      </form>
    </div>
  );
}

export default Register;