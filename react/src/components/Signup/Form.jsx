import React, { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    checkpw: "",
  });

  const levels = [
    { id: 1, value: "신입" },
    { id: 2, value: "주니어" },
    { id: 3, value: "시니어" },
  ];

  const [selectLevel, setSelectLevel] = useState("");
  const [pwError, setPwError] = useState("");

  function handleChange(event) {
    const target = event["target"];
    const { name, value } = target;
    setForm({ ...form, [name]: value });

    if (name === "password" || name === "checkpw") {
      if (name === "password" && value !== form["checkpw"]) {
        setPwError("비밀번호가 일치하지 않습니다");
      } else if (name === "checkpw" && value !== form["password"]) {
        setPwError("비밀번호가 일치하지 않습니다");
      } else {
        setPwError("");
      }
    }
  }

  function handleSelectChange(event) {
    const target = event["target"];
    setSelectLevel(target["value"]);
  }

  function printPw(pw) {
    let hidePw = "";
    for (let i = 0; i < pw.length; i++) {
      hidePw += "*";
    }
    return hidePw;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form["password"].length < 8) {
      alert("비밀번호는 8글자 이상이어야 합니다");
      return;
    }

    if (form["password"] !== form["checkpw"]) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    alert(
      `회원가입 정보\n이메일: ${form["email"]}\n비밀번호: ${printPw(
        form["password"]
      )}\n레벨: ${selectLevel}`
    );
  }

  return (
    <div className="flex justify-center">
      <form
        className="w-full m-7 p-6 shadow rounded"
        onSubmit={(event) => handleSubmit(event)}
      >
        <h2 className="font-bold text-center text-2xl mb-5">회원가입</h2>
        <div className="mb-3">
          <p>이메일</p>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            required
            className="border-1 border-gray-200 p-2 w-full"
            value={form["email"]}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>
        <div className="mb-3">
          <p>비밀번호</p>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            required
            className="border-1 border-gray-200 p-2 w-full"
            value={form["password"]}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>
        <div className="mb-3">
          <p>비밀번호 확인</p>
          <input
            type="password"
            name="checkpw"
            placeholder="비밀번호 확인"
            required
            className="border-1 border-gray-200 p-2 w-full"
            value={form["checkpw"]}
            onChange={(event) => {
              handleChange(event);
            }}
          />
          {pwError && <p className="text-red-500">{pwError}</p>}
        </div>
        <div className="mb-5">
          <p>레벨</p>
          {levels.map((level) => {
            return (
              <label key={level.id}>
                <input
                  type="radio"
                  name="level"
                  value={level["value"]}
                  checked={selectLevel === level["value"]}
                  onChange={(event) => handleSelectChange(event)}
                  className="m-1"
                  required
                />
                {level.value}
              </label>
            );
          })}
        </div>
        <input
          type="submit"
          value="제출"
          className="bg-blue-200 p-2 w-full font-bold"
        />
      </form>
    </div>
  );
}
